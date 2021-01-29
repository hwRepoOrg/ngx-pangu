import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { updateCanvasBackground, updateCanvasPosition, updateCanvasSize } from '../../../../actions';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../../../../services/store.service";
import * as i3 from "ng-zorro-antd/form";
import * as i4 from "ng-zorro-antd/grid";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/input-number";
import * as i8 from "ng-zorro-antd/input";
import * as i9 from "@angular/common";
import * as i10 from "ng-zorro-antd/pipes";
function CanvasFormsComponent_img_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 20);
    i0.ɵɵpipe(1, "nzSanitizer");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("max-width", 100, "%");
    i0.ɵɵproperty("src", i0.ɵɵpipeBind2(1, 3, ctx_r0.canvasBackgroundFormGroup.controls["backgroundImage"].value, "url"), i0.ɵɵsanitizeUrl);
} }
export class CanvasFormsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.subscription = new Subscription();
        this.canvasSizeFormGroup = this.fb.group({
            width: [0, [Validators.required, Validators.min(0)]],
            height: [0, [Validators.required, Validators.min(0)]],
        });
        this.canvasPositionFormGroup = this.fb.group({
            left: [0, [Validators.required]],
            top: [0, [Validators.required]],
            scale: [1, [Validators.min(0.01), Validators.required]],
        });
        this.canvasBackgroundFormGroup = this.fb.group({
            backgroundColor: ['#ffffff'],
            backgroundImage: [null],
        });
        this.subscription.add(this.store
            .selectDifferent((state) => state.canvasSize)
            .subscribe((state) => {
            this.canvasSizeFormGroup.patchValue(state, { emitEvent: false });
        }));
        this.subscription.add(this.store
            .selectDifferent((state) => state.canvasPosition)
            .subscribe((state) => {
            var _a;
            this.canvasPositionFormGroup.patchValue({ left: Math.round(state.left), top: Math.round(state.top), scale: (_a = state.scale) === null || _a === void 0 ? void 0 : _a.toFixed(2) }, { emitEvent: false });
        }));
        this.subscription.add(this.store
            .selectDifferent((state) => state.canvasBackground)
            .subscribe((state) => {
            this.canvasBackgroundFormGroup.patchValue(state, { emitEvent: false });
        }));
    }
    ngOnInit() {
        this.canvasSizeFormGroup.valueChanges.subscribe((value) => {
            this.store.dispatch(updateCanvasSize(value));
        });
        this.canvasPositionFormGroup.valueChanges.subscribe((value) => {
            this.store.dispatch(updateCanvasPosition(value));
        });
        this.canvasBackgroundFormGroup.valueChanges.subscribe((value) => {
            console.log(value);
            this.store.dispatch(updateCanvasBackground(value));
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CanvasFormsComponent.ɵfac = function CanvasFormsComponent_Factory(t) { return new (t || CanvasFormsComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.EditorStore)); };
CanvasFormsComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasFormsComponent, selectors: [["ce-canvas-forms"], ["", "ceCanvasForms", ""]], decls: 61, vars: 4, consts: [["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], [1, "mt-2"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzIconfont", "icon-scale"], ["nzSize", "small", "formControlName", "scale"], ["nz-icon", "", "nzIconfont", "icon-color"], ["type", "color", "nz-input", "", "nzSize", "small", "formControlName", "backgroundColor"], ["nz-icon", "", "nzIconfont", "icon-image"], ["type", "text", "nz-input", "", "nzSize", "small", "formControlName", "backgroundImage"], [1, "mt-1"], [3, "max-width", "src", 4, "ngIf"], [3, "src"]], template: function CanvasFormsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "\u753B\u5E03\u5C3A\u5BF8");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "form", 0);
        i0.ɵɵelementStart(4, "nz-row", 1);
        i0.ɵɵelementStart(5, "nz-col", 2);
        i0.ɵɵelementStart(6, "nz-form-item");
        i0.ɵɵelementStart(7, "nz-form-label");
        i0.ɵɵelement(8, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "nz-form-control");
        i0.ɵɵelement(10, "nz-input-number", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "nz-col", 2);
        i0.ɵɵelementStart(12, "nz-form-item");
        i0.ɵɵelementStart(13, "nz-form-label");
        i0.ɵɵelement(14, "i", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "nz-form-control");
        i0.ɵɵelement(16, "nz-input-number", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 7);
        i0.ɵɵelementStart(18, "h4");
        i0.ɵɵtext(19, "\u753B\u5E03\u4F4D\u7F6E");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "form", 0);
        i0.ɵɵelementStart(21, "nz-row", 1);
        i0.ɵɵelementStart(22, "nz-col", 2);
        i0.ɵɵelementStart(23, "nz-form-item");
        i0.ɵɵelementStart(24, "nz-form-label");
        i0.ɵɵelement(25, "i", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "nz-form-control");
        i0.ɵɵelement(27, "nz-input-number", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "nz-col", 2);
        i0.ɵɵelementStart(29, "nz-form-item");
        i0.ɵɵelementStart(30, "nz-form-label");
        i0.ɵɵelement(31, "i", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "nz-form-control");
        i0.ɵɵelement(33, "nz-input-number", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "nz-col", 2);
        i0.ɵɵelementStart(35, "nz-form-item");
        i0.ɵɵelementStart(36, "nz-form-label");
        i0.ɵɵelement(37, "i", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "nz-form-control");
        i0.ɵɵelement(39, "nz-input-number", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(40, "div", 7);
        i0.ɵɵelementStart(41, "h4");
        i0.ɵɵtext(42, "\u753B\u5E03\u80CC\u666F");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(43, "form", 0);
        i0.ɵɵelementStart(44, "nz-row", 1);
        i0.ɵɵelementStart(45, "nz-col", 2);
        i0.ɵɵelementStart(46, "nz-form-item");
        i0.ɵɵelementStart(47, "nz-form-label");
        i0.ɵɵelement(48, "i", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(49, "nz-form-control");
        i0.ɵɵelement(50, "input", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(51, "nz-col", 2);
        i0.ɵɵelementStart(52, "nz-form-item");
        i0.ɵɵelementStart(53, "nz-form-label");
        i0.ɵɵelement(54, "i", 16);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(55, "nz-form-control");
        i0.ɵɵelement(56, "input", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(57, "h5", 18);
        i0.ɵɵtext(58, "\u80CC\u666F\u9884\u89C8");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(59, "div");
        i0.ɵɵtemplate(60, CanvasFormsComponent_img_60_Template, 2, 6, "img", 19);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.canvasSizeFormGroup);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("formGroup", ctx.canvasPositionFormGroup);
        i0.ɵɵadvance(23);
        i0.ɵɵproperty("formGroup", ctx.canvasBackgroundFormGroup);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("ngIf", ctx.canvasBackgroundFormGroup.controls["backgroundImage"].value);
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i3.NzFormDirective, i1.FormGroupDirective, i4.NzRowDirective, i4.NzColDirective, i3.NzFormItemComponent, i3.NzFormLabelComponent, i5.NzIconDirective, i6.ɵNzTransitionPatchDirective, i3.NzFormControlComponent, i7.NzInputNumberComponent, i1.NgControlStatus, i1.FormControlName, i8.NzInputDirective, i1.DefaultValueAccessor, i9.NgIf], pipes: [i10.NzSanitizerPipe], styles: ["[ceCanvasForms],ce-canvas-forms{display:block;padding:12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CanvasFormsComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-forms,[ceCanvasForms]',
                templateUrl: './canvas-forms.component.html',
                styleUrls: ['./canvas-forms.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.EditorStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWZvcm1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcHJvcGVydHktZm9ybS9mb3Jtcy9jYW52YXMtZm9ybXMvY2FudmFzLWZvcm1zLmNvbXBvbmVudC50cyIsImxpYi9jb21wb25lbnRzL3Byb3BlcnR5LWZvcm0vZm9ybXMvY2FudmFzLWZvcm1zL2NhbnZhcy1mb3Jtcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFxQixpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQTBCLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7SUMwRm5HLDBCQUtGOzs7O0lBSkkscUNBQXlCO0lBRXpCLHVJQUF3Rjs7QURuRjVGLE1BQU0sT0FBTyxvQkFBb0I7SUFLL0IsWUFBbUIsRUFBZSxFQUFTLEtBQWtCO1FBQTFDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBRHJELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdkMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFB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blN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdXBkYXRlQ2FudmFzQmFja2dyb3VuZCwgdXBkYXRlQ2FudmFzUG9zaXRpb24sIHVwZGF0ZUNhbnZhc1NpemUgfSBmcm9tICcuLi8uLi8uLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvc3RvcmUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLWNhbnZhcy1mb3JtcyxbY2VDYW52YXNGb3Jtc10nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FudmFzLWZvcm1zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FudmFzLWZvcm1zLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW52YXNGb3Jtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIGNhbnZhc1NpemVGb3JtR3JvdXA6IEZvcm1Hcm91cDtcbiAgcHVibGljIGNhbnZhc1Bvc2l0aW9uRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHB1YmxpYyBjYW52YXNCYWNrZ3JvdW5kRm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgc3RvcmU6IEVkaXRvclN0b3JlKSB7XG4gICAgdGhpcy5jYW52YXNTaXplRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICB3aWR0aDogWzAsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbigwKV1dLFxuICAgICAgaGVpZ2h0OiBbMCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluKDApXV0sXG4gICAgfSk7XG4gICAgdGhpcy5jYW52YXNQb3NpdGlvbkZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgbGVmdDogWzAsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgICB0b3A6IFswLCBbVmFsaWRhdG9ycy5yZXF1aXJlZF1dLFxuICAgICAgc2NhbGU6IFsxLCBbVmFsaWRhdG9ycy5taW4oMC4wMSksIFZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgICB0aGlzLmNhbnZhc0JhY2tncm91bmRGb3JtR3JvdXAgPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogWycjZmZmZmZmJ10sXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFtudWxsXSxcbiAgICB9KTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiBzdGF0ZS5jYW52YXNTaXplKVxuICAgICAgICAuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICAgIHRoaXMuY2FudmFzU2l6ZUZvcm1Hcm91cC5wYXRjaFZhbHVlKHN0YXRlLCB7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnN0b3JlXG4gICAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiBzdGF0ZS5jYW52YXNQb3NpdGlvbilcbiAgICAgICAgLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgICB0aGlzLmNhbnZhc1Bvc2l0aW9uRm9ybUdyb3VwLnBhdGNoVmFsdWUoXG4gICAgICAgICAgICB7IGxlZnQ6IE1hdGgucm91bmQoc3RhdGUubGVmdCksIHRvcDogTWF0aC5yb3VuZChzdGF0ZS50b3ApLCBzY2FsZTogc3RhdGUuc2NhbGU/LnRvRml4ZWQoMikgfSxcbiAgICAgICAgICAgIHsgZW1pdEV2ZW50OiBmYWxzZSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RvcmVcbiAgICAgICAgLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLmNhbnZhc0JhY2tncm91bmQpXG4gICAgICAgIC5zdWJzY3JpYmUoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgdGhpcy5jYW52YXNCYWNrZ3JvdW5kRm9ybUdyb3VwLnBhdGNoVmFsdWUoc3RhdGUsIHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYW52YXNTaXplRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUNhbnZhc1NpemUodmFsdWUpKTtcbiAgICB9KTtcbiAgICB0aGlzLmNhbnZhc1Bvc2l0aW9uRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUNhbnZhc1Bvc2l0aW9uKHZhbHVlKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jYW52YXNCYWNrZ3JvdW5kRm9ybUdyb3VwLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUNhbnZhc0JhY2tncm91bmQodmFsdWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxoND7nlLvluIPlsLrlr7g8L2g0PlxuICA8Zm9ybSBuei1mb3JtIG56TGF5b3V0PVwiaW5saW5lXCIgW2Zvcm1Hcm91cF09XCJjYW52YXNTaXplRm9ybUdyb3VwXCI+XG4gICAgPG56LXJvdyBuekd1dHRlcj1cIjhcIj5cbiAgICAgIDxuei1jb2wgbnpTcGFuPVwiMTJcIj5cbiAgICAgICAgPG56LWZvcm0taXRlbT5cbiAgICAgICAgICA8bnotZm9ybS1sYWJlbD5cbiAgICAgICAgICAgIDxpIG56LWljb24gbnpJY29uZm9udD1cImljb24ta3VhbmR1XCI+PC9pPlxuICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICA8bnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIndpZHRoXCI+PC9uei1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgPC9uei1jb2w+XG4gICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWdhb2R1XCI+PC9pPlxuICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICA8bnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cImhlaWdodFwiPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxuICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgIDwvbnotY29sPlxuICAgIDwvbnotcm93PlxuICA8L2Zvcm0+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJtdC0yXCI+XG4gIDxoND7nlLvluIPkvY3nva48L2g0PlxuICA8Zm9ybSBuei1mb3JtIG56TGF5b3V0PVwiaW5saW5lXCIgW2Zvcm1Hcm91cF09XCJjYW52YXNQb3NpdGlvbkZvcm1Hcm91cFwiPlxuICAgIDxuei1yb3cgbnpHdXR0ZXI9XCI4XCI+XG4gICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWxlZnRcIj48L2k+XG4gICAgICAgICAgPC9uei1mb3JtLWxhYmVsPlxuICAgICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIG56U2l6ZT1cInNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwibGVmdFwiPjwvbnotaW5wdXQtbnVtYmVyPlxuICAgICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxuICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgIDwvbnotY29sPlxuICAgICAgPG56LWNvbCBuelNwYW49XCIxMlwiPlxuICAgICAgICA8bnotZm9ybS1pdGVtPlxuICAgICAgICAgIDxuei1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi10b3BcIj48L2k+XG4gICAgICAgICAgPC9uei1mb3JtLWxhYmVsPlxuICAgICAgICAgIDxuei1mb3JtLWNvbnRyb2w+XG4gICAgICAgICAgICA8bnotaW5wdXQtbnVtYmVyIG56U2l6ZT1cInNtYWxsXCIgZm9ybUNvbnRyb2xOYW1lPVwidG9wXCI+PC9uei1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgPC9uei1jb2w+XG4gICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLXNjYWxlXCI+PC9pPlxuICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICA8bnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgPG56LWlucHV0LW51bWJlciBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cInNjYWxlXCI+PC9uei1pbnB1dC1udW1iZXI+XG4gICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgPC9uei1jb2w+XG4gICAgPC9uei1yb3c+XG4gIDwvZm9ybT5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm10LTJcIj5cbiAgPGg0PueUu+W4g+iDjOaZrzwvaDQ+XG4gIDxmb3JtIG56LWZvcm0gbnpMYXlvdXQ9XCJpbmxpbmVcIiBbZm9ybUdyb3VwXT1cImNhbnZhc0JhY2tncm91bmRGb3JtR3JvdXBcIj5cbiAgICA8bnotcm93IG56R3V0dGVyPVwiOFwiPlxuICAgICAgPG56LWNvbCBuelNwYW49XCIxMlwiPlxuICAgICAgICA8bnotZm9ybS1pdGVtPlxuICAgICAgICAgIDxuei1mb3JtLWxhYmVsPlxuICAgICAgICAgICAgPGkgbnotaWNvbiBuekljb25mb250PVwiaWNvbi1jb2xvclwiPjwvaT5cbiAgICAgICAgICA8L256LWZvcm0tbGFiZWw+XG4gICAgICAgICAgPG56LWZvcm0tY29udHJvbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY29sb3JcIiBuei1pbnB1dCBuelNpemU9XCJzbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cImJhY2tncm91bmRDb2xvclwiIC8+XG4gICAgICAgICAgPC9uei1mb3JtLWNvbnRyb2w+XG4gICAgICAgIDwvbnotZm9ybS1pdGVtPlxuICAgICAgPC9uei1jb2w+XG4gICAgICA8bnotY29sIG56U3Bhbj1cIjEyXCI+XG4gICAgICAgIDxuei1mb3JtLWl0ZW0+XG4gICAgICAgICAgPG56LWZvcm0tbGFiZWw+XG4gICAgICAgICAgICA8aSBuei1pY29uIG56SWNvbmZvbnQ9XCJpY29uLWltYWdlXCI+PC9pPlxuICAgICAgICAgIDwvbnotZm9ybS1sYWJlbD5cbiAgICAgICAgICA8bnotZm9ybS1jb250cm9sPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbnotaW5wdXQgbnpTaXplPVwic21hbGxcIiBmb3JtQ29udHJvbE5hbWU9XCJiYWNrZ3JvdW5kSW1hZ2VcIiAvPlxuICAgICAgICAgIDwvbnotZm9ybS1jb250cm9sPlxuICAgICAgICA8L256LWZvcm0taXRlbT5cbiAgICAgIDwvbnotY29sPlxuICAgIDwvbnotcm93PlxuICA8L2Zvcm0+XG48L2Rpdj5cbjxoNSBjbGFzcz1cIm10LTFcIj7og4zmma/pooTop4g8L2g1PlxuPGRpdj5cbiAgPGltZ1xuICAgIFtzdHlsZS5tYXgtd2lkdGguJV09XCIxMDBcIlxuICAgICpuZ0lmPVwiY2FudmFzQmFja2dyb3VuZEZvcm1Hcm91cC5jb250cm9sc1snYmFja2dyb3VuZEltYWdlJ10udmFsdWVcIlxuICAgIFtzcmNdPVwiY2FudmFzQmFja2dyb3VuZEZvcm1Hcm91cC5jb250cm9sc1snYmFja2dyb3VuZEltYWdlJ10udmFsdWUgfCBuelNhbml0aXplcjogJ3VybCdcIlxuICAvPlxuPC9kaXY+XG4iXX0=