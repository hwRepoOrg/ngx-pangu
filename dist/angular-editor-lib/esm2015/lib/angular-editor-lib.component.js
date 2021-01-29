import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { clearBordered, clearSelected, setBorderedNodes, setSelectedNodes, updateCanvasPosition } from './actions';
import { EditorStore } from './services/store.service';
import * as i0 from "@angular/core";
import * as i1 from "./services/store.service";
import * as i2 from "./directives/draggable.directive";
import * as i3 from "./directives/selector.directive";
import * as i4 from "./directives/no-zoom-area.directive";
import * as i5 from "./components/canvas-background/canvas-background.component";
import * as i6 from "./components/canvas-grid/canvas-grid.component";
import * as i7 from "./directives/zoom-area.directive";
import * as i8 from "./components/bordered-area/bordered-area.component";
import * as i9 from "./components/resize-handle/resize-handle.component";
import * as i10 from "@angular/common";
import * as i11 from "./components/panel/panel.component";
const _c0 = ["container"];
function AngularEditorLibComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r2.selectorRect.x, "px")("top", ctx_r2.selectorRect.y, "px")("width", ctx_r2.selectorRect.width, "px")("height", ctx_r2.selectorRect.height, "px");
} }
function AngularEditorLibComponent_ng_container_32_ce_panel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ce-panel", 16);
} if (rf & 2) {
    const panel_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("panel", panel_r4);
} }
function AngularEditorLibComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AngularEditorLibComponent_ng_container_32_ce_panel_1_Template, 1, 1, "ce-panel", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", panel_r4.show);
} }
const _c1 = [[["", "toolbar", ""]]];
const _c2 = ["[toolbar]"];
export class AngularEditorLibComponent {
    constructor(store) {
        this.store = store;
        this.subscription = new Subscription();
        this.startPoints = [];
        this.selectorRect = null;
        this.nodesRectSnapshot = null;
        this.nodeIdList = null;
        this.store
            .select((state) => state.canvasPosition)
            .subscribe((canvasPosition) => {
            this.canvasPosition = canvasPosition;
            this.matrix = `translate3d(${this.canvasPosition.left}px,${this.canvasPosition.top}px,0)`;
        });
        this.store.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
        this.refLineState$ = this.store.selectDifferent((state) => state.refLineState);
    }
    set state(state) {
        var _a;
        (_a = this.store) === null || _a === void 0 ? void 0 : _a.setState((oldState) => (Object.assign(Object.assign({}, oldState), state)));
    }
    ngAfterViewInit() {
        this.listenScaleEvent();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    panelsTrackByFn(_i, panel) {
        return `${panel.key}_${panel.show.toString()}`;
    }
    dragStart(ev) {
        this.startPoints = [ev.clientX, ev.clientY, this.canvasPosition.left, this.canvasPosition.top];
    }
    dragging(ev) {
        if (this.startPoints) {
            const [sx, sy, left, top] = this.startPoints;
            const [mx, my] = [ev.clientX - sx, ev.clientY - sy];
            this.store.dispatch(updateCanvasPosition({ left: left + mx, top: top + my }));
        }
    }
    dragEnd() {
        this.startPoints = null;
    }
    listenScaleEvent() {
        const scaleEle = this.containerEleRef.nativeElement;
        this.subscription.add(fromEvent(scaleEle, 'wheel')
            .pipe(filter((e) => e.ctrlKey))
            .subscribe((e) => {
            e.preventDefault();
            e.stopPropagation();
            const containerBox = scaleEle.getBoundingClientRect();
            const wheelDelta = (e.wheelDelta / 120 || -e.deltaY / 3) * 0.05;
            const [x, y] = [e.clientX - containerBox.left, e.clientY - containerBox.top];
            if (this.canvasPosition.scale + wheelDelta >= 0.2) {
                this.store.dispatch(updateCanvasPosition({
                    scale: this.canvasPosition.scale + wheelDelta,
                    left: (this.canvasPosition.left - x) * (wheelDelta / this.canvasPosition.scale) + this.canvasPosition.left,
                    top: (this.canvasPosition.top - y) * (wheelDelta / this.canvasPosition.scale) + this.canvasPosition.top,
                }));
            }
        }));
    }
    selectorStart() {
        this.clearSelectAndBorder();
        const boxRect = this.containerEleRef.nativeElement.getBoundingClientRect();
        this.nodesRectSnapshot = new Map();
        this.nodes
            .filter((node) => !node.locked)
            .forEach((node) => {
            var _a;
            const rect = (_a = document.querySelector(`#box-item-${node.id}`)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
            if (rect) {
                const { width, height, left, top } = rect;
                this.nodesRectSnapshot.set(node.id, { width, height, left: left - boxRect.left, top: top - boxRect.top });
            }
        });
    }
    selectorMoving(rect) {
        this.selectorRect = rect;
        this.nodeIdList = [];
        this.nodesRectSnapshot.forEach((item, id) => {
            if (isInBound(item, this.selectorRect)) {
                this.nodeIdList.push(id);
            }
        });
        this.store.dispatch(setBorderedNodes(this.nodeIdList));
        this.store.dispatch(setSelectedNodes(this.nodeIdList));
    }
    selectorEnd() {
        this.nodeIdList = [];
        this.selectorRect = null;
        this.nodesRectSnapshot = null;
    }
    clearSelectAndBorder() {
        this.store.dispatch(clearBordered());
        this.store.dispatch(clearSelected());
    }
}
AngularEditorLibComponent.ɵfac = function AngularEditorLibComponent_Factory(t) { return new (t || AngularEditorLibComponent)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
AngularEditorLibComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AngularEditorLibComponent, selectors: [["ce-editor"]], viewQuery: function AngularEditorLibComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.containerEleRef = _t.first);
    } }, inputs: { state: "state" }, exportAs: ["ceEditor"], features: [i0.ɵɵProvidersFeature([EditorStore])], ngContentSelectors: _c2, decls: 34, vars: 60, consts: [[1, "col", "p-0", "d-flex"], ["ceDraggable", "", "ceUseSpace", "", "ceSelector", "", 1, "canvas-container", 3, "ceSelectorDisabled", "ceOnStart", "ceOnMove", "ceOnStop", "ceOnSelectorStart", "ceOnSelectorMoving", "ceOnSelectorStop"], ["ceDrag", "ceDraggable", "container", ""], [1, "canvas-content"], ["ceNoZoomArea", ""], ["ceZoomArea", ""], ["cx", "", 1, "ref-line", "y"], ["cy", "", 1, "ref-line", "x"], ["tx", "", 1, "ref-line", "y"], ["bx", "", 1, "ref-line", "y"], ["ly", "", 1, "ref-line", "x"], ["ry", "", 1, "ref-line", "x"], ["class", "selector", 3, "left", "top", "width", "height", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selector"], [3, "panel", 4, "ngIf"], [3, "panel"]], template: function AngularEditorLibComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵprojection(0);
        i0.ɵɵelementStart(1, "div", 0);
        i0.ɵɵelementStart(2, "div", 1, 2);
        i0.ɵɵlistener("ceOnStart", function AngularEditorLibComponent_Template_div_ceOnStart_2_listener($event) { return ctx.dragStart($event); })("ceOnMove", function AngularEditorLibComponent_Template_div_ceOnMove_2_listener($event) { return ctx.dragging($event); })("ceOnStop", function AngularEditorLibComponent_Template_div_ceOnStop_2_listener() { return ctx.dragEnd(); })("ceOnSelectorStart", function AngularEditorLibComponent_Template_div_ceOnSelectorStart_2_listener() { return ctx.selectorStart(); })("ceOnSelectorMoving", function AngularEditorLibComponent_Template_div_ceOnSelectorMoving_2_listener($event) { return ctx.selectorMoving($event); })("ceOnSelectorStop", function AngularEditorLibComponent_Template_div_ceOnSelectorStop_2_listener() { return ctx.selectorEnd(); });
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelement(7, "ce-canvas-background");
        i0.ɵɵelement(8, "ce-canvas-grid");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "div", 5);
        i0.ɵɵelementStart(10, "div", 4);
        i0.ɵɵelement(11, "ce-bordered-area");
        i0.ɵɵelement(12, "ce-resize-handle");
        i0.ɵɵelement(13, "div", 6);
        i0.ɵɵpipe(14, "async");
        i0.ɵɵpipe(15, "async");
        i0.ɵɵelement(16, "div", 7);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵpipe(18, "async");
        i0.ɵɵelement(19, "div", 8);
        i0.ɵɵpipe(20, "async");
        i0.ɵɵpipe(21, "async");
        i0.ɵɵelement(22, "div", 9);
        i0.ɵɵpipe(23, "async");
        i0.ɵɵpipe(24, "async");
        i0.ɵɵelement(25, "div", 10);
        i0.ɵɵpipe(26, "async");
        i0.ɵɵpipe(27, "async");
        i0.ɵɵelement(28, "div", 11);
        i0.ɵɵpipe(29, "async");
        i0.ɵɵpipe(30, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(31, AngularEditorLibComponent_div_31_Template, 1, 8, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(32, AngularEditorLibComponent_ng_container_32_Template, 2, 1, "ng-container", 13);
        i0.ɵɵpipe(33, "async");
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        let tmp_9_0 = null;
        let tmp_10_0 = null;
        let tmp_11_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_15_0 = null;
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("start-drag", _r0.spaceKeyDown)("dragging", ctx.startPoints);
        i0.ɵɵproperty("ceSelectorDisabled", _r0.spaceKeyDown);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("transform", ctx.matrix);
        i0.ɵɵadvance(8);
        i0.ɵɵstyleProp("top", ((tmp_4_0 = i0.ɵɵpipeBind1(14, 34, ctx.refLineState$)) == null ? null : tmp_4_0.cx == null ? null : tmp_4_0.cx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_5_0 = i0.ɵɵpipeBind1(15, 36, ctx.refLineState$)) == null ? null : tmp_5_0.cx == null ? null : tmp_5_0.cx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_6_0 = i0.ɵɵpipeBind1(17, 38, ctx.refLineState$)) == null ? null : tmp_6_0.cy == null ? null : tmp_6_0.cy.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_7_0 = i0.ɵɵpipeBind1(18, 40, ctx.refLineState$)) == null ? null : tmp_7_0.cy == null ? null : tmp_7_0.cy.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("top", ((tmp_8_0 = i0.ɵɵpipeBind1(20, 42, ctx.refLineState$)) == null ? null : tmp_8_0.tx == null ? null : tmp_8_0.tx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_9_0 = i0.ɵɵpipeBind1(21, 44, ctx.refLineState$)) == null ? null : tmp_9_0.tx == null ? null : tmp_9_0.tx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("top", ((tmp_10_0 = i0.ɵɵpipeBind1(23, 46, ctx.refLineState$)) == null ? null : tmp_10_0.bx == null ? null : tmp_10_0.bx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_11_0 = i0.ɵɵpipeBind1(24, 48, ctx.refLineState$)) == null ? null : tmp_11_0.bx == null ? null : tmp_11_0.bx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_12_0 = i0.ɵɵpipeBind1(26, 50, ctx.refLineState$)) == null ? null : tmp_12_0.ly == null ? null : tmp_12_0.ly.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_13_0 = i0.ɵɵpipeBind1(27, 52, ctx.refLineState$)) == null ? null : tmp_13_0.ly == null ? null : tmp_13_0.ly.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_14_0 = i0.ɵɵpipeBind1(29, 54, ctx.refLineState$)) == null ? null : tmp_14_0.ry == null ? null : tmp_14_0.ry.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_15_0 = i0.ɵɵpipeBind1(30, 56, ctx.refLineState$)) == null ? null : tmp_15_0.ry == null ? null : tmp_15_0.ry.state);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.selectorRect);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(33, 58, ctx.store.panels$))("ngForTrackBy", ctx.panelsTrackByFn);
    } }, directives: [i2.DraggableDirective, i3.SelectorDirective, i4.NoZoomAreaDirective, i5.CanvasBackgroundComponent, i6.CanvasGridComponent, i7.ZoomAreaDirective, i8.BorderedAreaComponent, i9.ResizeHandleComponent, i10.NgIf, i10.NgForOf, i11.PanelComponent], pipes: [i10.AsyncPipe], styles: ["@import \"styles/bootstrap.css\";[nz-button]~[nz-button],[nz-icon]~[nz-icon]{margin-left:.5rem}.svg-icon{width:80px}.svg-icon>*{fill:currentColor}[ceNoZoomArea]{display:block;pointer-events:none}[ceNoZoomArea],[ceZoomArea]{position:absolute}.ant-tree .ant-tree-treenode{align-items:center}ce-editor{bottom:0;display:flex;flex-direction:column;height:100vh;left:0;overflow:hidden;position:absolute;right:0;top:0;width:100vw}ce-editor .left-side{width:300px}ce-editor .canvas-container{background-color:#f0f0f0;flex:1;overflow:hidden;position:relative}ce-editor .canvas-container.start-drag{cursor:grab}ce-editor .canvas-container.start-drag>*{pointer-events:none}ce-editor .canvas-container.start-drag.dragging{cursor:grabbing}ce-editor .canvas-container .canvas-content{position:absolute}ce-editor .canvas-container .selector{background-color:rgba(24,144,255,.3);border:1px solid #1890ff;box-sizing:border-box;position:absolute}ce-editor .canvas-container .ref-line{background-color:#fa8c16;display:none;opacity:.8;position:absolute;z-index:999999999999}ce-editor .canvas-container .ref-line.active{display:inline-block}ce-editor .canvas-container .ref-line.x{bottom:0;height:100%;top:0;width:1px}ce-editor .canvas-container .ref-line.y{height:1px;left:0;right:0;width:100%}ce-editor .aside{border:solid #f0f0f0;border-width:0 1px 0 0;display:flex}ce-editor .aside ul{list-style:none;margin:0;padding:0}ce-editor .aside ul li{align-items:center;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;margin:0;padding:3px 0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AngularEditorLibComponent, [{
        type: Component,
        args: [{
                selector: 'ce-editor',
                templateUrl: 'angular-editor-lib.component.html',
                styleUrls: ['angular-editor-lib.less'],
                encapsulation: ViewEncapsulation.None,
                providers: [EditorStore],
                changeDetection: ChangeDetectionStrategy.OnPush,
                exportAs: 'ceEditor',
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, { state: [{
            type: Input
        }], containerEleRef: [{
            type: ViewChild,
            args: ['container', { read: ElementRef, static: true }]
        }] }); })();
