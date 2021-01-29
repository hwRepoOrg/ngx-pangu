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
        this.hasSelected$ = this.store.selectDifferent((state) => !!state.selected.size);
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
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 9, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(3, 11, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(5, 13, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(7, 15, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(9, 17, ctx.hasSelected$));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(15, 19, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(17, 21, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(19, 23, ctx.hasSelected$));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(21, 25, ctx.hasSelected$));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3Jlc2l6ZS1oYW5kbGUvcmVzaXplLWhhbmRsZS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9yZXNpemUtaGFuZGxlL3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0csT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsY0FBYyxFQUErQyxNQUFNLDhCQUE4QixDQUFDOzs7OztJQ0ozRyxtQ0FBa0U7Ozs7SUFDbEUsK0JBT0M7SUFIQyw0TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7O0lBQ1AsK0JBT0M7SUFIQyw4TUFBaUMseUxBQ0osR0FBRyxLQURDLGlMQUFBO0lBR2xDLGlCQUFNOzs7SUFLUCwwQkFBeUQ7OztJQUN6RCwwQkFBeUQ7OztJQUN6RCwwQkFBeUQ7OztJQUN6RCwwQkFBeUQ7O0FEMUJ6RCxNQUFNLE9BQU8scUJBQXFCO0lBMEJoQyxZQUFvQixLQUEwQixFQUFVLEtBQXFCLEVBQVMsTUFBK0I7UUFBakcsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFTLFdBQU0sR0FBTixNQUFNLENBQXlCO1FBeEI5RyxZQUFPLEdBQUcsTUFBTSxDQUFDO1FBc0JoQiw2QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBNkIsQ0FBQztRQUd0RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsS0FBSzthQUNQLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUNwSCxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ2hELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUJELElBQ1csU0FBUzs7UUFDbEIsT0FBTyxVQUFVLE1BQUEsSUFBSSxDQUFDLE1BQU0sbUNBQUksQ0FBQyxNQUFNLENBQUM7SUFDMUMsQ0FBQztJQTJCRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUM3QyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQW1CO1FBQzdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDdEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9FLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3BJLElBQUksQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUNqRSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLEVBQ3BDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixHQUFHO1lBQ3pCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUN4QyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNoRyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUMzQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BELE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FDekQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDMUIsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxNQUFNLENBQ1osQ0FBQztZQUNGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsbUJBQU0sSUFBSSxDQUFDLGlCQUFpQixHQUFJLG9CQUFvQixDQUFDLENBQUM7Z0JBQ3RILElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQW1CLEVBQUUsU0FBeUI7UUFDckQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDekUsTUFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5SCxRQUFRLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3ZCLEtBQUssT0FBTztvQkFDVixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUNyQyxNQUFNO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1FBQ2hDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsU0FBeUIsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUNoRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQzlDLE1BQU0sVUFBVSxHQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDMUYsTUFBTSxJQUFJLEdBQUcsMkJBQTJCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3hGLE1BQU0sUUFBUSxHQUFHLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsTUFBTSxZQUFZLEdBQWEsNEJBQTRCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNySCxNQUFNLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUMvRCxZQUFZLENBQUMsR0FBRyxDQUNkLEVBQUUsRUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO2dCQUM3QixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7Z0JBQ3BHLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQztnQkFDcEcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsR0FBRyxDQUFDO2dCQUNwRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxHQUFHLENBQUM7YUFDckcsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxZQUFZLENBQUMsU0FBeUIsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUM1RCxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN0QyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQzlDLE1BQU0sVUFBVSxHQUFxQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLHdCQUF3QixDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRTtZQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsZUFBZSxDQUNiLElBQUksR0FBRyxDQUFtQixDQUFDLENBQUMsRUFBRSxFQUFFLGdDQUFnQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JHLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7MEZBL0lVLHFCQUFxQjswREFBckIscUJBQXFCOzs7UUNkbEMsZ0dBQWtFOztRQUNsRSxzRUFPTzs7UUFDUCxzRUFPTzs7UUFDUCxzRUFPTzs7UUFDUCxzRUFPTzs7UUFDUCwrQkFBNEk7UUFBL0YsOEdBQWEsdUJBQW1CLElBQUMsK0ZBQWEscUJBQWlCLElBQUksQ0FBQyxJQUFuQyx5RkFBaUQsZUFBVyxJQUE1RDtRQUE4RCxpQkFBTTtRQUNsSiwrQkFBNEk7UUFBL0YsOEdBQWEsdUJBQW1CLElBQUMsK0ZBQWEscUJBQWlCLElBQUksQ0FBQyxJQUFuQyx5RkFBaUQsZUFBVyxJQUE1RDtRQUE4RCxpQkFBTTtRQUNsSiwrQkFBNEk7UUFBL0YsOEdBQWEsdUJBQW1CLElBQUMsK0ZBQWEscUJBQWlCLElBQUksQ0FBQyxJQUFuQyx5RkFBaUQsZUFBVyxJQUE1RDtRQUE4RCxpQkFBTTtRQUNsSiwrQkFBNEk7UUFBL0YsOEdBQWEsdUJBQW1CLElBQUMsK0ZBQWEscUJBQWlCLElBQUksQ0FBQyxJQUFuQyx5RkFBaUQsZUFBVyxJQUE1RDtRQUE4RCxpQkFBTTtRQUNsSix3RUFBeUQ7O1FBQ3pELHlFQUF5RDs7UUFDekQseUVBQXlEOztRQUN6RCx5RUFBeUQ7O1FBQ3pELDJCQUE2QjtRQUM3QiwyQkFBNkI7UUFDN0IsMkJBQTZCO1FBQzdCLDJCQUE2Qjs7UUE1Q1YsNkRBQTBCO1FBRTFDLGVBQTBCO1FBQTFCLDhEQUEwQjtRQVExQixlQUEwQjtRQUExQiw4REFBMEI7UUFRMUIsZUFBMEI7UUFBMUIsOERBQTBCO1FBUTFCLGVBQTBCO1FBQTFCLDhEQUEwQjtRQVd2QixlQUEwQjtRQUExQiwrREFBMEI7UUFDMUIsZUFBMEI7UUFBMUIsK0RBQTBCO1FBQzFCLGVBQTBCO1FBQTFCLCtEQUEwQjtRQUMxQixlQUEwQjtRQUExQiwrREFBMEI7O2tERDFCbkIscUJBQXFCO2NBUGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO29IQUdRLE9BQU87a0JBRGIsV0FBVzttQkFBQyxlQUFlO1lBR3JCLEtBQUs7a0JBRFgsV0FBVzttQkFBQyxnQkFBZ0I7WUFHdEIsTUFBTTtrQkFEWixXQUFXO21CQUFDLGlCQUFpQjtZQUd2QixJQUFJO2tCQURWLFdBQVc7bUJBQUMsZUFBZTtZQUdyQixHQUFHO2tCQURULFdBQVc7bUJBQUMsY0FBYztZQUdoQixTQUFTO2tCQURuQixXQUFXO21CQUFDLGlCQUFpQjs7QUF1SWhDLFNBQVMsMkJBQTJCLENBQUMsU0FBeUIsRUFBRSxnQkFBbUM7SUFDakcsTUFBTSw2QkFBNkIsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLCtDQUErQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDOUgsUUFBUSxTQUFTLEVBQUU7UUFDakIsS0FBSyxJQUFJLENBQUM7UUFDVixLQUFLLElBQUk7WUFDUCxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELEtBQUssSUFBSSxDQUFDO1FBQ1YsS0FBSyxJQUFJO1lBQ1AsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssR0FBRztZQUNOLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUUsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQyxFQUFFLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzdFO0FBQ0gsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsU0FBeUIsRUFBRSxVQUE0QixFQUFFLElBQTBDO0lBQy9ILFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssSUFBSSxDQUFDO1FBQ1YsS0FBSyxJQUFJO1lBQ1AsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRTtnQkFDbkYsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDeEY7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEY7UUFDSCxLQUFLLElBQUksQ0FBQztRQUNWLEtBQUssSUFBSTtZQUNQLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ25GLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hGO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3hGO0tBQ0o7QUFDSCxDQUFDO0FBRUQsU0FBUyw0QkFBNEIsQ0FBQyxTQUF5QixFQUFFLGFBQWdDLEVBQUUsS0FBdUI7SUFDeEgsUUFBUSxTQUFTLEVBQUU7UUFDakIsS0FBSyxJQUFJO1lBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDMUgsS0FBSyxJQUFJO1lBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3JJLEtBQUssSUFBSTtZQUNQLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDaEosS0FBSyxJQUFJO1lBQ1AsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0tBQ3RJO0FBQ0gsQ0FBQztBQUVELFNBQVMsZ0NBQWdDLENBQUMsU0FBeUIsRUFBRSxRQUEyQixFQUFFLFVBQTRCO0lBQzVILE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUM7SUFDcEMsSUFBSSxVQUE0QixDQUFDO0lBQ2pDLElBQUksVUFBNEIsQ0FBQztJQUNqQyxJQUFJLFVBQTRCLENBQUM7SUFDakMsSUFBSSxVQUE0QixDQUFDO0lBQ2pDLFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssSUFBSTtZQUNQLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLEtBQUssSUFBSTtZQUNQLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLEtBQUssSUFBSTtZQUNQLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLEtBQUssSUFBSTtZQUNQLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNHLEtBQUssR0FBRztZQUNOLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDL0YsS0FBSyxHQUFHO1lBQ04sVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixVQUFVLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pGLE9BQU8sY0FBYyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUMvRixLQUFLLEdBQUc7WUFDTixVQUFVLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ2pGLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQy9GLEtBQUssR0FBRztZQUNOLFVBQVUsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLHlCQUF5QixDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDakYsVUFBVSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNqRixPQUFPLGNBQWMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEc7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB1cGRhdGVOb2Rlc1NpemUgfSBmcm9tICcuLi8uLi9hY3Rpb25zJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgQ2VVdGlsc1NlcnZpY2UsIElBYnNvbHV0ZVBvc2l0aW9uLCBJRE9NUmVjdCwgSVJlY3REaXJlY3Rpb24gfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IElDYW52YXNQb3NpdGlvbiwgSU5vZGUsIElTdG9yZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2UtcmVzaXplLWhhbmRsZSxbY2VSZXNpemVIYW5kbGVdJyxcbiAgdGVtcGxhdGVVcmw6ICdyZXNpemUtaGFuZGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50Lmxlc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJlc2l6ZUhhbmRsZUNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuZGlzcGxheScpXG4gIHB1YmxpYyBkaXNwbGF5ID0gJ25vbmUnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgcHVibGljIHdpZHRoOiBudW1iZXI7XG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgcHVibGljIGhlaWdodDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQucHgnKVxuICBwdWJsaWMgbGVmdDogbnVtYmVyO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRvcC5weCcpXG4gIHB1YmxpYyB0b3A6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS50cmFuc2Zvcm0nKVxuICBwdWJsaWMgZ2V0IHRyYW5zZm9ybSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgcm90YXRlKCR7dGhpcy5yb3RhdGUgPz8gMH1kZWcpYDtcbiAgfVxuICBwdWJsaWMgc2VsZWN0ZWQ6IFNldDxzdHJpbmc+O1xuICBwdWJsaWMgaGFzU2VsZWN0ZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBwcml2YXRlIGNhbnZhc1Bvc2l0aW9uOiBJQ2FudmFzUG9zaXRpb247XG4gIHByaXZhdGUgcm90YXRlOiBudW1iZXI7XG4gIHByaXZhdGUgbm9kZXM6IElOb2RlW107XG4gIHByaXZhdGUgcmVzaXplTW9kZTogJ0dST1VQJyB8ICdTSU5HTEUnO1xuICBwcml2YXRlIGdyb3VwUmVjdFNuYXBzaG90OiBJRE9NUmVjdDtcbiAgcHJpdmF0ZSBncm91cEFic29sdXRlUG9zaXRpb25TbmFwc2hvdDogSUFic29sdXRlUG9zaXRpb247XG4gIHByaXZhdGUgcmVzaXplUG9pbnRTbmFwc2hvdDogeyBhYnNvbHV0ZTogW251bWJlciwgbnVtYmVyXTsgcmVsYXRpdmU6IFtudW1iZXIsIG51bWJlcl0gfTtcbiAgcHJpdmF0ZSBub2RlUG9zaXRpb25TbmFwc2hvdExpc3QgPSBuZXcgTWFwPHN0cmluZywgSUFic29sdXRlUG9zaXRpb24+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogRWRpdG9yU3RvcmU8SVN0b3JlPiwgcHJpdmF0ZSB1dGlsczogQ2VVdGlsc1NlcnZpY2UsIHB1YmxpYyBlbGVSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7XG4gICAgdGhpcy5oYXNTZWxlY3RlZCQgPSB0aGlzLnN0b3JlLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+ICEhc3RhdGUuc2VsZWN0ZWQuc2l6ZSk7XG4gICAgdGhpcy5zdG9yZVxuICAgICAgLnNlbGVjdERpZmZlcmVudCgoc3RhdGUpID0+ICh7IHNlbGVjdGVkOiBzdGF0ZS5zZWxlY3RlZCwgY2FudmFzUG9zaXRpb246IHN0YXRlLmNhbnZhc1Bvc2l0aW9uLCBub2Rlczogc3RhdGUubm9kZXMgfSkpXG4gICAgICAuc3Vic2NyaWJlKCh7IHNlbGVjdGVkLCBjYW52YXNQb3NpdGlvbiwgbm9kZXMgfSkgPT4ge1xuICAgICAgICB0aGlzLmRpc3BsYXkgPSBzZWxlY3RlZC5zaXplID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgICB0aGlzLmNhbnZhc1Bvc2l0aW9uID0gY2FudmFzUG9zaXRpb247XG4gICAgICAgIHRoaXMubm9kZXMgPSBub2RlcztcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuc2l6ZSkge1xuICAgICAgICAgIHRoaXMucmVmcmVzaFJlc2l6ZUhhbmRsZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2hSZXNpemVIYW5kbGUoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuc2VsZWN0ZWQgfHwgIXRoaXMubm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgcm90YXRlIH0gPSB0aGlzLnV0aWxzLmdldFJlc2l6ZUJvdW5kaW5nQm94KFsuLi50aGlzLnNlbGVjdGVkXSwgdGhpcy5ub2Rlcyk7XG4gICAgdGhpcy5sZWZ0ID0gbGVmdCAqIHRoaXMuY2FudmFzUG9zaXRpb24uc2NhbGU7XG4gICAgdGhpcy50b3AgPSB0b3AgKiB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlO1xuICAgIHRoaXMud2lkdGggPSB3aWR0aCAqIHRoaXMuY2FudmFzUG9zaXRpb24uc2NhbGU7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQgKiB0aGlzLmNhbnZhc1Bvc2l0aW9uLnNjYWxlO1xuICAgIHRoaXMucm90YXRlID0gcm90YXRlO1xuICB9XG5cbiAgcmVzaXplU3RhcnQoZXZlbnQ6IFBvaW50ZXJFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5jYW52YXNQb3NpdGlvbjtcbiAgICBjb25zdCBjYW52YXNSZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2UtY2FudmFzJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5ncm91cFJlY3RTbmFwc2hvdCA9IHsgd2lkdGg6IHRoaXMud2lkdGggLyBzY2FsZSwgaGVpZ2h0OiB0aGlzLmhlaWdodCAvIHNjYWxlLCBsZWZ0OiB0aGlzLmxlZnQgLyBzY2FsZSwgdG9wOiB0aGlzLnRvcCAvIHNjYWxlIH07XG4gICAgdGhpcy5ncm91cEFic29sdXRlUG9zaXRpb25TbmFwc2hvdCA9IHRoaXMudXRpbHMuZ2V0QWJzb2x1dGVQb3NpdGlvbihcbiAgICAgICh0aGlzLmxlZnQgKyB0aGlzLndpZHRoIC8gMikgLyBzY2FsZSxcbiAgICAgICh0aGlzLnRvcCArIHRoaXMuaGVpZ2h0IC8gMikgLyBzY2FsZSxcbiAgICAgIHRoaXMud2lkdGggLyBzY2FsZSxcbiAgICAgIHRoaXMuaGVpZ2h0IC8gc2NhbGVcbiAgICApO1xuICAgIHRoaXMucmVzaXplUG9pbnRTbmFwc2hvdCA9IHtcbiAgICAgIGFic29sdXRlOiBbZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WV0sXG4gICAgICByZWxhdGl2ZTogWyhldmVudC5jbGllbnRYIC0gY2FudmFzUmVjdC5sZWZ0KSAvIHNjYWxlLCAoZXZlbnQuY2xpZW50WSAtIGNhbnZhc1JlY3QudG9wKSAvIHNjYWxlXSxcbiAgICB9O1xuICAgIHRoaXMuc2VsZWN0ZWQuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnV0aWxzLmdldE5vZGVCeUlkKGlkLCB0aGlzLm5vZGVzKTtcbiAgICAgIGNvbnN0IG5vZGVBYnNvbHV0ZVBvc2l0aW9uID0gdGhpcy51dGlscy5nZXRBYnNvbHV0ZVBvc2l0aW9uKFxuICAgICAgICBub2RlLmxlZnQgKyBub2RlLndpZHRoIC8gMixcbiAgICAgICAgbm9kZS50b3AgKyBub2RlLmhlaWdodCAvIDIsXG4gICAgICAgIG5vZGUud2lkdGgsXG4gICAgICAgIG5vZGUuaGVpZ2h0LFxuICAgICAgICBub2RlLnJvdGF0ZVxuICAgICAgKTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkLnNpemUgPiAxKSB7XG4gICAgICAgIHRoaXMucmVzaXplTW9kZSA9ICdHUk9VUCc7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRQb3NpdGlvbiA9IHRoaXMudXRpbHMuZ2V0SXRlbVBlcmNlbnRQb3NpdGlvbkluR3JvdXAoeyAuLi50aGlzLmdyb3VwUmVjdFNuYXBzaG90IH0sIG5vZGVBYnNvbHV0ZVBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5ub2RlUG9zaXRpb25TbmFwc2hvdExpc3Quc2V0KGlkLCBwZXJjZW50UG9zaXRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXNpemVNb2RlID0gJ1NJTkdMRSc7XG4gICAgICAgIHRoaXMubm9kZVBvc2l0aW9uU25hcHNob3RMaXN0LnNldChpZCwgbm9kZUFic29sdXRlUG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzaXppbmcoZXZlbnQ6IFBvaW50ZXJFdmVudCwgZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbik6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc2l6ZVBvaW50U25hcHNob3QgJiYgdGhpcy5ncm91cFJlY3RTbmFwc2hvdCAmJiB0aGlzLnJlc2l6ZU1vZGUpIHtcbiAgICAgIGNvbnN0IFtteCwgbXldID0gW2V2ZW50LmNsaWVudFggLSB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3QuYWJzb2x1dGVbMF0sIGV2ZW50LmNsaWVudFkgLSB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3QuYWJzb2x1dGVbMV1dO1xuICAgICAgc3dpdGNoICh0aGlzLnJlc2l6ZU1vZGUpIHtcbiAgICAgICAgY2FzZSAnR1JPVVAnOlxuICAgICAgICAgIHRoaXMucmVzaXppbmdOb2RlTGlzdChkaXJlY3Rpb24sIG14LCBteSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NJTkdMRSc6XG4gICAgICAgICAgdGhpcy5yZXNpemluZ05vZGUoZGlyZWN0aW9uLCBteCwgbXkpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2l6ZUVuZCgpOiB2b2lkIHtcbiAgICB0aGlzLmdyb3VwUmVjdFNuYXBzaG90ID0gbnVsbDtcbiAgICB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3QgPSBudWxsO1xuICAgIHRoaXMubm9kZVBvc2l0aW9uU25hcHNob3RMaXN0LmNsZWFyKCk7XG4gIH1cblxuICByZXNpemluZ05vZGVMaXN0KGRpcmVjdGlvbjogSVJlY3REaXJlY3Rpb24sIG14OiBudW1iZXIsIG15OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB7IHNjYWxlIH0gPSB0aGlzLmNhbnZhc1Bvc2l0aW9uO1xuICAgIGNvbnN0IHsgcmVsYXRpdmUgfSA9IHRoaXMucmVzaXplUG9pbnRTbmFwc2hvdDtcbiAgICBjb25zdCBlbmRQb2ludGVyOiBbbnVtYmVyLCBudW1iZXJdID0gW3JlbGF0aXZlWzBdICsgbXggLyBzY2FsZSwgcmVsYXRpdmVbMV0gKyBteSAvIHNjYWxlXTtcbiAgICBjb25zdCBsaW5lID0gZ2V0R3JvdXBEaWFnb25hbEJ5RGlyZWN0aW9uKGRpcmVjdGlvbiwgdGhpcy5ncm91cEFic29sdXRlUG9zaXRpb25TbmFwc2hvdCk7XG4gICAgY29uc3QgbmV3UG9pbnQgPSBnZXRQb2ludEJ5RW5kUG9pbnRlcihkaXJlY3Rpb24sIGVuZFBvaW50ZXIsIGxpbmUpO1xuICAgIGNvbnN0IG5ld0dyb3VwUmVjdDogSURPTVJlY3QgPSBnZXRHcm91cFJlY3RCeURpcmVjdGlvblBvaW50KGRpcmVjdGlvbiwgdGhpcy5ncm91cEFic29sdXRlUG9zaXRpb25TbmFwc2hvdCwgbmV3UG9pbnQpO1xuICAgIGNvbnN0IG5vZGVzU2l6ZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBJRE9NUmVjdD4oKTtcbiAgICB0aGlzLm5vZGVQb3NpdGlvblNuYXBzaG90TGlzdC5mb3JFYWNoKCh7IHRsLCBibCwgYnIsIHRyIH0sIGlkKSA9PiB7XG4gICAgICBub2Rlc1NpemVNYXAuc2V0KFxuICAgICAgICBpZCxcbiAgICAgICAgdGhpcy51dGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHtcbiAgICAgICAgICBibDogW2JsWzBdICogbmV3R3JvdXBSZWN0LndpZHRoICsgbmV3R3JvdXBSZWN0LmxlZnQsIGJsWzFdICogbmV3R3JvdXBSZWN0LmhlaWdodCArIG5ld0dyb3VwUmVjdC50b3BdLFxuICAgICAgICAgIGJyOiBbYnJbMF0gKiBuZXdHcm91cFJlY3Qud2lkdGggKyBuZXdHcm91cFJlY3QubGVmdCwgYnJbMV0gKiBuZXdHcm91cFJlY3QuaGVpZ2h0ICsgbmV3R3JvdXBSZWN0LnRvcF0sXG4gICAgICAgICAgdGw6IFt0bFswXSAqIG5ld0dyb3VwUmVjdC53aWR0aCArIG5ld0dyb3VwUmVjdC5sZWZ0LCB0bFsxXSAqIG5ld0dyb3VwUmVjdC5oZWlnaHQgKyBuZXdHcm91cFJlY3QudG9wXSxcbiAgICAgICAgICB0cjogW3RyWzBdICogbmV3R3JvdXBSZWN0LndpZHRoICsgbmV3R3JvdXBSZWN0LmxlZnQsIHRyWzFdICogbmV3R3JvdXBSZWN0LmhlaWdodCArIG5ld0dyb3VwUmVjdC50b3BdLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKHVwZGF0ZU5vZGVzU2l6ZShub2Rlc1NpemVNYXApKTtcbiAgfVxuXG4gIHJlc2l6aW5nTm9kZShkaXJlY3Rpb246IElSZWN0RGlyZWN0aW9uLCBteDogbnVtYmVyLCBteTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5jYW52YXNQb3NpdGlvbjtcbiAgICBjb25zdCB7IHJlbGF0aXZlIH0gPSB0aGlzLnJlc2l6ZVBvaW50U25hcHNob3Q7XG4gICAgY29uc3QgZW5kUG9pbnRlcjogW251bWJlciwgbnVtYmVyXSA9IFtyZWxhdGl2ZVswXSArIG14IC8gc2NhbGUsIHJlbGF0aXZlWzFdICsgbXkgLyBzY2FsZV07XG4gICAgdGhpcy5ub2RlUG9zaXRpb25TbmFwc2hvdExpc3QuZm9yRWFjaCgocG9zaXRpb24sIGlkKSA9PiB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICB1cGRhdGVOb2Rlc1NpemUoXG4gICAgICAgICAgbmV3IE1hcDxzdHJpbmcsIElET01SZWN0PihbW2lkLCBnZXRET01SZWN0QnlEaXJlY3Rpb25BbmRQb3NpdGlvbihkaXJlY3Rpb24sIHBvc2l0aW9uLCBlbmRQb2ludGVyKV1dKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEdyb3VwRGlhZ29uYWxCeURpcmVjdGlvbihkaXJlY3Rpb246IElSZWN0RGlyZWN0aW9uLCBhYnNvbHV0ZVBvc2l0aW9uOiBJQWJzb2x1dGVQb3NpdGlvbik6IFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXSB7XG4gIGNvbnN0IHZlcnRpY2FsQW5kSG9yaXpvbnRhbFBvc2l0aW9uID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsQW5kSG9yaXpvbnRhbFBvaW50QnlBYnNvbHV0ZVBvc2l0aW9uKGFic29sdXRlUG9zaXRpb24pO1xuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RsJzpcbiAgICBjYXNlICdicic6XG4gICAgICByZXR1cm4gW2Fic29sdXRlUG9zaXRpb24udGwsIGFic29sdXRlUG9zaXRpb24uYnJdO1xuICAgIGNhc2UgJ3RyJzpcbiAgICBjYXNlICdibCc6XG4gICAgICByZXR1cm4gW2Fic29sdXRlUG9zaXRpb24udHIsIGFic29sdXRlUG9zaXRpb24uYmxdO1xuICAgIGNhc2UgJ3QnOlxuICAgIGNhc2UgJ2InOlxuICAgICAgcmV0dXJuIFt2ZXJ0aWNhbEFuZEhvcml6b250YWxQb3NpdGlvbi50LCB2ZXJ0aWNhbEFuZEhvcml6b250YWxQb3NpdGlvbi5iXTtcbiAgICBjYXNlICdsJzpcbiAgICBjYXNlICdyJzpcbiAgICAgIHJldHVybiBbdmVydGljYWxBbmRIb3Jpem9udGFsUG9zaXRpb24ubCwgdmVydGljYWxBbmRIb3Jpem9udGFsUG9zaXRpb24ucl07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UG9pbnRCeUVuZFBvaW50ZXIoZGlyZWN0aW9uOiBJUmVjdERpcmVjdGlvbiwgZW5kUG9pbnRlcjogW251bWJlciwgbnVtYmVyXSwgbGluZTogW1tudW1iZXIsIG51bWJlcl0sIFtudW1iZXIsIG51bWJlcl1dKTogW251bWJlciwgbnVtYmVyXSB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndGwnOlxuICAgIGNhc2UgJ3RyJzpcbiAgICAgIGlmIChlbmRQb2ludGVyWzFdID49IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRQb2ludEluTGluZSgneScsIGVuZFBvaW50ZXJbMF0sIGxpbmUpKSB7XG4gICAgICAgIHJldHVybiBbZW5kUG9pbnRlclswXSwgQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFBvaW50SW5MaW5lKCd5JywgZW5kUG9pbnRlclswXSwgbGluZSldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UG9pbnRJbkxpbmUoJ3gnLCBlbmRQb2ludGVyWzFdLCBsaW5lKSwgZW5kUG9pbnRlclsxXV07XG4gICAgICB9XG4gICAgY2FzZSAnYmwnOlxuICAgIGNhc2UgJ2JyJzpcbiAgICAgIGlmIChlbmRQb2ludGVyWzFdID49IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRQb2ludEluTGluZSgneScsIGVuZFBvaW50ZXJbMF0sIGxpbmUpKSB7XG4gICAgICAgIHJldHVybiBbQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFBvaW50SW5MaW5lKCd4JywgZW5kUG9pbnRlclsxXSwgbGluZSksIGVuZFBvaW50ZXJbMV1dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtlbmRQb2ludGVyWzBdLCBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UG9pbnRJbkxpbmUoJ3knLCBlbmRQb2ludGVyWzBdLCBsaW5lKV07XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0R3JvdXBSZWN0QnlEaXJlY3Rpb25Qb2ludChkaXJlY3Rpb246IElSZWN0RGlyZWN0aW9uLCBhYnNvbHV0ZVBvaW50OiBJQWJzb2x1dGVQb3NpdGlvbiwgcG9pbnQ6IFtudW1iZXIsIG51bWJlcl0pOiBJRE9NUmVjdCB7XG4gIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndGwnOlxuICAgICAgcmV0dXJuIHsgbGVmdDogcG9pbnRbMF0sIHRvcDogcG9pbnRbMV0sIHdpZHRoOiBhYnNvbHV0ZVBvaW50LnRyWzBdIC0gcG9pbnRbMF0sIGhlaWdodDogYWJzb2x1dGVQb2ludC5ibFsxXSAtIHBvaW50WzFdIH07XG4gICAgY2FzZSAndHInOlxuICAgICAgcmV0dXJuIHsgbGVmdDogYWJzb2x1dGVQb2ludC50bFswXSwgdG9wOiBwb2ludFsxXSwgd2lkdGg6IHBvaW50WzBdIC0gYWJzb2x1dGVQb2ludC50bFswXSwgaGVpZ2h0OiBhYnNvbHV0ZVBvaW50LmJyWzFdIC0gcG9pbnRbMV0gfTtcbiAgICBjYXNlICdicic6XG4gICAgICByZXR1cm4geyBsZWZ0OiBhYnNvbHV0ZVBvaW50LnRsWzBdLCB0b3A6IGFic29sdXRlUG9pbnQudGxbMV0sIHdpZHRoOiBwb2ludFswXSAtIGFic29sdXRlUG9pbnQuYmxbMF0sIGhlaWdodDogcG9pbnRbMV0gLSBhYnNvbHV0ZVBvaW50LnRyWzFdIH07XG4gICAgY2FzZSAnYmwnOlxuICAgICAgcmV0dXJuIHsgbGVmdDogcG9pbnRbMF0sIHRvcDogYWJzb2x1dGVQb2ludC50bFsxXSwgd2lkdGg6IGFic29sdXRlUG9pbnQuYnJbMF0gLSBwb2ludFswXSwgaGVpZ2h0OiBwb2ludFsxXSAtIGFic29sdXRlUG9pbnQudGxbMV0gfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRET01SZWN0QnlEaXJlY3Rpb25BbmRQb3NpdGlvbihkaXJlY3Rpb246IElSZWN0RGlyZWN0aW9uLCBwb3NpdGlvbjogSUFic29sdXRlUG9zaXRpb24sIGVuZFBvaW50ZXI6IFtudW1iZXIsIG51bWJlcl0pOiBJRE9NUmVjdCB7XG4gIGNvbnN0IHsgYmwsIGJyLCB0bCwgdHIgfSA9IHBvc2l0aW9uO1xuICBsZXQgbmV3VExQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgbGV0IG5ld1RSUG9pbnQ6IFtudW1iZXIsIG51bWJlcl07XG4gIGxldCBuZXdCTFBvaW50OiBbbnVtYmVyLCBudW1iZXJdO1xuICBsZXQgbmV3QlJQb2ludDogW251bWJlciwgbnVtYmVyXTtcbiAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0bCc6XG4gICAgICBuZXdUUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYnIsIHRyLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JMUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludChiciwgYmwsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGw6IGVuZFBvaW50ZXIsIHRyOiBuZXdUUlBvaW50LCBibDogbmV3QkxQb2ludCwgYnIgfSk7XG4gICAgY2FzZSAndHInOlxuICAgICAgbmV3VExQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KGJsLCB0bCwgZW5kUG9pbnRlcik7XG4gICAgICBuZXdCUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYmwsIGJyLCBlbmRQb2ludGVyKTtcbiAgICAgIHJldHVybiBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0UmVsYXRpdmVQb3NpdGlvbih7IHRsOiBuZXdUTFBvaW50LCB0cjogZW5kUG9pbnRlciwgYmwsIGJyOiBuZXdCUlBvaW50IH0pO1xuICAgIGNhc2UgJ2JsJzpcbiAgICAgIG5ld1RMUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludCh0ciwgdGwsIGVuZFBvaW50ZXIpO1xuICAgICAgbmV3QlJQb2ludCA9IENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KHRyLCBiciwgZW5kUG9pbnRlcik7XG4gICAgICByZXR1cm4gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFJlbGF0aXZlUG9zaXRpb24oeyB0bDogbmV3VExQb2ludCwgdHIsIGJsOiBlbmRQb2ludGVyLCBicjogbmV3QlJQb2ludCB9KTtcbiAgICBjYXNlICdicic6XG4gICAgICBuZXdUUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodGwsIHRyLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JMUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludCh0bCwgYmwsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGwsIHRyOiBuZXdUUlBvaW50LCBibDogbmV3QkxQb2ludCwgYnI6IGVuZFBvaW50ZXIgfSk7XG4gICAgY2FzZSAndCc6XG4gICAgICBuZXdUTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQoYmwsIHRsLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld1RSUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludChiciwgdHIsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGw6IG5ld1RMUG9pbnQsIHRyOiBuZXdUUlBvaW50LCBibCwgYnIgfSk7XG4gICAgY2FzZSAncic6XG4gICAgICBuZXdUUlBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodGwsIHRyLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JSUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludChibCwgYnIsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGwsIHRyOiBuZXdUUlBvaW50LCBibCwgYnI6IG5ld0JSUG9pbnQgfSk7XG4gICAgY2FzZSAnYic6XG4gICAgICBuZXdCTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodGwsIGJsLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JSUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludCh0ciwgYnIsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGwsIHRyLCBibDogbmV3QkxQb2ludCwgYnI6IG5ld0JSUG9pbnQgfSk7XG4gICAgY2FzZSAnbCc6XG4gICAgICBuZXdUTFBvaW50ID0gQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkLmdldFZlcnRpY2FsTGluZUNyb3NzUG9pbnQodHIsIHRsLCBlbmRQb2ludGVyKTtcbiAgICAgIG5ld0JMUG9pbnQgPSBDZVV0aWxzU2VydmljZS5zaGFyZWQuZ2V0VmVydGljYWxMaW5lQ3Jvc3NQb2ludChiciwgYmwsIGVuZFBvaW50ZXIpO1xuICAgICAgcmV0dXJuIENlVXRpbHNTZXJ2aWNlLnNoYXJlZC5nZXRSZWxhdGl2ZVBvc2l0aW9uKHsgdGw6IG5ld1RMUG9pbnQsIHRyLCBibDogbmV3QkxQb2ludCwgYnIgfSk7XG4gIH1cbn1cbiIsIjxjZS1yb3RhdGUtaGFuZGxlICpuZ0lmPVwiaGFzU2VsZWN0ZWQkIHwgYXN5bmNcIj48L2NlLXJvdGF0ZS1oYW5kbGU+XG48ZGl2XG4gICpuZ0lmPVwiaGFzU2VsZWN0ZWQkIHwgYXN5bmNcIlxuICBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgdFwiXG4gIGNlRHJhZ2dhYmxlXG4gIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiXG4gIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICd0JylcIlxuICAoY2VPblN0b3ApPVwicmVzaXplRW5kKClcIlxuPjwvZGl2PlxuPGRpdlxuICAqbmdJZj1cImhhc1NlbGVjdGVkJCB8IGFzeW5jXCJcbiAgY2xhc3M9XCJyZXNpemFibGUtaGFuZGxlIHJcIlxuICBjZURyYWdnYWJsZVxuICAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIlxuICAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAncicpXCJcbiAgKGNlT25TdG9wKT1cInJlc2l6ZUVuZCgpXCJcbj48L2Rpdj5cbjxkaXZcbiAgKm5nSWY9XCJoYXNTZWxlY3RlZCQgfCBhc3luY1wiXG4gIGNsYXNzPVwicmVzaXphYmxlLWhhbmRsZSBiXCJcbiAgY2VEcmFnZ2FibGVcbiAgKGNlT25TdGFydCk9XCJyZXNpemVTdGFydCgkZXZlbnQpXCJcbiAgKGNlT25Nb3ZlKT1cInJlc2l6aW5nKCRldmVudCwgJ2InKVwiXG4gIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiXG4+PC9kaXY+XG48ZGl2XG4gICpuZ0lmPVwiaGFzU2VsZWN0ZWQkIHwgYXN5bmNcIlxuICBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgbFwiXG4gIGNlRHJhZ2dhYmxlXG4gIChjZU9uU3RhcnQpPVwicmVzaXplU3RhcnQoJGV2ZW50KVwiXG4gIChjZU9uTW92ZSk9XCJyZXNpemluZygkZXZlbnQsICdsJylcIlxuICAoY2VPblN0b3ApPVwicmVzaXplRW5kKClcIlxuPjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgdHJcIiBjZURyYWdnYWJsZSAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIiAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAndHInKVwiIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgYnJcIiBjZURyYWdnYWJsZSAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIiAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAnYnInKVwiIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgdGxcIiBjZURyYWdnYWJsZSAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIiAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAndGwnKVwiIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInJlc2l6YWJsZS1oYW5kbGUgYmxcIiBjZURyYWdnYWJsZSAoY2VPblN0YXJ0KT1cInJlc2l6ZVN0YXJ0KCRldmVudClcIiAoY2VPbk1vdmUpPVwicmVzaXppbmcoJGV2ZW50LCAnYmwnKVwiIChjZU9uU3RvcCk9XCJyZXNpemVFbmQoKVwiPjwvZGl2PlxuPGRpdiAqbmdJZj1cImhhc1NlbGVjdGVkJCB8IGFzeW5jXCIgY2xhc3M9XCJ0IGNpcmNsZVwiPjwvZGl2PlxuPGRpdiAqbmdJZj1cImhhc1NlbGVjdGVkJCB8IGFzeW5jXCIgY2xhc3M9XCJyIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiAqbmdJZj1cImhhc1NlbGVjdGVkJCB8IGFzeW5jXCIgY2xhc3M9XCJiIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiAqbmdJZj1cImhhc1NlbGVjdGVkJCB8IGFzeW5jXCIgY2xhc3M9XCJsIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInRyIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cImJyIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInRsIGNpcmNsZVwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cImJsIGNpcmNsZVwiPjwvZGl2PlxuIl19