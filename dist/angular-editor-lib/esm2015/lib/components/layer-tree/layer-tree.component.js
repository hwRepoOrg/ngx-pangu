import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzTreeComponent } from 'ng-zorro-antd/tree';
import { filter, map } from 'rxjs/operators';
import { addBorderedNodes, breakNode, clearBordered, clearSelected, groupNodes, lockNodes, removeBorderedNodes, removeNodes, setBorderedNodes, setSelectedNodes, unlockNodes, } from '../../actions';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "../../services/utils.service";
import * as i3 from "ng-zorro-antd/dropdown";
import * as i4 from "ng-zorro-antd/tree";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/menu";
const _c0 = ["layerTree"];
function LayerTreeComponent_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const node_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("nzType", node_r5.isExpanded ? "folder-open" : "folder");
} }
function LayerTreeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, LayerTreeComponent_ng_template_4_i_0_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngIf", !node_r5.isLeaf);
} }
function LayerTreeComponent_ng_template_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_6_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(2); const _r0 = i0.ɵɵreference(1); return ctx_r15.toggleNodesLockState(_r0.nzSelectedKeys, true); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u9501\u5B9A");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_7_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(2); const _r0 = i0.ɵɵreference(1); return ctx_r17.toggleNodesLockState(_r0.nzSelectedKeys, false); });
    i0.ɵɵelement(1, "i", 13);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u89E3\u9501");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_12_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); const _r0 = i0.ɵɵreference(1); return ctx_r19.group(_r0.nzSelectedKeys); });
    i0.ɵɵelement(1, "i", 14);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u7EC4\u5408");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 15);
    i0.ɵɵtext(5, " ctrl+shift+G ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 10);
    i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_14_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r23); const node_r9 = i0.ɵɵnextContext().origin; const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.breakNode(node_r9.id); });
    i0.ɵɵelement(1, "i", 16);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "\u6253\u6563");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 15);
    i0.ɵɵtext(5, " ctrl+shift+B ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("contextmenu", function LayerTreeComponent_ng_template_6_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const _r10 = i0.ɵɵreference(4); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.contextMenu($event, _r10, node_r9); })("pointerenter", function LayerTreeComponent_ng_template_6_Template_div_pointerenter_0_listener() { i0.ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.showBordered(node_r9.id); })("pointerleave", function LayerTreeComponent_ng_template_6_Template_div_pointerleave_0_listener() { i0.ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.clearBordered(node_r9.id); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nz-dropdown-menu", null, 7);
    i0.ɵɵelementStart(5, "ul", 8);
    i0.ɵɵtemplate(6, LayerTreeComponent_ng_template_6_li_6_Template, 4, 0, "li", 9);
    i0.ɵɵtemplate(7, LayerTreeComponent_ng_template_6_li_7_Template, 4, 0, "li", 9);
    i0.ɵɵelementStart(8, "li", 10);
    i0.ɵɵlistener("click", function LayerTreeComponent_ng_template_6_Template_li_click_8_listener() { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(); const _r0 = i0.ɵɵreference(1); return ctx_r28.deleteNodes(_r0.nzSelectedKeys); });
    i0.ɵɵelement(9, "i", 11);
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11, "\u5220\u9664");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, LayerTreeComponent_ng_template_6_li_12_Template, 6, 0, "li", 9);
    i0.ɵɵpipe(13, "async");
    i0.ɵɵtemplate(14, LayerTreeComponent_ng_template_6_li_14_Template, 6, 0, "li", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r9 = ctx.origin;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("locked", node_r9.locked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(node_r9.title);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !node_r9.locked);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", node_r9.locked);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(13, 7, ctx_r4.groupStatus$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r4.selected.size === 1 && node_r9.children && node_r9.children.length);
} }
export class LayerTreeComponent {
    constructor(eleRef, store, utils, contextMenuSrv) {
        this.eleRef = eleRef;
        this.store = store;
        this.utils = utils;
        this.contextMenuSrv = contextMenuSrv;
        this.treeNodes$ = this.store
            .selectDifferent((state) => state.nodes)
            .pipe(map((nodes) => this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(this.utils.transferNodesListToNodesTree(nodes)))));
        this.selectedKeys$ = this.store.selectDifferent((state) => state.selected).pipe(map((selected) => [...selected]));
        this.groupStatus$ = this.store
            .selectDifferent((state) => state.selected)
            .pipe(filter(() => !!this.layerTree), map((selected) => selected.size > 1
            ? !![...selected].find((id) => {
                var _a;
                const node = (_a = this.layerTree) === null || _a === void 0 ? void 0 : _a.getSelectedNodeList().find((item) => item.key === id);
                return node && node.parentNode;
            })
            : false));
        this.store
            .selectDifferent((state) => state.selected)
            .subscribe((selected) => {
            this.selected = selected;
        });
    }
    clearBordered(id) {
        if (!this.selected.has(id)) {
            this.store.dispatch(removeBorderedNodes([id]));
        }
    }
    showBordered(id) {
        this.store.dispatch(addBorderedNodes([id]));
    }
    layerTrackByFn(index, node) {
        return `box-item-${node.id}-${node.zIndex}`;
    }
    transferNodesToNzNodes(nodes) {
        return nodes.map((node) => {
            var _a;
            return Object.assign(Object.assign({}, node), { children: node.children && this.transferNodesToNzNodes(node.children), title: node.name, key: node.id, isLeaf: !((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) });
        });
    }
    contextMenu(event, menu, node) {
        if (!this.selected.has(node.key)) {
            this.store.dispatch(setSelectedNodes([node.key]));
        }
        this.contextMenuSrv.create(event, menu);
    }
    getParentKey(parentNode) {
        var _a;
        return (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.key) !== null && _a !== void 0 ? _a : 'root';
    }
    multipleSelected(event) {
        if (!this.parentKey) {
            this.parentKey = this.getParentKey(event.node.parentNode);
        }
        const ids = event.selectedKeys.filter((node) => this.getParentKey(node.parentNode) === this.parentKey).map((node) => node.key);
        this.store.dispatch(setSelectedNodes(ids));
        this.store.dispatch(setBorderedNodes(ids));
    }
    clickNode(event) {
        if (event.node) {
            if (/Win|Linux/.test(navigator.platform)) {
                if (event.event.ctrlKey) {
                    this.multipleSelected(event);
                }
                else {
                    this.parentKey = this.getParentKey(event.node.parentNode);
                    this.store.dispatch(setSelectedNodes([event.node.key]));
                    this.store.dispatch(setBorderedNodes([event.node.key]));
                }
            }
            if (/Mac/.test(navigator.platform)) {
                if (event.event.metaKey) {
                    this.multipleSelected(event);
                }
                else {
                    this.parentKey = this.getParentKey(event.node.parentNode);
                    this.store.dispatch(setSelectedNodes([event.node.key]));
                    this.store.dispatch(setBorderedNodes([event.node.key]));
                }
            }
        }
    }
    group(ids) {
        this.store.dispatch(groupNodes(ids));
    }
    breakNode(id) {
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(breakNode(id));
    }
    deleteNodes(ids) {
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(removeNodes(ids));
    }
    toggleNodesLockState(ids, state) {
        if (state) {
            this.store.dispatch(lockNodes(ids));
        }
        else {
            this.store.dispatch(unlockNodes(ids));
        }
    }
}
LayerTreeComponent.ɵfac = function LayerTreeComponent_Factory(t) { return new (t || LayerTreeComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.EditorStore), i0.ɵɵdirectiveInject(i2.CeUtilsService), i0.ɵɵdirectiveInject(i3.NzContextMenuService)); };
LayerTreeComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LayerTreeComponent, selectors: [["ce-layer-tree"]], viewQuery: function LayerTreeComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, NzTreeComponent);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.layerTree = _t.first);
    } }, exportAs: ["ceLayerTree"], decls: 8, vars: 8, consts: [["nzBlockNode", "", "nzMultiple", "", 3, "nzData", "nzSelectedKeys", "nzTreeTemplate", "nzExpandedIcon", "nzClick"], ["layerTree", ""], ["multiExpandedIconTpl", ""], ["nzTreeTemplate", ""], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], [1, "layer", 3, "contextmenu", "pointerenter", "pointerleave"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "class", "action-item", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 1, "action-item", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "lock"], ["nz-icon", "", "nzType", "unlock"], ["nz-icon", "", "nzIconfont", "icon-group"], [1, "shortcuts"], ["nz-icon", "", "nzIconfont", "icon-break"]], template: function LayerTreeComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-tree", 0, 1);
        i0.ɵɵlistener("nzClick", function LayerTreeComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.clickNode($event); });
        i0.ɵɵpipe(2, "async");
        i0.ɵɵpipe(3, "async");
        i0.ɵɵtemplate(4, LayerTreeComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(6, LayerTreeComponent_ng_template_6_Template, 15, 9, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(5);
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵproperty("nzData", i0.ɵɵpipeBind1(2, 4, ctx.treeNodes$))("nzSelectedKeys", i0.ɵɵpipeBind1(3, 6, ctx.selectedKeys$))("nzTreeTemplate", _r3)("nzExpandedIcon", _r1);
    } }, directives: [i4.NzTreeComponent, i5.NgIf, i6.NzIconDirective, i7.ɵNzTransitionPatchDirective, i3.NzDropdownMenuComponent, i8.NzMenuDirective, i8.NzMenuItemDirective], pipes: [i5.AsyncPipe], styles: ["ce-layer-tree{display:block;height:100%;margin:0 -12px 0 0;overflow:auto;position:relative}ce-layer-tree ::-webkit-scrollbar{position:absolute;right:0}ce-layer-tree .layer{align-items:center;display:flex}ce-layer-tree .layer.locked{color:rgba(0,0,0,.45)}.action-item{align-items:center;display:flex;justify-content:flex-start;min-width:200px}.action-item .shortcuts{color:rgba(0,0,0,.45);margin-left:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LayerTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ce-layer-tree',
                exportAs: 'ceLayerTree',
                templateUrl: 'layer-tree.component.html',
                styleUrls: ['layer-tree.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.EditorStore }, { type: i2.CeUtilsService }, { type: i3.NzContextMenuService }]; }, { layerTree: [{
            type: ViewChild,
            args: ['layerTree', { read: NzTreeComponent }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5ZXItdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2xheWVyLXRyZWUvbGF5ZXItdHJlZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9sYXllci10cmVlL2xheWVyLXRyZWUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFxQixlQUFlLEVBQWlDLE1BQU0sb0JBQW9CLENBQUM7QUFFdkcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxhQUFhLEVBQ2IsYUFBYSxFQUNiLFVBQVUsRUFDVixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7O0lDTm5CLHVCQUE4SDs7O0lBQTlGLHNFQUFxRDs7O0lBQXJGLDZFQUE4SDs7O0lBQTFILHNDQUFrQjs7OztJQWNsQiw4QkFDRTtJQUR3RCwyUEFBd0QsSUFBSSxLQUFFO0lBQ3RILHdCQUE2QjtJQUM3Qiw0QkFBTTtJQUFBLDRCQUFFO0lBQUEsaUJBQU87SUFDakIsaUJBQUs7Ozs7SUFDTCw4QkFDRTtJQUR1RCwyUEFBd0QsS0FBSyxLQUFFO0lBQ3RILHdCQUErQjtJQUMvQiw0QkFBTTtJQUFBLDRCQUFFO0lBQUEsaUJBQU87SUFDakIsaUJBQUs7Ozs7SUFLTCw4QkFDRTtJQURnRSxnUEFBeUM7SUFDekcsd0JBQXVDO0lBQ3ZDLDRCQUFNO0lBQUEsNEJBQUU7SUFBQSxp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Z0JBQ3pCLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztnQkFDeEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO3VKQU1RLFNBQVM7a0JBRGYsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpDb250ZXh0TWVudVNlcnZpY2UsIE56RHJvcGRvd25NZW51Q29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9kcm9wZG93bic7XG5pbXBvcnQgeyBOekZvcm1hdEVtaXRFdmVudCwgTnpUcmVlQ29tcG9uZW50LCBOelRyZWVOb2RlLCBOelRyZWVOb2RlT3B0aW9ucyB9IGZyb20gJ25nLXpvcnJvLWFudGQvdHJlZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGFkZEJvcmRlcmVkTm9kZXMsXG4gIGJyZWFrTm9kZSxcbiAgY2xlYXJCb3JkZXJlZCxcbiAgY2xlYXJTZWxlY3RlZCxcbiAgZ3JvdXBOb2RlcyxcbiAgbG9ja05vZGVzLFxuICByZW1vdmVCb3JkZXJlZE5vZGVzLFxuICByZW1vdmVOb2RlcyxcbiAgc2V0Qm9yZGVyZWROb2RlcyxcbiAgc2V0U2VsZWN0ZWROb2RlcyxcbiAgdW5sb2NrTm9kZXMsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDZVV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vZGUsIElTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2UtbGF5ZXItdHJlZScsXG4gIGV4cG9ydEFzOiAnY2VMYXllclRyZWUnLFxuICB0ZW1wbGF0ZVVybDogJ2xheWVyLXRyZWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGF5ZXItdHJlZS5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTGF5ZXJUcmVlQ29tcG9uZW50IHtcbiAgcHVibGljIHRyZWVOb2RlcyQ6IE9ic2VydmFibGU8TnpUcmVlTm9kZU9wdGlvbnNbXT47XG4gIHB1YmxpYyBzZWxlY3RlZDogU2V0PHN0cmluZz47XG4gIHB1YmxpYyBzZWxlY3RlZEtleXMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgQFZpZXdDaGlsZCgnbGF5ZXJUcmVlJywgeyByZWFkOiBOelRyZWVDb21wb25lbnQgfSlcbiAgcHVibGljIGxheWVyVHJlZTogTnpUcmVlQ29tcG9uZW50O1xuICBwcml2YXRlIHBhcmVudEtleTogc3RyaW5nO1xuICBwdWJsaWMgZ3JvdXBTdGF0dXMkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgc3RvcmU6IEVkaXRvclN0b3JlPElTdG9yZT4sXG4gICAgcHJpdmF0ZSB1dGlsczogQ2VVdGlsc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb250ZXh0TWVudVNydjogTnpDb250ZXh0TWVudVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy50cmVlTm9kZXMkID0gdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLm5vZGVzKVxuICAgICAgLnBpcGUobWFwKChub2RlcykgPT4gdGhpcy50cmFuc2Zlck5vZGVzVG9Oek5vZGVzKHRoaXMudXRpbHMuc29ydE5vZGVMaXN0QnlJbmRleCh0aGlzLnV0aWxzLnRyYW5zZmVyTm9kZXNMaXN0VG9Ob2Rlc1RyZWUobm9kZXMpKSkpKTtcbiAgICB0aGlzLnNlbGVjdGVkS2V5cyQgPSB0aGlzLnN0b3JlLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkKS5waXBlKG1hcCgoc2VsZWN0ZWQpID0+IFsuLi5zZWxlY3RlZF0pKTtcbiAgICB0aGlzLmdyb3VwU3RhdHVzJCA9IHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLmxheWVyVHJlZSksXG4gICAgICAgIG1hcCgoc2VsZWN0ZWQpID0+XG4gICAgICAgICAgc2VsZWN0ZWQuc2l6ZSA+IDFcbiAgICAgICAgICAgID8gISFbLi4uc2VsZWN0ZWRdLmZpbmQoKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMubGF5ZXJUcmVlPy5nZXRTZWxlY3RlZE5vZGVMaXN0KCkuZmluZCgoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbm9kZSAmJiBub2RlLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IGZhbHNlXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkKVxuICAgICAgLnN1YnNjcmliZSgoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfSk7XG4gIH1cblxuICBjbGVhckJvcmRlcmVkKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuaGFzKGlkKSkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChyZW1vdmVCb3JkZXJlZE5vZGVzKFtpZF0pKTtcbiAgICB9XG4gIH1cblxuICBzaG93Qm9yZGVyZWQoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goYWRkQm9yZGVyZWROb2RlcyhbaWRdKSk7XG4gIH1cblxuICBsYXllclRyYWNrQnlGbihpbmRleDogbnVtYmVyLCBub2RlOiBJTm9kZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBib3gtaXRlbS0ke25vZGUuaWR9LSR7bm9kZS56SW5kZXh9YDtcbiAgfVxuXG4gIHRyYW5zZmVyTm9kZXNUb056Tm9kZXMobm9kZXM6IElOb2RlW10pOiBOelRyZWVOb2RlT3B0aW9uc1tdIHtcbiAgICByZXR1cm4gbm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ub2RlLFxuICAgICAgICBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbiAmJiB0aGlzLnRyYW5zZmVyTm9kZXNUb056Tm9kZXMobm9kZS5jaGlsZHJlbiksXG4gICAgICAgIHRpdGxlOiBub2RlLm5hbWUsXG4gICAgICAgIGtleTogbm9kZS5pZCxcbiAgICAgICAgaXNMZWFmOiAhbm9kZS5jaGlsZHJlbj8ubGVuZ3RoLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnRleHRNZW51KGV2ZW50OiBNb3VzZUV2ZW50LCBtZW51OiBOekRyb3Bkb3duTWVudUNvbXBvbmVudCwgbm9kZTogTnpUcmVlTm9kZSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5zZWxlY3RlZC5oYXMobm9kZS5rZXkpKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldFNlbGVjdGVkTm9kZXMoW25vZGUua2V5XSkpO1xuICAgIH1cbiAgICB0aGlzLmNvbnRleHRNZW51U3J2LmNyZWF0ZShldmVudCwgbWVudSk7XG4gIH1cblxuICBnZXRQYXJlbnRLZXkocGFyZW50Tm9kZT86IE56VHJlZU5vZGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBwYXJlbnROb2RlPy5rZXkgPz8gJ3Jvb3QnO1xuICB9XG5cbiAgbXVsdGlwbGVTZWxlY3RlZChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMucGFyZW50S2V5KSB7XG4gICAgICB0aGlzLnBhcmVudEtleSA9IHRoaXMuZ2V0UGFyZW50S2V5KGV2ZW50Lm5vZGUucGFyZW50Tm9kZSk7XG4gICAgfVxuICAgIGNvbnN0IGlkcyA9IGV2ZW50LnNlbGVjdGVkS2V5cy5maWx0ZXIoKG5vZGUpID0+IHRoaXMuZ2V0UGFyZW50S2V5KG5vZGUucGFyZW50Tm9kZSkgPT09IHRoaXMucGFyZW50S2V5KS5tYXAoKG5vZGUpID0+IG5vZGUua2V5KTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldFNlbGVjdGVkTm9kZXMoaWRzKSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRCb3JkZXJlZE5vZGVzKGlkcykpO1xuICB9XG5cbiAgY2xpY2tOb2RlKGV2ZW50OiBOekZvcm1hdEVtaXRFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudC5ub2RlKSB7XG4gICAgICBpZiAoL1dpbnxMaW51eC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7XG4gICAgICAgIGlmIChldmVudC5ldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZVNlbGVjdGVkKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhcmVudEtleSA9IHRoaXMuZ2V0UGFyZW50S2V5KGV2ZW50Lm5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRTZWxlY3RlZE5vZGVzKFtldmVudC5ub2RlLmtleV0pKTtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldEJvcmRlcmVkTm9kZXMoW2V2ZW50Lm5vZGUua2V5XSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoL01hYy8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pKSB7XG4gICAgICAgIGlmIChldmVudC5ldmVudC5tZXRhS2V5KSB7XG4gICAgICAgICAgdGhpcy5tdWx0aXBsZVNlbGVjdGVkKGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnBhcmVudEtleSA9IHRoaXMuZ2V0UGFyZW50S2V5KGV2ZW50Lm5vZGUucGFyZW50Tm9kZSk7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRTZWxlY3RlZE5vZGVzKFtldmVudC5ub2RlLmtleV0pKTtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldEJvcmRlcmVkTm9kZXMoW2V2ZW50Lm5vZGUua2V5XSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ3JvdXAoaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goZ3JvdXBOb2RlcyhpZHMpKTtcbiAgfVxuXG4gIGJyZWFrTm9kZShpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjbGVhclNlbGVjdGVkKCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJCb3JkZXJlZCgpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGJyZWFrTm9kZShpZCkpO1xuICB9XG5cbiAgZGVsZXRlTm9kZXMoaWRzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJTZWxlY3RlZCgpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNsZWFyQm9yZGVyZWQoKSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChyZW1vdmVOb2RlcyhpZHMpKTtcbiAgfVxuXG4gIHRvZ2dsZU5vZGVzTG9ja1N0YXRlKGlkczogc3RyaW5nW10sIHN0YXRlOiBib29sZWFuKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGxvY2tOb2RlcyhpZHMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh1bmxvY2tOb2RlcyhpZHMpKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxuei10cmVlXG4gICNsYXllclRyZWVcbiAgbnpCbG9ja05vZGVcbiAgbnpNdWx0aXBsZVxuICBbbnpEYXRhXT1cInRyZWVOb2RlcyQgfCBhc3luY1wiXG4gIFtuelNlbGVjdGVkS2V5c109XCJzZWxlY3RlZEtleXMkIHwgYXN5bmNcIlxuICBbbnpUcmVlVGVtcGxhdGVdPVwibnpUcmVlVGVtcGxhdGVcIlxuICBbbnpFeHBhbmRlZEljb25dPVwibXVsdGlFeHBhbmRlZEljb25UcGxcIlxuICAobnpDbGljayk9XCJjbGlja05vZGUoJGV2ZW50KVwiXG4+XG4gIDxuZy10ZW1wbGF0ZSAjbXVsdGlFeHBhbmRlZEljb25UcGwgbGV0LW5vZGUgbGV0LW9yaWdpbj1cIm9yaWdpblwiPlxuICAgIDxpICpuZ0lmPVwiIW5vZGUuaXNMZWFmXCIgbnotaWNvbiBbbnpUeXBlXT1cIm5vZGUuaXNFeHBhbmRlZCA/ICdmb2xkZXItb3BlbicgOiAnZm9sZGVyJ1wiIGNsYXNzPVwiYW50LXRyZWUtc3dpdGNoZXItbGluZS1pY29uXCI+PC9pPlxuICA8L25nLXRlbXBsYXRlPlxuICA8bmctdGVtcGxhdGUgI256VHJlZVRlbXBsYXRlIGxldC1ub2RlPVwib3JpZ2luXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJsYXllclwiXG4gICAgICBbY2xhc3MubG9ja2VkXT1cIm5vZGUubG9ja2VkXCJcbiAgICAgIChjb250ZXh0bWVudSk9XCJjb250ZXh0TWVudSgkZXZlbnQsIG1lbnUsIG5vZGUpXCJcbiAgICAgIChwb2ludGVyZW50ZXIpPVwic2hvd0JvcmRlcmVkKG5vZGUuaWQpXCJcbiAgICAgIChwb2ludGVybGVhdmUpPVwiY2xlYXJCb3JkZXJlZChub2RlLmlkKVwiXG4gICAgPlxuICAgICAgPHNwYW4+e3sgbm9kZS50aXRsZSB9fTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgICA8bnotZHJvcGRvd24tbWVudSAjbWVudT1cIm56RHJvcGRvd25NZW51XCI+XG4gICAgICA8dWwgbnotbWVudT5cbiAgICAgICAgPGxpICpuZ0lmPVwiIW5vZGUubG9ja2VkXCIgbnotbWVudS1pdGVtIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiAoY2xpY2spPVwidG9nZ2xlTm9kZXNMb2NrU3RhdGUobGF5ZXJUcmVlLm56U2VsZWN0ZWRLZXlzLCB0cnVlKVwiPlxuICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwibG9ja1wiPjwvaT5cbiAgICAgICAgICA8c3Bhbj7plIHlrpo8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSAqbmdJZj1cIm5vZGUubG9ja2VkXCIgbnotbWVudS1pdGVtIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIiAoY2xpY2spPVwidG9nZ2xlTm9kZXNMb2NrU3RhdGUobGF5ZXJUcmVlLm56U2VsZWN0ZWRLZXlzLCBmYWxzZSlcIj5cbiAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cInVubG9ja1wiPjwvaT5cbiAgICAgICAgICA8c3Bhbj7op6PplIE8L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBuei1tZW51LWl0ZW0gY2xhc3M9XCJhY3Rpb24taXRlbVwiIChjbGljayk9XCJkZWxldGVOb2RlcyhsYXllclRyZWUubnpTZWxlY3RlZEtleXMpXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJkZWxldGVcIj48L2k+XG4gICAgICAgICAgPHNwYW4+5Yig6ZmkPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCJncm91cFN0YXR1cyQgfCBhc3luY1wiIG56LW1lbnUtaXRlbSBjbGFzcz1cImFjdGlvbi1pdGVtXCIgKGNsaWNrKT1cImdyb3VwKGxheWVyVHJlZS5uelNlbGVjdGVkS2V5cylcIj5cbiAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWdyb3VwXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPue7hOWQiDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNob3J0Y3V0c1wiPiBjdHJsK3NoaWZ0K0cgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgKm5nSWY9XCJzZWxlY3RlZC5zaXplID09PSAxICYmIG5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGhcIiBuei1tZW51LWl0ZW0gKGNsaWNrKT1cImJyZWFrTm9kZShub2RlLmlkKVwiIGNsYXNzPVwiYWN0aW9uLWl0ZW1cIj5cbiAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWJyZWFrXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPuaJk+aVozwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNob3J0Y3V0c1wiPiBjdHJsK3NoaWZ0K0IgPC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L256LWRyb3Bkb3duLW1lbnU+XG4gIDwvbmctdGVtcGxhdGU+XG48L256LXRyZWU+XG4iXX0=