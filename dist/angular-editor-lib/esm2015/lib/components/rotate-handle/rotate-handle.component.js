import { ChangeDetectionStrategy, Component, Optional, SkipSelf, ViewEncapsulation } from '@angular/core';
import { updateNodes } from '../../actions';
import * as i0 from "@angular/core";
import * as i1 from "../resize-handle/resize-handle.component";
import * as i2 from "../../services";
import * as i3 from "../../services/utils.service";
import * as i4 from "../../directives/draggable.directive";
export class RotateHandleComponent {
    constructor(parent, store, utils) {
        this.parent = parent;
        this.store = store;
        this.utils = utils;
        this.rotateSnapshot = null;
    }
    ngOnInit() {
        this.store.select((state) => state.selected).subscribe((selected) => (this.selected = selected));
        this.store.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
    }
    rotateStart(event) {
        event.stopPropagation();
        event.preventDefault();
        const rect = this.parent.eleRef.nativeElement.getBoundingClientRect().toJSON();
        this.rotateSnapshot = [
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            rect.left + rect.width / 2,
            rect.top + rect.height / 2 - 100,
            this.utils.getNodeById([...this.selected][0], this.nodes),
        ];
    }
    rotating(event) {
        if (this.rotateSnapshot) {
            const [cx, cy, sx, sy, node] = this.rotateSnapshot;
            const ex = event.clientX;
            const ey = event.clientY;
            const rotate = Math.round(this.utils.getRotate(cx, cy, sx, sy, ex, ey));
            this.store.dispatch(updateNodes([Object.assign(Object.assign({}, node), { rotate: rotate === 360 ? 0 : rotate })]));
        }
    }
    rotateStop() {
        this.rotateSnapshot = null;
    }
}
RotateHandleComponent.ɵfac = function RotateHandleComponent_Factory(t) { return new (t || RotateHandleComponent)(i0.ɵɵdirectiveInject(i1.ResizeHandleComponent, 12), i0.ɵɵdirectiveInject(i2.EditorStore), i0.ɵɵdirectiveInject(i3.CeUtilsService)); };
RotateHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: RotateHandleComponent, selectors: [["ce-rotate-handle"]], decls: 3, vars: 2, consts: [["ceDraggable", "", 1, "rotate", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["width", "14", "height", "14", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z", "fill-rule", "nonzero"]], template: function RotateHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("ceOnStart", function RotateHandleComponent_Template_div_ceOnStart_0_listener($event) { return ctx.rotateStart($event); })("ceOnMove", function RotateHandleComponent_Template_div_ceOnMove_0_listener($event) { return ctx.rotating($event); })("ceOnStop", function RotateHandleComponent_Template_div_ceOnStop_0_listener() { return ctx.rotateStop(); });
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(1, "svg", 1);
        i0.ɵɵelement(2, "path", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("cursor", ctx.rotateSnapshot && "grabbing");
    } }, directives: [i4.DraggableDirective], styles: [".rotate{align-items:center;cursor:grab;display:flex;height:18px;justify-content:center;left:50%;margin-left:-9px;pointer-events:auto;position:absolute;top:-26px;width:18px}.rotate path{fill:#1890ff}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RotateHandleComponent, [{
        type: Component,
        args: [{
                selector: 'ce-rotate-handle',
                templateUrl: 'rotate-handle.component.html',
                styleUrls: ['rotate-handle.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.ResizeHandleComponent, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: i2.EditorStore }, { type: i3.CeUtilsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3JvdGF0ZS1oYW5kbGUvcm90YXRlLWhhbmRsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9yb3RhdGUtaGFuZGxlL3JvdGF0ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxRQUFRLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztBQWE1QyxNQUFNLE9BQU8scUJBQXFCO0lBS2hDLFlBQTRDLE1BQTZCLEVBQVUsS0FBMEIsRUFBVSxLQUFxQjtRQUFoRyxXQUFNLEdBQU4sTUFBTSxDQUF1QjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFGckksbUJBQWMsR0FBNEMsSUFBSSxDQUFDO0lBRXlFLENBQUM7SUFFaEosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFtQjtRQUM3QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxHQUFHO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUMxRCxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFtQjtRQUMxQixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1lBQ25ELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDekIsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN6QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsaUNBQU0sSUFBSSxLQUFFLE1BQU0sRUFBRSxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBRyxDQUFDLENBQUMsQ0FBQztTQUN0RjtJQUNILENBQUM7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQzs7MEZBckNVLHFCQUFxQjswREFBckIscUJBQXFCO1FDZGxDLDhCQVFFO1FBTEEsNkdBQWEsdUJBQW1CLElBQUMsOEZBQ3JCLG9CQUFnQixJQURLLHdGQUVyQixnQkFBWSxJQUZTO1FBS2pDLG1CQUNFO1FBREYsOEJBQ0U7UUFBQSwwQkFHUTtRQUNWLGlCQUFNO1FBQ1IsaUJBQU07O1FBUkosMERBQTZDOztrRERRbEMscUJBQXFCO2NBUGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOztzQkFNYyxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0LCBPcHRpb25hbCwgU2tpcFNlbGYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyB1cGRhdGVOb2RlcyB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDZVV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSU5vZGUsIElTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcbmltcG9ydCB7IFJlc2l6ZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4uL3Jlc2l6ZS1oYW5kbGUvcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZS1yb3RhdGUtaGFuZGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdyb3RhdGUtaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3JvdGF0ZS1oYW5kbGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJvdGF0ZUhhbmRsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc2VsZWN0ZWQ6IFNldDxzdHJpbmc+O1xuICBwcml2YXRlIG5vZGVzOiBJTm9kZVtdO1xuICBwdWJsaWMgcm90YXRlU25hcHNob3Q6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyLCBudW1iZXIsIElOb2RlXSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHJpdmF0ZSBwYXJlbnQ6IFJlc2l6ZUhhbmRsZUNvbXBvbmVudCwgcHJpdmF0ZSBzdG9yZTogRWRpdG9yU3RvcmU8SVN0b3JlPiwgcHJpdmF0ZSB1dGlsczogQ2VVdGlsc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5zZWxlY3RlZCkuc3Vic2NyaWJlKChzZWxlY3RlZCkgPT4gKHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZCkpO1xuICAgIHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUubm9kZXMpLnN1YnNjcmliZSgobm9kZXMpID0+ICh0aGlzLm5vZGVzID0gbm9kZXMpKTtcbiAgfVxuXG4gIHJvdGF0ZVN0YXJ0KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHJlY3QgPSB0aGlzLnBhcmVudC5lbGVSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b0pTT04oKTtcbiAgICB0aGlzLnJvdGF0ZVNuYXBzaG90ID0gW1xuICAgICAgcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCAvIDIsXG4gICAgICByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IC8gMixcbiAgICAgIHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyLFxuICAgICAgcmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIgLSAxMDAsXG4gICAgICB0aGlzLnV0aWxzLmdldE5vZGVCeUlkKFsuLi50aGlzLnNlbGVjdGVkXVswXSwgdGhpcy5ub2RlcyksXG4gICAgXTtcbiAgfVxuXG4gIHJvdGF0aW5nKGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yb3RhdGVTbmFwc2hvdCkge1xuICAgICAgY29uc3QgW2N4LCBjeSwgc3gsIHN5LCBub2RlXSA9IHRoaXMucm90YXRlU25hcHNob3Q7XG4gICAgICBjb25zdCBleCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICBjb25zdCBleSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICBjb25zdCByb3RhdGUgPSBNYXRoLnJvdW5kKHRoaXMudXRpbHMuZ2V0Um90YXRlKGN4LCBjeSwgc3gsIHN5LCBleCwgZXkpKTtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2godXBkYXRlTm9kZXMoW3sgLi4ubm9kZSwgcm90YXRlOiByb3RhdGUgPT09IDM2MCA/IDAgOiByb3RhdGUgfV0pKTtcbiAgICB9XG4gIH1cblxuICByb3RhdGVTdG9wKCk6IHZvaWQge1xuICAgIHRoaXMucm90YXRlU25hcHNob3QgPSBudWxsO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwicm90YXRlXCJcbiAgY2VEcmFnZ2FibGVcbiAgKGNlT25TdGFydCk9XCJyb3RhdGVTdGFydCgkZXZlbnQpXCJcbiAgKGNlT25Nb3ZlKT1cInJvdGF0aW5nKCRldmVudClcIlxuICAoY2VPblN0b3ApPVwicm90YXRlU3RvcCgpXCJcbiAgW3N0eWxlLmN1cnNvcl09XCJyb3RhdGVTbmFwc2hvdCAmJiAnZ3JhYmJpbmcnXCJcbj5cbiAgPHN2ZyB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGhcbiAgICAgIGQ9XCJNMTAuNTM2IDMuNDY0QTUgNSAwIDEgMCAxMSAxMGwxLjQyNCAxLjQyNWE3IDcgMCAxIDEtLjQ3NS05LjM3NEwxMy42NTkuMzRBLjIuMiAwIDAgMSAxNCAuNDgzVjUuNWEuNS41IDAgMCAxLS41LjVIOC40ODNhLjIuMiAwIDAgMS0uMTQyLS4zNDFsMi4xOTUtMi4xOTV6XCJcbiAgICAgIGZpbGwtcnVsZT1cIm5vbnplcm9cIlxuICAgID48L3BhdGg+XG4gIDwvc3ZnPlxuPC9kaXY+XG4iXX0=