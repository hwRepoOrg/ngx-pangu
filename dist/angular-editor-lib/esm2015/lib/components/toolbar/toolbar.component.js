import { ChangeDetectionStrategy, Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { breakNode, clearBordered, clearSelected, groupNodes } from '../../actions';
import { CeToolbarDirective } from '../../directives';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "../../services/utils.service";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/card";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/tag";
function ToolbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵprojection(1);
    i0.ɵɵelementContainerEnd();
} }
function ToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nz-card", 2);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵtext(3, "Canvas Title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "button", 6);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelement(7, "i", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 8);
    i0.ɵɵelement(9, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 5);
    i0.ɵɵelementStart(11, "button", 10);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.groupNodes(); });
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelement(13, "i", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.breakNode(); });
    i0.ɵɵpipe(15, "async");
    i0.ɵɵelement(16, "i", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 5);
    i0.ɵɵelementStart(18, "button", 6);
    i0.ɵɵpipe(19, "async");
    i0.ɵɵelement(20, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 6);
    i0.ɵɵpipe(22, "async");
    i0.ɵɵelement(23, "i", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 6);
    i0.ɵɵpipe(25, "async");
    i0.ɵɵelement(26, "i", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 6);
    i0.ɵɵpipe(28, "async");
    i0.ɵɵelement(29, "i", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 6);
    i0.ɵɵpipe(31, "async");
    i0.ɵɵelement(32, "i", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 6);
    i0.ɵɵpipe(34, "async");
    i0.ɵɵelement(35, "i", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 6);
    i0.ɵɵpipe(37, "async");
    i0.ɵɵelement(38, "i", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "button", 6);
    i0.ɵɵpipe(40, "async");
    i0.ɵɵelement(41, "i", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "div", 5);
    i0.ɵɵelementStart(43, "nz-tag", 21);
    i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_43_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.store.togglePanelVisible("LAYERS"); });
    i0.ɵɵelement(44, "i", 22);
    i0.ɵɵelementStart(45, "span");
    i0.ɵɵtext(46, "\u56FE\u5C42");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "nz-tag", 21);
    i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_47_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.store.togglePanelVisible("WIDGET_LIST"); });
    i0.ɵɵelement(48, "i", 23);
    i0.ɵɵelementStart(49, "span");
    i0.ɵɵtext(50, "\u7EC4\u4EF6");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "nz-tag", 21);
    i0.ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_51_listener() { i0.ɵɵrestoreView(_r4); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.store.togglePanelVisible("PROPERTIES"); });
    i0.ɵɵelement(52, "i", 24);
    i0.ɵɵelementStart(53, "span");
    i0.ɵɵtext(54, "\u5C5E\u6027");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "div", 5);
    i0.ɵɵelementStart(56, "button", 8);
    i0.ɵɵelement(57, "i", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    let tmp_11_0 = null;
    let tmp_12_0 = null;
    let tmp_13_0 = null;
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(6, 14, ctx_r2.copyStatus$));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(12, 16, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !i0.ɵɵpipeBind1(15, 18, ctx_r2.breakStatus$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(19, 20, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(22, 22, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(25, 24, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(28, 26, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(31, 28, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(34, 30, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(37, 32, ctx_r2.groupStatus$));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(40, 34, ctx_r2.groupStatus$));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzChecked", (tmp_11_0 = ctx_r2.store.getPanel("LAYERS")) == null ? null : tmp_11_0.show);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzChecked", (tmp_12_0 = ctx_r2.store.getPanel("WIDGET_LIST")) == null ? null : tmp_12_0.show);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("nzChecked", (tmp_13_0 = ctx_r2.store.getPanel("PROPERTIES")) == null ? null : tmp_13_0.show);
} }
const _c0 = [[["", "ceToolbar", ""]]];
const _c1 = ["[ceToolbar]"];
export class ToolbarComponent {
    constructor(store, utils) {
        this.store = store;
        this.utils = utils;
        this.store
            .selectDifferent((state) => ({ selected: state.selected, nodes: state.nodes }))
            .subscribe(({ selected, nodes }) => {
            this.selected = selected;
            this.nodes = nodes;
        });
        this.selected$ = this.store.selectDifferent((state) => state.selected);
        this.groupStatus$ = this.selected$.pipe(map((state) => state.size <= 1));
        this.breakStatus$ = this.selected$.pipe(map((state) => (state.size === 1 ? [...state][0] : false)), map((id) => { var _a, _b; return id && !!((_b = (_a = this.utils.getNodeById(id, this.nodes)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length); }));
    }
    get copyStatus$() {
        return this.selected$.pipe(map((state) => state.size === 0));
    }
    groupNodes() {
        const ids = [...this.selected];
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(groupNodes(ids));
    }
    breakNode() {
        const node = this.utils.getNodeById([...this.selected][0], this.nodes);
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(breakNode(node.id));
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(i0.ɵɵdirectiveInject(i1.EditorStore), i0.ɵɵdirectiveInject(i2.CeUtilsService)); };
ToolbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ce-toolbar"]], contentQueries: function ToolbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, CeToolbarDirective, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ceToolbar = _t.first);
    } }, exportAs: ["ceToolbar"], ngContentSelectors: _c1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["nzSize", "small", 1, "tool-bar"], [1, "d-flex", "align-items-center", "col", "p-0"], [1, "ml-2"], [1, "d-flex", "ml-auto", "align-items-center"], ["nz-button", "", "nzType", "link", 3, "disabled"], ["nz-icon", "", "nzIconfont", "icon-copy"], ["nz-button", "", "nzType", "link"], ["nz-icon", "", "nzIconfont", "icon-paste"], ["nz-button", "", "nzType", "link", 3, "disabled", "click"], ["nz-icon", "", "nzIconfont", "icon-group"], ["nz-icon", "", "nzIconfont", "icon-break"], ["nz-icon", "", "nzIconfont", "icon-horizontal-between"], ["nz-icon", "", "nzIconfont", "icon-horizontal-align"], ["nz-icon", "", "nzIconfont", "icon-vertical-between"], ["nz-icon", "", "nzIconfont", "icon-vertical-align"], ["nz-icon", "", "nzIconfont", "icon-left-align"], ["nz-icon", "", "nzIconfont", "icon-right-align"], ["nz-icon", "", "nzIconfont", "icon-top-align"], ["nz-icon", "", "nzIconfont", "icon-bottom-align"], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", "nzIconfont", "icon-tuceng"], ["nz-icon", "", "nzIconfont", "icon-widgets"], ["nz-icon", "", "nzIconfont", "icon-widget"], ["nz-icon", "", "nzIconfont", "icon-run"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, ToolbarComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, ToolbarComponent_ng_template_1_Template, 58, 36, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", ctx.ceToolbar)("ngIfElse", _r1);
    } }, directives: [i3.NgIf, i4.NzCardComponent, i5.NzButtonComponent, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective, i8.NzTagComponent], pipes: [i3.AsyncPipe], styles: ["ce-toolbar{display:flex;flex:1;height:40px;max-height:40px;width:100%}ce-toolbar .tool-bar{flex:1}ce-toolbar .tool-bar [nz-icon]{font-size:18px}ce-toolbar .tool-bar nz-tag{margin:auto .2rem;padding:auto 2px}ce-toolbar .tool-bar nz-tag [nz-icon]{font-size:13px}ce-toolbar .tool-bar .ant-card-body{display:flex;height:100%;padding:2px 5px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'ce-toolbar',
                exportAs: 'ceToolbar',
                templateUrl: 'toolbar.component.html',
                styleUrls: ['toolbar.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }, { type: i2.CeUtilsService }]; }, { ceToolbar: [{
            type: ContentChild,
            args: [CeToolbarDirective]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFcEcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7O0lDSnRELDZCQUNFO0lBQUEsa0JBQThDO0lBQ2hELDBCQUFlOzs7O0lBR2Isa0NBQ0U7SUFBQSw4QkFDRTtJQUFBLCtCQUFtQjtJQUFBLDRCQUFZO0lBQUEsaUJBQU87SUFDdEMsOEJBQ0U7SUFBQSxpQ0FBaUU7O0lBQUEsdUJBQXNDO0lBQUEsaUJBQVM7SUFDaEgsaUNBQWdDO0lBQUEsdUJBQXVDO0lBQUEsaUJBQVM7SUFDbEYsaUJBQU07SUFDTiwrQkFDRTtJQUFBLG1DQUF5RjtJQUEvQyw2TEFBc0I7O0lBQXlCLHlCQUF1QztJQUFBLGlCQUFTO0lBQ3pJLG1DQUEyRjtJQUE5Qyw0TEFBcUI7O0lBQXlCLHlCQUF1QztJQUFBLGlCQUFTO0lBQzdJLGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSxrQ0FBa0U7O0lBQUEseUJBQW9EO0lBQUEsaUJBQVM7SUFDL0gsa0NBQWtFOztJQUFBLHlCQUFrRDtJQUFBLGlCQUFTO0lBQzdILGtDQUFrRTs7SUFBQSx5QkFBa0Q7SUFB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QUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnRkF4Q1UsZ0JBQWdCO3FEQUFoQixnQkFBZ0I7b0NBQ2Isa0JBQWtCOzs7Ozs7UUNsQmxDLG1GQUVlO1FBRWYsb0hBeUNjOzs7UUE3Q0Msb0NBQWlCLGlCQUFBOztrRERpQm5CLGdCQUFnQjtjQVI1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixXQUFXLEVBQUUsd0JBQXdCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDckMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzJGQUdDLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBDb250ZW50Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBicmVha05vZGUsIGNsZWFyQm9yZGVyZWQsIGNsZWFyU2VsZWN0ZWQsIGdyb3VwTm9kZXMgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IENlVG9vbGJhckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDZVV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vZGUsIElTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2UtdG9vbGJhcicsXG4gIGV4cG9ydEFzOiAnY2VUb29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXIuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJDb21wb25lbnQge1xuICBAQ29udGVudENoaWxkKENlVG9vbGJhckRpcmVjdGl2ZSlcbiAgY2VUb29sYmFyOiBDZVRvb2xiYXJEaXJlY3RpdmU7XG4gIHB1YmxpYyBzZWxlY3RlZCQ6IE9ic2VydmFibGU8U2V0PHN0cmluZz4+O1xuICBwdWJsaWMgc2NhbGU6IG51bWJlcjtcbiAgcHVibGljIGdldCBjb3B5U3RhdHVzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3RlZCQucGlwZShtYXAoKHN0YXRlKSA9PiBzdGF0ZS5zaXplID09PSAwKSk7XG4gIH1cbiAgcHVibGljIGdyb3VwU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHVibGljIGJyZWFrU3RhdHVzJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgcHJpdmF0ZSBzZWxlY3RlZDogU2V0PHN0cmluZz47XG4gIHByaXZhdGUgbm9kZXM6IElOb2RlW107XG5cbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlOiBFZGl0b3JTdG9yZTxJU3RvcmU+LCBwcml2YXRlIHV0aWxzOiBDZVV0aWxzU2VydmljZSkge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiAoeyBzZWxlY3RlZDogc3RhdGUuc2VsZWN0ZWQsIG5vZGVzOiBzdGF0ZS5ub2RlcyB9KSlcbiAgICAgIC5zdWJzY3JpYmUoKHsgc2VsZWN0ZWQsIG5vZGVzIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGVkJCA9IHRoaXMuc3RvcmUuc2VsZWN0RGlmZmVyZW50KChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWQpO1xuICAgIHRoaXMuZ3JvdXBTdGF0dXMkID0gdGhpcy5zZWxlY3RlZCQucGlwZShtYXAoKHN0YXRlKSA9PiBzdGF0ZS5zaXplIDw9IDEpKTtcbiAgICB0aGlzLmJyZWFrU3RhdHVzJCA9IHRoaXMuc2VsZWN0ZWQkLnBpcGUoXG4gICAgICBtYXAoKHN0YXRlKSA9PiAoc3RhdGUuc2l6ZSA9PT0gMSA/IFsuLi5zdGF0ZV1bMF0gOiBmYWxzZSkpLFxuICAgICAgbWFwKChpZCkgPT4gaWQgJiYgISF0aGlzLnV0aWxzLmdldE5vZGVCeUlkKGlkIGFzIHN0cmluZywgdGhpcy5ub2Rlcyk/LmNoaWxkcmVuPy5sZW5ndGgpXG4gICAgKTtcbiAgfVxuXG4gIGdyb3VwTm9kZXMoKTogdm9pZCB7XG4gICAgY29uc3QgaWRzID0gWy4uLnRoaXMuc2VsZWN0ZWRdO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJTZWxlY3RlZCgpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNsZWFyQm9yZGVyZWQoKSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChncm91cE5vZGVzKGlkcykpO1xuICB9XG5cbiAgYnJlYWtOb2RlKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLnV0aWxzLmdldE5vZGVCeUlkKFsuLi50aGlzLnNlbGVjdGVkXVswXSwgdGhpcy5ub2Rlcyk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjbGVhclNlbGVjdGVkKCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJCb3JkZXJlZCgpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGJyZWFrTm9kZShub2RlLmlkKSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJjZVRvb2xiYXI7IGVsc2UgZWxzZUJsb2NrXCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltjZVRvb2xiYXJdXCI+PC9uZy1jb250ZW50PlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICA8bnotY2FyZCBuelNpemU9XCJzbWFsbFwiIGNsYXNzPVwidG9vbC1iYXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBjb2wgcC0wXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cIm1sLTJcIj5DYW52YXMgVGl0bGU8L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IG1sLWF1dG8gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImNvcHlTdGF0dXMkIHwgYXN5bmNcIiBuei1idXR0b24gbnpUeXBlPVwibGlua1wiPjxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tY29weVwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwibGlua1wiPjxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tcGFzdGVcIj48L2k+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbWwtYXV0byBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZ3JvdXBTdGF0dXMkIHwgYXN5bmNcIiAoY2xpY2spPVwiZ3JvdXBOb2RlcygpXCIgbnotYnV0dG9uIG56VHlwZT1cImxpbmtcIj48aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWdyb3VwXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhKGJyZWFrU3RhdHVzJCB8IGFzeW5jKVwiIChjbGljayk9XCJicmVha05vZGUoKVwiIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCI+PGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1icmVha1wiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBtbC1hdXRvIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJncm91cFN0YXR1cyQgfCBhc3luY1wiIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCI+PGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1ob3Jpem9udGFsLWJldHdlZW5cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImdyb3VwU3RhdHVzJCB8IGFzeW5jXCIgbnotYnV0dG9uIG56VHlwZT1cImxpbmtcIj48aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWhvcml6b250YWwtYWxpZ25cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImdyb3VwU3RhdHVzJCB8IGFzeW5jXCIgbnotYnV0dG9uIG56VHlwZT1cImxpbmtcIj48aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLXZlcnRpY2FsLWJldHdlZW5cIj48L2k+PC9idXR0b24+XG4gICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImdyb3VwU3RhdHVzJCB8IGFzeW5jXCIgbnotYnV0dG9uIG56VHlwZT1cImxpbmtcIj48aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLXZlcnRpY2FsLWFsaWduXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJncm91cFN0YXR1cyQgfCBhc3luY1wiIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCI+PGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1sZWZ0LWFsaWduXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJncm91cFN0YXR1cyQgfCBhc3luY1wiIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCI+PGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1yaWdodC1hbGlnblwiPjwvaT48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiZ3JvdXBTdGF0dXMkIHwgYXN5bmNcIiBuei1idXR0b24gbnpUeXBlPVwibGlua1wiPjxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tdG9wLWFsaWduXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJncm91cFN0YXR1cyQgfCBhc3luY1wiIG56LWJ1dHRvbiBuelR5cGU9XCJsaW5rXCI+PGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1ib3R0b20tYWxpZ25cIj48L2k+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbWwtYXV0byBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPG56LXRhZyBuek1vZGU9XCJjaGVja2FibGVcIiBbbnpDaGVja2VkXT1cInN0b3JlLmdldFBhbmVsKCdMQVlFUlMnKT8uc2hvd1wiIChuekNoZWNrZWRDaGFuZ2UpPVwic3RvcmUudG9nZ2xlUGFuZWxWaXNpYmxlKCdMQVlFUlMnKVwiPlxuICAgICAgICAgIDxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tdHVjZW5nXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPuWbvuWxgjwvc3Bhbj5cbiAgICAgICAgPC9uei10YWc+XG4gICAgICAgIDxuei10YWcgbnpNb2RlPVwiY2hlY2thYmxlXCIgW256Q2hlY2tlZF09XCJzdG9yZS5nZXRQYW5lbCgnV0lER0VUX0xJU1QnKT8uc2hvd1wiIChuekNoZWNrZWRDaGFuZ2UpPVwic3RvcmUudG9nZ2xlUGFuZWxWaXNpYmxlKCdXSURHRVRfTElTVCcpXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi13aWRnZXRzXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPue7hOS7tjwvc3Bhbj5cbiAgICAgICAgPC9uei10YWc+XG4gICAgICAgIDxuei10YWcgbnpNb2RlPVwiY2hlY2thYmxlXCIgW256Q2hlY2tlZF09XCJzdG9yZS5nZXRQYW5lbCgnUFJPUEVSVElFUycpPy5zaG93XCIgKG56Q2hlY2tlZENoYW5nZSk9XCJzdG9yZS50b2dnbGVQYW5lbFZpc2libGUoJ1BST1BFUlRJRVMnKVwiPlxuICAgICAgICAgIDxpIG56LWljb24gbnpJY29uZm9udD1cImljb24td2lkZ2V0XCI+PC9pPlxuICAgICAgICAgIDxzcGFuPuWxnuaApzwvc3Bhbj5cbiAgICAgICAgPC9uei10YWc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggbWwtYXV0byBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBuei1idXR0b24gbnpUeXBlPVwibGlua1wiPjxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tcnVuXCI+PC9pPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbnotY2FyZD5cbjwvbmctdGVtcGxhdGU+XG4iXX0=