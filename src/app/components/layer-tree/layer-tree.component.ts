import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { CeUtilsService } from 'src/app/services/utils.service';
import {
  addBorderedNodes,
  breakNode,
  clearBorderedNodes,
  clearSelectedNodes,
  removeBorderedNodes,
  removeNodes,
  setBorderedNodes,
  setSelectedNodes,
} from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.less'],
})
export class LayerTreeComponent implements OnDestroy {
  public openedKeys = new Set<string>();
  public nodes: NzTreeNodeOptions[];
  public selected: Set<string>;
  public selectedKeys: string[];
  public expandedKeys: string[];
  private subscription = new Subscription();
  constructor(private store: Store<IStore>, private utils: CeUtilsService, private contextMenuSrv: NzContextMenuService) {
    this.subscription.add(
      this.store
        .select('nodes')
        .pipe(debounceTime(300))
        .subscribe((nodes) => {
          this.nodes = this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(nodes));
          this.selectedKeys = [...this.selected];
          this.expandedKeys = this.expandedKeys && [...this.expandedKeys];
        })
    );
    this.subscription.add(
      this.store.select('selected').subscribe((selected) => {
        this.selected = selected;
        this.selectedKeys = [...selected];
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  clearBordered(id: string): void {
    if (!this.selected.has(id)) {
      this.store.dispatch(removeBorderedNodes({ ids: [id] }));
    }
  }

  showBordered(id: string): void {
    this.store.dispatch(addBorderedNodes({ ids: [id] }));
  }

  setSelected(ids: string[]): void {
    this.store.dispatch(setSelectedNodes({ ids }));
    this.store.dispatch(setBorderedNodes({ ids }));
  }

  layerTrackByFn(index: number, node: INode): string {
    return `box-item-${node.id}-${node.zIndex}`;
  }

  transferNodesToNzNodes(nodes: INode[]): NzTreeNodeOptions[] {
    return nodes.map((node) => {
      return {
        ...node,
        children: node.children && this.transferNodesToNzNodes(node.children),
        title: node.name,
        key: node.id,
        isLeaf: !node.children?.length,
      };
    });
  }

  contextMenu(event: MouseEvent, menu: NzDropdownMenuComponent, node: NzTreeNode): void {
    if (!this.selected.has(node.key)) {
      this.store.dispatch(setSelectedNodes({ ids: [node.key] }));
    }
    this.contextMenuSrv.create(event, menu);
  }

  breakNode(id: string): void {
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(breakNode({ id }));
  }

  deleteNodes(): void {
    const ids = [...this.selected];
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(removeNodes({ ids }));
  }

  clickNode(event: NzFormatEmitEvent): void {
    if (event.node) {
      if (event.node.parentNode) {
      } else {
        this.setSelected(event.keys);
      }
    }
  }

  expandGroup(event: NzFormatEmitEvent): void {
    this.expandedKeys = [...event.keys];
  }

  drop(event: NzFormatEmitEvent): void {
    console.log(event);
  }
}
