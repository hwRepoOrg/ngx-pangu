import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import {
  addBorderedNodes,
  breakNode,
  clearBordered,
  clearSelected,
  groupNodes,
  lockNodes,
  removeBorderedNodes,
  removeNodes,
  setBorderedNodes,
  setSelectedNodes,
  unlockNodes,
} from '../../actions';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';

@Component({
  selector: 'ce-layer-tree',
  exportAs: 'ceLayerTree',
  templateUrl: 'layer-tree.component.html',
  styleUrls: ['layer-tree.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayerTreeComponent {
  public treeNodes$: Observable<NzTreeNodeOptions[]>;
  public selected: Set<string>;
  public selectedKeys$: Observable<string[]>;
  @ViewChild('layerTree', { read: NzTreeComponent })
  public layerTree: NzTreeComponent;
  private parentKey: string;
  public groupStatus$: Observable<boolean>;

  constructor(
    public eleRef: ElementRef<HTMLElement>,
    private store: EditorStore<IStore>,
    private utils: CeUtilsService,
    private contextMenuSrv: NzContextMenuService
  ) {
    this.treeNodes$ = this.store
      .selectDifferent((state) => state.nodes)
      .pipe(map((nodes) => this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(nodes))));
    this.selectedKeys$ = this.store.selectDifferent((state) => state.selected).pipe(map((selected) => [...selected]));
    this.groupStatus$ = this.store
      .selectDifferent((state) => state.selected)
      .pipe(
        filter(() => !!this.layerTree),
        map((selected) =>
          selected.size > 1
            ? !![...selected].find((id) => {
                const node = this.layerTree?.getSelectedNodeList().find((item) => item.key === id);
                return node && node.parentNode;
              })
            : false
        )
      );
    this.store
      .selectDifferent((state) => state.selected)
      .subscribe((selected) => {
        this.selected = selected;
      });
  }

  clearBordered(id: string): void {
    if (!this.selected.has(id)) {
      this.store.dispatch(removeBorderedNodes([id]));
    }
  }

  showBordered(id: string): void {
    this.store.dispatch(addBorderedNodes([id]));
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
      this.store.dispatch(setSelectedNodes([node.key]));
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
    const ids = event.selectedKeys.filter((node) => this.getParentKey(node.parentNode) === this.parentKey).map((node) => node.key);
    this.store.dispatch(setSelectedNodes(ids));
    this.store.dispatch(setBorderedNodes(ids));
  }

  clickNode(event: NzFormatEmitEvent): void {
    if (event.node) {
      if (/Win|Linux/.test(navigator.platform)) {
        if (event.event.ctrlKey) {
          this.multipleSelected(event);
        } else {
          this.parentKey = this.getParentKey(event.node.parentNode);
          this.store.dispatch(setSelectedNodes([event.node.key]));
          this.store.dispatch(setBorderedNodes([event.node.key]));
        }
      }
      if (/Mac/.test(navigator.platform)) {
        if (event.event.metaKey) {
          this.multipleSelected(event);
        } else {
          this.parentKey = this.getParentKey(event.node.parentNode);
          this.store.dispatch(setSelectedNodes([event.node.key]));
          this.store.dispatch(setBorderedNodes([event.node.key]));
        }
      }
    }
  }

  group(ids: string[]): void {
    this.store.dispatch(groupNodes(ids));
  }

  breakNode(id: string): void {
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(breakNode(id));
  }

  deleteNodes(ids: string[]): void {
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(removeNodes(ids));
  }

  toggleNodesLockState(ids: string[], state: boolean) {
    if (state) {
      this.store.dispatch(lockNodes(ids));
    } else {
      this.store.dispatch(unlockNodes(ids));
    }
  }
}
