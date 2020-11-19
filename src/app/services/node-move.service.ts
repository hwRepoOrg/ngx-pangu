import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSelectedNodes, clearBorderedNodes, clearSelectedNodes, updateNodes } from '../store/actions';
import { ICanvasPosition, INode, IStore } from '../store/store';

@Injectable()
export class NodeMoveService {
  private nodes: INode[];
  private selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private nodesSnapshot: Map<string, INode> = new Map();
  private pointerSnapshot: number[] = null;

  constructor(private store: Store<IStore>) {}

  boxMoveStart(ev: PointerEvent, node: INode, store: [Set<string>, ICanvasPosition, INode[]]): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.selected = store[0];
    this.canvasPosition = store[1];
    this.nodes = store[2];
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
}
