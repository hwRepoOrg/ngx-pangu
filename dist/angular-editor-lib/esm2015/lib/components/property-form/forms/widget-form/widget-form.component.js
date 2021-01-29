import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { updateNodes } from '../../../../actions/nodes.actions';
import { filter, map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../../services/store.service";
import * as i3 from "ng-zorro-antd/collapse";
import * as i4 from "ng-zorro-antd/form";
import * as i5 from "ng-zorro-antd/grid";
import * as i6 from "ng-zorro-antd/icon";
import * as i7 from "ng-zorro-antd/core/transition-patch";
import * as i8 from "ng-zorro-antd/input-number";
import * as i9 from "ng-zorro-antd/switch";
import * as i10 from "ng-zorro-antd/select";
import * as i11 from "@angular/common";
const _c0 = ["container"];
function WidgetFormComponent_ng_template_56_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "none");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 31);
    i0.ɵɵelement(2, "path", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementContainerStart(1, 29);
    i0.ɵɵtemplate(2, WidgetFormComponent_ng_template_56_ng_container_2_Template, 3, 0, "ng-container", 30);
    i0.ɵɵtemplate(3, WidgetFormComponent_ng_template_56_ng_container_3_Template, 3, 0, "ng-container", 30);
    i0.ɵɵtemplate(4, WidgetFormComponent_ng_template_56_ng_container_4_Template, 3, 0, "ng-container", 30);
    i0.ɵɵtemplate(5, WidgetFormComponent_ng_template_56_ng_container_5_Template, 3, 0, "ng-container", 30);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r8 = ctx.$implicit;
    i0.ɵɵstyleProp("width", 40, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", selected_r8.nzValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "dashed");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "solid");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "dotted");
} }
function WidgetFormComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_template_68_Template(rf, ctx) { }
const _c1 = function () { return { nzValue: "none" }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
const _c3 = function () { return { nzValue: "dashed" }; };
const _c4 = function () { return { nzValue: "solid" }; };
const _c5 = function () { return { nzValue: "dotted" }; };
export class WidgetFormComponent {
    constructor(fb, cfr, store) {
        this.fb = fb;
        this.cfr = cfr;
        this.store = store;
        this.boundingFormGroup = this.fb.group({
            id: [, [Validators.required]],
            name: [],
            width: [, [Validators.required]],
            height: [, [Validators.required]],
            left: [, [Validators.required]],
            top: [, [Validators.required]],
            locked: [],
            rotate: [, [Validators.required]],
            zIndex: [, [Validators.required]],
            borderStyle: [],
            borderWidth: [],
            borderColor: [],
            borderRadius: [],
            backgroundColor: [],
            backgroundImage: [],
            backgroundRepeat: [],
            backgroundPosition: [],
            backgroundSize: [],
        });
    }
    ngOnInit() {
        this.store
            .select((state) => state.selected)
            .pipe(filter((selected) => selected.size === 1), map((selected) => [...selected][0]), switchMap((id) => this.store.select((state) => state.nodes.find((item) => item.id === id))), filter((node) => !!node))
            .subscribe((node) => {
            this.boundingFormGroup.patchValue(Object.assign(Object.assign({}, node), { width: Math.round(node.width), height: Math.round(node.height), left: Math.round(node.left), top: Math.round(node.top) }), { emitEvent: false });
        });
        this.boundingFormGroup.valueChanges.subscribe((values) => {
            this.store.dispatch(updateNodes([values]));
        });
    }
}
WidgetFormComponent.ɵfac = function WidgetFormComponent_Factory(t) { return new (t || WidgetFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i2.EditorStore)); };
WidgetFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WidgetFormComponent, selectors: [["ce-widget-form"], ["", "ceWidgetForm", ""]], viewQuery: function WidgetFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.propsFormContainer = _t.first);
    } }, decls: 70, vars: 25, consts: [["nzGhost", "", "nzAccordion", "", "nzSize", "small", 3, "nzBordered"], ["nzHeader", "\u5916\u5305\u56F4\u76D2\u5C5E\u6027", "nzActive", ""], ["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzType", "rotate-right"], ["nzSize", "small", "formControlName", "rotate"], ["nz-icon", "", "nzType", "lock"], ["formControlName", "locked"], ["nzSpan", "24"], ["nz-icon", "", "nzType", "border-outer"], ["borderStyleTpl", ""], ["nzSize", "small", "formControlName", "borderStyle", 3, "nzCustomTemplate"], ["nzValue", "none", "nzLabel", "none"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzValue", "dashed", "nzLabel", "dashed", "nzCustomContent", ""], ["nzValue", "solid", "nzLabel", "solid", "nzCustomContent", ""], ["nzValue", "dotted", "nzLabel", "dotted", "nzCustomContent", ""], ["nzHeader", "\u7EC4\u4EF6\u5C5E\u6027"], ["container", ""], [1, "d-flex", "align-items-center", "h-100"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["viewBox", "0 0 40 1", 1, "svg-icon"], ["d", "M0 1h5V0H0v1zm9 0h5V0H9v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1z"], ["d", "M0 0h80v1H0z"], ["d", "M0 1h1V0H0v1zm4 0h1V0H4v1zm4 0h1V0H8v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1z"]], template: function WidgetFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nz-collapse", 0);
        i0.ɵɵelementStart(1, "nz-collapse-panel", 1);
        i0.ɵɵelementStart(2, "div");
        i0.ɵɵelementStart(3, "h5");
        i0.ɵɵtext(4, "\u5C3A\u5BF8");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "form", 2);
        i0.ɵɵelementStart(6, "nz-row", 3);
        i0.ɵɵelementStart(7, "nz-col", 4);
        i0.ɵɵelementStart(8, "nz-form-item");
        i0.ɵɵelementStart(9, "nz-form-label");
        i0.ɵɵelement(10, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "nz-form-control");
        i0.ɵɵelement(12, "nz-input-number", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "nz-col", 4);
        i0.ɵɵelementStart(14, "nz-form-item");
        i0.ɵɵelementStart(15, "nz-form-label");
        i0.ɵɵelement(16, "i", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "nz-form-control");
        i0.ɵɵelement(18, "nz-input-number", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "h5");
        i0.ɵɵtext(20, "\u4F4D\u7F6E");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "form", 2);
        i0.ɵɵelementStart(22, "nz-row", 3);
        i0.ɵɵelementStart(23, "nz-col", 4);
        i0.ɵɵelementStart(24, "nz-form-item");
        i0.ɵɵelementStart(25, "nz-form-label");
        i0.ɵɵelement(26, "i", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "nz-form-control");
        i0.ɵɵelement(28, "nz-input-number", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "nz-col", 4);
        i0.ɵɵelementStart(30, "nz-form-item");
        i0.ɵɵelementStart(31, "nz-form-label");
        i0.ɵɵelement(32, "i", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "nz-form-control");
        i0.ɵɵelement(34, "nz-input-number", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "nz-col", 4);
        i0.ɵɵelementStart(36, "nz-form-item");
        i0.ɵɵelementStart(37, "nz-form-label");
        i0.ɵɵelement(38, "i", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(39, "nz-form-control");
        i0.ɵɵelement(40, "nz-input-number", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "nz-col", 4);
        i0.ɵɵelementStart(42, "nz-form-item");
        i0.ɵɵelementStart(43, "nz-form-label");
        i0.ɵɵelement(44, "i", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "nz-form-control");
        i0.ɵɵelement(46, "nz-switch", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(47, "h5");
        i0.ɵɵtext(48, "\u8FB9\u6846");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "form", 2);
        i0.ɵɵelementStart(50, "nz-row", 3);
        i0.ɵɵelementStart(51, "nz-col", 17);
        i0.ɵɵelementStart(52, "nz-form-item");
        i0.ɵɵelementStart(53, "nz-form-label");
        i0.ɵɵelement(54, "i", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "nz-form-control");
        i0.ɵɵtemplate(56, WidgetFormComponent_ng_template_56_Template, 6, 7, "ng-template", null, 19, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(58, "nz-select", 20);
        i0.ɵɵelementStart(59, "nz-option", 21);
        i0.ɵɵtemplate(60, WidgetFormComponent_ng_container_60_Template, 1, 0, "ng-container", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(61, "nz-option", 23);
        i0.ɵɵtemplate(62, WidgetFormComponent_ng_container_62_Template, 1, 0, "ng-container", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(63, "nz-option", 24);
        i0.ɵɵtemplate(64, WidgetFormComponent_ng_container_64_Template, 1, 0, "ng-container", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(65, "nz-option", 25);
        i0.ɵɵtemplate(66, WidgetFormComponent_ng_container_66_Template, 1, 0, "ng-container", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(67, "nz-collapse-panel", 26);
        i0.ɵɵtemplate(68, WidgetFormComponent_ng_template_68_Template, 0, 0, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(57);
        i0.ɵɵproperty("nzBordered", false);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
        i0.ɵɵadvance(28);
        i0.ɵɵproperty("formGroup", ctx.boundingFormGroup);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("nzCustomTemplate", _r0);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(14, _c2, i0.ɵɵpureFunction0(13, _c1)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(17, _c2, i0.ɵɵpureFunction0(16, _c3)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(20, _c2, i0.ɵɵpureFunction0(19, _c4)));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c2, i0.ɵɵpureFunction0(22, _c5)));
    } }, directives: [i3.NzCollapseComponent, i3.NzCollapsePanelComponent, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i4.NzFormDirective, i1.FormGroupDirective, i5.NzRowDirective, i5.NzColDirective, i4.NzFormItemComponent, i4.NzFormLabelComponent, i6.NzIconDirective, i7.ɵNzTransitionPatchDirective, i4.NzFormControlComponent, i8.NzInputNumberComponent, i1.NgControlStatus, i1.FormControlName, i9.NzSwitchComponent, i10.NzSelectComponent, i10.NzOptionComponent, i11.NgTemplateOutlet, i11.NgSwitch, i11.NgSwitchCase], styles: ["[ceWidgetForm],ce-widget-form{display:block}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item,ce-widget-form .ant-collapse-ghost>.ant-collapse-item{border-bottom:1px solid #d9d9d9}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header{padding-left:20px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{left:5px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box{padding:8px}[ceWidgetForm] .ant-form-item-control-input-content,ce-widget-form .ant-form-item-control-input-content{align-items:center;display:flex}"], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WidgetFormComponent, [{
        type: Component,
        args: [{
                selector: 'ce-widget-form,[ceWidgetForm]',
                templateUrl: './widget-form.component.html',
                styleUrls: ['./widget-form.component.less'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i0.ComponentFactoryResolver }, { type: i2.EditorStore }]; }, { propsFormContainer: [{
            type: ViewChild,
            args: ['container']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9wcm9wZXJ0eS1mb3JtL2Zvcm1zL3dpZGdldC1mb3JtL3dpZGdldC1mb3JtLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3Byb3BlcnR5LWZvcm0vZm9ybXMvd2lkZ2V0LWZvcm0vd2lkZ2V0LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBaUQsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBMEIsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNrRmxDLDZCQUNFO0lBQUEsNEJBQU07SUFBQSxvQkFBSTtJQUFBLGlCQUFPO0lBQ25CLDBCQUFlOzs7SUFDZiw2QkFDRTtJQUFBLG1CQUNFO0lBREYsK0JBQ0U7SUFBQSwyQkFFUTtJQUNWLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUNmLDZCQUNFO0lBQUEsbUJBQ0U7SUFERiwrQkFDRTtJQUFBLDJCQUE4QjtJQUNoQyxpQkFBTTtJQUNSLDBCQUFlOzs7SUFDZiw2QkFDRTtJQUFBLG1CQUNFO0lBREYsK0JBQ0U7SUFBQSwyQkFFUTtJQUNWLGlCQUFNO0lBQ1IsMEJBQWU7OztJQXZCbkIsK0JBQ0U7SUFBQSxpQ0FDRTtJQUFBLHNHQUVlO0lBQ2Ysc0dBTWU7SUFDZixzR0FJZTtJQUNmLHNHQU1lO0lBQ2pCLDBCQUFlO0lBQ2pCLGlCQUFNOzs7SUF6QnVDLGlDQUFxQjtJQUNsRCxlQUE2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a0M7UUFBbEMsc0NBQWtDLHFGQUFBO1FBR2xDLGVBQWtDO1FBQWxDLHNDQUFrQyxxRkFBQTtRQUdsQyxlQUFrQztRQUFsQyxzQ0FBa0MscUZBQUE7O2tERDdHeEQsbUJBQW1CO2NBTi9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEM7K0hBR0Msa0JBQWtCO2tCQURqQixTQUFTO21CQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHVwZGF0ZU5vZGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWN0aW9ucy9ub2Rlcy5hY3Rpb25zJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBFZGl0b3JTdG9yZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3N0b3JlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZS13aWRnZXQtZm9ybSxbY2VXaWRnZXRGb3JtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi93aWRnZXQtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3dpZGdldC1mb3JtLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFdpZGdldEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdjb250YWluZXInKVxuICBwcm9wc0Zvcm1Db250YWluZXI6IFRlbXBsYXRlUmVmPGFueT47XG4gIGJvdW5kaW5nRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIGNmcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBwcml2YXRlIHN0b3JlOiBFZGl0b3JTdG9yZSkge1xuICAgIHRoaXMuYm91bmRpbmdGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGlkOiBbLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgbmFtZTogW10sXG4gICAgICB3aWR0aDogWywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGhlaWdodDogWywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICAgIGxlZnQ6IFssIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB0b3A6IFssIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICBsb2NrZWQ6IFtdLFxuICAgICAgcm90YXRlOiBbLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgekluZGV4OiBbLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgYm9yZGVyU3R5bGU6IFtdLFxuICAgICAgYm9yZGVyV2lkdGg6IFtdLFxuICAgICAgYm9yZGVyQ29sb3I6IFtdLFxuICAgICAgYm9yZGVyUmFkaXVzOiBbXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogW10sXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFtdLFxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogW10sXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFtdLFxuICAgICAgYmFja2dyb3VuZFNpemU6IFtdLFxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoc2VsZWN0ZWQpID0+IHNlbGVjdGVkLnNpemUgPT09IDEpLFxuICAgICAgICBtYXAoKHNlbGVjdGVkKSA9PiBbLi4uc2VsZWN0ZWRdWzBdKSxcbiAgICAgICAgc3dpdGNoTWFwKChpZCkgPT4gdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ub2Rlcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBpZCkpKSxcbiAgICAgICAgZmlsdGVyKChub2RlKSA9PiAhIW5vZGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChub2RlKSA9PiB7XG4gICAgICAgIHRoaXMuYm91bmRpbmdGb3JtR3JvdXAucGF0Y2hWYWx1ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICAuLi5ub2RlLFxuICAgICAgICAgICAgd2lkdGg6IE1hdGgucm91bmQobm9kZS53aWR0aCksXG4gICAgICAgICAgICBoZWlnaHQ6IE1hdGgucm91bmQobm9kZS5oZWlnaHQpLFxuICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZChub2RlLmxlZnQpLFxuICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKG5vZGUudG9wKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgZW1pdEV2ZW50OiBmYWxzZSB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB0aGlzLmJvdW5kaW5nRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlcykgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh1cGRhdGVOb2RlcyhbdmFsdWVzXSkpO1xuICAgIH0pO1xuICB9XG59XG4iLCI8bnotY29sbGFwc2UgW256Qm9yZGVyZWRdPVwiZmFsc2VcIiBuekdob3N0IG56QWNjb3JkaW9uIG56U2l6ZT1cInNtYWxsXCI+XG4gIDxuei1jb2xsYXBzZS1wYW5lbCBuekhlYWRlcj1cIuWkluWMheWbtOebkuWxnuaAp1wiIG56QWN0aXZlPlxuICAgIDxkaXY+XG4gICAgICA8aDU+5bC65a+4PC9oNT5cbiAgICAgIDxmb3JtIG56LWZvcm0gbnpMYXlvdXQ9XCJpbmxpbmVcIiBbZm9ybUdyb3VwXT1cImJvdW5kaW5nRm9ybUdyb3VwXCI+XG4gICAgICAgIDxuei1yb3cgbnpHdXR0ZXI9XCI4XCI+XG4gICAgICAgICAgPG56LWNvbCBuelNwYW49XCIxMlwiPlxuICAgICAgICAgICAgPG56LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1rdWFuZHVcIj48L2k+XG4gICAgICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgPG56LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIG56U2l6ZT1cInNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwid2lkdGhcIj48L256LWlucHV0LW51bWJlcj5cbiAgICAgICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgICAgICA8bnotZm9ybS1pdGVtPlxuICAgICAgICAgICAgICA8bnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWdhb2R1XCI+PC9pPlxuICAgICAgICAgICAgICA8L256LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cImhlaWdodFwiPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgICAgICA8L256LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICA8L256LXJvdz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxoNT7kvY3nva48L2g1PlxuICAgICAgPGZvcm0gbnotZm9ybSBuekxheW91dD1cImlubGluZVwiIFtmb3JtR3JvdXBdPVwiYm91bmRpbmdGb3JtR3JvdXBcIj5cbiAgICAgICAgPG56LXJvdyBuekd1dHRlcj1cIjhcIj5cbiAgICAgICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgICAgICA8bnotZm9ybS1pdGVtPlxuICAgICAgICAgICAgICA8bnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWxlZnRcIj48L2k+XG4gICAgICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgPG56LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIG56U2l6ZT1cInNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwibGVmdFwiPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgICAgICA8L256LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTJcIj5cbiAgICAgICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxuei1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpJY29uZm9udD1cImljb24tdG9wXCI+PC9pPlxuICAgICAgICAgICAgICA8L256LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cInRvcFwiPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgICAgICA8L256LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgICAgIDwvbnotY29sPlxuICAgICAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTJcIj5cbiAgICAgICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgICAgIDxuei1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpIG56LWljb24gbnpUeXBlPVwicm90YXRlLXJpZ2h0XCI+IDwvaT5cbiAgICAgICAgICAgICAgPC9uei1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgICA8bnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgICAgIDxuei1pbnB1dC1udW1iZXIgbnpTaXplPVwic21hbGxcIiBmb3JtQ29udHJvbE5hbWU9XCJyb3RhdGVcIj48L256LWlucHV0LW51bWJlcj5cbiAgICAgICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgICAgICA8bnotZm9ybS1pdGVtPlxuICAgICAgICAgICAgICA8bnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aSBuei1pY29uIG56VHlwZT1cImxvY2tcIj4gPC9pPlxuICAgICAgICAgICAgICA8L256LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPG56LXN3aXRjaCBmb3JtQ29udHJvbE5hbWU9XCJsb2NrZWRcIj48L256LXN3aXRjaD5cbiAgICAgICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgICAgICA8L256LWNvbD5cbiAgICAgICAgPC9uei1yb3c+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8aDU+6L655qGGPC9oNT5cbiAgICAgIDxmb3JtIG56LWZvcm0gbnpMYXlvdXQ9XCJpbmxpbmVcIiBbZm9ybUdyb3VwXT1cImJvdW5kaW5nRm9ybUdyb3VwXCI+XG4gICAgICAgIDxuei1yb3cgbnpHdXR0ZXI9XCI4XCI+XG4gICAgICAgICAgPG56LWNvbCBuelNwYW49XCIyNFwiPlxuICAgICAgICAgICAgPG56LWZvcm0taXRlbT5cbiAgICAgICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICAgICAgPGkgbnotaWNvbiBuelR5cGU9XCJib3JkZXItb3V0ZXJcIj48L2k+XG4gICAgICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgICAgPG56LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2JvcmRlclN0eWxlVHBsIGxldC1zZWxlY3RlZD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGgtMTAwXCIgW3N0eWxlLndpZHRoLnB4XT1cIjQwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInNlbGVjdGVkLm56VmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbm9uZSdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPm5vbmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2Rhc2hlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmctaWNvblwiIHZpZXdCb3g9XCIwIDAgNDAgMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCAxaDVWMEgwdjF6bTkgMGg1VjBIOXYxem0xMCAwaDVWMGgtNXYxem05IDBoNVYwaC01djF6bTEwIDBoNVYwaC01djF6bTkgMGg1VjBoLTV2MXptOSAwaDVWMGgtNXYxem0xMCAwaDVWMGgtNXYxem05IDBoNVYwaC01djF6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidzb2xpZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmctaWNvblwiIHZpZXdCb3g9XCIwIDAgNDAgMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTAgMGg4MHYxSDB6XCI+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RvdHRlZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJzdmctaWNvblwiIHZpZXdCb3g9XCIwIDAgNDAgMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMCAxaDFWMEgwdjF6bTQgMGgxVjBINHYxem00IDBoMVYwSDh2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXptNCAwaDFWMGgtMXYxem00IDBoMVYwaC0xdjF6bTQgMGgxVjBoLTF2MXpcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8bnotc2VsZWN0IG56U2l6ZT1cInNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwiYm9yZGVyU3R5bGVcIiBbbnpDdXN0b21UZW1wbGF0ZV09XCJib3JkZXJTdHlsZVRwbFwiPlxuICAgICAgICAgICAgICAgICAgPG56LW9wdGlvbiBuelZhbHVlPVwibm9uZVwiIG56TGFiZWw9XCJub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJib3JkZXJTdHlsZVRwbDsgY29udGV4dDogeyAkaW1wbGljaXQ6IHsgbnpWYWx1ZTogJ25vbmUnIH0gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJkYXNoZWRcIiBuekxhYmVsPVwiZGFzaGVkXCIgbnpDdXN0b21Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYm9yZGVyU3R5bGVUcGw7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB7IG56VmFsdWU6ICdkYXNoZWQnIH0gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJzb2xpZFwiIG56TGFiZWw9XCJzb2xpZFwiIG56Q3VzdG9tQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImJvcmRlclN0eWxlVHBsOyBjb250ZXh0OiB7ICRpbXBsaWNpdDogeyBuelZhbHVlOiAnc29saWQnIH0gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8bnotb3B0aW9uIG56VmFsdWU9XCJkb3R0ZWRcIiBuekxhYmVsPVwiZG90dGVkXCIgbnpDdXN0b21Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiYm9yZGVyU3R5bGVUcGw7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiB7IG56VmFsdWU6ICdkb3R0ZWQnIH0gfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uei1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uei1zZWxlY3Q+XG4gICAgICAgICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgPC9uei1mb3JtLWl0ZW0+XG4gICAgICAgICAgPC9uei1jb2w+XG4gICAgICAgIDwvbnotcm93PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L256LWNvbGxhcHNlLXBhbmVsPlxuICA8bnotY29sbGFwc2UtcGFuZWwgbnpIZWFkZXI9XCLnu4Tku7blsZ7mgKdcIj5cbiAgICA8bmctdGVtcGxhdGUgI2NvbnRhaW5lcj48L25nLXRlbXBsYXRlPlxuICA8L256LWNvbGxhcHNlLXBhbmVsPlxuPC9uei1jb2xsYXBzZT5cbiJdfQ==