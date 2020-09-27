import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { addBorderedNodes, addSelectedNodes, clearBorderedNodes, clearSelectedNodes, removeBorderedNodes, updateNodes } from 'src/app/store/actions';
import { ICanvasPosition, INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.less'],
})
export class CanvasComponent implements OnDestroy {
  public nodes: INode[];
  private nodesSnapshot: Map<string, INode> = new Map();
  private pointerSnapshot: number[] = null;
  private selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private subscription = new Subscription();

  constructor(private store: Store<IStore>) {
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

  boxMoveStart(ev: PointerEvent, node: INode): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.pointerSnapshot = [ev.clientX, ev.clientY];
    this.nodesSnapshot.clear();
    if (this.selected.has(node.id)) {
      this.selected.forEach((id) => {
        const item = this.nodes.find((n) => n.id === id);
        this.nodesSnapshot.set(item.id, { ...item });
      });
    } else {
      this.store.dispatch(clearBorderedNodes());
      this.store.dispatch(clearSelectedNodes());
      this.store.dispatch(addSelectedNodes({ ids: [node.id] }));
      this.nodesSnapshot.set(node.id, { ...node });
    }
  }

  boxMoving(ev: PointerEvent): void {
    if (this.pointerSnapshot) {
      const { scale } = this.canvasPosition;
      const [mx, my] = [(ev.clientX - this.pointerSnapshot[0]) / scale, (ev.clientY - this.pointerSnapshot[1]) / scale];
      this.store.dispatch(
        updateNodes({
          nodes: [...this.nodesSnapshot.values()].map((node) => {
            const newLeft = node.left + mx;
            const newTop = node.top + my;
            return {
              ...node,
              left: newLeft,
              top: newTop,
            };
          }),
        })
      );
    }
  }

  boxMoveEnd(): void {
    this.pointerSnapshot = null;
    this.nodesSnapshot.clear();
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
