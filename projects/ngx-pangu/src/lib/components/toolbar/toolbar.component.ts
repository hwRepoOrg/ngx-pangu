import { ChangeDetectionStrategy, Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { breakNode, clearBordered, clearSelected, groupNodes } from '../../actions';
import { CeToolbarDirective } from '../../directives';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';

@Component({
  selector: 'ce-toolbar',
  exportAs: 'ceToolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @ContentChild(CeToolbarDirective)
  ceToolbar: CeToolbarDirective;
  public selected$: Observable<Set<string>>;
  public scale: number;
  public get copyStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size === 0));
  }
  public groupStatus$: Observable<boolean>;
  public breakStatus$: Observable<boolean>;
  private selected: Set<string>;
  private nodes: INode[];

  constructor(public store: EditorStore<IStore>, private utils: CeUtilsService) {
    this.store
      .selectDifferent((state) => ({ selected: state.selected, nodes: state.nodes }))
      .subscribe(({ selected, nodes }) => {
        this.selected = selected;
        this.nodes = nodes;
      });
    this.selected$ = this.store.selectDifferent((state) => state.selected);
    this.groupStatus$ = this.selected$.pipe(map((state) => state.size <= 1));
    this.breakStatus$ = this.selected$.pipe(
      map((state) => (state.size === 1 ? [...state][0] : false)),
      map((id) => id && !!this.utils.getNodeById(id as string, this.nodes)?.children?.length)
    );
  }

  groupNodes(): void {
    const ids = [...this.selected];
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(groupNodes(ids));
  }

  breakNode(): void {
    const node = this.utils.getNodeById([...this.selected][0], this.nodes);
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(breakNode(node.id));
  }
}
