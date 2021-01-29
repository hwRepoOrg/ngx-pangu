import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "@angular/common";
export class CanvasGridComponent {
    constructor(store) {
        this.store = store;
        const scale$ = this.store.selectDifferent((state) => state.canvasPosition.scale);
        this.childDPath$ = scale$.pipe(map((scale) => this.getPath(10, scale)));
        this.parentDPath$ = scale$.pipe(map((scale) => this.getPath(50, scale)));
        this.childWidth$ = scale$.pipe(map((scale) => 10 * scale));
        this.parentWidth$ = scale$.pipe(map((scale) => 50 * scale));
    }
    getPath(size, scale) {
        return `M ${size * scale || 0} 0 L 0 0 0 ${size * scale || 0}`;
    }
}
CanvasGridComponent.ɵfac = function CanvasGridComponent_Factory(t) { return new (t || CanvasGridComponent)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
CanvasGridComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CanvasGridComponent, selectors: [["ce-canvas-grid"]], decls: 16, vars: 24, consts: [["data-html2canvas-ignore", "", "width", "100%", "height", "100%", 1, "grid"], ["id", "smallGrid", "patternUnits", "userSpaceOnUse"], ["fill", "none", "stroke", "rgba(207, 207, 207, 0.8)", "stroke-width", "1"], ["id", "grid", "patternUnits", "userSpaceOnUse"], ["fill", "url(#smallGrid)"], ["fill", "none", "stroke", "rgba(186, 186, 186, 1)", "stroke-width", "1"], ["width", "100%", "height", "100%", "fill", "url(#grid)"]], template: function CanvasGridComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(0, "svg", 0);
        i0.ɵɵelementStart(1, "defs");
        i0.ɵɵelementStart(2, "pattern", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵpipe(4, "async");
        i0.ɵɵelement(5, "path", 2);
        i0.ɵɵpipe(6, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "pattern", 3);
        i0.ɵɵpipe(8, "async");
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelement(10, "rect", 4);
        i0.ɵɵpipe(11, "async");
        i0.ɵɵpipe(12, "async");
        i0.ɵɵelement(13, "path", 5);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(15, "rect", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("width", i0.ɵɵpipeBind1(3, 8, ctx.childWidth$))("height", i0.ɵɵpipeBind1(4, 10, ctx.childWidth$));
        i0.ɵɵadvance(3);
        i0.ɵɵattribute("d", i0.ɵɵpipeBind1(6, 12, ctx.childDPath$));
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("width", i0.ɵɵpipeBind1(8, 14, ctx.parentWidth$))("height", i0.ɵɵpipeBind1(9, 16, ctx.parentWidth$));
        i0.ɵɵadvance(3);
        i0.ɵɵattribute("width", i0.ɵɵpipeBind1(11, 18, ctx.parentWidth$))("height", i0.ɵɵpipeBind1(12, 20, ctx.parentWidth$));
        i0.ɵɵadvance(3);
        i0.ɵɵattribute("d", i0.ɵɵpipeBind1(14, 22, ctx.parentDPath$));
    } }, pipes: [i2.AsyncPipe], styles: ["ce-canvas-grid{display:block;height:100%;left:0;position:absolute;top:0;width:100%}ce-canvas-grid .grid{border-bottom:1px solid #cfcfcf;border-right:1px solid #cfcfcf;left:0;position:absolute;top:0;z-index:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CanvasGridComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-grid',
                templateUrl: 'canvas-grid.component.html',
                styleUrls: ['canvas-grid.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FudmFzLWdyaWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jYW52YXMtZ3JpZC9jYW52YXMtZ3JpZC5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9jYW52YXMtZ3JpZC9jYW52YXMtZ3JpZC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVdyQyxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLFlBQW9CLEtBQTBCO1FBQTFCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzVDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNELE9BQU8sQ0FBQyxJQUFZLEVBQUUsS0FBYTtRQUNqQyxPQUFPLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLGNBQWMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqRSxDQUFDOztzRkFkVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ2JoQyxtQkFDRTtRQURGLDhCQUNFO1FBQUEsNEJBQ0U7UUFBQSxrQ0FDRTs7O1FBQUEsMEJBQTJHOztRQUM3RyxpQkFBVTtRQUNWLGtDQUNFOzs7UUFBQSwyQkFBNkc7OztRQUM3RywyQkFBMEc7O1FBQzVHLGlCQUFVO1FBQ1osaUJBQU87UUFDUCwyQkFBMEQ7UUFDNUQsaUJBQU07O1FBVHNCLGVBQWtDO1FBQWxDLDhEQUFrQyxrREFBQTtRQUNsRCxlQUE4QjtRQUE5QiwyREFBOEI7UUFFbkIsZUFBbUM7UUFBbkMsZ0VBQW1DLG1EQUFBO1FBQzlDLGVBQW1DO1FBQW5DLGlFQUFtQyxvREFBQTtRQUNuQyxlQUErQjtRQUEvQiw2REFBK0I7O2tERE05QixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2dCQUN6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJU3RvcmUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLWNhbnZhcy1ncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICdjYW52YXMtZ3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYW52YXMtZ3JpZC5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FudmFzR3JpZENvbXBvbmVudCB7XG4gIHB1YmxpYyBjaGlsZERQYXRoJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwdWJsaWMgcGFyZW50RFBhdGgkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHB1YmxpYyBjaGlsZFdpZHRoJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBwdWJsaWMgcGFyZW50V2lkdGgkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IEVkaXRvclN0b3JlPElTdG9yZT4pIHtcbiAgICBjb25zdCBzY2FsZSQgPSB0aGlzLnN0b3JlLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLmNhbnZhc1Bvc2l0aW9uLnNjYWxlKTtcbiAgICB0aGlzLmNoaWxkRFBhdGgkID0gc2NhbGUkLnBpcGUobWFwKChzY2FsZSkgPT4gdGhpcy5nZXRQYXRoKDEwLCBzY2FsZSkpKTtcbiAgICB0aGlzLnBhcmVudERQYXRoJCA9IHNjYWxlJC5waXBlKG1hcCgoc2NhbGUpID0+IHRoaXMuZ2V0UGF0aCg1MCwgc2NhbGUpKSk7XG4gICAgdGhpcy5jaGlsZFdpZHRoJCA9IHNjYWxlJC5waXBlKG1hcCgoc2NhbGUpID0+IDEwICogc2NhbGUpKTtcbiAgICB0aGlzLnBhcmVudFdpZHRoJCA9IHNjYWxlJC5waXBlKG1hcCgoc2NhbGUpID0+IDUwICogc2NhbGUpKTtcbiAgfVxuICBnZXRQYXRoKHNpemU6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBNICR7c2l6ZSAqIHNjYWxlIHx8IDB9IDAgTCAwIDAgMCAke3NpemUgKiBzY2FsZSB8fCAwfWA7XG4gIH1cbn1cbiIsIjxzdmcgZGF0YS1odG1sMmNhbnZhcy1pZ25vcmUgY2xhc3M9XCJncmlkXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPlxuICA8ZGVmcz5cbiAgICA8cGF0dGVybiBpZD1cInNtYWxsR3JpZFwiIFthdHRyLndpZHRoXT1cImNoaWxkV2lkdGgkIHwgYXN5bmNcIiBbYXR0ci5oZWlnaHRdPVwiY2hpbGRXaWR0aCQgfCBhc3luY1wiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG4gICAgICA8cGF0aCBbYXR0ci5kXT1cImNoaWxkRFBhdGgkIHwgYXN5bmNcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJnYmEoMjA3LCAyMDcsIDIwNywgMC44KVwiIHN0cm9rZS13aWR0aD1cIjFcIj48L3BhdGg+XG4gICAgPC9wYXR0ZXJuPlxuICAgIDxwYXR0ZXJuIGlkPVwiZ3JpZFwiIFthdHRyLndpZHRoXT1cInBhcmVudFdpZHRoJCB8IGFzeW5jXCIgW2F0dHIuaGVpZ2h0XT1cInBhcmVudFdpZHRoJCB8IGFzeW5jXCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cbiAgICAgIDxyZWN0IFthdHRyLndpZHRoXT1cInBhcmVudFdpZHRoJCB8IGFzeW5jXCIgW2F0dHIuaGVpZ2h0XT1cInBhcmVudFdpZHRoJCB8IGFzeW5jXCIgZmlsbD1cInVybCgjc21hbGxHcmlkKVwiPjwvcmVjdD5cbiAgICAgIDxwYXRoIFthdHRyLmRdPVwicGFyZW50RFBhdGgkIHwgYXN5bmNcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cInJnYmEoMTg2LCAxODYsIDE4NiwgMSlcIiBzdHJva2Utd2lkdGg9XCIxXCI+PC9wYXRoPlxuICAgIDwvcGF0dGVybj5cbiAgPC9kZWZzPlxuICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cInVybCgjZ3JpZClcIj48L3JlY3Q+XG48L3N2Zz5cbiJdfQ==