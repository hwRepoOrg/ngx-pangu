import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/pipes";
function CanvasBackgroundComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 1);
    i0.ɵɵpipe(1, "nzSanitizer");
    i0.ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", i0.ɵɵpipeBind2(1, 1, i0.ɵɵpipeBind1(2, 4, ctx_r0.backgroundImage$), "url"), i0.ɵɵsanitizeUrl);
} }
export class CanvasBackgroundComponent {
    constructor(store) {
        this.store = store;
        this.backgroundColor$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundColor);
        this.backgroundImage$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundImage);
    }
}
CanvasBackgroundComponent.ɵfac = function CanvasBackgroundComponent_Factory(t) { return new (t || CanvasBackgroundComponent)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
CanvasBackgroundComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasBackgroundComponent, selectors: [["ce-canvas-background"], ["", "ceCanvasBackground", ""]], decls: 4, vars: 7, consts: [[3, "ngIf"], ["alt", "", 3, "src"]], template: function CanvasBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, CanvasBackgroundComponent_ng_template_2_Template, 3, 6, "ng-template", 0);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("background-color", i0.ɵɵpipeBind1(1, 3, ctx.backgroundColor$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 5, ctx.backgroundImage$));
    } }, directives: [i2.NgIf], pipes: [i2.AsyncPipe, i3.NzSanitizerPipe], styles: ["ce-canvas-background{display:block;left:0;overflow:hidden;position:absolute;top:0}ce-canvas-background,ce-canvas-background>div{height:100%;width:100%}ce-canvas-background img{height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CanvasBackgroundComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-background,[ceCanvasBackground]',
                templateUrl: 'canvas-background.component.html',
                styleUrls: ['canvas-background.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWJhY2tncm91bmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYW52YXMtYmFja2dyb3VuZC9jYW52YXMtYmFja2dyb3VuZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9jYW52YXMtYmFja2dyb3VuZC9jYW52YXMtYmFja2dyb3VuZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNFbEYseUJBQ0Y7Ozs7O0lBRE8sa0hBQXFEOztBRFU5RCxNQUFNLE9BQU8seUJBQXlCO0lBR3BDLFlBQW9CLEtBQTBCO1FBQTFCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7O2tHQU5VLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDWnRDLDJCQUNFOztRQUFBLDBGQUVjOztRQUNoQixpQkFBTTs7UUFKRCw4RUFBbUQ7UUFDekMsZUFBaUM7UUFBakMsaUVBQWlDOztrRERXbkMseUJBQXlCO2NBUHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkNBQTJDO2dCQUNyRCxXQUFXLEVBQUUsa0NBQWtDO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZS1jYW52YXMtYmFja2dyb3VuZCxbY2VDYW52YXNCYWNrZ3JvdW5kXScsXG4gIHRlbXBsYXRlVXJsOiAnY2FudmFzLWJhY2tncm91bmQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FudmFzLWJhY2tncm91bmQuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhbnZhc0JhY2tncm91bmRDb21wb25lbnQge1xuICBwdWJsaWMgYmFja2dyb3VuZENvbG9yJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwdWJsaWMgYmFja2dyb3VuZEltYWdlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBFZGl0b3JTdG9yZTxJU3RvcmU+KSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IkID0gdGhpcy5zdG9yZS5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiBzdGF0ZS5jYW52YXNCYWNrZ3JvdW5kLmJhY2tncm91bmRDb2xvcik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kSW1hZ2UkID0gdGhpcy5zdG9yZS5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiBzdGF0ZS5jYW52YXNCYWNrZ3JvdW5kLmJhY2tncm91bmRJbWFnZSk7XG4gIH1cbn1cbiIsIjxkaXYgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiYmFja2dyb3VuZENvbG9yJCB8IGFzeW5jXCI+XG4gIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJiYWNrZ3JvdW5kSW1hZ2UkIHwgYXN5bmNcIj5cbiAgICA8aW1nIFtzcmNdPVwiYmFja2dyb3VuZEltYWdlJCB8IGFzeW5jIHwgbnpTYW5pdGl6ZXI6ICd1cmwnXCIgYWx0PVwiXCIgLz5cbiAgPC9uZy10ZW1wbGF0ZT5cbjwvZGl2PlxuIl19