function isInBound(rect, bound) {
    return (rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZWRpdG9yLWxpYi5jb21wb25lbnQudHMiLCJsaWIvYW5ndWxhci1lZGl0b3ItbGliLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDK0RuRCwwQkFPTzs7O0lBSkwsbURBQWdDLG9DQUFBLDBDQUFBLDRDQUFBOzs7SUFTcEMsK0JBQXdEOzs7SUFBM0IsZ0NBQWU7OztJQUQ5Qyw2QkFDRTtJQUFBLHFHQUF3RDtJQUMxRCwwQkFBZTs7O0lBREYsZUFBZ0I7SUFBaEIsb0NBQWdCOzs7O0FEL0Q3QixNQUFNLE9BQU8seUJBQXlCO0lBZ0JwQyxZQUFtQixLQUFrQjtRQUFsQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBVDdCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuQyxnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUUzQixpQkFBWSxHQUFrQixJQUFJLENBQUM7UUFHbEMsc0JBQWlCLEdBQWtDLElBQUksQ0FBQztRQUN4RCxlQUFVLEdB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S0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ25KLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIFZpZXdDaGlsZCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjbGVhckJvcmRlcmVkLCBjbGVhclNlbGVjdGVkLCBzZXRCb3JkZXJlZE5vZGVzLCBzZXRTZWxlY3RlZE5vZGVzLCB1cGRhdGVDYW52YXNQb3NpdGlvbiB9IGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgeyBJU2VsZWN0b3JSZWN0IH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NlbGVjdG9yLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBFZGl0b3JTdG9yZSB9IGZyb20gJy4vc2VydmljZXMvc3RvcmUuc2VydmljZSc7XG5pbXBvcnQgeyBJQ2FudmFzUG9zaXRpb24sIElOb2RlLCBJUGFuZWwsIElSZWZMaW5lRGlyZWN0aW9uLCBJUmVmTGluZVN0YXRlLCBJU3RvcmUgfSBmcm9tICcuL3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2UtZWRpdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICdhbmd1bGFyLWVkaXRvci1saWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYW5ndWxhci1lZGl0b3ItbGliLmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbRWRpdG9yU3RvcmVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZXhwb3J0QXM6ICdjZUVkaXRvcicsXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJFZGl0b3JMaWJDb21wb25lbnQ8VCA9IGFueT4ge1xuICBASW5wdXQoKVxuICBzZXQgc3RhdGUoc3RhdGU6IFBhcnRpYWw8SVN0b3JlPFQ+Pikge1xuICAgIHRoaXMuc3RvcmU/LnNldFN0YXRlKChvbGRTdGF0ZSkgPT4gKHsgLi4ub2xkU3RhdGUsIC4uLnN0YXRlIH0pKTtcbiAgfVxuICBAVmlld0NoaWxkKCdjb250YWluZXInLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBwcml2YXRlIGNvbnRhaW5lckVsZVJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBwdWJsaWMgY2FudmFzUG9zaXRpb246IElDYW52YXNQb3NpdGlvbjtcbiAgcHVibGljIHN0YXJ0UG9pbnRzOiBudW1iZXJbXSA9IFtdO1xuICBwdWJsaWMgbWF0cml4OiBzdHJpbmc7XG4gIHB1YmxpYyBzZWxlY3RvclJlY3Q6IElTZWxlY3RvclJlY3QgPSBudWxsO1xuICBwdWJsaWMgbm9kZXM6IElOb2RlW107XG4gIHB1YmxpYyByZWZMaW5lU3RhdGUkOiBPYnNlcnZhYmxlPHsgW1AgaW4gSVJlZkxpbmVEaXJlY3Rpb25dOiBJUmVmTGluZVN0YXRlIH0+O1xuICBwcml2YXRlIG5vZGVzUmVjdFNuYXBzaG90OiBNYXA8c3RyaW5nLCBQYXJ0aWFsPERPTVJlY3Q+PiA9IG51bGw7XG4gIHByaXZhdGUgbm9kZUlkTGlzdDogc3RyaW5nW10gPSBudWxsO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgc3RvcmU6IEVkaXRvclN0b3JlKSB7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdCgoc3RhdGUpID0+IHN0YXRlLmNhbnZhc1Bvc2l0aW9uKVxuICAgICAgLnN1YnNjcmliZSgoY2FudmFzUG9zaXRpb24pID0+IHtcbiAgICAgICAgdGhpcy5jYW52YXNQb3NpdGlvbiA9IGNhbnZhc1Bvc2l0aW9uO1xuICAgICAgICB0aGlzLm1hdHJpeCA9IGB0cmFuc2xhdGUzZCgke3RoaXMuY2FudmFzUG9zaXRpb24ubGVmdH1weCwke3RoaXMuY2FudmFzUG9zaXRpb24udG9wfXB4LDApYDtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdG9yZS5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5ub2Rlcykuc3Vic2NyaWJlKChub2RlcykgPT4gKHRoaXMubm9kZXMgPSBub2RlcykpO1xuICAgIHRoaXMucmVmTGluZVN0YXRlJCA9IHRoaXMuc3RvcmUuc2VsZWN0RGlmZmVyZW50KChzdGF0ZSkgPT4gc3RhdGUucmVmTGluZVN0YXRlKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RlblNjYWxlRXZlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwYW5lbHNUcmFja0J5Rm4oX2k6IG51bWJlciwgcGFuZWw6IElQYW5lbDxhbnk+KSB7XG4gICAgcmV0dXJuIGAke3BhbmVsLmtleX1fJHtwYW5lbC5zaG93LnRvU3RyaW5nKCl9YDtcbiAgfVxuXG4gIGRyYWdTdGFydChldjogUG9pbnRlckV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFBvaW50cyA9IFtldi5jbGllbnRYLCBldi5jbGllbnRZLCB0aGlzLmNhbnZhc1Bvc2l0aW9uLmxlZnQsIHRoaXMuY2FudmFzUG9zaXRpb24udG9wXTtcbiAgfVxuXG4gIGRyYWdnaW5nKGV2OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdGFydFBvaW50cykge1xuICAgICAgY29uc3QgW3N4LCBzeSwgbGVmdCwgdG9wXSA9IHRoaXMuc3RhcnRQb2ludHM7XG4gICAgICBjb25zdCBbbXgsIG15XSA9IFtldi5jbGllbnRYIC0gc3gsIGV2LmNsaWVudFkgLSBzeV07XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZUNhbnZhc1Bvc2l0aW9uKHsgbGVmdDogbGVmdCArIG14LCB0b3A6IHRvcCArIG15IH0pKTtcbiAgICB9XG4gIH1cblxuICBkcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRQb2ludHMgPSBudWxsO1xuICB9XG5cbiAgbGlzdGVuU2NhbGVFdmVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBzY2FsZUVsZSA9IHRoaXMuY29udGFpbmVyRWxlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgZnJvbUV2ZW50PFdoZWVsRXZlbnQgJiB7IHdoZWVsRGVsdGE6IG51bWJlciB9PihzY2FsZUVsZSwgJ3doZWVsJylcbiAgICAgICAgLnBpcGUoZmlsdGVyKChlKSA9PiBlLmN0cmxLZXkpKVxuICAgICAgICAuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyQm94ID0gc2NhbGVFbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qgd2hlZWxEZWx0YSA9IChlLndoZWVsRGVsdGEgLyAxMjAgfHwgLWUuZGVsdGFZIC8gMykgKiAwLjA1O1xuICAgICAgICAgIGNvbnN0IFt4LCB5XSA9IFtlLmNsaWVudFggLSBjb250YWluZXJCb3gubGVmdCwgZS5jbGllbnRZIC0gY29udGFpbmVyQm94LnRvcF07XG4gICAgICAgICAgaWYgKHRoaXMuY2FudmFzUG9zaXRpb24uc2NhbGUgKyB3aGVlbERlbHRhID49IDAuMikge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgICAgdXBkYXRlQ2FudmFzUG9zaXRpb24oe1xuICAgICAgICAgICAgICAgIHNjYWxlOiB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlICsgd2hlZWxEZWx0YSxcbiAgICAgICAgICAgICAgICBsZWZ0OiAodGhpcy5jYW52YXNQb3NpdGlvbi5sZWZ0IC0geCkgKiAod2hlZWxEZWx0YSAvIHRoaXMuY2FudmFzUG9zaXRpb24uc2NhbGUpICsgdGhpcy5jYW52YXNQb3NpdGlvbi5sZWZ0LFxuICAgICAgICAgICAgICAgIHRvcDogKHRoaXMuY2FudmFzUG9zaXRpb24udG9wIC0geSkgKiAod2hlZWxEZWx0YSAvIHRoaXMuY2FudmFzUG9zaXRpb24uc2NhbGUpICsgdGhpcy5jYW52YXNQb3NpdGlvbi50b3AsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2VsZWN0b3JTdGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2VsZWN0QW5kQm9yZGVyKCk7XG4gICAgY29uc3QgYm94UmVjdCA9IHRoaXMuY29udGFpbmVyRWxlUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5ub2Rlc1JlY3RTbmFwc2hvdCA9IG5ldyBNYXA8c3RyaW5nLCBQYXJ0aWFsPERPTVJlY3Q+PigpO1xuICAgIHRoaXMubm9kZXNcbiAgICAgIC5maWx0ZXIoKG5vZGUpID0+ICFub2RlLmxvY2tlZClcbiAgICAgIC5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYm94LWl0ZW0tJHtub2RlLmlkfWApPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKHJlY3QpIHtcbiAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQsIGxlZnQsIHRvcCB9ID0gcmVjdDtcbiAgICAgICAgICB0aGlzLm5vZGVzUmVjdFNuYXBzaG90LnNldChub2RlLmlkLCB7IHdpZHRoLCBoZWlnaHQsIGxlZnQ6IGxlZnQgLSBib3hSZWN0LmxlZnQsIHRvcDogdG9wIC0gYm94UmVjdC50b3AgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0b3JNb3ZpbmcocmVjdDogSVNlbGVjdG9yUmVjdCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0b3JSZWN0ID0gcmVjdDtcbiAgICB0aGlzLm5vZGVJZExpc3QgPSBbXTtcbiAgICB0aGlzLm5vZGVzUmVjdFNuYXBzaG90LmZvckVhY2goKGl0ZW0sIGlkKSA9PiB7XG4gICAgICBpZiAoaXNJbkJvdW5kKGl0ZW0sIHRoaXMuc2VsZWN0b3JSZWN0KSkge1xuICAgICAgICB0aGlzLm5vZGVJZExpc3QucHVzaChpZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChzZXRCb3JkZXJlZE5vZGVzPFQ+KHRoaXMubm9kZUlkTGlzdCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2V0U2VsZWN0ZWROb2Rlcyh0aGlzLm5vZGVJZExpc3QpKTtcbiAgfVxuXG4gIHNlbGVjdG9yRW5kKCk6IHZvaWQge1xuICAgIHRoaXMubm9kZUlkTGlzdCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0b3JSZWN0ID0gbnVsbDtcbiAgICB0aGlzLm5vZGVzUmVjdFNuYXBzaG90ID0gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTZWxlY3RBbmRCb3JkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChjbGVhckJvcmRlcmVkPFQ+KCkpO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJTZWxlY3RlZDxUPigpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luQm91bmQocmVjdDogUGFydGlhbDxET01SZWN0PiwgYm91bmQ6IElTZWxlY3RvclJlY3QpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICByZWN0LmxlZnQgPj0gYm91bmQueCAmJiByZWN0LnRvcCA+PSBib3VuZC55ICYmIHJlY3QubGVmdCArIHJlY3Qud2lkdGggPD0gYm91bmQueCArIGJvdW5kLndpZHRoICYmIHJlY3QudG9wICsgcmVjdC5oZWlnaHQgPD0gYm91bmQueSArIGJvdW5kLmhlaWdodFxuICApO1xufVxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Rvb2xiYXJdXCI+PC9uZy1jb250ZW50PlxuPGRpdiBjbGFzcz1cImNvbCBwLTAgZC1mbGV4XCI+XG4gIDxkaXZcbiAgICAjY2VEcmFnPVwiY2VEcmFnZ2FibGVcIlxuICAgICNjb250YWluZXJcbiAgICBjbGFzcz1cImNhbnZhcy1jb250YWluZXJcIlxuICAgIGNlRHJhZ2dhYmxlXG4gICAgY2VVc2VTcGFjZVxuICAgIFtjbGFzcy5zdGFydC1kcmFnXT1cImNlRHJhZy5zcGFjZUtleURvd25cIlxuICAgIFtjbGFzcy5kcmFnZ2luZ109XCJzdGFydFBvaW50c1wiXG4gICAgKGNlT25TdGFydCk9XCJkcmFnU3RhcnQoJGV2ZW50KVwiXG4gICAgKGNlT25Nb3ZlKT1cImRyYWdnaW5nKCRldmVudClcIlxuICAgIChjZU9uU3RvcCk9XCJkcmFnRW5kKClcIlxuICAgIGNlU2VsZWN0b3JcbiAgICBbY2VTZWxlY3RvckRpc2FibGVkXT1cImNlRHJhZy5zcGFjZUtleURvd25cIlxuICAgIChjZU9uU2VsZWN0b3JTdGFydCk9XCJzZWxlY3RvclN0YXJ0KClcIlxuICAgIChjZU9uU2VsZWN0b3JNb3ZpbmcpPVwic2VsZWN0b3JNb3ZpbmcoJGV2ZW50KVwiXG4gICAgKGNlT25TZWxlY3RvclN0b3ApPVwic2VsZWN0b3JFbmQoKVwiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiY2FudmFzLWNvbnRlbnRcIiBbc3R5bGUudHJhbnNmb3JtXT1cIm1hdHJpeFwiPlxuICAgICAgPGRpdiBjZU5vWm9vbUFyZWE+XG4gICAgICAgIDxjZS1jYW52YXMtYmFja2dyb3VuZD48L2NlLWNhbnZhcy1iYWNrZ3JvdW5kPlxuICAgICAgICA8Y2UtY2FudmFzLWdyaWQ+PC9jZS1jYW52YXMtZ3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjZVpvb21BcmVhPlxuICAgICAgICA8IS0tIDxjZS1jYW52YXM+PC9jZS1jYW52YXM+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNlTm9ab29tQXJlYT5cbiAgICAgICAgPGNlLWJvcmRlcmVkLWFyZWE+PC9jZS1ib3JkZXJlZC1hcmVhPlxuICAgICAgICA8Y2UtcmVzaXplLWhhbmRsZT48L2NlLXJlc2l6ZS1oYW5kbGU+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjeFxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LmN4Py5zdGF0ZVwiXG4gICAgICAgICAgW3N0eWxlLnRvcC5weF09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8uY3g/LnBvc2l0aW9uICogY2FudmFzUG9zaXRpb24uc2NhbGVcIlxuICAgICAgICAgIGNsYXNzPVwicmVmLWxpbmUgeVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGN5XG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8uY3k/LnN0YXRlXCJcbiAgICAgICAgICBbc3R5bGUubGVmdC5weF09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8uY3k/LnBvc2l0aW9uICogY2FudmFzUG9zaXRpb24uc2NhbGVcIlxuICAgICAgICAgIGNsYXNzPVwicmVmLWxpbmUgeFwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHR4XG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8udHg/LnN0YXRlXCJcbiAgICAgICAgICBbc3R5bGUudG9wLnB4XT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy50eD8ucG9zaXRpb24gKiBjYW52YXNQb3NpdGlvbi5zY2FsZVwiXG4gICAgICAgICAgY2xhc3M9XCJyZWYtbGluZSB5XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgYnhcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5ieD8uc3RhdGVcIlxuICAgICAgICAgIFtzdHlsZS50b3AucHhdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LmJ4Py5wb3NpdGlvbiAqIGNhbnZhc1Bvc2l0aW9uLnNjYWxlXCJcbiAgICAgICAgICBjbGFzcz1cInJlZi1saW5lIHlcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBseVxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/Lmx5Py5zdGF0ZVwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/Lmx5Py5wb3NpdGlvbiAqIGNhbnZhc1Bvc2l0aW9uLnNjYWxlXCJcbiAgICAgICAgICBjbGFzcz1cInJlZi1saW5lIHhcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICByeVxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LnJ5Py5zdGF0ZVwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LnJ5Py5wb3NpdGlvbiAqIGNhbnZhc1Bvc2l0aW9uLnNjYWxlXCJcbiAgICAgICAgICBjbGFzcz1cInJlZi1saW5lIHhcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInNlbGVjdG9yXCJcbiAgICAgICpuZ0lmPVwic2VsZWN0b3JSZWN0XCJcbiAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cInNlbGVjdG9yUmVjdC54XCJcbiAgICAgIFtzdHlsZS50b3AucHhdPVwic2VsZWN0b3JSZWN0LnlcIlxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cInNlbGVjdG9yUmVjdC53aWR0aFwiXG4gICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInNlbGVjdG9yUmVjdC5oZWlnaHRcIlxuICAgID48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFuZWwgb2Ygc3RvcmUucGFuZWxzJCB8IGFzeW5jOyB0cmFja0J5OiBwYW5lbHNUcmFja0J5Rm5cIj5cbiAgPGNlLXBhbmVsICpuZ0lmPVwicGFuZWwuc2hvd1wiIFtwYW5lbF09XCJwYW5lbFwiPjwvY2UtcGFuZWw+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==