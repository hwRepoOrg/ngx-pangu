import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "ng-zorro-antd/card";
import * as i3 from "@angular/cdk/drag-drop";
import * as i4 from "@angular/common";
import * as i5 from "ng-zorro-antd/button";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
function PanelComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.panel == null ? null : ctx_r1.panel.title);
} }
function PanelComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.panel.content);
} }
function PanelComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function PanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, PanelComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngComponentOutlet", ctx_r3.panel.content);
} }
function PanelComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.toggleCollapsed(); });
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 9);
    i0.ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.close(); });
    i0.ɵɵelement(3, "i", 10);
    i0.ɵɵelementEnd();
} }
export class PanelComponent {
    constructor(utils, store) {
        this.utils = utils;
        this.store = store;
    }
    set panel(val) {
        this._panel = val;
    }
    get panel() {
        return this._panel;
    }
    updatePosition(event) {
        this.store.updatePanelPosition(this.panel.key, [this.panel.x + event.distance.x, this.panel.y + event.distance.y]);
    }
    toggleCollapsed() {
        this.store.togglePanelCollapsed(this.panel.key);
    }
    close() {
        this.store.togglePanelVisible(this.panel.key);
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(i0.ɵɵdirectiveInject(i1.CeUtilsService), i0.ɵɵdirectiveInject(i1.EditorStore)); };
PanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PanelComponent, selectors: [["ce-panel"], ["", "cePanel", ""]], inputs: { panel: "panel" }, decls: 7, vars: 7, consts: [["nzSize", "small", "cdkDrag", "", 3, "nzTitle", "nzExtra", "cdkDragFreeDragPosition", "cdkDragEnded"], ["cardTitle", ""], [4, "ngIf"], ["cardExtra", ""], ["cdkDragHandle", "", 1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [4, "ngComponentOutlet"], ["nz-button", "", "nzSize", "small", "nzType", "link", 1, "collapse-icon", 3, "click"], ["nz-icon", "", "nzType", "caret-down"], ["nz-button", "", "nzSize", "small", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "close"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-card", 0);
        i0.ɵɵlistener("cdkDragEnded", function PanelComponent_Template_nz_card_cdkDragEnded_0_listener($event) { return ctx.updatePosition($event); });
        i0.ɵɵtemplate(1, PanelComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, PanelComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        i0.ɵɵtemplate(4, PanelComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, PanelComponent_ng_template_5_Template, 4, 0, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        const _r4 = i0.ɵɵreference(6);
        i0.ɵɵclassProp("collapsed", ctx.panel == null ? null : ctx.panel.collapsed);
        i0.ɵɵproperty("nzTitle", _r0)("nzExtra", _r4)("cdkDragFreeDragPosition", ctx.panel);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.utils.isTemplateType(ctx.panel.content));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.utils.isTemplateType(ctx.panel.content));
    } }, directives: [i2.NzCardComponent, i3.CdkDrag, i4.NgIf, i3.CdkDragHandle, i4.NgTemplateOutlet, i4.NgComponentOutlet, i5.NzButtonComponent, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective], styles: ["[cePanel],ce-panel{display:block;pointer-events:none;position:absolute;width:300px}[cePanel] *,ce-panel *{pointer-events:auto}[cePanel]>nz-card.collapsed .ant-card-body,ce-panel>nz-card.collapsed .ant-card-body{height:0;overflow:hidden;padding:0}[cePanel]>nz-card.collapsed .collapse-icon,ce-panel>nz-card.collapsed .collapse-icon{transform:rotate(-180deg)}[cePanel]>nz-card .collapse-icon,ce-panel>nz-card .collapse-icon{transform:rotate(0deg);transition:transform .3s ease-in-out}[cePanel]>nz-card .ant-card-head-title,ce-panel>nz-card .ant-card-head-title{cursor:move}[cePanel]>nz-card .ant-card-body,ce-panel>nz-card .ant-card-body{height:calc(100vh - 110px);transition:height .3s ease-in-out,padding .3s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'ce-panel,[cePanel]',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.CeUtilsService }, { type: i1.EditorStore }]; }, { panel: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wYW5lbC9wYW5lbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ1N6Riw4QkFBcUQ7SUFBQSxZQUFrQjtJQUFBLGlCQUFNOzs7SUFBeEIsZUFBa0I7SUFBbEIsc0VBQWtCOzs7SUFHdkUsd0JBQStEOzs7SUFEakUsNkJBQ0U7SUFBQSxnR0FBK0Q7SUFDakUsMEJBQWU7OztJQURFLGVBQStCO0lBQS9CLHVEQUErQjs7O0lBRzlDLHdCQUFnRTs7O0lBRGxFLDZCQUNFO0lBQUEsZ0dBQWdFO0lBQ2xFLDBCQUFlOzs7SUFERSxlQUFnQztJQUFoQyx3REFBZ0M7Ozs7SUFLakQsaUNBQ0U7SUFENkMsK0xBQTJCO0lBQ3hFLHVCQUFtQztJQUNyQyxpQkFBUztJQUNULGlDQUNFO0lBRDZDLHVMQUFpQjtJQUM5RCx3QkFBOEI7SUFDaEMsaUJBQVM7O0FEZFgsTUFBTSxPQUFPLGNBQWM7SUFVekIsWUFBbUIsS0FBcUIsRUFBUyxLQUFrQjtRQUFoRCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBRyxDQUFDO0lBUHZFLElBQ0ksS0FBSyxDQUFDLEdBQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBR0QsY0FBYyxDQUFDLEtBQWlCO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckgsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7NEVBdEJVLGNBQWM7bURBQWQsY0FBYztRQ1ozQixrQ0FTRTtRQUhBLGdIQUFnQiwwQkFBc0IsSUFBQztRQUd2QyxnSEFFYztRQUNkLGlGQUVlO1FBQ2YsaUZBRWU7UUFDakIsaUJBQVU7UUFFVixnSEFPYzs7OztRQXBCWiwyRUFBb0M7UUFMcEMsNkJBQXFCLGdCQUFBLHNDQUFBO1FBVU4sZUFBeUM7UUFBekMsa0VBQXlDO1FBR3pDLGVBQTBDO1FBQTFDLG1FQUEwQzs7a0RESDlDLGNBQWM7Y0FQMUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx3QkFBd0I7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2dCQUNyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7MkZBS0ssS0FBSztrQkFEUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2RrRHJhZ0VuZCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDZVV0aWxzU2VydmljZSwgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJUGFuZWwgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLXBhbmVsLFtjZVBhbmVsXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYW5lbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhbmVsLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQYW5lbENvbXBvbmVudDxUPiB7XG4gIHByaXZhdGUgX3BhbmVsOiBJUGFuZWw8VD47XG5cbiAgQElucHV0KClcbiAgc2V0IHBhbmVsKHZhbDogSVBhbmVsPFQ+KSB7XG4gICAgdGhpcy5fcGFuZWwgPSB2YWw7XG4gIH1cbiAgZ2V0IHBhbmVsKCk6IElQYW5lbDxUPiB7XG4gICAgcmV0dXJuIHRoaXMuX3BhbmVsO1xuICB9XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1dGlsczogQ2VVdGlsc1NlcnZpY2UsIHB1YmxpYyBzdG9yZTogRWRpdG9yU3RvcmUpIHt9XG5cbiAgdXBkYXRlUG9zaXRpb24oZXZlbnQ6IENka0RyYWdFbmQpIHtcbiAgICB0aGlzLnN0b3JlLnVwZGF0ZVBhbmVsUG9zaXRpb24odGhpcy5wYW5lbC5rZXksIFt0aGlzLnBhbmVsLnggKyBldmVudC5kaXN0YW5jZS54LCB0aGlzLnBhbmVsLnkgKyBldmVudC5kaXN0YW5jZS55XSk7XG4gIH1cblxuICB0b2dnbGVDb2xsYXBzZWQoKSB7XG4gICAgdGhpcy5zdG9yZS50b2dnbGVQYW5lbENvbGxhcHNlZCh0aGlzLnBhbmVsLmtleSk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLnN0b3JlLnRvZ2dsZVBhbmVsVmlzaWJsZSh0aGlzLnBhbmVsLmtleSk7XG4gIH1cbn1cbiIsIjxuei1jYXJkXG4gIG56U2l6ZT1cInNtYWxsXCJcbiAgW256VGl0bGVdPVwiY2FyZFRpdGxlXCJcbiAgW256RXh0cmFdPVwiY2FyZEV4dHJhXCJcbiAgY2RrRHJhZ1xuICBbY2RrRHJhZ0ZyZWVEcmFnUG9zaXRpb25dPVwicGFuZWxcIlxuICAoY2RrRHJhZ0VuZGVkKT1cInVwZGF0ZVBvc2l0aW9uKCRldmVudClcIlxuICBbY2xhc3MuY29sbGFwc2VkXT1cInBhbmVsPy5jb2xsYXBzZWRcIlxuPlxuICA8bmctdGVtcGxhdGUgI2NhcmRUaXRsZT5cbiAgICA8ZGl2IGNka0RyYWdIYW5kbGUgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+e3sgcGFuZWw/LnRpdGxlIH19PC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJ1dGlscy5pc1RlbXBsYXRlVHlwZShwYW5lbC5jb250ZW50KVwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJwYW5lbC5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXV0aWxzLmlzVGVtcGxhdGVUeXBlKHBhbmVsLmNvbnRlbnQpXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJwYW5lbC5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uei1jYXJkPlxuXG48bmctdGVtcGxhdGUgI2NhcmRFeHRyYT5cbiAgPGJ1dHRvbiBuei1idXR0b24gbnpTaXplPVwic21hbGxcIiBuelR5cGU9XCJsaW5rXCIgKGNsaWNrKT1cInRvZ2dsZUNvbGxhcHNlZCgpXCIgY2xhc3M9XCJjb2xsYXBzZS1pY29uXCI+XG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjYXJldC1kb3duXCI+PC9pPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBuei1idXR0b24gbnpTaXplPVwic21hbGxcIiBuelR5cGU9XCJsaW5rXCIgKGNsaWNrKT1cImNsb3NlKClcIj5cbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCI+PC9pPlxuICA8L2J1dHRvbj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=