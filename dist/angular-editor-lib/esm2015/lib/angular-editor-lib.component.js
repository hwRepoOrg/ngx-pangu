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
import * as i8 from "./components/canvas/canvas.component";
import * as i9 from "./components/bordered-area/bordered-area.component";
import * as i10 from "./components/resize-handle/resize-handle.component";
import * as i11 from "@angular/common";
import * as i12 from "./components/panel/panel.component";
const _c0 = ["container"];
function AngularEditorLibComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", ctx_r2.selectorRect.x, "px")("top", ctx_r2.selectorRect.y, "px")("width", ctx_r2.selectorRect.width, "px")("height", ctx_r2.selectorRect.height, "px");
} }
function AngularEditorLibComponent_ng_container_33_ce_panel_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ce-panel", 16);
} if (rf & 2) {
    const panel_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("panel", panel_r4);
} }
function AngularEditorLibComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AngularEditorLibComponent_ng_container_33_ce_panel_1_Template, 1, 1, "ce-panel", 15);
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
    } }, inputs: { state: "state" }, exportAs: ["ceEditor"], features: [i0.ɵɵProvidersFeature([EditorStore])], ngContentSelectors: _c2, decls: 35, vars: 60, consts: [[1, "col", "p-0", "d-flex"], ["ceDraggable", "", "ceUseSpace", "", "ceSelector", "", 1, "canvas-container", 3, "ceSelectorDisabled", "ceOnStart", "ceOnMove", "ceOnStop", "ceOnSelectorStart", "ceOnSelectorMoving", "ceOnSelectorStop"], ["ceDrag", "ceDraggable", "container", ""], [1, "canvas-content"], ["ceNoZoomArea", ""], ["ceZoomArea", ""], ["cx", "", 1, "ref-line", "y"], ["cy", "", 1, "ref-line", "x"], ["tx", "", 1, "ref-line", "y"], ["bx", "", 1, "ref-line", "y"], ["ly", "", 1, "ref-line", "x"], ["ry", "", 1, "ref-line", "x"], ["class", "selector", 3, "left", "top", "width", "height", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selector"], [3, "panel", 4, "ngIf"], [3, "panel"]], template: function AngularEditorLibComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(9, "div", 5);
        i0.ɵɵelement(10, "ce-canvas");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 4);
        i0.ɵɵelement(12, "ce-bordered-area");
        i0.ɵɵelement(13, "ce-resize-handle");
        i0.ɵɵelement(14, "div", 6);
        i0.ɵɵpipe(15, "async");
        i0.ɵɵpipe(16, "async");
        i0.ɵɵelement(17, "div", 7);
        i0.ɵɵpipe(18, "async");
        i0.ɵɵpipe(19, "async");
        i0.ɵɵelement(20, "div", 8);
        i0.ɵɵpipe(21, "async");
        i0.ɵɵpipe(22, "async");
        i0.ɵɵelement(23, "div", 9);
        i0.ɵɵpipe(24, "async");
        i0.ɵɵpipe(25, "async");
        i0.ɵɵelement(26, "div", 10);
        i0.ɵɵpipe(27, "async");
        i0.ɵɵpipe(28, "async");
        i0.ɵɵelement(29, "div", 11);
        i0.ɵɵpipe(30, "async");
        i0.ɵɵpipe(31, "async");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(32, AngularEditorLibComponent_div_32_Template, 1, 8, "div", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(33, AngularEditorLibComponent_ng_container_33_Template, 2, 1, "ng-container", 13);
        i0.ɵɵpipe(34, "async");
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
        i0.ɵɵadvance(9);
        i0.ɵɵstyleProp("top", ((tmp_4_0 = i0.ɵɵpipeBind1(15, 34, ctx.refLineState$)) == null ? null : tmp_4_0.cx == null ? null : tmp_4_0.cx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_5_0 = i0.ɵɵpipeBind1(16, 36, ctx.refLineState$)) == null ? null : tmp_5_0.cx == null ? null : tmp_5_0.cx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_6_0 = i0.ɵɵpipeBind1(18, 38, ctx.refLineState$)) == null ? null : tmp_6_0.cy == null ? null : tmp_6_0.cy.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_7_0 = i0.ɵɵpipeBind1(19, 40, ctx.refLineState$)) == null ? null : tmp_7_0.cy == null ? null : tmp_7_0.cy.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("top", ((tmp_8_0 = i0.ɵɵpipeBind1(21, 42, ctx.refLineState$)) == null ? null : tmp_8_0.tx == null ? null : tmp_8_0.tx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_9_0 = i0.ɵɵpipeBind1(22, 44, ctx.refLineState$)) == null ? null : tmp_9_0.tx == null ? null : tmp_9_0.tx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("top", ((tmp_10_0 = i0.ɵɵpipeBind1(24, 46, ctx.refLineState$)) == null ? null : tmp_10_0.bx == null ? null : tmp_10_0.bx.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_11_0 = i0.ɵɵpipeBind1(25, 48, ctx.refLineState$)) == null ? null : tmp_11_0.bx == null ? null : tmp_11_0.bx.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_12_0 = i0.ɵɵpipeBind1(27, 50, ctx.refLineState$)) == null ? null : tmp_12_0.ly == null ? null : tmp_12_0.ly.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_13_0 = i0.ɵɵpipeBind1(28, 52, ctx.refLineState$)) == null ? null : tmp_13_0.ly == null ? null : tmp_13_0.ly.state);
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("left", ((tmp_14_0 = i0.ɵɵpipeBind1(30, 54, ctx.refLineState$)) == null ? null : tmp_14_0.ry == null ? null : tmp_14_0.ry.position) * ctx.canvasPosition.scale, "px");
        i0.ɵɵclassProp("active", (tmp_15_0 = i0.ɵɵpipeBind1(31, 56, ctx.refLineState$)) == null ? null : tmp_15_0.ry == null ? null : tmp_15_0.ry.state);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.selectorRect);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(34, 58, ctx.store.panels$))("ngForTrackBy", ctx.panelsTrackByFn);
    } }, directives: [i2.DraggableDirective, i3.SelectorDirective, i4.NoZoomAreaDirective, i5.CanvasBackgroundComponent, i6.CanvasGridComponent, i7.ZoomAreaDirective, i8.CanvasComponent, i9.BorderedAreaComponent, i10.ResizeHandleComponent, i11.NgIf, i11.NgForOf, i12.PanelComponent], pipes: [i11.AsyncPipe], styles: ["@import \"styles/bootstrap.css\";[nz-button]~[nz-button],[nz-icon]~[nz-icon]{margin-left:.5rem}.svg-icon{width:80px}.svg-icon>*{fill:currentColor}[ceNoZoomArea]{display:block;pointer-events:none}[ceNoZoomArea],[ceZoomArea]{position:absolute}.ant-tree .ant-tree-treenode{align-items:center}ce-editor{bottom:0;display:flex;flex-direction:column;height:100vh;left:0;overflow:hidden;position:absolute;right:0;top:0;width:100vw}ce-editor .left-side{width:300px}ce-editor .canvas-container{background-color:#f0f0f0;flex:1;overflow:hidden;position:relative}ce-editor .canvas-container.start-drag{cursor:grab}ce-editor .canvas-container.start-drag>*{pointer-events:none}ce-editor .canvas-container.start-drag.dragging{cursor:grabbing}ce-editor .canvas-container .canvas-content{position:absolute}ce-editor .canvas-container .selector{background-color:rgba(24,144,255,.3);border:1px solid #1890ff;box-sizing:border-box;position:absolute}ce-editor .canvas-container .ref-line{background-color:#fa8c16;display:none;opacity:.8;position:absolute;z-index:999999999999}ce-editor .canvas-container .ref-line.active{display:inline-block}ce-editor .canvas-container .ref-line.x{bottom:0;height:100%;top:0;width:1px}ce-editor .canvas-container .ref-line.y{height:1px;left:0;right:0;width:100%}ce-editor .aside{border:solid #f0f0f0;border-width:0 1px 0 0;display:flex}ce-editor .aside ul{list-style:none;margin:0;padding:0}ce-editor .aside ul li{align-items:center;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;margin:0;padding:3px 0;width:100%}"], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3ItbGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItZWRpdG9yLWxpYi5jb21wb25lbnQudHMiLCJsaWIvYW5ndWxhci1lZGl0b3ItbGliLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEgsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQytEbkQsMEJBT087OztJQUpMLG1EQUFnQyxvQ0FBQSwwQ0FBQSw0Q0FBQTs7O0lBU3BDLCtCQUF3RDs7O0lBQTNCLGdDQUFlOzs7SUFEOUMsNkJBQ0U7SUFBQSxxR0FBd0Q7SUFDMUQsMEJBQWU7OztJQURGLGVBQWdCO0lBQWhCLG9DQUFnQjs7OztBRC9EN0IsTUFBTSxPQUFPLHlCQUF5QjtJQWdCcEMsWUFBbUIsS0FBa0I7UUFBbEIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQVQ3QixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbkMsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFFM0IsaUJBQVksR0FBa0IsSUFBSSxDQUFDO1FBR2xDLHNCQUFpQixHQUFrQyxJQUFJLENBQUM7UUFDeEQsZUFBVSxH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R0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUNuSixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY2xlYXJCb3JkZXJlZCwgY2xlYXJTZWxlY3RlZCwgc2V0Qm9yZGVyZWROb2Rlcywgc2V0U2VsZWN0ZWROb2RlcywgdXBkYXRlQ2FudmFzUG9zaXRpb24gfSBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0IHsgSVNlbGVjdG9yUmVjdCB9IGZyb20gJy4vZGlyZWN0aXZlcy9zZWxlY3Rvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuL3NlcnZpY2VzL3N0b3JlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNhbnZhc1Bvc2l0aW9uLCBJTm9kZSwgSVBhbmVsLCBJUmVmTGluZURpcmVjdGlvbiwgSVJlZkxpbmVTdGF0ZSwgSVN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLWVkaXRvcicsXG4gIHRlbXBsYXRlVXJsOiAnYW5ndWxhci1lZGl0b3ItbGliLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FuZ3VsYXItZWRpdG9yLWxpYi5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW0VkaXRvclN0b3JlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGV4cG9ydEFzOiAnY2VFZGl0b3InLFxufSlcbmV4cG9ydCBjbGFzcyBBbmd1bGFyRWRpdG9yTGliQ29tcG9uZW50PFQgPSBhbnk+IHtcbiAgQElucHV0KClcbiAgc2V0IHN0YXRlKHN0YXRlOiBQYXJ0aWFsPElTdG9yZTxUPj4pIHtcbiAgICB0aGlzLnN0b3JlPy5zZXRTdGF0ZSgob2xkU3RhdGUpID0+ICh7IC4uLm9sZFN0YXRlLCAuLi5zdGF0ZSB9KSk7XG4gIH1cbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyJywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IHRydWUgfSlcbiAgcHJpdmF0ZSBjb250YWluZXJFbGVSZWY6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHVibGljIGNhbnZhc1Bvc2l0aW9uOiBJQ2FudmFzUG9zaXRpb247XG4gIHB1YmxpYyBzdGFydFBvaW50czogbnVtYmVyW10gPSBbXTtcbiAgcHVibGljIG1hdHJpeDogc3RyaW5nO1xuICBwdWJsaWMgc2VsZWN0b3JSZWN0OiBJU2VsZWN0b3JSZWN0ID0gbnVsbDtcbiAgcHVibGljIG5vZGVzOiBJTm9kZVtdO1xuICBwdWJsaWMgcmVmTGluZVN0YXRlJDogT2JzZXJ2YWJsZTx7IFtQIGluIElSZWZMaW5lRGlyZWN0aW9uXTogSVJlZkxpbmVTdGF0ZSB9PjtcbiAgcHJpdmF0ZSBub2Rlc1JlY3RTbmFwc2hvdDogTWFwPHN0cmluZywgUGFydGlhbDxET01SZWN0Pj4gPSBudWxsO1xuICBwcml2YXRlIG5vZGVJZExpc3Q6IHN0cmluZ1tdID0gbnVsbDtcbiAgY29uc3RydWN0b3IocHVibGljIHN0b3JlOiBFZGl0b3JTdG9yZSkge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3QoKHN0YXRlKSA9PiBzdGF0ZS5jYW52YXNQb3NpdGlvbilcbiAgICAgIC5zdWJzY3JpYmUoKGNhbnZhc1Bvc2l0aW9uKSA9PiB7XG4gICAgICAgIHRoaXMuY2FudmFzUG9zaXRpb24gPSBjYW52YXNQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5tYXRyaXggPSBgdHJhbnNsYXRlM2QoJHt0aGlzLmNhbnZhc1Bvc2l0aW9uLmxlZnR9cHgsJHt0aGlzLmNhbnZhc1Bvc2l0aW9uLnRvcH1weCwwKWA7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3RvcmUuc2VsZWN0KChzdGF0ZSkgPT4gc3RhdGUubm9kZXMpLnN1YnNjcmliZSgobm9kZXMpID0+ICh0aGlzLm5vZGVzID0gbm9kZXMpKTtcbiAgICB0aGlzLnJlZkxpbmVTdGF0ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLnJlZkxpbmVTdGF0ZSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5saXN0ZW5TY2FsZUV2ZW50KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcGFuZWxzVHJhY2tCeUZuKF9pOiBudW1iZXIsIHBhbmVsOiBJUGFuZWw8YW55Pikge1xuICAgIHJldHVybiBgJHtwYW5lbC5rZXl9XyR7cGFuZWwuc2hvdy50b1N0cmluZygpfWA7XG4gIH1cblxuICBkcmFnU3RhcnQoZXY6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRQb2ludHMgPSBbZXYuY2xpZW50WCwgZXYuY2xpZW50WSwgdGhpcy5jYW52YXNQb3NpdGlvbi5sZWZ0LCB0aGlzLmNhbnZhc1Bvc2l0aW9uLnRvcF07XG4gIH1cblxuICBkcmFnZ2luZyhldjogUG9pbnRlckV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RhcnRQb2ludHMpIHtcbiAgICAgIGNvbnN0IFtzeCwgc3ksIGxlZnQsIHRvcF0gPSB0aGlzLnN0YXJ0UG9pbnRzO1xuICAgICAgY29uc3QgW214LCBteV0gPSBbZXYuY2xpZW50WCAtIHN4LCBldi5jbGllbnRZIC0gc3ldO1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh1cGRhdGVDYW52YXNQb3NpdGlvbih7IGxlZnQ6IGxlZnQgKyBteCwgdG9wOiB0b3AgKyBteSB9KSk7XG4gICAgfVxuICB9XG5cbiAgZHJhZ0VuZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0UG9pbnRzID0gbnVsbDtcbiAgfVxuXG4gIGxpc3RlblNjYWxlRXZlbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2NhbGVFbGUgPSB0aGlzLmNvbnRhaW5lckVsZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIGZyb21FdmVudDxXaGVlbEV2ZW50ICYgeyB3aGVlbERlbHRhOiBudW1iZXIgfT4oc2NhbGVFbGUsICd3aGVlbCcpXG4gICAgICAgIC5waXBlKGZpbHRlcigoZSkgPT4gZS5jdHJsS2V5KSlcbiAgICAgICAgLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lckJveCA9IHNjYWxlRWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IHdoZWVsRGVsdGEgPSAoZS53aGVlbERlbHRhIC8gMTIwIHx8IC1lLmRlbHRhWSAvIDMpICogMC4wNTtcbiAgICAgICAgICBjb25zdCBbeCwgeV0gPSBbZS5jbGllbnRYIC0gY29udGFpbmVyQm94LmxlZnQsIGUuY2xpZW50WSAtIGNvbnRhaW5lckJveC50b3BdO1xuICAgICAgICAgIGlmICh0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlICsgd2hlZWxEZWx0YSA+PSAwLjIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIHVwZGF0ZUNhbnZhc1Bvc2l0aW9uKHtcbiAgICAgICAgICAgICAgICBzY2FsZTogdGhpcy5jYW52YXNQb3NpdGlvbi5zY2FsZSArIHdoZWVsRGVsdGEsXG4gICAgICAgICAgICAgICAgbGVmdDogKHRoaXMuY2FudmFzUG9zaXRpb24ubGVmdCAtIHgpICogKHdoZWVsRGVsdGEgLyB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlKSArIHRoaXMuY2FudmFzUG9zaXRpb24ubGVmdCxcbiAgICAgICAgICAgICAgICB0b3A6ICh0aGlzLmNhbnZhc1Bvc2l0aW9uLnRvcCAtIHkpICogKHdoZWVsRGVsdGEgLyB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlKSArIHRoaXMuY2FudmFzUG9zaXRpb24udG9wLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNlbGVjdG9yU3RhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclNlbGVjdEFuZEJvcmRlcigpO1xuICAgIGNvbnN0IGJveFJlY3QgPSB0aGlzLmNvbnRhaW5lckVsZVJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMubm9kZXNSZWN0U25hcHNob3QgPSBuZXcgTWFwPHN0cmluZywgUGFydGlhbDxET01SZWN0Pj4oKTtcbiAgICB0aGlzLm5vZGVzXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiAhbm9kZS5sb2NrZWQpXG4gICAgICAuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2JveC1pdGVtLSR7bm9kZS5pZH1gKT8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChyZWN0KSB7XG4gICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0LCBsZWZ0LCB0b3AgfSA9IHJlY3Q7XG4gICAgICAgICAgdGhpcy5ub2Rlc1JlY3RTbmFwc2hvdC5zZXQobm9kZS5pZCwgeyB3aWR0aCwgaGVpZ2h0LCBsZWZ0OiBsZWZ0IC0gYm94UmVjdC5sZWZ0LCB0b3A6IHRvcCAtIGJveFJlY3QudG9wIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdG9yTW92aW5nKHJlY3Q6IElTZWxlY3RvclJlY3QpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdG9yUmVjdCA9IHJlY3Q7XG4gICAgdGhpcy5ub2RlSWRMaXN0ID0gW107XG4gICAgdGhpcy5ub2Rlc1JlY3RTbmFwc2hvdC5mb3JFYWNoKChpdGVtLCBpZCkgPT4ge1xuICAgICAgaWYgKGlzSW5Cb3VuZChpdGVtLCB0aGlzLnNlbGVjdG9yUmVjdCkpIHtcbiAgICAgICAgdGhpcy5ub2RlSWRMaXN0LnB1c2goaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goc2V0Qm9yZGVyZWROb2RlczxUPih0aGlzLm5vZGVJZExpc3QpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHNldFNlbGVjdGVkTm9kZXModGhpcy5ub2RlSWRMaXN0KSk7XG4gIH1cblxuICBzZWxlY3RvckVuZCgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGVJZExpc3QgPSBbXTtcbiAgICB0aGlzLnNlbGVjdG9yUmVjdCA9IG51bGw7XG4gICAgdGhpcy5ub2Rlc1JlY3RTbmFwc2hvdCA9IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyU2VsZWN0QW5kQm9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goY2xlYXJCb3JkZXJlZDxUPigpKTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKGNsZWFyU2VsZWN0ZWQ8VD4oKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbkJvdW5kKHJlY3Q6IFBhcnRpYWw8RE9NUmVjdD4sIGJvdW5kOiBJU2VsZWN0b3JSZWN0KTogYm9vbGVhbiB7XG4gIHJldHVybiAoXG4gICAgcmVjdC5sZWZ0ID49IGJvdW5kLnggJiYgcmVjdC50b3AgPj0gYm91bmQueSAmJiByZWN0LmxlZnQgKyByZWN0LndpZHRoIDw9IGJvdW5kLnggKyBib3VuZC53aWR0aCAmJiByZWN0LnRvcCArIHJlY3QuaGVpZ2h0IDw9IGJvdW5kLnkgKyBib3VuZC5oZWlnaHRcbiAgKTtcbn1cbiIsIjxuZy1jb250ZW50IHNlbGVjdD1cIlt0b29sYmFyXVwiPjwvbmctY29udGVudD5cbjxkaXYgY2xhc3M9XCJjb2wgcC0wIGQtZmxleFwiPlxuICA8ZGl2XG4gICAgI2NlRHJhZz1cImNlRHJhZ2dhYmxlXCJcbiAgICAjY29udGFpbmVyXG4gICAgY2xhc3M9XCJjYW52YXMtY29udGFpbmVyXCJcbiAgICBjZURyYWdnYWJsZVxuICAgIGNlVXNlU3BhY2VcbiAgICBbY2xhc3Muc3RhcnQtZHJhZ109XCJjZURyYWcuc3BhY2VLZXlEb3duXCJcbiAgICBbY2xhc3MuZHJhZ2dpbmddPVwic3RhcnRQb2ludHNcIlxuICAgIChjZU9uU3RhcnQpPVwiZHJhZ1N0YXJ0KCRldmVudClcIlxuICAgIChjZU9uTW92ZSk9XCJkcmFnZ2luZygkZXZlbnQpXCJcbiAgICAoY2VPblN0b3ApPVwiZHJhZ0VuZCgpXCJcbiAgICBjZVNlbGVjdG9yXG4gICAgW2NlU2VsZWN0b3JEaXNhYmxlZF09XCJjZURyYWcuc3BhY2VLZXlEb3duXCJcbiAgICAoY2VPblNlbGVjdG9yU3RhcnQpPVwic2VsZWN0b3JTdGFydCgpXCJcbiAgICAoY2VPblNlbGVjdG9yTW92aW5nKT1cInNlbGVjdG9yTW92aW5nKCRldmVudClcIlxuICAgIChjZU9uU2VsZWN0b3JTdG9wKT1cInNlbGVjdG9yRW5kKClcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cImNhbnZhcy1jb250ZW50XCIgW3N0eWxlLnRyYW5zZm9ybV09XCJtYXRyaXhcIj5cbiAgICAgIDxkaXYgY2VOb1pvb21BcmVhPlxuICAgICAgICA8Y2UtY2FudmFzLWJhY2tncm91bmQ+PC9jZS1jYW52YXMtYmFja2dyb3VuZD5cbiAgICAgICAgPGNlLWNhbnZhcy1ncmlkPjwvY2UtY2FudmFzLWdyaWQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2Vab29tQXJlYT5cbiAgICAgICAgPGNlLWNhbnZhcz48L2NlLWNhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjZU5vWm9vbUFyZWE+XG4gICAgICAgIDxjZS1ib3JkZXJlZC1hcmVhPjwvY2UtYm9yZGVyZWQtYXJlYT5cbiAgICAgICAgPGNlLXJlc2l6ZS1oYW5kbGU+PC9jZS1yZXNpemUtaGFuZGxlPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3hcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5jeD8uc3RhdGVcIlxuICAgICAgICAgIFtzdHlsZS50b3AucHhdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LmN4Py5wb3NpdGlvbiAqIGNhbnZhc1Bvc2l0aW9uLnNjYWxlXCJcbiAgICAgICAgICBjbGFzcz1cInJlZi1saW5lIHlcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjeVxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LmN5Py5zdGF0ZVwiXG4gICAgICAgICAgW3N0eWxlLmxlZnQucHhdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LmN5Py5wb3NpdGlvbiAqIGNhbnZhc1Bvc2l0aW9uLnNjYWxlXCJcbiAgICAgICAgICBjbGFzcz1cInJlZi1saW5lIHhcIlxuICAgICAgICA+PC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICB0eFxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiKHJlZkxpbmVTdGF0ZSQgfCBhc3luYyk/LnR4Py5zdGF0ZVwiXG4gICAgICAgICAgW3N0eWxlLnRvcC5weF09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8udHg/LnBvc2l0aW9uICogY2FudmFzUG9zaXRpb24uc2NhbGVcIlxuICAgICAgICAgIGNsYXNzPVwicmVmLWxpbmUgeVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGJ4XG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCIocmVmTGluZVN0YXRlJCB8IGFzeW5jKT8uYng/LnN0YXRlXCJcbiAgICAgICAgICBbc3R5bGUudG9wLnB4XT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5ieD8ucG9zaXRpb24gKiBjYW52YXNQb3NpdGlvbi5zY2FsZVwiXG4gICAgICAgICAgY2xhc3M9XCJyZWYtbGluZSB5XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgbHlcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5seT8uc3RhdGVcIlxuICAgICAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5seT8ucG9zaXRpb24gKiBjYW52YXNQb3NpdGlvbi5zY2FsZVwiXG4gICAgICAgICAgY2xhc3M9XCJyZWYtbGluZSB4XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcnlcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5yeT8uc3RhdGVcIlxuICAgICAgICAgIFtzdHlsZS5sZWZ0LnB4XT1cIihyZWZMaW5lU3RhdGUkIHwgYXN5bmMpPy5yeT8ucG9zaXRpb24gKiBjYW52YXNQb3NpdGlvbi5zY2FsZVwiXG4gICAgICAgICAgY2xhc3M9XCJyZWYtbGluZSB4XCJcbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJzZWxlY3RvclwiXG4gICAgICAqbmdJZj1cInNlbGVjdG9yUmVjdFwiXG4gICAgICBbc3R5bGUubGVmdC5weF09XCJzZWxlY3RvclJlY3QueFwiXG4gICAgICBbc3R5bGUudG9wLnB4XT1cInNlbGVjdG9yUmVjdC55XCJcbiAgICAgIFtzdHlsZS53aWR0aC5weF09XCJzZWxlY3RvclJlY3Qud2lkdGhcIlxuICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzZWxlY3RvclJlY3QuaGVpZ2h0XCJcbiAgICA+PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhbmVsIG9mIHN0b3JlLnBhbmVscyQgfCBhc3luYzsgdHJhY2tCeTogcGFuZWxzVHJhY2tCeUZuXCI+XG4gIDxjZS1wYW5lbCAqbmdJZj1cInBhbmVsLnNob3dcIiBbcGFuZWxdPVwicGFuZWxcIj48L2NlLXBhbmVsPlxuPC9uZy1jb250YWluZXI+XG4iXX0=