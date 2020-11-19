import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateNodes } from '../store/actions';
import { INode, IStore } from '../store/store';

@Injectable()
export class NodeMoveService {
  private nodes: INode[];
  private selected: Set<string>;
  private nodesSnapshot: Map<string, INode> = new Map();

  constructor(private store: Store<IStore>) {}

  boxMoveStart(node: INode, selected: Set<string>, nodes: INode[]): void {
    this.selected = selected;
    this.nodes = nodes;
    this.nodesSnapshot.clear();
    this.selected.forEach((id) => {
      const item = this.nodes.find((n) => n.id === id);
      this.nodesSnapshot.set(item.id, { ...item });
    });
  }

  boxMoving(mx: number, my: number): void {
    if (this.nodesSnapshot.size) {
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
    this.nodesSnapshot.clear();
  }
}
