import { ElementRef } from '@angular/core';
import { NzContextMenuService, NzDropdownMenuComponent } from 'ng-zorro-antd/dropdown';
import { NzFormatEmitEvent, NzTreeComponent, NzTreeNode, NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class LayerTreeComponent {
    eleRef: ElementRef<HTMLElement>;
    private store;
    private utils;
    private contextMenuSrv;
    treeNodes$: Observable<NzTreeNodeOptions[]>;
    selected: Set<string>;
    selectedKeys$: Observable<string[]>;
    layerTree: NzTreeComponent;
    private parentKey;
    groupStatus$: Observable<boolean>;
    constructor(eleRef: ElementRef<HTMLElement>, store: EditorStore<IStore>, utils: CeUtilsService, contextMenuSrv: NzContextMenuService);
    clearBordered(id: string): void;
    showBordered(id: string): void;
    layerTrackByFn(index: number, node: INode): string;
    transferNodesToNzNodes(nodes: INode[]): NzTreeNodeOptions[];
    contextMenu(event: MouseEvent, menu: NzDropdownMenuComponent, node: NzTreeNode): void;
    getParentKey(parentNode?: NzTreeNode): string;
    multipleSelected(event: NzFormatEmitEvent): void;
    clickNode(event: NzFormatEmitEvent): void;
    group(ids: string[]): void;
    breakNode(id: string): void;
    deleteNodes(ids: string[]): void;
    toggleNodesLockState(ids: string[], state: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<LayerTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LayerTreeComponent, "ce-layer-tree", ["ceLayerTree"], {}, {}, never, never>;
}
//# sourceMappingURL=layer-tree.component.d.ts.map