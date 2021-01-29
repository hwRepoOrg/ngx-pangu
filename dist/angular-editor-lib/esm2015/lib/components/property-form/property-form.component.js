import { ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { CanvasFormsComponent } from './forms/canvas-forms/canvas-forms.component';
import { WidgetFormComponent } from './forms/widget-form/widget-form.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@angular/common";
const _c0 = ["instance"];
function PropertyFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
export class PropertyFormComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.formComponent$ = this.store
            .select((state) => state.selected.size)
            .pipe(map((size) => (size === 1 ? WidgetFormComponent : CanvasFormsComponent)));
    }
}
PropertyFormComponent.ɵfac = function PropertyFormComponent_Factory(t) { return new (t || PropertyFormComponent)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
PropertyFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: PropertyFormComponent, selectors: [["ce-property-form"], ["", "cePropertyForm", ""]], viewQuery: function PropertyFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.instance = _t.first);
    } }, decls: 2, vars: 3, consts: [[4, "ngComponentOutlet"]], template: function PropertyFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, PropertyFormComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(1, 1, ctx.formComponent$));
    } }, directives: [i2.NgComponentOutlet], pipes: [i2.AsyncPipe], styles: ["[cePropertyForm],ce-property-form{display:block;margin:-12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PropertyFormComponent, [{
        type: Component,
        args: [{
                selector: 'ce-property-form,[cePropertyForm]',
                templateUrl: './property-form.component.html',
                styleUrls: ['./property-form.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, { instance: [{
            type: ViewChild,
            args: ['instance']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHktZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Byb3BlcnR5LWZvcm0vcHJvcGVydHktZm9ybS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9wcm9wZXJ0eS1mb3JtL3Byb3BlcnR5LWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekcsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7Ozs7SUNMaEYsd0JBQXlFOztBRGN6RSxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQW1CLEtBQWtCO1FBQWxCLFVBQUssR0FBTCxLQUFLLENBQWE7SUFBRyxDQUFDO0lBRXpDLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLO2FBQzdCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEYsQ0FBQzs7MEZBVlUscUJBQXFCOzBEQUFyQixxQkFBcUI7Ozs7OztRQ2RsQyx3RkFBeUU7OztRQUExRCw0RUFBeUM7O2tERGMzQyxxQkFBcUI7Y0FQakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OERBSUMsUUFBUTtrQkFEUCxTQUFTO21CQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgQ2FudmFzRm9ybXNDb21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL2NhbnZhcy1mb3Jtcy9jYW52YXMtZm9ybXMuY29tcG9uZW50JztcbmltcG9ydCB7IFdpZGdldEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2Zvcm1zL3dpZGdldC1mb3JtL3dpZGdldC1mb3JtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLXByb3BlcnR5LWZvcm0sW2NlUHJvcGVydHlGb3JtXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9wZXJ0eS1mb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvcGVydHktZm9ybS5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZm9ybUNvbXBvbmVudCQ6IE9ic2VydmFibGU8YW55PjtcbiAgQFZpZXdDaGlsZCgnaW5zdGFuY2UnKVxuICBpbnN0YW5jZTogYW55O1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IEVkaXRvclN0b3JlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybUNvbXBvbmVudCQgPSB0aGlzLnN0b3JlXG4gICAgICAuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUuc2VsZWN0ZWQuc2l6ZSlcbiAgICAgIC5waXBlKG1hcCgoc2l6ZSkgPT4gKHNpemUgPT09IDEgPyBXaWRnZXRGb3JtQ29tcG9uZW50IDogQ2FudmFzRm9ybXNDb21wb25lbnQpKSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiZm9ybUNvbXBvbmVudCQgfCBhc3luY1wiPjwvbmctY29udGFpbmVyPlxuIl19