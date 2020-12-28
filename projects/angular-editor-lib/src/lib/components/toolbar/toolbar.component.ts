import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CeUtilsService } from '../../services/utils.service';
import { breakNode, clearBorderedNodes, clearSelectedNodes, groupNodes, updateCanvasPosition } from '../../store/actions';
import { INode, IStore } from '../../store/store';

@Component({
  selector: 'ce-toolbar',
  exportAs: 'ceToolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent implements OnDestroy {
  public selected$: Observable<Set<string>>;
  public scale: number;
  public get copyStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size === 0));
  }
  public get groupStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size <= 1));
  }
  public get breakStatus$(): Observable<boolean> {
    return this.selected$.pipe(
      map((state) => (state.size === 1 ? [...state][0] : false)),
      map((id) => id && !!this.utils.getNodeById(id as string, this.nodes)?.children?.length)
    );
  }
  private nodes: INode[] = [];
  private selected: Set<string>;
  private subscription = new Subscription();

  constructor(private store: Store<IStore>, private utils: CeUtilsService) {
    this.selected$ = this.store.select('selected');
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(this.store.select('canvasPosition').subscribe((state) => (this.scale = state.scale)));
    this.subscription.add(this.selected$.subscribe((selected) => (this.selected = selected)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setCanvasScale(scale: number): void {
    this.store.dispatch(updateCanvasPosition({ scale: scale / 100 }));
  }

  groupNodes(): void {
    const ids = [...this.selected];
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(groupNodes({ ids }));
  }

  breakNode(): void {
    const node = this.utils.getNodeById([...this.selected][0], this.nodes);
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(breakNode({ id: node.id }));
  }
}
