import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NodeMoveService } from 'src/app/services/node-move.service';
import { addBorderedNodes, addSelectedNodes, clearBorderedNodes, clearSelectedNodes, removeBorderedNodes } from 'src/app/store/actions';
import { ICanvasPosition, INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less'],
  providers: [NodeMoveService],
})
export class CanvasComponent implements OnDestroy {
  public nodes: INode[];
  private selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private pointerSnapshot: [number, number] = null;
  private subscription = new Subscription();

  constructor(private store: Store<IStore>, private moveSrv: NodeMoveService) {
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(this.store.select('selected').subscribe((state) => (this.selected = state)));
    this.subscription.add(this.store.select('canvasPosition').subscribe((state) => (this.canvasPosition = state)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  nodeListTrackByFn(i: number, node: INode): string {
    return node.id;
  }

  moveStart(ev: PointerEvent, node: INode): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.pointerSnapshot = [ev.clientX, ev.clientY];
    if (!this.selected.has(node.id)) {
      this.store.dispatch(clearBorderedNodes());
      this.store.dispatch(clearSelectedNodes());
      this.store.dispatch(addSelectedNodes({ ids: [node.id] }));
      this.moveSrv.boxMoveStart(
        node,
        new Set<string>([node.id]),
        this.nodes
      );
    } else {
      this.moveSrv.boxMoveStart(node, this.selected, this.nodes);
    }
  }

  moving(ev: PointerEvent): void {
    if (this.pointerSnapshot) {
      const { scale } = this.canvasPosition;
      const [x, y] = this.pointerSnapshot;
      this.moveSrv.boxMoving((ev.clientX - x) / scale, (ev.clientY - y) / scale);
    }
  }

  moveEnd(): void {
    this.pointerSnapshot = null;
    this.moveSrv.boxMoveEnd();
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
