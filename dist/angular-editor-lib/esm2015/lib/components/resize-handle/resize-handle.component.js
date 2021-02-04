import { ChangeDetectionStrategy, Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { updateNodesSize } from '../../actions';
import { CeUtilsService } from '../../services/utils.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "../../services/utils.service";
function ResizeHandleComponent_ce_rotate_handle_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ce-rotate-handle");
} }
function ResizeHandleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_2_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_2_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.resizing($event, "t"); })("ceOnStop", function ResizeHandleComponent_div_2_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.resizeEnd(); });
    i0.ɵɵelementEnd();
} }
function ResizeHandleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_4_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_4_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.resizing($event, "r"); })("ceOnStop", function ResizeHandleComponent_div_4_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.resizeEnd(); });
    i0.ɵɵelementEnd();
} }
function ResizeHandleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_6_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_6_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.resizing($event, "b"); })("ceOnStop", function ResizeHandleComponent_div_6_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.resizeEnd(); });
    i0.ɵɵelementEnd();
} }
function ResizeHandleComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_8_Template_div_ceOnStart_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_8_Template_div_ceOnMove_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.resizing($event, "l"); })("ceOnStop", function ResizeHandleComponent_div_8_Template_div_ceOnStop_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.resizeEnd(); });
    i0.ɵɵelementEnd();
} }
function ResizeHandleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 21);
} }
function ResizeHandleComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} }
function ResizeHandleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} }
function ResizeHandleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 24);
} }
export class ResizeHandleComponent {
    constructor(store, utils, eleRef) {
        this.store = store;
        this.utils = utils;
        this.eleRef = eleRef;
        this.display = 'none';
        this.nodePositionSnapshotList = new Map();
        this.selectedSize$ = this.store.selectDifferent((state) => state.selected.size);
        this.store
            .selectDifferent((state) => ({ selected: state.selected, canvasPosition: state.canvasPosition, nodes: state.nodes }))
            .subscribe(({ selected, canvasPosition, nodes }) => {
            this.display = selected.size ? 'block' : 'none';
            this.selected = selected;
            this.canvasPosition = canvasPosition;
            this.nodes = nodes;
            if (this.selected.size) {
                this.refreshResizeHandle();
            }
        });
    }
    get transform() {
        var _a;
        return `rotate(${(_a = this.rotate) !== null && _a !== void 0 ? _a : 0}deg)`;
    }
    refreshResizeHandle() {
        if (!this.selected || !this.nodes) {
            return;
        }
        const { left, top, width, height, rotate } = this.utils.getResizeBoundingBox([...this.selected], this.nodes);
        this.left = left * this.canvasPosition.scale;
        this.top = top * this.canvasPosition.scale;
        this.width = width * this.canvasPosition.scale;
        this.height = height * this.canvasPosition.scale;
        this.rotate = rotate;
    }
    resizeStart(event) {
        event.preventDefault();
        event.stopPropagation();
        const { scale } = this.canvasPosition;
        const canvasRect = document.querySelector('ce-canvas').getBoundingClientRect();
        this.groupRectSnapshot = { width: this.width / scale, height: this.height / scale, left: this.left / scale, top: this.top / scale };
        this.groupAbsolutePositionSnapshot = this.utils.getAbsolutePosition((this.left + this.width / 2) / scale, (this.top + this.height / 2) / scale, this.width / scale, this.height / scale);
        this.resizePointSnapshot = {
            absolute: [event.clientX, event.clientY],
            relative: [(event.clientX - canvasRect.left) / scale, (event.clientY - canvasRect.top) / scale],
        };
        this.selected.forEach((id) => {
            const node = this.utils.getNodeById(id, this.nodes);
            const nodeAbsolutePosition = this.utils.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
            if (this.selected.size > 1) {
                this.resizeMode = 'GROUP';
                const percentPosition = this.utils.getItemPercentPositionInGroup(Object.assign({}, this.groupRectSnapshot), nodeAbsolutePosition);
                this.nodePositionSnapshotList.set(id, percentPosition);
            }
            else {
                this.resizeMode = 'SINGLE';
                this.nodePositionSnapshotList.set(id, nodeAbsolutePosition);
            }
        });
    }
    resizing(event, direction) {
        if (this.resizePointSnapshot && this.groupRectSnapshot && this.resizeMode) {
            const [mx, my] = [event.clientX - this.resizePointSnapshot.absolute[0], event.clientY - this.resizePointSnapshot.absolute[1]];
            switch (this.resizeMode) {
                case 'GROUP':
                    this.resizingNodeList(direction, mx, my);
                    break;
                case 'SINGLE':
                    this.resizingNode(direction, mx, my);
                    break;
            }
        }
    }
    resizeEnd() {
        this.groupRectSnapshot = null;
        this.resizePointSnapshot = null;
        this.nodePositionSnapshotList.clear();
    }
    resizingNodeList(direction, mx, my) {
        const { scale } = this.canvasPosition;
        const { relative } = this.resizePointSnapshot;
        const endPointer = [relative[0] + mx / scale, relative[1] + my / scale];
        const line = getGroupDiagonalByDirection(direction, this.groupAbsolutePositionSnapshot);
        const newPoint = getPointByEndPointer(direction, endPointer, line);
        const newGroupRect = getGroupRectByDirectionPoint(direction, this.groupAbsolutePositionSnapshot, newPoint);
        const nodesSizeMap = new Map();
        this.nodePositionSnapshotList.forEach(({ tl, bl, br, tr }, id) => {
            nodesSizeMap.set(id, this.utils.getRelativePosition({
                bl: [bl[0] * newGroupRect.width + newGroupRect.left, bl[1] * newGroupRect.height + newGroupRect.top],
                br: [br[0] * newGroupRect.width + newGroupRect.left, br[1] * newGroupRect.height + newGroupRect.top],
                tl: [tl[0] * newGroupRect.width + newGroupRect.left, tl[1] * newGroupRect.height + newGroupRect.top],
                tr: [tr[0] * newGroupRect.width + newGroupRect.left, tr[1] * newGroupRect.height + newGroupRect.top],
            }));
        });
        this.store.dispatch(updateNodesSize(nodesSizeMap));
    }
    resizingNode(direction, mx, my) {
        const { scale } = this.canvasPosition;
        const { relative } = this.resizePointSnapshot;
        const endPointer = [relative[0] + mx / scale, relative[1] + my / scale];
        this.nodePositionSnapshotList.forEach((position, id) => {
            this.store.dispatch(updateNodesSize(new Map([[id, getDOMRectByDirectionAndPosition(direction, position, endPointer)]])));
        });
    }
}
ResizeHandleComponent.ɵfac = function ResizeHandleComponent_Factory(t) { return new (t || ResizeHandleComponent)(i0.ɵɵdirectiveInject(i1.EditorStore), i0.ɵɵdirectiveInject(i2.CeUtilsService), i0.ɵɵdirectiveInject(i0.ElementRef)); };
ResizeHandleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ResizeHandleComponent, selectors: [["ce-resize-handle"], ["", "ceResizeHandle", ""]], hostVars: 12, hostBindings: function ResizeHandleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("display", ctx.display)("width", ctx.width, "px")("height", ctx.height, "px")("left", ctx.left, "px")("top", ctx.top, "px")("transform", ctx.transform);
    } }, decls: 26, vars: 27, consts: [[4, "ngIf"], ["class", "resizable-handle t", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle r", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle b", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle l", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["ceDraggable", "", 1, "resizable-handle", "tr", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "br", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "tl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "bl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["class", "t circle", 4, "ngIf"], ["class", "r circle", 4, "ngIf"], ["class", "b circle", 4, "ngIf"], ["class", "l circle", 4, "ngIf"], [1, "tr", "circle"], [1, "br", "circle"], [1, "tl", "circle"], [1, "bl", "circle"], ["ceDraggable", "", 1, "resizable-handle", "t", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "r", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "b", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "l", 3, "ceOnStart", "ceOnMove", "ceOnStop"], [1, "t", "circle"], [1, "r", "circle"], [1, "b", "circle"], [1, "l", "circle"]], template: function ResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, ResizeHandleComponent_ce_rotate_handle_0_Template, 1, 0, "ce-rotate-handle", 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, ResizeHandleComponent_div_2_Template, 1, 0, "div", 1);
        i0.ɵɵpipe(3, "async");
        i0.ɵɵtemplate(4, ResizeHandleComponent_div_4_Template, 1, 0, "div", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵtemplate(6, ResizeHandleComponent_div_6_Template, 1, 0, "div", 3);
        i0.ɵɵpipe(7, "async");
        i0.ɵɵtemplate(8, ResizeHandleComponent_div_8_Template, 1, 0, "div", 4);
        i0.ɵɵpipe(9, "async");
        i0.ɵɵelementStart(10, "div", 5);
        i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_10_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_10_listener($event) { return ctx.resizing($event, "tr"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_10_listener() { return ctx.resizeEnd(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "div", 6);
        i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_11_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_11_listener($event) { return ctx.resizing($event, "br"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_11_listener() { return ctx.resizeEnd(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div", 7);
        i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_12_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_12_listener($event) { return ctx.resizing($event, "tl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_12_listener() { return ctx.resizeEnd(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div", 8);
        i0.ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_13_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_13_listener($event) { return ctx.resizing($event, "bl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_13_listener() { return ctx.resizeEnd(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, ResizeHandleComponent_div_14_Template, 1, 0, "div", 9);
        i0.ɵɵpipe(15, "async");
        i0.ɵɵtemplate(16, ResizeHandleComponent_div_16_Template, 1, 0, "div", 10);
        i0.ɵɵpipe(17, "async");
        i0.ɵɵtemplate(18, ResizeHandleComponent_div_18_Template, 1, 0, "div", 11);
        i0.ɵɵpipe(19, "async");
        i0.ɵɵtemplate(20, ResizeHandleComponent_div_20_Template, 1, 0, "div", 12);
        i0.ɵɵpipe(21, "async");
        i0.ɵɵelement(22, "div", 13);
        i0.ɵɵelement(23, "div", 14);
        i0.ɵɵelement(24, "div", 15);
        i0.ɵɵelement(25, "div", 16);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 9, ctx.selectedSize$) === 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 11, ctx.selectedSize$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 13, ctx.selectedSize$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 15, ctx.selectedSize$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 17, ctx.selectedSize$));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(15, 19, ctx.selectedSize$) === 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 21, ctx.selectedSize$) === 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 23, ctx.selectedSize$) === 1);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 25, ctx.selectedSize$) === 1);
    } }, styles: ["[ceResizeHandle],ce-resize-handle{border:1px solid #1890ff;box-sizing:border-box;position:absolute}[ceResizeHandle] .resizable-handle,ce-resize-handle .resizable-handle{cursor:pointer;height:14px;pointer-events:auto;position:absolute;width:14px;z-index:1}[ceResizeHandle] .circle,ce-resize-handle .circle{background:#fff;border:1px solid #1890ff;border-radius:50%;height:7px;position:absolute;width:7px}[ceResizeHandle] .b,[ceResizeHandle] .t,ce-resize-handle .b,ce-resize-handle .t{left:50%;margin-left:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .t.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .t.resizable-handle{margin-left:-7px}[ceResizeHandle] .l,[ceResizeHandle] .r,ce-resize-handle .l,ce-resize-handle .r{margin-top:-3.5px;top:50%}[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .r.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .r.resizable-handle{margin-top:-7px}[ceResizeHandle] .t,[ceResizeHandle] .tl,[ceResizeHandle] .tr,ce-resize-handle .t,ce-resize-handle .tl,ce-resize-handle .tr{top:-3.5px}[ceResizeHandle] .t.resizable-handle,[ceResizeHandle] .tl.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .t.resizable-handle,ce-resize-handle .tl.resizable-handle,ce-resize-handle .tr.resizable-handle{top:-7px}[ceResizeHandle] .b,[ceResizeHandle] .bl,[ceResizeHandle] .br,ce-resize-handle .b,ce-resize-handle .bl,ce-resize-handle .br{bottom:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .br.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .br.resizable-handle{bottom:-7px}[ceResizeHandle] .br,[ceResizeHandle] .r,[ceResizeHandle] .tr,ce-resize-handle .br,ce-resize-handle .r,ce-resize-handle .tr{right:-3.5px}[ceResizeHandle] .br.resizable-handle,[ceResizeHandle] .r.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .br.resizable-handle,ce-resize-handle .r.resizable-handle,ce-resize-handle .tr.resizable-handle{right:-7px}[ceResizeHandle] .bl,[ceResizeHandle] .l,[ceResizeHandle] .tl,ce-resize-handle .bl,ce-resize-handle .l,ce-resize-handle .tl{left:-3.5px}[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .tl.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .tl.resizable-handle{left:-7px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ResizeHandleComponent, [{
        type: Component,
        args: [{
                selector: 'ce-resize-handle,[ceResizeHandle]',
                templateUrl: 'resize-handle.component.html',
                styleUrls: ['resize-handle.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }, { type: i2.CeUtilsService }, { type: i0.ElementRef }]; }, { display: [{
            type: HostBinding,
            args: ['style.display']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }], left: [{
            type: HostBinding,
            args: ['style.left.px']
        }], top: [{
            type: HostBinding,
            args: ['style.top.px']
        }], transform: [{
            type: HostBinding,
            args: ['style.transform']
        }] }); })();
function getGroupDiagonalByDirection(direction, absolutePosition) {
    const verticalAndHorizontalPosition = CeUtilsService.shared.getVerticalAndHorizontalPointByAbsolutePosition(absolutePosition);
    switch (direction) {
        case 'tl':
        case 'br':
            return [absolutePosition.tl, absolutePosition.br];
        case 'tr':
        case 'bl':
            return [absolutePosition.tr, absolutePosition.bl];
        case 't':
        case 'b':
            return [verticalAndHorizontalPosition.t, verticalAndHorizontalPosition.b];
        case 'l':
        case 'r':
            return [verticalAndHorizontalPosition.l, verticalAndHorizontalPosition.r];
    }
}
function getPointByEndPointer(direction, endPointer, line) {
    switch (direction) {
        case 'tl':
        case 'tr':
            if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
                return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
            }
            else {
                return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
            }
        case 'bl':
        case 'br':
            if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
                return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
            }
            else {
                return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
            }
    }
}
function getGroupRectByDirectionPoint(direction, absolutePoint, point) {
    switch (direction) {
        case 'tl':
            return { left: point[0], top: point[1], width: absolutePoint.tr[0] - point[0], height: absolutePoint.bl[1] - point[1] };
        case 'tr':
            return { left: absolutePoint.tl[0], top: point[1], width: point[0] - absolutePoint.tl[0], height: absolutePoint.br[1] - point[1] };
        case 'br':
            return { left: absolutePoint.tl[0], top: absolutePoint.tl[1], width: point[0] - absolutePoint.bl[0], height: point[1] - absolutePoint.tr[1] };
        case 'bl':
            return { left: point[0], top: absolutePoint.tl[1], width: absolutePoint.br[0] - point[0], height: point[1] - absolutePoint.tl[1] };
    }
}
function getDOMRectByDirectionAndPosition(direction, position, endPointer) {
    const { bl, br, tl, tr } = position;
    let newTLPoint;
    let newTRPoint;
    let newBLPoint;
    let newBRPoint;
    switch (direction) {
        case 'tl':
            newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
            newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl: endPointer, tr: newTRPoint, bl: newBLPoint, br });
        case 'tr':
            newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
            newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: endPointer, bl, br: newBRPoint });
        case 'bl':
            newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
            newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr, bl: endPointer, br: newBRPoint });
        case 'br':
            newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
            newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl, tr: newTRPoint, bl: newBLPoint, br: endPointer });
        case 't':
            newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
            newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: newTRPoint, bl, br });
        case 'r':
            newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
            newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl, tr: newTRPoint, bl, br: newBRPoint });
        case 'b':
            newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
            newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl, tr, bl: newBLPoint, br: newBRPoint });
        case 'l':
            newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
            newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
            return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr, bl: newBLPoint, br });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jlc2l6ZS1oYW5kbGUvcmVzaXplLWhhbmRsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9yZXNpemUtaGFuZGxlL3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLDhCQUE4QixDQUFDOzs7OztJQ0ozRyxtQ0FBMkU7Ozs7SUFDM0UsK0JBT0M7SUFIQyw0TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7SUFLUCwwQkFBa0U7OztJQUNsRSwwQkFBa0U7OztJQUNsRSwwQkFBa0U7OztJQUNsRSwwQkFBa0U7O0FEMUJsRSxNQUFNLE9BQU8scUJBQXFCO0lBMEJoQyxZQUFvQixLQUEwQixFQUFVLEtBQXFCLEVBQVMsTUFBK0I7UUFBakcsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBeEI5RyxZQUFPLEdBQUcsTUFB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bUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDL0YsS0FBSyxHQUFHO1lBQ04sVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixVQUFVLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztLQUNoRztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHVwZGF0ZU5vZGVzU2l6ZSB9IGZyb20gJy4uLy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgRWRpdG9yU3RvcmUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBDZVV0aWxzU2VydmljZSwgSUFic29sdXRlUG9zaXRpb24sIElET01SZWN0LCBJUmVjdERpcmVjdGlvbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNhbnZhc1Bvc2l0aW9uLCBJTm9kZSwgSVN0b3JlIH0gZnJvbSAnLi4vLi4vc3RvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZS1yZXNpemUtaGFuZGxlLFtjZVJlc2l6ZUhhbmRsZV0nLFxuICB0ZW1wbGF0ZVVybDogJ3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncmVzaXplLWhhbmRsZS5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmVzaXplSGFuZGxlQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JylcbiAgcHVibGljIGRpc3BsYXkgPSAnbm9uZSc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUubGVmdC5weCcpXG4gIHB1YmxpYyBsZWZ0OiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudG9wLnB4JylcbiAgcHVibGljIHRvcDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpXG4gIHB1YmxpYyBnZXQgdHJhbnNmb3JtKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGByb3RhdGUoJHt0aGlzLnJvdGF0ZSA/PyAwfWRlZylgO1xuICB9XG4gIHB1YmxpYyBzZWxlY3RlZDogU2V0PHN0cmluZz47XG4gIHB1YmxpYyBzZWxlY3RlZFNpemUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIHByaXZhdGUgY2FudmFzUG9zaXRpb246IElDYW52YXNQb3NpdGlvbjtcbiAgcHJpdmF0ZSByb3RhdGU6IG51bWJlcjtcbiAgcHJpdmF0ZSBub2RlczogSU5vZGVbXTtcbiAgcHJpdmF0ZSByZXNpemVNb2RlOiAnR1JPVVAnIHwgJ1NJTkdMRSc7XG4gIHByaXZhdGUgZ3JvdXBSZWN0U25hcHNob3Q6IElET01SZWN0O1xuICBwcml2YXRlIGdyb3VwQWJzb2x1dGVQb3NpdGlvblNuYXBzaG90OiBJQWJzb2x1dGVQb3NpdGlvbjtcbiAgcHJpdmF0ZSByZXNpemVQb2ludFNuYXBzaG90OiB7IGFic29sdXRlOiBbbnVtYmVyLCBudW1iZXJdOyByZWxhdGl2ZTogW251bWJlciwgbnVtYmVyXSB9O1xuICBwcml2YXRlIG5vZGVQb3NpdGlvblNuYXBzaG90TGlzdCA9IG5ldyBNYXA8c3RyaW5nLCBJQWJzb2x1dGVQb3NpdGlvbj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBFZGl0b3JTdG9yZTxJU3RvcmU+LCBwcml2YXRlIHV0aWxzOiBDZVV0aWxzU2VydmljZSwgcHVibGljIGVsZVJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4pIHtcbiAgICB0aGlzLnNlbGVjdGVkU2l6ZSQgPSB0aGlzLnN0b3JlLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+IHN0YXRlLnNlbGVjdGVkLnNpemUpO1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiAoeyBzZWxlY3RlZDogc3RhdGUuc2VsZWN0ZWQsIGNhbnZhc1Bvc2l0aW9uOiBzdGF0ZS5jYW52YXNQb3NpdGlvbiwgbm9kZXM6IHN0YXRlLm5vZGVzIH0pKVxuICAgICAgLnN1YnNjcmliZSgoeyBzZWxlY3RlZCwgY2FudmFzUG9zaXRpb24sIG5vZGVzIH0pID0+IHtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gc2VsZWN0ZWQuc2l6ZSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgdGhpcy5jYW52YXNQb3NpdGlvbiA9IGNhbnZhc1Bvc2l0aW9uO1xuICAgICAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkLnNpemUpIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hSZXNpemVIYW5kbGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZWZyZXNoUmVzaXplSGFuZGxlKCk6IGFueSB7XG4gICAgaWYgKCF0aGlzLnNlbGVjdGVkIHx8ICF0aGlzLm5vZGVzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHJvdGF0ZSB9ID0gdGhpcy51dGlscy5nZXRSZXNpemVCb3VuZGluZ0JveChbLi4udGhpcy5zZWxlY3RlZF0sIHRoaXMubm9kZXMpO1xuICAgIHRoaXMubGVmdCA9IGxlZnQgKiB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlO1xuICAgIHRoaXMudG9wID0gdG9wICogdGhpcy5jYW52YXNQb3NpdGlvbi5zY2FsZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGggKiB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0ICogdGhpcy5jYW52YXNQb3NpdGlvbi5zY2FsZTtcbiAgICB0aGlzLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgfVxuXG4gIHJlc2l6ZVN0YXJ0KGV2ZW50OiBQb2ludGVyRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuY2FudmFzUG9zaXRpb247XG4gICAgY29uc3QgY2FudmFzUmVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NlLWNhbnZhcycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuZ3JvdXBSZWN0U25hcHNob3QgPSB7IHdpZHRoOiB0aGlzLndpZHRoIC8gc2NhbGUsIGhlaWdodDogdGhpcy5oZWlnaHQgLyBzY2FsZSwgbGVmdDogdGhpcy5sZWZ0IC8gc2NhbGUsIHRvcDogdGhpcy50b3AgLyBzY2FsZSB9O1xuICAgIHRoaXMuZ3JvdXBBYnNvbHV0ZVBvc2l0aW9uU25hcHNob3QgPSB0aGlzLnV0aWxzLmdldEFic29sdXRlUG9zaXRpb24oXG4gICAgICAodGhpcy5sZWZ0ICsgdGhpcy53aWR0aCAvIDIpIC8gc2NhbGUsXG4gICAgICAodGhpcy50b3AgKyB0aGlzLmhlaWdodCAvIDIpIC8gc2NhbGUsXG4gICAgICB0aGlzLndpZHRoIC8gc2NhbGUsXG4gICAgICB0aGlzLmhlaWdodCAvIHNjYWxlXG4gICAgKTtcbiAgICB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3QgPSB7XG4gICAgICBhYnNvbHV0ZTogW2V2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFldLFxuICAgICAgcmVsYXRpdmU6IFsoZXZlbnQuY2xpZW50WCAtIGNhbnZhc1JlY3QubGVmdCkgLyBzY2FsZSwgKGV2ZW50LmNsaWVudFkgLSBjYW52YXNSZWN0LnRvcCkgLyBzY2FsZV0sXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdGVkLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy51dGlscy5nZXROb2RlQnlJZChpZCwgdGhpcy5ub2Rlcyk7XG4gICAgICBjb25zdCBub2RlQWJzb2x1dGVQb3NpdGlvbiA9IHRoaXMudXRpbHMuZ2V0QWJzb2x1dGVQb3NpdGlvbihcbiAgICAgICAgbm9kZS5sZWZ0ICsgbm9kZS53aWR0aCAvIDIsXG4gICAgICAgIG5vZGUudG9wICsgbm9kZS5oZWlnaHQgLyAyLFxuICAgICAgICBub2RlLndpZHRoLFxuICAgICAgICBub2RlLmhlaWdodCxcbiAgICAgICAgbm9kZS5yb3RhdGVcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZC5zaXplID4gMSkge1xuICAgICAgICB0aGlzLnJlc2l6ZU1vZGUgPSAnR1JPVVAnO1xuICAgICAgICBjb25zdCBwZXJjZW50UG9zaXRpb24gPSB0aGlzLnV0aWxzLmdldEl0ZW1QZXJjZW50UG9zaXRpb25Jbkdyb3VwKHsgLi4udGhpcy5ncm91cFJlY3RTbmFwc2hvdCB9LCBub2RlQWJzb2x1dGVQb3NpdGlvbik7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9uU25hcHNob3RMaXN0LnNldChpZCwgcGVyY2VudFBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVzaXplTW9kZSA9ICdTSU5HTEUnO1xuICAgICAgICB0aGlzLm5vZGVQb3NpdGlvblNuYXBzaG90TGlzdC5zZXQoaWQsIG5vZGVBYnNvbHV0ZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJlc2l6aW5nKGV2ZW50OiBQb2ludGVyRXZlbnQsIGRpcmVjdGlvbjogSVJlY3REaXJlY3Rpb24pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNpemVQb2ludFNuYXBzaG90ICYmIHRoaXMuZ3JvdXBSZWN0U25hcHNob3QgJiYgdGhpcy5yZXNpemVNb2RlKSB7XG4gICAgICBjb25zdCBbbXgsIG15XSA9IFtldmVudC5jbGllbnRYIC0gdGhpcy5yZXNpemVQb2ludFNuYXBzaG90LmFic29sdXRlWzBdLCBldmVudC5jbGllbnRZIC0gdGhpcy5yZXNpemVQb2ludFNuYXBzaG90LmFic29sdXRlWzFdXTtcbiAgICAgIHN3aXRjaCAodGhpcy5yZXNpemVNb2RlKSB7XG4gICAgICAgIGNhc2UgJ0dST1VQJzpcbiAgICAgICAgICB0aGlzLnJlc2l6aW5nTm9kZUxpc3QoZGlyZWN0aW9uLCBteCwgbXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdTSU5HTEUnOlxuICAgICAgICAgIHRoaXMucmVzaXppbmdOb2RlKGRpcmVjdGlvbiwgbXgsIG15KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXNpemVFbmQoKTogdm9pZCB7XG4gICAgdGhpcy5ncm91cFJlY3RTbmFwc2hvdCA9IG51bGw7XG4gICAgdGhpcy5yZXNpemVQb2ludFNuYXBzaG90ID0gbnVsbDtcbiAgICB0aGlzLm5vZGVQb3NpdGlvblNuYXBzaG90TGlzdC5jbGVhcigpO1xuICB9XG5cbiAgcmVzaXppbmdOb2RlTGlzdChkaXJlY3Rpb246IElSZWN0RGlyZWN0aW9uLCBteDogbnVtYmVyLCBteTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5jYW52YXNQb3NpdGlvbjtcbiAgICBjb25zdCB7IHJlbGF0aXZlIH0gPSB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3Q7XG4gICAgY29uc3QgZW5kUG9pbnRlcjogW251bWJlciwgbnVtYmVyXSA9IFtyZWxhdGl2ZVswXSArIG14IC8gc2NhbGUsIHJlbGF0aXZlWzFdICsgbXkgLyBzY2FsZV07XG4gICAgY29uc3QgbGluZSA9IGdldEdyb3VwRGlhZ29uYWxCeURpcmVjdGlvbihkaXJlY3Rpb24sIHRoaXMuZ3JvdXBBYnNvbHV0ZVBvc2l0aW9uU25hcHNob3QpO1xuICAgIGNvbnN0IG5ld1BvaW50ID0gZ2V0UG9pbnRCeUVuZFBvaW50ZXIoZGlyZWN0aW9uLCBlbmRQb2ludGVyLCBsaW5lKTtcbiAgICBjb25zdCBuZXdHcm91cFJlY3Q6IElET01SZWN0ID0gZ2V0R3JvdXBSZWN0QnlEaXJlY3Rpb25Qb2ludChkaXJlY3Rpb24sIHRoaXMuZ3JvdXBBYnNvbHV0ZVBvc2l0aW9uU25hcHNob3QsIG5ld1BvaW50KTtcbiAgICBjb25zdCBub2Rlc1NpemVNYXAgPSBuZXcgTWFwPHN0cmluZywgSURPTVJlY3Q+KCk7XG4gICAgdGhpcy5ub2RlUG9zaXRpb25TbmFwc2hvdExpc3QuZm9yRWFjaCgoeyB0bCwgYmwsIGJyLCB0ciB9LCBpZCkgPT4ge1xuICAgICAgbm9kZXNTaXplTWFwLnNldChcbiAgICAgICAgaWQsXG4gICAgICAgIHRoaXMudXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7XG4gICAgICAgICAgYmw6IFtibFswXSAqIG5ld0dyb3VwUmVjdC53aWR0aCArIG5ld0dyb3VwUmVjdC5sZWZ0LCBibFsxXSAqIG5ld0dyb3VwUmVjdC5oZWlnaHQgKyBuZXdHcm91cFJlY3QudG9wXSxcbiAgICAgICAgICBicjogW2JyWzBdICogbmV3R3JvdXBSZWN0LndpZHRoICsgbmV3R3JvdXBSZWN0LmxlZnQsIGJyWzFdICogbmV3R3JvdXBSZWN0LmhlaWdodCArIG5ld0dyb3VwUmVjdC50b3BdLFxuICAgICAgICAgIHRsOiBbdGxbMF0gKiBuZXdHcm91cFJlY3Qud2lkdGggKyBuZXdHcm91cFJlY3QubGVmdCwgdGxbMV0gKiBuZXdHcm91cFJlY3QuaGVpZ2h0ICsgbmV3R3JvdXBSZWN0LnRvcF0sXG4gICAgICAgICAgdHI6IFt0clswXSAqIG5ld0dyb3VwUmVjdC53aWR0aCArIG5ld0dyb3VwUmVjdC5sZWZ0LCB0clsxXSAqIG5ld0dyb3VwUmVjdC5oZWlnaHQgKyBuZXdHcm91cFJlY3QudG9wXSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaCh1cGRhdGVOb2Rlc1NpemUobm9kZXNTaXplTWFwKSk7XG4gIH1cblxuICByZXNpemluZ05vZGUoZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbiwgbXg6IG51bWJlciwgbXk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMuY2FudmFzUG9zaXRpb247XG4gICAgY29uc3QgeyByZWxhdGl2ZSB9ID0gdGhpcy5yZXNpemVQb2ludFNuYXBzaG90O1xuICAgIGNvbnN0IGVuZFBvaW50ZXI6IFtudW1iZXIsIG51bWJlcl0gPSBbcmVsYXRpdmVbMF0gKyBteCAvIHNjYWxlLCByZWxhdGl2ZVsxXSArIG15IC8gc2NhbGVdO1xuICAgIHRoaXMubm9kZVBvc2l0aW9uU25hcHNob3RMaXN0LmZvckVhY2goKHBvc2l0aW9uLCBpZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdXBkYXRlTm9kZXNTaXplKFxuICAgICAgICAgIG5ldyBNYXA8c3RyaW5nLCBJRE9NUmVjdD4oW1tpZCwgZ2V0RE9NUmVjdEJ5RGlyZWN0aW9uQW5kUG9zaXRpb24oZGlyZWN0aW9uLCBwb3NpdGlvbiwgZW5kUG9pbnRlcildXSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRHcm91cERpYWdvbmFsQnlEaXJlY3Rpb24oZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbiwgYWJzb2x1dGVQb3NpdGlvbjogSUFic29sdXRlUG9zaXRpb24pOiBbW251bWJlciwgbnVtYmVyXSwgW251bWJlciwgbnVtYmVyXV0ge1xuICBjb25zdCB2ZXJ0aWNhbEFuZEhvcml6b250YWxQb3NpdGlvbiA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbEFuZEhvcml6b250YWxQb2ludEJ5QWJzb2x1dGVQb3NpdGlvbihhYnNvbHV0ZVBvc2l0aW9uKTtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0bCc6XG4gICAgY2FzZSAnYnInOlxuICAgICAgcmV0dXJuIFthYnNvbHV0ZVBvc2l0aW9uLnRsLCBhYnNvbHV0ZVBvc2l0aW9uLmJyXTtcbiAgICBjYXNlICd0cic6XG4gICAgY2FzZSAnYmwnOlxuICAgICAgcmV0dXJuIFthYnNvbHV0ZVBvc2l0aW9uLnRyLCBhYnNvbHV0ZVBvc2l0aW9uLmJsXTtcbiAgICBjYXNlICd0JzpcbiAgICBjYXNlICdiJzpcbiAgICAgIHJldHVybiBbdmVydGljYWxBbmRIb3Jpem9udGFsUG9zaXRpb24udCwgdmVydGljYWxBbmRIb3Jpem9udGFsUG9zaXRpb24uYl07XG4gICAgY2FzZSAnbCc6XG4gICAgY2FzZSAncic6XG4gICAgICByZXR1cm4gW3ZlcnRpY2FsQW5kSG9yaXpvbnRhbFBvc2l0aW9uLmwsIHZlcnRpY2FsQW5kSG9yaXpvbnRhbFBvc2l0aW9uLnJdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFBvaW50QnlFbmRQb2ludGVyKGRpcmVjdGlvbjogSVJlY3REaXJlY3Rpb24sIGVuZFBvaW50ZXI6IFtudW1iZXIsIG51bWJlcl0sIGxpbmU6IFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RsJzpcbiAgICBjYXNlICd0cic6XG4gICAgICBpZiAoZW5kUG9pbnRlclsxXSA+PSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UG9pbnRJbkxpbmUoJ3knLCBlbmRQb2ludGVyWzBdLCBsaW5lKSkge1xuICAgICAgICByZXR1cm4gW2VuZFBvaW50ZXJbMF0sIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRQb2ludEluTGluZSgneScsIGVuZFBvaW50ZXJbMF0sIGxpbmUpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFBvaW50SW5MaW5lKCd4JywgZW5kUG9pbnRlclsxXSwgbGluZSksIGVuZFBvaW50ZXJbMV1dO1xuICAgICAgfVxuICAgIGNhc2UgJ2JsJzpcbiAgICBjYXNlICdicic6XG4gICAgICBpZiAoZW5kUG9pbnRlclsxXSA+PSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UG9pbnRJbkxpbmUoJ3knLCBlbmRQb2ludGVyWzBdLCBsaW5lKSkge1xuICAgICAgICByZXR1cm4gW0NlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRQb2ludEluTGluZSgneCcsIGVuZFBvaW50ZXJbMV0sIGxpbmUpLCBlbmRQb2ludGVyWzFdXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbZW5kUG9pbnRlclswXSwgQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFBvaW50SW5MaW5lKCd5JywgZW5kUG9pbnRlclswXSwgbGluZSldO1xuICAgICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEdyb3VwUmVjdEJ5RGlyZWN0aW9uUG9pbnQoZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbiwgYWJzb2x1dGVQb2ludDogSUFic29sdXRlUG9zaXRpb24sIHBvaW50OiBbbnVtYmVyLCBudW1iZXJdKTogSURPTVJlY3Qge1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RsJzpcbiAgICAgIHJldHVybiB7IGxlZnQ6IHBvaW50WzBdLCB0b3A6IHBvaW50WzFdLCB3aWR0aDogYWJzb2x1dGVQb2ludC50clswXSAtIHBvaW50WzBdLCBoZWlnaHQ6IGFic29sdXRlUG9pbnQuYmxbMV0gLSBwb2ludFsxXSB9O1xuICAgIGNhc2UgJ3RyJzpcbiAgICAgIHJldHVybiB7IGxlZnQ6IGFic29sdXRlUG9pbnQudGxbMF0sIHRvcDogcG9pbnRbMV0sIHdpZHRoOiBwb2ludFswXSAtIGFic29sdXRlUG9pbnQudGxbMF0sIGhlaWdodDogYWJzb2x1dGVQb2ludC5iclsxXSAtIHBvaW50WzFdIH07XG4gICAgY2FzZSAnYnInOlxuICAgICAgcmV0dXJuIHsgbGVmdDogYWJzb2x1dGVQb2ludC50bFswXSwgdG9wOiBhYnNvbHV0ZVBvaW50LnRsWzFdLCB3aWR0aDogcG9pbnRbMF0gLSBhYnNvbHV0ZVBvaW50LmJsWzBdLCBoZWlnaHQ6IHBvaW50WzFdIC0gYWJzb2x1dGVQb2ludC50clsxXSB9O1xuICAgIGNhc2UgJ2JsJzpcbiAgICAgIHJldHVybiB7IGxlZnQ6IHBvaW50WzBdLCB0b3A6IGFic29sdXRlUG9pbnQudGxbMV0sIHdpZHRoOiBhYnNvbHV0ZVBvaW50LmJyWzBdIC0gcG9pbnRbMF0sIGhlaWdodDogcG9pbnRbMV0gLSBhYnNvbHV0ZVBvaW50LnRsWzFdIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RE9NUmVjdEJ5RGlyZWN0aW9uQW5kUG9zaXRpb24oZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbiwgcG9zaXRpb246IElBYnNvbHV0ZVBvc2l0aW9uLCBlbmRQb2ludGVyOiBbbnVtYmVyLCBudW1iZXJdKTogSURPTVJlY3Qge1xuICBjb25zdCB7IGJsLCBiciwgdGwsIHRyIH0gPSBwb3NpdGlvbjtcbiAgbGV0IG5ld1RMUG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gIGxldCBuZXdUUlBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICBsZXQgbmV3QkxQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgbGV0IG5ld0JSUG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndGwnOlxuICAgICAgbmV3VFJQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KGJyLCB0ciwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYnIsIGJsLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsOiBlbmRQb2ludGVyLCB0cjogbmV3VFJQb2ludCwgYmw6IG5ld0JMUG9pbnQsIGJyIH0pO1xuICAgIGNhc2UgJ3RyJzpcbiAgICAgIG5ld1RMUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludChibCwgdGwsIGVuZFBvaW50ZXIpO1xuICAgICAgbmV3QlJQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KGJsLCBiciwgZW5kUG9pbnRlcik7XG4gICAgICByZXR1cm4gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFJlbGF0aXZlUG9zaXRpb24oeyB0bDogbmV3VExQb2ludCwgdHI6IGVuZFBvaW50ZXIsIGJsLCBicjogbmV3QlJQb2ludCB9KTtcbiAgICBjYXNlICdibCc6XG4gICAgICBuZXdUTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodHIsIHRsLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JSUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludCh0ciwgYnIsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGw6IG5ld1RMUG9pbnQsIHRyLCBibDogZW5kUG9pbnRlciwgYnI6IG5ld0JSUG9pbnQgfSk7XG4gICAgY2FzZSAnYnInOlxuICAgICAgbmV3VFJQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KHRsLCB0ciwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodGwsIGJsLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsLCB0cjogbmV3VFJQb2ludCwgYmw6IG5ld0JMUG9pbnQsIGJyOiBlbmRQb2ludGVyIH0pO1xuICAgIGNhc2UgJ3QnOlxuICAgICAgbmV3VExQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KGJsLCB0bCwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdUUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYnIsIHRyLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsOiBuZXdUTFBvaW50LCB0cjogbmV3VFJQb2ludCwgYmwsIGJyIH0pO1xuICAgIGNhc2UgJ3InOlxuICAgICAgbmV3VFJQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KHRsLCB0ciwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYmwsIGJyLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsLCB0cjogbmV3VFJQb2ludCwgYmwsIGJyOiBuZXdCUlBvaW50IH0pO1xuICAgIGNhc2UgJ2InOlxuICAgICAgbmV3QkxQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KHRsLCBibCwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodHIsIGJyLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsLCB0ciwgYmw6IG5ld0JMUG9pbnQsIGJyOiBuZXdCUlBvaW50IH0pO1xuICAgIGNhc2UgJ2wnOlxuICAgICAgbmV3VExQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KHRyLCB0bCwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYnIsIGJsLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsOiBuZXdUTFBvaW50LCB0ciwgYmw6IG5ld0JMUG9pbnQsIGJyIH0pO1xuICB9XG59XG4iLCI8Y2Utcm90YXRlLWhhbmRsZSAqbmdJZj1cIihzZWxlY3RlZFNpemUkIHwgYXN5bmMpID09PSAxXCI+PC9jZS1yb3RhdGUtaGFuZGxlPlxuPGRpdlxuICAqbmdJZj1cInNlbGVjdGVkU2l6ZSQgfCBhc3luY1wiXG4gIGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSB0XCJcbiAgY2VEcmFnZ2FibGVcbiAgKGNlT25TdGFydCk9XCJyZXNpemVTdGFydCgkZXZlbnQpXCJcbiAgKGNlT25Nb3ZlKT1cInJlc2l6aW5nKCRldmVudCwgJ3QnKVwiXG4gIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiXG4+PC9kaXY+XG48ZGl2XG4gICpuZ0lmPVwic2VsZWN0ZWRTaXplJCB8IGFzeW5jXCJcbiAgY2xhc3M9XCJyZXNpemFibGUtaGFuZGxlIHJcIlxuICBjZURyYWdnYWJsZVxuICAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIlxuICAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAncicpXCJcbiAgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCJcbj48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJzZWxlY3RlZFNpemUkIHwgYXN5bmNcIlxuICBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgYlwiXG4gIGNlRHJhZ2dhYmxlXG4gIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiXG4gIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICdiJylcIlxuICAoY2VPblN0b3ApPVwicmVzaXplRW5kKClcIlxuPjwvZGl2PlxuPGRpdlxuICAqbmdJZj1cInNlbGVjdGVkU2l6ZSQgfCBhc3luY1wiXG4gIGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSBsXCJcbiAgY2VEcmFnZ2FibGVcbiAgKGNlT25TdGFydCk9XCJyZXNpemVTdGFydCgkZXZlbnQpXCJcbiAgKGNlT25Nb3ZlKT1cInJlc2l6aW5nKCRldmVudCwgJ2wnKVwiXG4gIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiXG4+PC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSB0clwiIGNlRHJhZ2dhYmxlIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICd0cicpXCIgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSBiclwiIGNlRHJhZ2dhYmxlIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICdicicpXCIgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSB0bFwiIGNlRHJhZ2dhYmxlIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICd0bCcpXCIgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSBibFwiIGNlRHJhZ2dhYmxlIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICdibCcpXCIgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCI+PC9kaXY+XG48ZGl2ICpuZ0lmPVwiKHNlbGVjdGVkU2l6ZSQgfCBhc3luYykgPT09IDFcIiBjbGFzcz1cInQgY2lyY2xlXCI+PC9kaXY+XG48ZGl2ICpuZ0lmPVwiKHNlbGVjdGVkU2l6ZSQgfCBhc3luYykgPT09IDFcIiBjbGFzcz1cInIgY2lyY2xlXCI+PC9kaXY+XG48ZGl2ICpuZ0lmPVwiKHNlbGVjdGVkU2l6ZSQgfCBhc3luYykgPT09IDFcIiBjbGFzcz1cImIgY2lyY2xlXCI+PC9kaXY+XG48ZGl2ICpuZ0lmPVwiKHNlbGVjdGVkU2l6ZSQgfCBhc3luYykgPT09IDFcIiBjbGFzcz1cImwgY2lyY2xlXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidHIgY2lyY2xlXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiYnIgY2lyY2xlXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwidGwgY2lyY2xlXCI+PC9kaXY+XG48ZGl2IGNsYXNzPVwiYmwgY2lyY2xlXCI+PC9kaXY+XG4iXX0=