import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ActionsService } from 'src/app/services/actions.service';
import { CeUtilsService } from 'src/app/services/utils.service';
import { addBorderedNodes, removeBorderedNodes, setSelectedNodes } from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-layer-tree',
  templateUrl: './layer-tree.component.html',
  styleUrls: ['./layer-tree.component.less'],
})
export class LayerTreeComponent implements OnDestroy {
  public openedKeys = new Set<string>();
  public treeNodes: NzTreeNodeOptions[];
  public selected: Set<string>;
  public selectedKeys: string[];
  public expandedKeys: string[];
  @ViewChild('layerTree', { read: NzTreeComponent })
  public layerTree: NzTreeComponent;
  private nodes: INode[];
  private parentKey: string;
  private subscription = new Subscription();
  public get groupStatus(): boolean {
    return this.selectedKeys.length > 1
      ? !this.selectedKeys.find((id) => {
          const node = this.layerTree.getSelectedNodeList().find((item) => item.key === id);
          return node && node.parentNode;
        })
      : false;
  }

  constructor(
    private store: Store<IStore>,
    private utils: CeUtilsService,
    private contextMenuSrv: NzContextMenuService,
    public actions: ActionsService
  ) {
    this.subscription.add(
      this.store
        .select('nodes')
        .pipe(debounceTime(300))
        .subscribe((nodes) => {
          this.nodes = nodes;
          this.treeNodes = this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(nodes));
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

  getParentKey(parentNode?: NzTreeNode): string {
    return parentNode?.key ?? 'root';
  }

  multipleSelected(event: NzFormatEmitEvent): void {
    if (!this.parentKey) {
      this.parentKey = this.getParentKey(event.node.parentNode);
    }
    this.actions.setSelectedNodes(event.selectedKeys.filter((node) => this.getParentKey(node.parentNode) === this.parentKey).map((node) => node.key));
  }

  clickNode(event: NzFormatEmitEvent): void {
    if (event.node) {
      if (/Win|Linux/.test(navigator.platform)) {
        if (event.event.ctrlKey) {
          this.multipleSelected(event);
        } else {
          this.parentKey = this.getParentKey(event.node.parentNode);
          this.actions.setSelectedNode(event.node.key);
        }
      }
      if (/Mac/.test(navigator.platform)) {
        if (event.event.metaKey) {
          this.multipleSelected(event);
        } else {
          this.parentKey = this.getParentKey(event.node.parentNode);
          this.actions.setSelectedNode(event.node.key);
        }
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
