import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addBorderedNodes, clearBorderedNodes } from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.less'],
})
export class LayerTreeComponent implements OnInit {
  public openedKeys = new Set<string>();
  public nodes$: Observable<INode[]>;
  constructor(private store: Store<IStore>) {
    this.nodes$ = this.store.select('nodes');
  }

  ngOnInit(): void {}

  clearBordered(): void {
    this.store.dispatch(clearBorderedNodes());
  }

  showBordered(node: INode): void {
    this.store.dispatch(addBorderedNodes({ ids: [node.id] }));
  }
}
