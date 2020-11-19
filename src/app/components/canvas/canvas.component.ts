import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NodeMoveService } from 'src/app/services/node-move.service';
import { addBorderedNodes, removeBorderedNodes } from 'src/app/store/actions';
import { ResizeRefreshSelector } from 'src/app/store/selectors';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less'],
  providers: [NodeMoveService],
})
export class CanvasComponent implements OnDestroy {
  public nodes: INode[];
  private selected: Set<string>;
  public moveState: any;
  private subscription = new Subscription();

  constructor(private store: Store<IStore>, public moveSrv: NodeMoveService) {
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(this.store.select('selected').subscribe((state) => (this.selected = state)));
    this.subscription.add(this.store.select(ResizeRefreshSelector).subscribe((state) => (this.moveState = state)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nodeListTrackByFn(i: number, node: INode): string {
    return node.id;
  }

  showBorder(id: string): void {
    this.store.dispatch(addBorderedNodes({ ids: [id] }));
  }

  removeBorder(id: string): void {
    if (!this.selected.has(id)) {
      this.store.dispatch(removeBorderedNodes({ ids: [id] }));
    }
  }
}
