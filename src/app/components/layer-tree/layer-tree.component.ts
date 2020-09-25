import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { addBorderedNodes, removeBorderedNodes } from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.less'],
})
export class LayerTreeComponent implements OnInit, OnDestroy {
  public openedKeys = new Set<string>();
  public nodes$: Observable<INode[]>;
  public selected: Set<string>;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.nodes$ = this.store.select('nodes');
    this.subscription.add(this.store.select('selected').subscribe((selected) => (this.selected = selected)));
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearBordered(id: string): void {
    if (!this.selected.has(id)) {
      this.store.dispatch(removeBorderedNodes({ ids: [id] }));
    }
  }

  showBordered(node: INode): void {
    this.store.dispatch(addBorderedNodes({ ids: [node.id] }));
  }
}
