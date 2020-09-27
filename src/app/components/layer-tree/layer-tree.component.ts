import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { CeUtilsService } from 'src/app/services/utils.service';
import { addBorderedNodes, removeBorderedNodes } from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.less'],
})
export class LayerTreeComponent implements OnInit, OnDestroy {
  public openedKeys = new Set<string>();
  public nodes: INode[];
  public selected: Set<string>;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>, private utils: CeUtilsService) {
    this.subscription.add(
      this.store
        .select('nodes')
        .pipe(map((nodes) => this.utils.sortNodeListByIndex(nodes)))
        .subscribe((nodes) => (this.nodes = nodes))
    );
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
