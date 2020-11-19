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
  private selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private pointerSnapshot: [number, number] = null;
  private nodesSnapshot: Map<string, INode> = new Map();
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

  moveStart(ev: PointerEvent, node: INode): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.nodesSnapshot.clear();
    this.pointerSnapshot = [ev.clientX, ev.clientY];
    let selected: string[] = [...this.selected];
    if (!this.selected.has(node.id)) {
      this.store.dispatch(clearBorderedNodes());
      this.store.dispatch(clearSelectedNodes());
      this.store.dispatch(addSelectedNodes({ ids: [node.id] }));
      selected = [node.id];
    }
    selected.forEach((id) => {
      const item = this.nodes.find((n) => n.id === id);
      this.nodesSnapshot.set(item.id, { ...item });
    });
  }

  moving(ev: PointerEvent): void {
    if (this.pointerSnapshot) {
      const { scale } = this.canvasPosition;
      const [x, y] = this.pointerSnapshot;
      const [mx, my] = [(ev.clientX - x) / scale, (ev.clientY - y) / scale];
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

  moveEnd(): void {
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
