(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/f4r":
/*!****************************************************************!*\
  !*** ./dist/angular-editor-lib/fesm2015/angular-editor-lib.js ***!
  \****************************************************************/
/*! exports provided: AngularEditorLibComponent, AngularEditorLibModule, BorderedAreaComponent, BoxItemComponent, CanvasBackgroundComponent, CanvasComponent, CanvasGridComponent, CeToolbarDirective, CeUtilsService, DEFAULT_STORE, DraggableDirective, EditorStore, LayerTreeComponent, NoZoomAreaDirective, PanelComponent, PropertyFormComponent, ResizeHandleComponent, RotateHandleComponent, SelectorDirective, ToolbarComponent, WidgetListComponent, ZoomAreaDirective, genNodeId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorLibComponent", function() { return AngularEditorLibComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularEditorLibModule", function() { return AngularEditorLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderedAreaComponent", function() { return BorderedAreaComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxItemComponent", function() { return BoxItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasBackgroundComponent", function() { return CanvasBackgroundComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasGridComponent", function() { return CanvasGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeToolbarDirective", function() { return CeToolbarDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeUtilsService", function() { return CeUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_STORE", function() { return DEFAULT_STORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorStore", function() { return EditorStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerTreeComponent", function() { return LayerTreeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoZoomAreaDirective", function() { return NoZoomAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyFormComponent", function() { return PropertyFormComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandleComponent", function() { return ResizeHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateHandleComponent", function() { return RotateHandleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorDirective", function() { return SelectorDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomAreaDirective", function() { return ZoomAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genNodeId", function() { return genNodeId; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/component-store */ "ufcJ");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/pipes */ "HSCc");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/util */ "/KA4");
/* harmony import */ var ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/tree */ "nxWG");
/* harmony import */ var ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/dropdown */ "Nqz0");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/icon */ "FwiY");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/menu */ "Q8cG");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/card */ "JA5x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/form */ "ocnv");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/grid */ "B+r4");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");
/* harmony import */ var ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-zorro-antd/collapse */ "IvDN");
/* harmony import */ var ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-zorro-antd/switch */ "EGpF");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/select */ "zAKX");
/* harmony import */ var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/tag */ "ZyQt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "kVq8");
/* harmony import */ var ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-zorro-antd/divider */ "5vDB");
/* harmony import */ var ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/tabs */ "oyxB");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "nJia");

































const SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);
function genNodeId() {
    return `${Date.now()}${Math.round(Math.random() * 1000000000000)}`;
}
class CeUtilsService {
    constructor() {
        CeUtilsService.shared = this;
    }
    isTemplateType(content) {
        return content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
    }
    isDeepEqual(v1, v2) {
        if (typeof v1 !== typeof v2) {
            return false;
        }
        else {
            switch (typeof v1) {
                case 'number':
                case 'string':
                case 'bigint':
                case 'boolean':
                case 'symbol':
                case 'undefined':
                case 'function':
                    return v1 === v2;
                case 'object':
                    if (v1 === null || v2 === null) {
                        return v1 === v2;
                    }
                    else if (Array.isArray(v1)) {
                        if (v1.length !== v2.length) {
                            return false;
                        }
                        let flag = true;
                        v1.forEach((v, i) => {
                            if (flag) {
                                flag = this.isDeepEqual(v, v2[i]);
                            }
                        });
                        return flag;
                    }
                    else if (v1 instanceof Set && v2 instanceof Set) {
                        return this.isDeepEqual([...v1], [...v2]);
                    }
                    else {
                        let flag = true;
                        Object.keys(v1).forEach((v1k) => {
                            if (flag) {
                                if (v2.hasOwnProperty(v1k)) {
                                    flag = this.isDeepEqual(v1[v1k], v2[v1k]);
                                }
                                else {
                                    flag = false;
                                }
                            }
                        });
                        return flag;
                    }
            }
        }
    }
    /**
     * 通过节点ID在树中查找节点
     * @param id 节点ID
     * @param nodes 节点树
     */
    getNodeById(id, nodes) {
        let flag = false;
        let node;
        const stack = [...nodes];
        while (!flag && stack.length) {
            const item = stack.pop();
            if (item.id === id) {
                flag = true;
                node = item;
            }
            else {
                if (item.children && item.children.length) {
                    stack.push(...item.children.map((i) => (Object.assign(Object.assign({}, i), { parentNode: item }))));
                }
            }
        }
        return node;
    }
    /**
     * 通过节点ID查找节点及节点所有父级
     * @param id 节点ID
     * @param nodes 节点树
     */
    getNodeAndParentListById(id, nodes) {
        if (!id) {
            return [];
        }
        const rootIdSet = new Set(nodes.map((node) => node.id));
        let flag = false;
        let path = [];
        const stack = [...nodes];
        while (!flag && stack.length) {
            const node = stack.shift();
            if (rootIdSet.has(node.id)) {
                path = [];
            }
            if (node.id === id) {
                flag = true;
                path.unshift(node);
            }
            else {
                if (node.children && node.children.length) {
                    path.unshift(node);
                    stack.unshift(...node.children);
                }
            }
        }
        return path;
    }
    /**
     * 通过子节点id集合和节点树，获取子节点的父节点，若子节点不在同一级则返回undefined
     * @param childrenIds 子节点ID列表
     * @param nodes 节点集合
     */
    getSameLayerParentByChildren(childrenIds, nodes) {
        let flag = true;
        const parents = childrenIds.map((id) => this.getNodeAndParentListById(id, nodes)[1]);
        let prevParent = parents.pop();
        while (flag && parents.length) {
            const parent = parents.pop();
            if ((prevParent === null || prevParent === void 0 ? void 0 : prevParent.id) === (parent === null || parent === void 0 ? void 0 : parent.id)) {
                prevParent = parent;
            }
            else {
                flag = false;
            }
        }
        return flag && prevParent;
    }
    /**
     * 通过直线的两点方程获取直线上人一点点的坐标
     * y = (x-x1)*(y2-y1)/(x2-x1)+y1
     * x = (y-y1)*(x2-x1)/(y2-y1)+x1
     * @param direction 要获取点的坐标轴
     * @param n 要获取点的已知轴的坐标
     * @param line 确定一条直线的两点的坐标
     */
    getPointInLine(direction, n, line) {
        const [[x1, y1], [x2, y2]] = line;
        switch (direction) {
            case 'x':
                return ((n - y1) * (x2 - x1)) / (y2 - y1) + x1;
            case 'y':
                return ((n - x1) * (y2 - y1)) / (x2 - x1) + y1;
        }
    }
    /**
     * 通过元素在所在坐标系的中心点、宽、高以及旋转角度获取元素在所在坐标系的四个顶点的坐标
     * @param cx 中心点x轴坐标
     * @param cy 中心点y轴坐标
     * @param width 宽
     * @param height 高
     * @param rotate 旋转角度
     */
    getAbsolutePosition(cx, cy, width, height, rotate = 0) {
        if (SPECIAL_ROTATE.has(rotate)) {
            return this.getAbsolutePositionSpecial(cx, cy, width, height, rotate);
        }
        else {
            const r = Math.sqrt(Math.pow((width / 2), 2) + Math.pow((height / 2), 2));
            const patchRad1 = Math.atan(height / 2 / (width / 2));
            const patchRad2 = Math.atan(width / 2 / (height / 2));
            const currentRad = (rotate * Math.PI) / 180;
            return {
                tl: [cx - Math.cos(currentRad + patchRad1) * r, cy - Math.sin(currentRad + patchRad1) * r],
                tr: [cx - Math.cos(currentRad + patchRad1 + patchRad2 * 2) * r, cy - Math.sin(currentRad + patchRad1 + patchRad2 * 2) * r],
                bl: [cx - Math.cos(currentRad - patchRad1) * r, cy - Math.sin(currentRad - patchRad1) * r],
                br: [cx - Math.cos(currentRad - patchRad1 - patchRad2 * 2) * r, cy - Math.sin(currentRad - patchRad1 - patchRad2 * 2) * r],
            };
        }
    }
    /**
     * 获取特殊旋转角度下元素的四个顶点在所在坐标系的坐标
     * @param cx 元素的中心点x轴坐标
     * @param cy 元素的中心点y轴坐标
     * @param width 宽
     * @param height 高
     * @param rotate 旋转角度
     */
    getAbsolutePositionSpecial(cx, cy, width, height, rotate) {
        if (SPECIAL_ROTATE.has(rotate)) {
            switch (rotate) {
                case 0:
                case 360:
                    return {
                        tl: [cx - width / 2, cy - height / 2],
                        tr: [cx + width / 2, cy - height / 2],
                        bl: [cx - width / 2, cy + height / 2],
                        br: [cx + width / 2, cy + height / 2],
                    };
                case 90:
                    return {
                        tl: [cx + height / 2, cy - width / 2],
                        tr: [cx + height / 2, cy + width / 2],
                        bl: [cx - height / 2, cy - width / 2],
                        br: [cx - height / 2, cy + width / 2],
                    };
                case 180:
                    return {
                        tl: [cx + width / 2, cy + height / 2],
                        tr: [cx - width / 2, cy + height / 2],
                        bl: [cx + width / 2, cy - height / 2],
                        br: [cx - width / 2, cy - height / 2],
                    };
                case 270:
                    return {
                        tl: [cx - height / 2, cy + width / 2],
                        tr: [cx - height / 2, cy - width / 2],
                        bl: [cx + height / 2, cy + width / 2],
                        br: [cx + height / 2, cy - width / 2],
                    };
            }
        }
    }
    /**
     * 通过元素顶点坐标获取上、右、下和左方向的坐标
     * @param position
     */
    getVerticalAndHorizontalPointByAbsolutePosition(position) {
        const { tl, bl, br, tr } = position;
        return {
            t: [(Math.max(tl[0], tr[0]) - Math.min(tl[0], tr[0])) / 2, (Math.max(tl[1], tr[1]) - Math.min(tl[1], tr[1])) / 2],
            r: [(Math.max(br[0], tr[0]) - Math.min(br[0], tr[0])) / 2, (Math.max(br[1], tr[1]) - Math.min(br[1], tr[1])) / 2],
            b: [(Math.max(bl[0], br[0]) - Math.min(bl[0], br[0])) / 2, (Math.max(bl[1], br[1]) - Math.min(bl[1], br[1])) / 2],
            l: [(Math.max(tl[0], bl[0]) - Math.min(tl[0], bl[0])) / 2, (Math.max(tl[1], bl[1]) - Math.min(tl[1], bl[1])) / 2],
        };
    }
    /**
     * 通过HTML元素的宽、高、旋转角度以及所在坐标系的x、y点获取元素在所在坐标系的包围盒
     * @param width 宽
     * @param height 高
     * @param left 在所在坐标系中x轴的坐标
     * @param top 在所在坐标系中y轴的坐标
     * @param rotate 旋转角度
     */
    getBoundingBox(width, height, left, top, rotate = 0) {
        const position = this.getAbsolutePosition(left + width / 2, top + height / 2, width, height, rotate);
        const l = Math.min(...this.getAxisListByPosition('x', [position]));
        const r = Math.max(...this.getAxisListByPosition('x', [position]));
        const t = Math.min(...this.getAxisListByPosition('y', [position]));
        const b = Math.max(...this.getAxisListByPosition('y', [position]));
        return { left: l, top: t, width: r - l, height: b - t, bottom: b, right: r, cx: l + (r - l) / 2, cy: t + (b - t) / 2 };
    }
    /**
     * 通过盒子的绝对坐标列表获取对应坐标的值的集合
     * @param axis 要获取的坐标轴
     * @param positions 绝对坐标列表
     */
    getAxisListByPosition(axis, positions) {
        switch (axis) {
            case 'x':
                return positions.reduce((arr, position) => [...arr, position.bl[0], position.br[0], position.tl[0], position.tr[0]], []);
            case 'y':
                return positions.reduce((arr, position) => [...arr, position.bl[1], position.br[1], position.tl[1], position.tr[1]], []);
        }
    }
    /**
     * 获取多个盒子的最小外包围盒的尺寸
     * @param positions 盒子绝对坐标列表
     */
    getOuterBoundingBox(positions) {
        const l = Math.min(...this.getAxisListByPosition('x', positions));
        const r = Math.max(...this.getAxisListByPosition('x', positions));
        const t = Math.min(...this.getAxisListByPosition('y', positions));
        const b = Math.max(...this.getAxisListByPosition('y', positions));
        return { left: l, top: t, width: r - l, height: b - t, bottom: b, right: r, cx: l + (r - l) / 2, cy: t + (b - t) / 2 };
    }
    /**
     * 依据zIndex对节点递归排序
     * @param list 节点列表
     */
    sortNodeListByIndex(list) {
        return (list &&
            Object(lodash__WEBPACK_IMPORTED_MODULE_2__["chain"])(list)
                .sortBy((item) => item.zIndex)
                .map((item) => (Object.assign(Object.assign({}, item), { children: this.sortNodeListByIndex(item.children) })))
                .value());
    }
    /**
     * 通过直线的斜率方程和直线上两点A，B以及直线外一点D，求出D点上直线AB的垂线DC和直线AB的交点C的坐标
     * @param PA 点A
     * @param PB 点B
     * @param PD 点D
     */
    getVerticalLineCrossPoint(PA, PB, PD) {
        const [PAx, PAy] = PA;
        const [PBx, PBy] = PB;
        const [PDx, PDy] = PD;
        if (PAx === PBx) {
            return [PAx, PDy];
        }
        else if (PAy === PBy) {
            return [PDx, PAy];
        }
        else {
            const L1k = (PAy - PBy) / (PAx - PBx);
            const L2k = -1 / L1k;
            const a = PAy - L1k * PAx;
            const b = PDy - L2k * PDx;
            const x = (b - a) / (L1k - L2k);
            const y = L1k * x + a;
            return [x, y];
        }
    }
    /**
     * 通过元素在所在坐标系内四个顶点的坐标，使用直线的两点方程求出两两对点所在直线的交点（矩形的中心点），
     * 使用勾股定理求出元素宽高，转换后得到元素在所在坐标系的宽、高、x轴坐标和y轴坐标
     * width = sqrt((trx - tlx)^2 + (try - tly)^2)
     * height = sqrt((blx - tlx)^2 + (bly - tly)^2)
     * a1*x + b1*y + c1 = 0
     * a2*x + b2*y + c2 = 0
     * a1*x + b1*y + c1 = a2*x + b2*y + c2
     * 由直线的两点式方程可得a=y0-y1, b=x1-x0, c=x0*y1 - x1*y0
     * 解方程组可得两条直线的交点x,y
     * @param position 元素在所在坐标系内四个顶点的坐标
     */
    getRelativePosition(position) {
        const { tl, bl, br, tr } = position;
        const width = Math.sqrt(Math.pow((tr[0] - tl[0]), 2) + Math.pow((tr[1] - tl[1]), 2));
        const height = Math.sqrt(Math.pow((bl[0] - tl[0]), 2) + Math.pow((bl[1] - tl[1]), 2));
        const a1 = br[1] - tl[1];
        const b1 = tl[0] - br[0];
        const c1 = br[0] * tl[1] - tl[0] * br[1];
        const a2 = bl[1] - tr[1];
        const b2 = tr[0] - bl[0];
        const c2 = bl[0] * tr[1] - tr[0] * bl[1];
        const cx = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
        const cy = (a2 * c1 - a1 * c2) / (a1 * b2 - a2 * b1);
        return {
            cx,
            cy,
            width,
            height,
            left: cx - width / 2,
            top: cy - height / 2,
            bottom: cx + width / 2,
            right: cy + height / 2,
        };
    }
    /**
     * 获取元素的四个顶点在外包围盒的矩形内的坐标的百分比
     * @param group 元素外包围盒
     * @param item 元素的四个顶点坐标
     */
    getItemPercentPositionInGroup(group, item) {
        return {
            tl: [(item.tl[0] - group.left) / group.width, (item.tl[1] - group.top) / group.height],
            tr: [(item.tr[0] - group.left) / group.width, (item.tr[1] - group.top) / group.height],
            bl: [(item.bl[0] - group.left) / group.width, (item.bl[1] - group.top) / group.height],
            br: [(item.br[0] - group.left) / group.width, (item.br[1] - group.top) / group.height],
        };
    }
    /**
     * 通过矩形中心点坐标C(cx,cy)中心点和Y轴平行线在中心点上方的一点S(sx,sy),旋转落点E(ex,ey),利用三角形余弦定理，
     * 求出∠SCE的角度，再通过ex和sx的大小判断旋转的角度为内角还是外角
     * @param cx 中心点x坐标
     * @param cy 中心点y坐标
     * @param sx 与中心点相同的x坐标
     * @param sy 与中心点同x坐标的上方一点的y坐标
     * @param ex 旋转终点x坐标
     * @param ey x旋转终点y坐标
     */
    getRotate(cx, cy, sx, sy, ex, ey) {
        const rotate = (Math.acos((Math.pow((cy - sy), 2) + Math.pow((cx - sx), 2) + Math.pow((cx - ex), 2) + Math.pow((cy - ey), 2) - (Math.pow((ex - sx), 2) + Math.pow((ey - sy), 2))) /
            (2 * Math.sqrt(Math.pow((cy - sy), 2) + Math.pow((cx - sx), 2)) * Math.sqrt(Math.pow((cx - ex), 2) + Math.pow((cy - ey), 2)))) *
            180) /
            Math.PI;
        if (ex === sx) {
            return 180;
        }
        if (ex > sx) {
            return rotate;
        }
        if (ex < sx) {
            return 360 - rotate;
        }
    }
    /**
     * 通过向量四边形法则求出向量ab、向量ac的对角线ad的d点坐标, ab + ac = ad
     * @param ab 向量ab
     * @param ac 向量ac
     * @param a a点坐标
     */
    getPointByVectorSum(ab, ac, a) {
        return [ab[0] + ac[0] + a[0], ab[1] + ac[1] + a[1]];
    }
    /**
     * 获取两点之间的线段长度
     * @param point1 点1
     * @param point2 点2
     */
    getDistanceBeforeToPoint(point1, point2) {
        return Math.sqrt(Math.pow((point1[0] - point2[0]), 2) + Math.pow((point1[1] - point2[1]), 2));
    }
    /**
     * 通过获取父节点中心点坐标和原始子节点中心点坐标，将向量（父节点中心点-子节点原始中心点）
     * 旋转父节点旋转的角度(rotate)后得到向量（父节点中心点-子节点中心点）然后利用向量旋转的
     * 公式直接求出子节点中心点坐标
     * x1 = x0*cos(rotate) - y0*sin(rotate)
     * y1 = x0*sin(rotate) - y0*cos(rotate)
     * @param parentRect 父元素尺寸
     * @param parentRotate 父元素旋转角度
     * @param childRect 子元素尺寸
     */
    getChildPositionBaseOnParentCoordinateSystem(parentRect, parentRotate, childRect) {
        const parentCenter = [parentRect.left + parentRect.width / 2, parentRect.top + parentRect.height / 2];
        const originalCenter = [childRect.left + childRect.width / 2 + parentRect.left, childRect.top + childRect.height / 2 + parentRect.top];
        const [newCenterX, newCenterY] = [
            (originalCenter[0] - parentCenter[0]) * Math.cos((parentRotate * Math.PI) / 180) -
                (originalCenter[1] - parentCenter[1]) * Math.sin((parentRotate * Math.PI) / 180) +
                parentCenter[0],
            (originalCenter[1] - parentCenter[1]) * Math.cos((parentRotate * Math.PI) / 180) +
                (originalCenter[0] - parentCenter[0]) * Math.sin((parentRotate * Math.PI) / 180) +
                parentCenter[1],
        ];
        return {
            left: newCenterX - childRect.width / 2,
            top: newCenterY - childRect.height / 2,
            bottom: newCenterX + childRect.width / 2,
            right: newCenterY + childRect.height / 2,
            width: childRect.width,
            height: childRect.height,
            cx: newCenterX,
            cy: newCenterY,
        };
    }
    /**
     * 获取单个子节点相对于多层父节点的坐标
     * @param child 子节点size
     * @param parents 父节点集合（排序为从左往右依次外扩）
     */
    getChildPositionBaseOnMultipleParentCoordinataSystem(child, parents) {
        let rect = Object.assign({}, child);
        while (parents.length) {
            const parent = parents.shift();
            rect = this.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, child);
        }
        return rect;
    }
    /**
     * 获取多个子节点相对与多层父节点的坐标
     * @param children 子节点列表
     * @param parents 父节点列表
     */
    getChildrenBoundingBoxBaseOnParentCoordinateSystem(children, parents) {
        const outerBox = this.getOuterBoundingBox(children.map((child) => this.getAbsolutePosition(child.left + child.width / 2, child.top + child.height / 2, child.width, child.height, child.rotate)));
        let domRect = Object.assign({}, outerBox);
        while (parents.length) {
            const parent = parents.shift();
            domRect = this.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, domRect);
        }
        return domRect;
    }
    /**
     * 获取已选中节点的缩放框的尺寸
     * @param selected 已选中节点
     * @param nodes 节点树
     */
    getResizeBoundingBox(selected, nodes) {
        var _a;
        let rect;
        let rotate;
        if (selected.length === 1) {
            const [node, ...parents] = this.getNodeAndParentListById(selected[0], nodes);
            rect = Object.assign({}, this.getChildPositionBaseOnMultipleParentCoordinataSystem(node, [...parents]));
            rotate = parents.reduce((sum, p) => { var _a; return sum + ((_a = p.rotate) !== null && _a !== void 0 ? _a : 0); }, (_a = node.rotate) !== null && _a !== void 0 ? _a : 0);
        }
        else {
            const parent = this.getSameLayerParentByChildren(selected, nodes);
            if (parent !== false) {
                const parents = this.getNodeAndParentListById(parent === null || parent === void 0 ? void 0 : parent.id, nodes);
                rect = this.getChildrenBoundingBoxBaseOnParentCoordinateSystem(selected.map((id) => this.getNodeById(id, nodes)), [...parents]);
                rotate = parents.reduce((sum, p) => { var _a; return sum + ((_a = p.rotate) !== null && _a !== void 0 ? _a : 0); }, 0);
            }
        }
        return Object.assign(Object.assign({}, rect), { rotate });
    }
}
CeUtilsService.ɵfac = function CeUtilsService_Factory(t) { return new (t || CeUtilsService)(); };
CeUtilsService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: CeUtilsService, factory: CeUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CeUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

const DEFAULT_STORE = {
    nodes: new Array(500).fill(1).map((_v, i) => ({
        id: `${Math.round(Math.random() * Math.pow(10, 8))}`,
        height: 100,
        width: 200,
        left: Math.round(Math.random() * 900),
        top: Math.round(Math.random() * 500),
        name: 'test',
        rotate: 0,
        locked: false,
        zIndex: i + 1,
        borderWidth: 1,
        borderColor: '#333',
        borderStyle: 'dashed',
    })),
    selected: new Set(),
    bordered: new Set(),
    canvasBackground: { backgroundColor: '#ffffff' },
    canvasPosition: {
        left: 100,
        top: 100,
        scale: 1,
    },
    canvasSize: {
        width: 1366,
        height: 768,
    },
    refLineState: {
        tx: { state: false },
        bx: { state: false },
        ly: { state: false },
        ry: { state: false },
        cx: { state: false },
        cy: { state: false },
    },
};

class EditorStore extends _ngrx_component_store__WEBPACK_IMPORTED_MODULE_3__["ComponentStore"] {
    constructor(utils) {
        super(DEFAULT_STORE);
        this.utils = utils;
        this._defaultPanels = [
            { key: 'LAYERS', title: '图层', content: LayerTreeComponent, show: true, x: 10, y: 60 },
            { key: 'WIDGET_LIST', title: '组件', content: WidgetListComponent, show: false, x: 50, y: 60 },
            { key: 'PROPERTIES', title: '属性', content: PropertyFormComponent, show: true, x: window.innerWidth - 350, y: 60 },
        ];
        this.panels = [];
        this.panels$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([...this._defaultPanels, ...this.panels]);
    }
    initialize(state) {
        this.setState(state);
    }
    _get() {
        return this.get();
    }
    dispatch(action) {
        this.setState(action);
    }
    selectDifferent(cb) {
        return this.select(cb).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["startWith"])(null, cb(this.get())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(([prev, present]) => !this.utils.isDeepEqual(prev, present)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(([, present]) => present));
    }
    toJSON() {
        const state = this.get();
        return JSON.stringify({
            canvasPosition: state.canvasPosition,
            canvasSize: state.canvasSize,
            canvasBackground: state.canvasBackground,
            nodes: state.nodes,
            selected: state.selected,
            bordered: state.bordered,
        });
    }
    addPanels(panels) {
        this.panels = [...this.panels, ...panels];
        this.panels$.next([...this._defaultPanels, ...this.panels]);
    }
    getPanel(key) {
        return [...this._defaultPanels, ...this.panels].find((panel) => panel.key === key);
    }
    updatePanelPosition(key, [x, y]) {
        [...this._defaultPanels, ...this.panels].forEach((panel) => {
            if (panel.key === key) {
                panel.x = x;
                panel.y = y;
            }
        });
        this.panels$.next([...this._defaultPanels, ...this.panels]);
    }
    togglePanelVisible(key) {
        [...this._defaultPanels, ...this.panels].forEach((panel) => {
            if (panel.key === key) {
                panel.show = !panel.show;
            }
        });
        this.panels$.next([...this._defaultPanels, ...this.panels]);
    }
    togglePanelCollapsed(key) {
        [...this._defaultPanels, ...this.panels].forEach((panel) => {
            if (panel.key === key) {
                panel.collapsed = !panel.collapsed;
            }
        });
        this.panels$.next([...this._defaultPanels, ...this.panels]);
    }
}
EditorStore.ɵfac = function EditorStore_Factory(t) { return new (t || EditorStore)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(CeUtilsService)); };
EditorStore.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: EditorStore, factory: EditorStore.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(EditorStore, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: CeUtilsService }]; }, null); })();

function BorderedAreaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 1);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", node_r1.left, "%")("top", node_r1.top, "%")("width", node_r1.width, "%")("height", node_r1.height, "%")("transform", ctx_r0.getRotate(node_r1.rotate));
} }
class BorderedAreaComponent {
    constructor(store, utils) {
        this.store = store;
        this.utils = utils;
        this.borderedNodeMap = new Map();
    }
    ngOnInit() {
        this.borderedNodeList$ = this.store
            .selectDifferent((state) => ({ bordered: state.bordered, nodes: state.nodes, canvasSize: state.canvasSize }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(({ bordered, nodes, canvasSize }) => {
            if (!bordered.size) {
                return [];
            }
            else {
                return this.refreshBorderedList(nodes, bordered, canvasSize);
            }
        }));
    }
    getRotate(rotate) {
        return `rotate(${rotate}deg)`;
    }
    trackByFn(...args) {
        return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
    }
    refreshBorderedList(nodes, bordered, canvasSize) {
        return [...bordered]
            .map((id) => this.utils.getNodeById(id, nodes))
            .filter((node) => !!node)
            .map((node) => {
            var _a;
            {
                const [, ...parents] = this.utils.getNodeAndParentListById(node.id, nodes);
                let child = Object.assign({}, node);
                while (parents.length) {
                    const parent = parents.shift();
                    child = Object.assign(Object.assign(Object.assign({}, child), this.utils.getChildPositionBaseOnParentCoordinateSystem(parent, (_a = parent.rotate) !== null && _a !== void 0 ? _a : 0, child)), { rotate: child.rotate + parent.rotate });
                }
                return {
                    id: node.id,
                    width: (child.width / canvasSize.width) * 100,
                    height: (child.height / canvasSize.height) * 100,
                    left: (child.left / canvasSize.width) * 100,
                    top: (child.top / canvasSize.height) * 100,
                    rotate: child.rotate,
                };
            }
        });
    }
}
BorderedAreaComponent.ɵfac = function BorderedAreaComponent_Factory(t) { return new (t || BorderedAreaComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService)); };
BorderedAreaComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: BorderedAreaComponent, selectors: [["ce-bordered-area"], ["", "ceBorderedArea", ""]], decls: 2, vars: 4, consts: [["class", "box-border", 3, "left", "top", "width", "height", "transform", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "box-border"]], template: function BorderedAreaComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, BorderedAreaComponent_div_0_Template, 1, 10, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, ctx.borderedNodeList$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[ceBorderedArea],ce-bordered-area{bottom:0;display:block;left:0;position:absolute;right:0;top:0}[ceBorderedArea] .box-border,ce-bordered-area .box-border{border:1px solid #1890ff;box-sizing:border-box;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(BorderedAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-bordered-area,[ceBorderedArea]',
                templateUrl: './bordered-area.component.html',
                styleUrls: ['./bordered-area.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, null); })();

function BoxItemComponent_ng_container_0_ce_box_item_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "ce-box-item", 2);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("node", item_r2);
} }
function BoxItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, BoxItemComponent_ng_container_0_ce_box_item_1_Template, 1, 1, "ce-box-item", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", ctx_r0.node.children);
} }
class BoxItemComponent {
    constructor(renderer, eleRef) {
        this.renderer = renderer;
        this.eleRef = eleRef;
    }
    get node() {
        return this._node;
    }
    set node(val) {
        this._node = val;
        this.generatorStyles();
    }
    ngAfterViewInit() {
        this.generatorStyles();
    }
    generatorStyles() {
        var _a;
        if (this.eleRef.nativeElement) {
            this.renderer.setAttribute(this.eleRef.nativeElement, 'id', `box-item-${this.node.id}`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'width', `${this.node.width}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'height', `${this.node.height}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'left', `${this.node.left}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'top', `${this.node.top}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'transform', `translate3d(0,0,0) rotate(${(_a = this.node.rotate) !== null && _a !== void 0 ? _a : 0}deg)`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-style', this.node.borderStyle);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-color', this.node.borderColor);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-width', `${this.node.borderWidth}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'z-index', this.node.zIndex);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-image', this.node.backgroundImage);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-position', this.node.backgroundPosition);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-repeat', this.node.backgroundRepeat);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-size', this.node.backgroundSize);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.node.backgroundColor);
        }
    }
}
BoxItemComponent.ɵfac = function BoxItemComponent_Factory(t) { return new (t || BoxItemComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BoxItemComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: BoxItemComponent, selectors: [["ce-box-item"]], inputs: { node: "node" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "node", 4, "ngFor", "ngForOf"], [3, "node"]], template: function BoxItemComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, BoxItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", (ctx.node == null ? null : ctx.node.children) && (ctx.node == null ? null : ctx.node.children.length));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], BoxItemComponent], styles: ["ce-box-item{box-sizing:border-box;display:block;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(BoxItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-box-item',
                templateUrl: 'box-item.component.html',
                styleUrls: ['box-item.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { node: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function CanvasBackgroundComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "img", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "nzSanitizer");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(2, "async");
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("src", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(1, 1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(2, 4, ctx_r0.backgroundImage$), "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CanvasBackgroundComponent {
    constructor(store) {
        this.store = store;
        this.backgroundColor$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundColor);
        this.backgroundImage$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundImage);
    }
}
CanvasBackgroundComponent.ɵfac = function CanvasBackgroundComponent_Factory(t) { return new (t || CanvasBackgroundComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
CanvasBackgroundComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: CanvasBackgroundComponent, selectors: [["ce-canvas-background"], ["", "ceCanvasBackground", ""]], decls: 4, vars: 7, consts: [[3, "ngIf"], ["alt", "", 3, "src"]], template: function CanvasBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, CanvasBackgroundComponent_ng_template_2_Template, 3, 6, "ng-template", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("background-color", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 3, ctx.backgroundColor$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(3, 5, ctx.backgroundImage$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_6__["NzSanitizerPipe"]], styles: ["ce-canvas-background{display:block;left:0;overflow:hidden;position:absolute;top:0}ce-canvas-background,ce-canvas-background>div{height:100%;width:100%}ce-canvas-background img{height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CanvasBackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-canvas-background,[ceCanvasBackground]',
                templateUrl: 'canvas-background.component.html',
                styleUrls: ['canvas-background.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }]; }, null); })();

class CanvasGridComponent {
    constructor(store) {
        this.store = store;
        const scale$ = this.store.selectDifferent((state) => state.canvasPosition.scale);
        this.childDPath$ = scale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((scale) => this.getPath(10, scale)));
        this.parentDPath$ = scale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((scale) => this.getPath(50, scale)));
        this.childWidth$ = scale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((scale) => 10 * scale));
        this.parentWidth$ = scale$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((scale) => 50 * scale));
    }
    getPath(size, scale) {
        return `M ${size * scale || 0} 0 L 0 0 0 ${size * scale || 0}`;
    }
}
CanvasGridComponent.ɵfac = function CanvasGridComponent_Factory(t) { return new (t || CanvasGridComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
CanvasGridComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: CanvasGridComponent, selectors: [["ce-canvas-grid"]], decls: 16, vars: 24, consts: [["data-html2canvas-ignore", "", "width", "100%", "height", "100%", 1, "grid"], ["id", "smallGrid", "patternUnits", "userSpaceOnUse"], ["fill", "none", "stroke", "rgba(207, 207, 207, 0.8)", "stroke-width", "1"], ["id", "grid", "patternUnits", "userSpaceOnUse"], ["fill", "url(#smallGrid)"], ["fill", "none", "stroke", "rgba(186, 186, 186, 1)", "stroke-width", "1"], ["width", "100%", "height", "100%", "fill", "url(#grid)"]], template: function CanvasGridComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "svg", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "defs");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "pattern", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(4, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(5, "path", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(6, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "pattern", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(8, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(9, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(10, "rect", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(11, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(12, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(13, "path", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(14, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(15, "rect", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(3, 8, ctx.childWidth$))("height", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(4, 10, ctx.childWidth$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("d", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(6, 12, ctx.childDPath$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(8, 14, ctx.parentWidth$))("height", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(9, 16, ctx.parentWidth$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("width", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(11, 18, ctx.parentWidth$))("height", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(12, 20, ctx.parentWidth$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("d", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(14, 22, ctx.parentDPath$));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ce-canvas-grid{display:block;height:100%;left:0;position:absolute;top:0;width:100%}ce-canvas-grid .grid{border-bottom:1px solid #cfcfcf;border-right:1px solid #cfcfcf;left:0;position:absolute;top:0;z-index:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CanvasGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-canvas-grid',
                templateUrl: 'canvas-grid.component.html',
                styleUrls: ['canvas-grid.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }]; }, null); })();

function clearSelected() {
    return (state) => (Object.assign(Object.assign({}, state), { selected: new Set([]) }));
}
function addSelectedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { selected: new Set([...state.selected, ...ids]) }));
}
function removeSelectedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { selected: new Set([...state.selected].filter((id) => !ids.includes(id))) }));
}
function setSelectedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { selected: new Set([...ids]) }));
}
function clearBordered() {
    return (state) => (Object.assign(Object.assign({}, state), { bordered: new Set([]) }));
}
function addBorderedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { bordered: new Set([...state.bordered, ...ids]) }));
}
function removeBorderedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { bordered: new Set([...state.bordered].filter((id) => !ids.includes(id))) }));
}
function setBorderedNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { bordered: new Set([...ids]) }));
}

function updateCanvasSize(canvasSize) {
    return (state) => (Object.assign(Object.assign({}, state), { canvasSize: Object.assign(Object.assign({}, state.canvasSize), canvasSize) }));
}
function updateCanvasPosition(canvasPosition) {
    return (state) => (Object.assign(Object.assign({}, state), { canvasPosition: Object.assign(Object.assign({}, state.canvasPosition), canvasPosition) }));
}
function updateCanvasBackground(canvasBackground) {
    return (state) => (Object.assign(Object.assign({}, state), { canvasBackground: Object.assign(Object.assign({}, state.canvasBackground), canvasBackground) }));
}

function lockNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { nodes: state.nodes.map((node) => (ids.includes(node.id) ? Object.assign(Object.assign({}, node), { locked: true }) : node)) }));
}
function unlockNodes(ids) {
    return (state) => (Object.assign(Object.assign({}, state), { nodes: state.nodes.map((node) => (ids.includes(node.id) ? Object.assign(Object.assign({}, node), { locked: false }) : node)) }));
}
function addNodes(nodes) {
    return (state) => (Object.assign(Object.assign({}, state), { nodes: [...state.nodes, ...nodes] }));
}
function removeNodes(ids) {
    return (state) => {
        let parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
        if (parent === false) {
            return Object.assign({}, state);
        }
        else if (parent === undefined) {
            return Object.assign(Object.assign({}, state), { nodes: state.nodes.filter((node) => !ids.includes(node.id)) });
        }
        else {
            const originalParentId = parent.id;
            let prevParent;
            let prevParentId;
            const parents = CeUtilsService.shared.getNodeAndParentListById(parent.id, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(state.nodes));
            while (parents.length) {
                parent = parents.shift();
                let children;
                if (parent.id === originalParentId) {
                    children = parent.children.filter((child) => !ids.includes(child.id));
                }
                else {
                    children = parent.children
                        .filter((child) => (child.id === prevParentId ? prevParent : child))
                        .filter((child) => !!child);
                }
                prevParentId = parent.id;
                if (children.length > 1) {
                    const rect = CeUtilsService.shared.getOuterBoundingBox(children
                        .map((child) => (Object.assign({ rotate: child.rotate }, CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, child))))
                        .map((item) => CeUtilsService.shared.getAbsolutePosition(item.cx, item.cy, item.width, item.height, item.rotate)));
                    parent.width = rect.width;
                    parent.height = rect.height;
                    parent.left = rect.left;
                    parent.top = rect.top;
                    parent.children = children;
                }
                else if (children.length === 1) {
                    const rect = CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, children[0]);
                    parent = Object.assign(Object.assign({}, children[0]), rect);
                }
                else if (children.length === 0) {
                    parent = null;
                }
                prevParent = parent;
            }
            return Object.assign(Object.assign({}, state), { nodes: state.nodes.map((node) => (node.id === prevParentId ? parent : node)).filter((node) => !!node) });
        }
    };
}
function updateNodes(nodes) {
    return (state) => (Object.assign(Object.assign({}, state), { nodes: state.nodes.map((item) => (Object.assign(Object.assign({}, item), nodes.find((i) => i.id === item.id)))) }));
}
function updateNodesSize(nodesSizeMap) {
    return (state) => {
        var _a;
        let inSameLayer = true;
        const ids = [...nodesSizeMap.keys()];
        let parent;
        while (inSameLayer && ids.length) {
            const id = ids.pop();
            const node = CeUtilsService.shared.getNodeById(id, state.nodes);
            inSameLayer = (parent === null || parent === void 0 ? void 0 : parent.id) === ((_a = node.parentNode) === null || _a === void 0 ? void 0 : _a.id);
            parent = node.parentNode;
        }
        if (!inSameLayer) {
            return state;
        }
        else {
            if (!parent) {
                return Object.assign(Object.assign({}, state), { nodes: state.nodes.map((node) => {
                        const newNode = Object.assign(Object.assign({}, node), nodesSizeMap.get(node.id));
                        if (node.children && node.children.length) {
                            return Object.assign(Object.assign({}, newNode), { children: recursiveUpdateNodeChildrenSize(newNode.children, Object.assign({}, node), Object.assign({}, newNode)) });
                        }
                        else {
                            return newNode;
                        }
                    }) });
            }
            else {
                return state;
            }
        }
    };
}
function groupNodes(ids) {
    return (state) => {
        const parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
        if (parent === false) {
            return state;
        }
        const nodeMap = new Map();
        ids.forEach((id) => {
            const node = state.nodes.find((i) => i.id === id);
            if (node) {
                nodeMap.set(id, node);
            }
        });
        const groupRect = CeUtilsService.shared.getOuterBoundingBox(ids
            .filter((id) => nodeMap.has(id))
            .map((id) => {
            const node = nodeMap.get(id);
            return CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
        }));
        const groupNode = Object.assign(Object.assign({ id: genNodeId(), name: 'Group' }, groupRect), { rotate: 0, zIndex: Math.max(...state.nodes.filter((node) => !nodeMap.has(node.id)).map((node) => node.zIndex)) + 1, children: ids
                .filter((id) => nodeMap.has(id))
                .map((id) => {
                const node = nodeMap.get(id);
                const { bl, br, tl, tr } = CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
                return Object.assign(Object.assign({}, node), CeUtilsService.shared.getRelativePosition({
                    bl: [bl[0] - groupRect.left, bl[1] - groupRect.top],
                    br: [br[0] - groupRect.left, br[1] - groupRect.top],
                    tl: [tl[0] - groupRect.left, tl[1] - groupRect.top],
                    tr: [tr[0] - groupRect.left, tr[1] - groupRect.top],
                }));
            }) });
        return Object.assign(Object.assign({}, state), { nodes: [...state.nodes.filter((node) => !nodeMap.has(node.id)), groupNode] });
    };
}
function breakNode(id) {
    return (state) => {
        const [node, ...parents] = CeUtilsService.shared.getNodeAndParentListById(id, Object(lodash__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"])(state.nodes));
        const newNodes = node.children.map((child) => {
            var _a, _b;
            return Object.assign(Object.assign(Object.assign({}, child), CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(node, node.rotate, child)), { rotate: ((_a = child.rotate) !== null && _a !== void 0 ? _a : 0) + ((_b = node.rotate) !== null && _b !== void 0 ? _b : 0) });
        });
        if (!parents.length) {
            return Object.assign(Object.assign({}, state), { nodes: [...state.nodes.filter((i) => i.id !== node.id), ...newNodes] });
        }
        else {
            let parent = parents.shift();
            parent.children = [...parent.children.filter((child) => child.id !== node.id), ...newNodes];
            while (parents.length) {
                const nextParent = parents.shift();
                nextParent.children = nextParent.children.map((child) => (child.id === parent.id ? parent : child));
                parent = nextParent;
            }
            return Object.assign(Object.assign({}, state), { nodes: [...state.nodes.filter((i) => i.id !== parent.id), parent] });
        }
    };
}
// /**
//  * 递归更新节点的位置和大小
//  * @param nodes 节点列表
//  * @param oldParentRect 父节点的旧尺寸和位置
//  * @param newParentRect 父节点的新尺寸和位置
//  */
// function recursiveUpdateNodeChildrenSize(nodes: INode[], oldParentRect: IDOMRect, newParentRect: IDOMRect): INode[] {
//   const { width, height } = newParentRect;
//   return nodes.map((node) => {
//     const cxPercent = (node.left + node.width / 2) / oldParentRect.width;
//     const cyPercent = (node.top + node.height / 2) / oldParentRect.height;
//     const widthPercent = node.width / oldParentRect.width;
//     const heightPercent = node.height / oldParentRect.height;
//     const newNodeRect: IDOMRect = {
//       width: widthPercent * width,
//       height: heightPercent * height,
//       left: cxPercent * width - (widthPercent * width) / 2,
//       top: cyPercent * height - (heightPercent * height) / 2,
//     };
//     if (node.children && node.children.length) {
//       return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
//     } else {
//       return { ...node, ...newNodeRect };
//     }
//   });
// }
/**
 * 递归更新节点的位置和大小
 * @param nodes 节点列表
 * @param oldParentRect 父节点的旧尺寸和位置
 * @param newParentRect 父节点的新尺寸和位置
 */
function recursiveUpdateNodeChildrenSize(nodes, oldParentRect, newParentRect) {
    const { width, height } = newParentRect;
    return nodes.map((node) => {
        const nodeAbsolutePosition = CeUtilsService.shared.getAbsolutePosition(node.left + node.width / 2, node.top + node.height / 2, node.width, node.height, node.rotate);
        const { tl, tr, bl, br } = CeUtilsService.shared.getItemPercentPositionInGroup(Object.assign(Object.assign({}, oldParentRect), { left: 0, top: 0 }), nodeAbsolutePosition);
        const newNodeRect = CeUtilsService.shared.getRelativePosition({
            tl: [tl[0] * width, tl[1] * height],
            tr: [tr[0] * width, tr[1] * height],
            bl: [bl[0] * width, bl[1] * height],
            br: [br[0] * width, br[1] * height],
        });
        if (node.children && node.children.length) {
            return Object.assign(Object.assign(Object.assign({}, node), newNodeRect), { children: recursiveUpdateNodeChildrenSize(node.children, Object.assign({}, node), Object.assign({}, newNodeRect)) });
        }
        else {
            return Object.assign(Object.assign({}, node), newNodeRect);
        }
    });
}

function updateRefLineState(direction, state) {
    return (state) => (Object.assign(Object.assign({}, state), { refLineState: Object.assign(Object.assign({}, state.refLineState), { [direction]: state }) }));
}
function resetRefLineState() {
    return (state) => (Object.assign(Object.assign({}, state), { refLineState: DEFAULT_STORE.refLineState }));
}
function updateRefLinesState(refLineState) {
    return (state) => (Object.assign(Object.assign({}, state), { refLineState: Object.assign(Object.assign({}, state.refLineState), refLineState) }));
}

class DraggableDirective {
    constructor(eleRef, cdr) {
        this.eleRef = eleRef;
        this.cdr = cdr;
        this.ceDragDisabled = false;
        this.ceUseSpace = false;
        this.ceOnStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ceOnMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ceOnStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ceOnSpaceKeyDown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.spaceKeyDown = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'pointermove');
        this.mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'pointerup');
        this.keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'keydown');
        this.keyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'keyup');
        this.mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.eleRef.nativeElement, 'pointerdown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => e.button === 0));
        this.mouseEnter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.eleRef.nativeElement, 'pointerenter');
        this.mouseLeave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.eleRef.nativeElement, 'pointerleave');
    }
    ngOnInit() {
        this.listenSpaceKeyEvent();
        this.mouseDown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !this.ceDragDisabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => (this.ceUseSpace ? this.spaceKeyDown : true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((startEv) => {
            this.ceOnStart.emit(startEv);
            return this.mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.mouseUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((stopEv) => this.ceOnStop.emit(stopEv)))));
        }))
            .subscribe((moveEv) => this.ceOnMove.emit(moveEv));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    listenSpaceKeyEvent() {
        this.subscription.add(this.mouseEnter$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !this.ceDragDisabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => this.ceUseSpace), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(() => this.keyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((e) => {
            this.spaceKeyDown = e.key === ' ';
            this.cdr.detectChanges();
            if (this.spaceKeyDown) {
                e.preventDefault();
                e.stopPropagation();
            }
            return this.keyUp$;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => {
            this.spaceKeyDown = false;
            this.ceOnStop.emit();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.mouseLeave$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.spaceKeyDown = false;
            this.ceOnStop.emit();
        }))))
            .subscribe());
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DraggableDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: DraggableDirective, selectors: [["", "ceDraggable", ""]], inputs: { ceDragDisabled: "ceDragDisabled", ceUseSpace: "ceUseSpace" }, outputs: { ceOnStart: "ceOnStart", ceOnMove: "ceOnMove", ceOnStop: "ceOnStop", ceOnSpaceKeyDown: "ceOnSpaceKeyDown" }, exportAs: ["ceDraggable"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])()
], DraggableDirective.prototype, "ceDragDisabled", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])()
], DraggableDirective.prototype, "ceUseSpace", void 0);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DraggableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ceDraggable]',
                exportAs: 'ceDraggable',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { ceDragDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ceUseSpace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ceOnStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ceOnMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ceOnStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ceOnSpaceKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

function CanvasComponent_ce_box_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "ce-box-item", 1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); const node_r1 = ctx.$implicit; const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r2.moveStart($event, node_r1); })("ceOnMove", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnMove_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r4.moving($event); })("ceOnStop", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStop_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r5.moveEnd(); })("pointerenter", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerenter_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); const node_r1 = ctx.$implicit; const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r6.showBorder(node_r1.id); })("pointerleave", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerleave_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r3); const node_r1 = ctx.$implicit; const ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r7.removeBorder(node_r1.id); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ceDragDisabled", node_r1 == null ? null : node_r1.locked)("node", node_r1);
} }
const REF_LINE_DIRECTION_COMPARE_MAP = {
    tx: [
        {
            baseKey: 'top',
            referKey: 'top',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top }),
        },
        {
            baseKey: 'top',
            referKey: 'cy',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy }),
        },
        {
            baseKey: 'top',
            referKey: 'bottom',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom }),
        },
    ],
    bx: [
        {
            baseKey: 'bottom',
            referKey: 'top',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top - baseRect.height }),
        },
        {
            baseKey: 'bottom',
            referKey: 'cy',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy - baseRect.height }),
        },
        {
            baseKey: 'bottom',
            referKey: 'bottom',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom - baseRect.height }),
        },
    ],
    ly: [
        {
            baseKey: 'left',
            referKey: 'left',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left }),
        },
        {
            baseKey: 'left',
            referKey: 'cx',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx }),
        },
        {
            baseKey: 'left',
            referKey: 'right',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right }),
        },
    ],
    ry: [
        {
            baseKey: 'right',
            referKey: 'left',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left - baseRect.width }),
        },
        {
            baseKey: 'right',
            referKey: 'cx',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx - baseRect.width }),
        },
        {
            baseKey: 'right',
            referKey: 'right',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right - baseRect.width }),
        },
    ],
    cx: [
        {
            baseKey: 'cy',
            referKey: 'top',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top - baseRect.height / 2 }),
        },
        {
            baseKey: 'cy',
            referKey: 'cy',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy - baseRect.height / 2 }),
        },
        {
            baseKey: 'cy',
            referKey: 'bottom',
            baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom - baseRect.height / 2 }),
        },
    ],
    cy: [
        {
            baseKey: 'cx',
            referKey: 'left',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left - baseRect.width / 2 }),
        },
        {
            baseKey: 'cx',
            referKey: 'cx',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx - baseRect.width / 2 }),
        },
        {
            baseKey: 'cx',
            referKey: 'right',
            baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right - baseRect.width / 2 }),
        },
    ],
};
class CanvasComponent {
    constructor(store, utils) {
        this.store = store;
        this.utils = utils;
        this.pointerSnapshot = null;
        this.nodesSnapshot = new Map();
        this.gap = 5;
        this.nodes$ = this.store.selectDifferent((state) => state.nodes);
        this.store.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
        this.store.select((state) => state.selected).subscribe((state) => (this.selected = state));
        this.store.select((state) => state.canvasPosition).subscribe((state) => (this.canvasPosition = state));
    }
    nodeListTrackByFn(i, node) {
        return node.id;
    }
    moveStart(ev, node) {
        ev.preventDefault();
        ev.stopPropagation();
        this.nodesSnapshot.clear();
        this.pointerSnapshot = [ev.clientX, ev.clientY];
        let selected = [...this.selected];
        if (!this.selected.has(node.id)) {
            this.store.dispatch(clearBordered());
            this.store.dispatch(clearSelected());
            this.store.dispatch(addSelectedNodes([node.id]));
            selected = [node.id];
        }
        this.outerBoxSnapshot = this.utils.getOuterBoundingBox(selected
            .map((id) => this.utils.getNodeById(id, this.nodes))
            .map((item) => this.utils.getAbsolutePosition(item.left + item.width / 2, item.top + item.height / 2, item.width, item.height, item.rotate)));
        this.unselectedNodes = this.nodes.filter((item) => !selected.includes(item.id));
        selected.forEach((id) => {
            const item = this.nodes.find((n) => n.id === id);
            this.nodesSnapshot.set(item.id, Object.assign(Object.assign({}, item), { cxPercent: (item.left + item.width / 2 - this.outerBoxSnapshot.left) / this.outerBoxSnapshot.width, cyPercent: (item.top + item.height / 2 - this.outerBoxSnapshot.top) / this.outerBoxSnapshot.height }));
        });
    }
    moving(ev) {
        if (this.pointerSnapshot) {
            this.store.dispatch(resetRefLineState());
            const { scale } = this.canvasPosition;
            const [x, y] = this.pointerSnapshot;
            const [mx, my] = [(ev.clientX - x) / scale, (ev.clientY - y) / scale];
            const baseRect = Object.assign(Object.assign({}, this.outerBoxSnapshot), { left: this.outerBoxSnapshot.left + mx, top: this.outerBoxSnapshot.top + my, right: this.outerBoxSnapshot.right + mx, bottom: this.outerBoxSnapshot.bottom + my, cx: this.outerBoxSnapshot.cx + mx, cy: this.outerBoxSnapshot.cy + my });
            const refLinesState = {
                bx: null,
                tx: null,
                ly: null,
                ry: null,
                cx: null,
                cy: null,
            };
            this.unselectedNodes.forEach((node) => {
                const nodeRect = this.utils.getBoundingBox(node.width, node.height, node.left, node.top, node.rotate);
                ['tx', 'bx', 'ly', 'ry', 'cx', 'cy'].forEach((direction) => {
                    const result = getRefLineStateByDirection(direction, baseRect, nodeRect, this.gap / scale);
                    if (result) {
                        const { state, position, base } = result;
                        if (state) {
                            refLinesState[direction] = { state, position };
                            baseRect[base.key] = base.value;
                        }
                    }
                });
            });
            const newNodes = [];
            this.nodesSnapshot.forEach((node) => {
                const { cxPercent, cyPercent, width, height, nodeRect } = node, properties = Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__rest"])(node, ["cxPercent", "cyPercent", "width", "height", "nodeRect"]);
                newNodes.push(Object.assign(Object.assign({}, properties), { width,
                    height, left: cxPercent * baseRect.width + baseRect.left - width / 2, top: cyPercent * baseRect.height + baseRect.top - height / 2 }));
            });
            this.store.dispatch(updateRefLinesState(refLinesState));
            this.store.dispatch(updateNodes(newNodes));
        }
    }
    moveEnd() {
        this.pointerSnapshot = null;
        this.store.dispatch(resetRefLineState());
        this.nodesSnapshot.clear();
    }
    showBorder(id) {
        this.store.dispatch(addBorderedNodes([id]));
    }
    removeBorder(id) {
        if (!this.selected.has(id)) {
            this.store.dispatch(removeBorderedNodes([id]));
        }
    }
}
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService)); };
CanvasComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: CanvasComponent, selectors: [["ce-canvas"]], decls: 2, vars: 4, consts: [["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, CanvasComponent_ce_box_item_0_Template, 1, 2, "ce-box-item", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 2, ctx.nodes$))("ngForTrackBy", ctx.nodeListTrackByFn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], BoxItemComponent, DraggableDirective], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ce-canvas{bottom:0;left:0;position:absolute;right:0;top:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-canvas',
                templateUrl: 'canvas.component.html',
                styleUrls: ['canvas.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, null); })();
function getRefLineStateByDirection(direction, baseRect, referRect, gap) {
    return REF_LINE_DIRECTION_COMPARE_MAP[direction]
        .map(({ baseKey, referKey, baseValue }) => ({
        state: Math.abs(baseRect[baseKey] - referRect[referKey]) < gap,
        position: referRect[referKey],
        base: baseValue(baseRect, referRect),
    }))
        .find((item) => item.state);
}

const _c0 = ["layerTree"];
function LayerTreeComponent_ng_template_4_i_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "i", 5);
} if (rf & 2) {
    const node_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzType", node_r5.isExpanded ? "folder-open" : "folder");
} }
function LayerTreeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, LayerTreeComponent_ng_template_4_i_0_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !node_r5.isLeaf);
} }
function LayerTreeComponent_ng_template_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LayerTreeComponent_ng_template_6_li_6_Template_li_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r16); const ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); return ctx_r15.toggleNodesLockState(_r0.nzSelectedKeys, true); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "\u9501\u5B9A");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function LayerTreeComponent_ng_template_6_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LayerTreeComponent_ng_template_6_li_7_Template_li_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r18); const ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); return ctx_r17.toggleNodesLockState(_r0.nzSelectedKeys, false); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "\u89E3\u9501");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function LayerTreeComponent_ng_template_6_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LayerTreeComponent_ng_template_6_li_12_Template_li_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r20); const ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(2); const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); return ctx_r19.group(_r0.nzSelectedKeys); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "\u7EC4\u5408");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5, " ctrl+shift+G ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function LayerTreeComponent_ng_template_6_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "li", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LayerTreeComponent_ng_template_6_li_14_Template_li_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r23); const node_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().origin; const ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r21.breakNode(node_r9.id); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "\u6253\u6563");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "span", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(5, " ctrl+shift+B ");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function LayerTreeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("contextmenu", function LayerTreeComponent_ng_template_6_Template_div_contextmenu_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const node_r9 = ctx.origin; const _r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(4); const ctx_r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r24.contextMenu($event, _r10, node_r9); })("pointerenter", function LayerTreeComponent_ng_template_6_Template_div_pointerenter_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const node_r9 = ctx.origin; const ctx_r26 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r26.showBordered(node_r9.id); })("pointerleave", function LayerTreeComponent_ng_template_6_Template_div_pointerleave_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const node_r9 = ctx.origin; const ctx_r27 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r27.clearBordered(node_r9.id); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "nz-dropdown-menu", null, 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "ul", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, LayerTreeComponent_ng_template_6_li_6_Template, 4, 0, "li", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(7, LayerTreeComponent_ng_template_6_li_7_Template, 4, 0, "li", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "li", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function LayerTreeComponent_ng_template_6_Template_li_click_8_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r25); const ctx_r28 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(1); return ctx_r28.deleteNodes(_r0.nzSelectedKeys); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(9, "i", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(11, "\u5220\u9664");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(12, LayerTreeComponent_ng_template_6_li_12_Template, 6, 0, "li", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(13, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(14, LayerTreeComponent_ng_template_6_li_14_Template, 6, 0, "li", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const node_r9 = ctx.origin;
    const ctx_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("locked", node_r9.locked);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(node_r9.title);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !node_r9.locked);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", node_r9.locked);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(13, 7, ctx_r4.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx_r4.selected.size === 1 && node_r9.children && node_r9.children.length);
} }
class LayerTreeComponent {
    constructor(eleRef, store, utils, contextMenuSrv) {
        this.eleRef = eleRef;
        this.store = store;
        this.utils = utils;
        this.contextMenuSrv = contextMenuSrv;
        this.treeNodes$ = this.store
            .selectDifferent((state) => state.nodes)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((nodes) => this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(nodes))));
        this.selectedKeys$ = this.store.selectDifferent((state) => state.selected).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((selected) => [...selected]));
        this.groupStatus$ = this.store
            .selectDifferent((state) => state.selected)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !!this.layerTree), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((selected) => selected.size > 1
            ? !![...selected].find((id) => {
                var _a;
                const node = (_a = this.layerTree) === null || _a === void 0 ? void 0 : _a.getSelectedNodeList().find((item) => item.key === id);
                return node && node.parentNode;
            })
            : false));
        this.store
            .selectDifferent((state) => state.selected)
            .subscribe((selected) => {
            this.selected = selected;
        });
    }
    clearBordered(id) {
        if (!this.selected.has(id)) {
            this.store.dispatch(removeBorderedNodes([id]));
        }
    }
    showBordered(id) {
        this.store.dispatch(addBorderedNodes([id]));
    }
    layerTrackByFn(index, node) {
        return `box-item-${node.id}-${node.zIndex}`;
    }
    transferNodesToNzNodes(nodes) {
        return nodes.map((node) => {
            var _a;
            return Object.assign(Object.assign({}, node), { children: node.children && this.transferNodesToNzNodes(node.children), title: node.name, key: node.id, isLeaf: !((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) });
        });
    }
    contextMenu(event, menu, node) {
        if (!this.selected.has(node.key)) {
            this.store.dispatch(setSelectedNodes([node.key]));
        }
        this.contextMenuSrv.create(event, menu);
    }
    getParentKey(parentNode) {
        var _a;
        return (_a = parentNode === null || parentNode === void 0 ? void 0 : parentNode.key) !== null && _a !== void 0 ? _a : 'root';
    }
    multipleSelected(event) {
        if (!this.parentKey) {
            this.parentKey = this.getParentKey(event.node.parentNode);
        }
        const ids = event.selectedKeys.filter((node) => this.getParentKey(node.parentNode) === this.parentKey).map((node) => node.key);
        this.store.dispatch(setSelectedNodes(ids));
        this.store.dispatch(setBorderedNodes(ids));
    }
    clickNode(event) {
        if (event.node) {
            if (/Win|Linux/.test(navigator.platform)) {
                if (event.event.ctrlKey) {
                    this.multipleSelected(event);
                }
                else {
                    this.parentKey = this.getParentKey(event.node.parentNode);
                    this.store.dispatch(setSelectedNodes([event.node.key]));
                    this.store.dispatch(setBorderedNodes([event.node.key]));
                }
            }
            if (/Mac/.test(navigator.platform)) {
                if (event.event.metaKey) {
                    this.multipleSelected(event);
                }
                else {
                    this.parentKey = this.getParentKey(event.node.parentNode);
                    this.store.dispatch(setSelectedNodes([event.node.key]));
                    this.store.dispatch(setBorderedNodes([event.node.key]));
                }
            }
        }
    }
    group(ids) {
        this.store.dispatch(groupNodes(ids));
    }
    breakNode(id) {
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(breakNode(id));
    }
    deleteNodes(ids) {
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(removeNodes(ids));
    }
    toggleNodesLockState(ids, state) {
        if (state) {
            this.store.dispatch(lockNodes(ids));
        }
        else {
            this.store.dispatch(unlockNodes(ids));
        }
    }
}
LayerTreeComponent.ɵfac = function LayerTreeComponent_Factory(t) { return new (t || LayerTreeComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzContextMenuService"])); };
LayerTreeComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: LayerTreeComponent, selectors: [["ce-layer-tree"]], viewQuery: function LayerTreeComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0, true, ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeComponent"]);
    } if (rf & 2) {
        let _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.layerTree = _t.first);
    } }, exportAs: ["ceLayerTree"], decls: 8, vars: 8, consts: [["nzBlockNode", "", "nzMultiple", "", 3, "nzData", "nzSelectedKeys", "nzTreeTemplate", "nzExpandedIcon", "nzClick"], ["layerTree", ""], ["multiExpandedIconTpl", ""], ["nzTreeTemplate", ""], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], [1, "layer", 3, "contextmenu", "pointerenter", "pointerleave"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "class", "action-item", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 1, "action-item", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "lock"], ["nz-icon", "", "nzType", "unlock"], ["nz-icon", "", "nzIconfont", "icon-group"], [1, "shortcuts"], ["nz-icon", "", "nzIconfont", "icon-break"]], template: function LayerTreeComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-tree", 0, 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzClick", function LayerTreeComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.clickNode($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(2, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, LayerTreeComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, LayerTreeComponent_ng_template_6_Template, 15, 9, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        const _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(5);
        const _r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzData", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(2, 4, ctx.treeNodes$))("nzSelectedKeys", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(3, 6, ctx.selectedKeys$))("nzTreeTemplate", _r3)("nzExpandedIcon", _r1);
    } }, directives: [ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropdownMenuComponent"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuDirective"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_13__["NzMenuItemDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ce-layer-tree{display:block;height:100%;margin:0 -12px 0 0;overflow:auto;position:relative}ce-layer-tree ::-webkit-scrollbar{position:absolute;right:0}ce-layer-tree .layer{align-items:center;display:flex}ce-layer-tree .layer.locked{color:rgba(0,0,0,.45)}.action-item{align-items:center;display:flex;justify-content:flex-start;min-width:200px}.action-item .shortcuts{color:rgba(0,0,0,.45);margin-left:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(LayerTreeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-layer-tree',
                exportAs: 'ceLayerTree',
                templateUrl: 'layer-tree.component.html',
                styleUrls: ['layer-tree.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: EditorStore }, { type: CeUtilsService }, { type: ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzContextMenuService"] }]; }, { layerTree: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['layerTree', { read: ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeComponent"] }]
        }] }); })();

function PanelComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"])(ctx_r1.panel == null ? null : ctx_r1.panel.title);
} }
function PanelComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function PanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, PanelComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", ctx_r2.panel.content);
} }
function PanelComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function PanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, PanelComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngComponentOutlet", ctx_r3.panel.content);
} }
function PanelComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "button", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PanelComponent_ng_template_5_Template_button_click_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9); const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r8.toggleCollapsed(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(1, "i", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "button", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PanelComponent_ng_template_5_Template_button_click_2_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r9); const ctx_r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r10.close(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(3, "i", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
class PanelComponent {
    constructor(utils, store) {
        this.utils = utils;
        this.store = store;
    }
    set panel(val) {
        this._panel = val;
    }
    get panel() {
        return this._panel;
    }
    updatePosition(event) {
        this.store.updatePanelPosition(this.panel.key, [this.panel.x + event.distance.x, this.panel.y + event.distance.y]);
    }
    toggleCollapsed() {
        this.store.togglePanelCollapsed(this.panel.key);
    }
    close() {
        this.store.togglePanelVisible(this.panel.key);
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
PanelComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PanelComponent, selectors: [["ce-panel"], ["", "cePanel", ""]], inputs: { panel: "panel" }, decls: 7, vars: 7, consts: [["nzSize", "small", "cdkDrag", "", 3, "nzTitle", "nzExtra", "cdkDragFreeDragPosition", "cdkDragEnded"], ["cardTitle", ""], [4, "ngIf"], ["cardExtra", ""], ["cdkDragHandle", "", 1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [4, "ngComponentOutlet"], ["nz-button", "", "nzSize", "small", "nzType", "link", 1, "collapse-icon", 3, "click"], ["nz-icon", "", "nzType", "caret-down"], ["nz-button", "", "nzSize", "small", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "close"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-card", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("cdkDragEnded", function PanelComponent_Template_nz_card_cdkDragEnded_0_listener($event) { return ctx.updatePosition($event); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, PanelComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, PanelComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, PanelComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, PanelComponent_ng_template_5_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);
        const _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("collapsed", ctx.panel == null ? null : ctx.panel.collapsed);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzTitle", _r0)("nzExtra", _r4)("cdkDragFreeDragPosition", ctx.panel);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.utils.isTemplateType(ctx.panel.content));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", !ctx.utils.isTemplateType(ctx.panel.content));
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["CdkDragHandle"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgComponentOutlet"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"]], styles: ["[cePanel],ce-panel{display:block;pointer-events:none;position:absolute;width:300px}[cePanel] *,ce-panel *{pointer-events:auto}[cePanel]>nz-card.collapsed .ant-card-body,ce-panel>nz-card.collapsed .ant-card-body{height:0;overflow:hidden;padding:0}[cePanel]>nz-card.collapsed .collapse-icon,ce-panel>nz-card.collapsed .collapse-icon{transform:rotate(-180deg)}[cePanel]>nz-card .collapse-icon,ce-panel>nz-card .collapse-icon{transform:rotate(0deg);transition:transform .3s ease-in-out}[cePanel]>nz-card .ant-card-head-title,ce-panel>nz-card .ant-card-head-title{cursor:move}[cePanel]>nz-card .ant-card-body,ce-panel>nz-card .ant-card-body{height:calc(100vh - 110px);transition:height .3s ease-in-out,padding .3s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-panel,[cePanel]',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: CeUtilsService }, { type: EditorStore }]; }, { panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

function CanvasFormsComponent_img_60_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "img", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "nzSanitizer");
} if (rf & 2) {
    const ctx_r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("max-width", 100, "%");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("src", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"])(1, 3, ctx_r0.canvasBackgroundFormGroup.controls["backgroundImage"].value, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class CanvasFormsComponent {
    constructor(fb, store) {
        this.fb = fb;
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.canvasSizeFormGroup = this.fb.group({
            width: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].min(0)]],
            height: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].min(0)]],
        });
        this.canvasPositionFormGroup = this.fb.group({
            left: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            top: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            scale: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].min(0.01), _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
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
CanvasFormsComponent.ɵfac = function CanvasFormsComponent_Factory(t) { return new (t || CanvasFormsComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
CanvasFormsComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: CanvasFormsComponent, selectors: [["ce-canvas-forms"], ["", "ceCanvasForms", ""]], decls: 61, vars: 4, consts: [["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], [1, "mt-2"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzIconfont", "icon-scale"], ["nzSize", "small", "formControlName", "scale"], ["nz-icon", "", "nzIconfont", "icon-color"], ["type", "color", "nz-input", "", "nzSize", "small", "formControlName", "backgroundColor"], ["nz-icon", "", "nzIconfont", "icon-image"], ["type", "text", "nz-input", "", "nzSize", "small", "formControlName", "backgroundImage"], [1, "mt-1"], [3, "max-width", "src", 4, "ngIf"], [3, "src"]], template: function CanvasFormsComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "h4");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, "\u753B\u5E03\u5C3A\u5BF8");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "form", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "nz-row", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(8, "i", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(10, "nz-input-number", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(14, "i", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(15, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(16, "nz-input-number", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(17, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(18, "h4");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(19, "\u753B\u5E03\u4F4D\u7F6E");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(20, "form", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(21, "nz-row", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(22, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(23, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(25, "i", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(26, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(27, "nz-input-number", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(28, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(29, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(30, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(31, "i", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(32, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(33, "nz-input-number", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(34, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(35, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(36, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(37, "i", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(38, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(39, "nz-input-number", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(40, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(41, "h4");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(42, "\u753B\u5E03\u80CC\u666F");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(43, "form", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(44, "nz-row", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(45, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(46, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(47, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(48, "i", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(49, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(50, "input", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(51, "nz-col", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(52, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(53, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(54, "i", 16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(55, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(56, "input", 17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(57, "h5", 18);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(58, "\u80CC\u666F\u9884\u89C8");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(59, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(60, CanvasFormsComponent_img_60_Template, 2, 6, "img", 19);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.canvasSizeFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.canvasPositionFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(23);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.canvasBackgroundFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.canvasBackgroundFormGroup.controls["backgroundImage"].value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormLabelComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormControlComponent"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_20__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlName"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_6__["NzSanitizerPipe"]], styles: ["[ceCanvasForms],ce-canvas-forms{display:block;padding:12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CanvasFormsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-canvas-forms,[ceCanvasForms]',
                templateUrl: './canvas-forms.component.html',
                styleUrls: ['./canvas-forms.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] }, { type: EditorStore }]; }, null); })();

const _c0$1 = ["container"];
function WidgetFormComponent_ng_template_56_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(2, "none");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function WidgetFormComponent_ng_template_56_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 32);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function WidgetFormComponent_ng_template_56_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 33);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function WidgetFormComponent_ng_template_56_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 31);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 34);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function WidgetFormComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 28);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(1, 29);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, WidgetFormComponent_ng_template_56_ng_container_2_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(3, WidgetFormComponent_ng_template_56_ng_container_3_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, WidgetFormComponent_ng_template_56_ng_container_4_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(5, WidgetFormComponent_ng_template_56_ng_container_5_Template, 3, 0, "ng-container", 30);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const selected_r8 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", 40, "px");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitch", selected_r8.nzValue);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", "none");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", "dashed");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", "solid");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngSwitchCase", "dotted");
} }
function WidgetFormComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function WidgetFormComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function WidgetFormComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function WidgetFormComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
function WidgetFormComponent_ng_template_68_Template(rf, ctx) { }
const _c1 = function () { return { nzValue: "none" }; };
const _c2 = function (a0) { return { $implicit: a0 }; };
const _c3 = function () { return { nzValue: "dashed" }; };
const _c4 = function () { return { nzValue: "solid" }; };
const _c5 = function () { return { nzValue: "dotted" }; };
class WidgetFormComponent {
    constructor(fb, cfr, store) {
        this.fb = fb;
        this.cfr = cfr;
        this.store = store;
        this.boundingFormGroup = this.fb.group({
            id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            name: [],
            width: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            height: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            left: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            top: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            locked: [],
            rotate: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
            zIndex: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required]],
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((selected) => selected.size === 1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((selected) => [...selected][0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((id) => this.store.select((state) => state.nodes.find((item) => item.id === id))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((node) => !!node))
            .subscribe((node) => {
            this.boundingFormGroup.patchValue(Object.assign(Object.assign({}, node), { width: Math.round(node.width), height: Math.round(node.height), left: Math.round(node.left), top: Math.round(node.top) }), { emitEvent: false });
        });
        this.boundingFormGroup.valueChanges.subscribe((values) => {
            this.store.dispatch(updateNodes([values]));
        });
    }
}
WidgetFormComponent.ɵfac = function WidgetFormComponent_Factory(t) { return new (t || WidgetFormComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
WidgetFormComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: WidgetFormComponent, selectors: [["ce-widget-form"], ["", "ceWidgetForm", ""]], viewQuery: function WidgetFormComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$1, true);
    } if (rf & 2) {
        let _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.propsFormContainer = _t.first);
    } }, decls: 70, vars: 25, consts: [["nzGhost", "", "nzAccordion", "", "nzSize", "small", 3, "nzBordered"], ["nzHeader", "\u5916\u5305\u56F4\u76D2\u5C5E\u6027", "nzActive", ""], ["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzType", "rotate-right"], ["nzSize", "small", "formControlName", "rotate"], ["nz-icon", "", "nzType", "lock"], ["formControlName", "locked"], ["nzSpan", "24"], ["nz-icon", "", "nzType", "border-outer"], ["borderStyleTpl", ""], ["nzSize", "small", "formControlName", "borderStyle", 3, "nzCustomTemplate"], ["nzValue", "none", "nzLabel", "none"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzValue", "dashed", "nzLabel", "dashed", "nzCustomContent", ""], ["nzValue", "solid", "nzLabel", "solid", "nzCustomContent", ""], ["nzValue", "dotted", "nzLabel", "dotted", "nzCustomContent", ""], ["nzHeader", "\u7EC4\u4EF6\u5C5E\u6027"], ["container", ""], [1, "d-flex", "align-items-center", "h-100"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["viewBox", "0 0 40 1", 1, "svg-icon"], ["d", "M0 1h5V0H0v1zm9 0h5V0H9v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1z"], ["d", "M0 0h80v1H0z"], ["d", "M0 1h1V0H0v1zm4 0h1V0H4v1zm4 0h1V0H8v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1z"]], template: function WidgetFormComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-collapse", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "nz-collapse-panel", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(3, "h5");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(4, "\u5C3A\u5BF8");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "form", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "nz-row", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(7, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(10, "i", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(12, "nz-input-number", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(15, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(16, "i", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(17, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(18, "nz-input-number", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(19, "h5");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(20, "\u4F4D\u7F6E");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(21, "form", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(22, "nz-row", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(23, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(25, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(26, "i", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(27, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(28, "nz-input-number", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(29, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(30, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(31, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(32, "i", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(33, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(34, "nz-input-number", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(35, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(36, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(37, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(38, "i", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(39, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(40, "nz-input-number", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(41, "nz-col", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(42, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(43, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(44, "i", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(45, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(46, "nz-switch", 16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(47, "h5");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(48, "\u8FB9\u6846");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(49, "form", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(50, "nz-row", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(51, "nz-col", 17);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(52, "nz-form-item");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(53, "nz-form-label");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(54, "i", 18);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(55, "nz-form-control");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(56, WidgetFormComponent_ng_template_56_Template, 6, 7, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(58, "nz-select", 20);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(59, "nz-option", 21);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(60, WidgetFormComponent_ng_container_60_Template, 1, 0, "ng-container", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(61, "nz-option", 23);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(62, WidgetFormComponent_ng_container_62_Template, 1, 0, "ng-container", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(63, "nz-option", 24);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(64, WidgetFormComponent_ng_container_64_Template, 1, 0, "ng-container", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(65, "nz-option", 25);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(66, WidgetFormComponent_ng_container_66_Template, 1, 0, "ng-container", 22);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(67, "nz-collapse-panel", 26);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(68, WidgetFormComponent_ng_template_68_Template, 0, 0, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(57);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzBordered", false);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.boundingFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(16);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.boundingFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(28);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("formGroup", ctx.boundingFormGroup);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzCustomTemplate", _r0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(14, _c2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(13, _c1)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(17, _c2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(16, _c3)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(20, _c2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(19, _c4)));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngTemplateOutlet", _r0)("ngTemplateOutletContext", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"])(23, _c2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"])(22, _c5)));
    } }, directives: [ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_22__["NzCollapseComponent"], ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_22__["NzCollapsePanelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzRowDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_19__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormItemComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormLabelComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormControlComponent"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_20__["NzInputNumberComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControlName"], ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzSelectComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzOptionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"]], styles: ["[ceWidgetForm],ce-widget-form{display:block}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item,ce-widget-form .ant-collapse-ghost>.ant-collapse-item{border-bottom:1px solid #d9d9d9}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header{padding-left:20px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{left:5px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box{padding:8px}[ceWidgetForm] .ant-form-item-control-input-content,ce-widget-form .ant-form-item-control-input-content{align-items:center;display:flex}"], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(WidgetFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-widget-form,[ceWidgetForm]',
                templateUrl: './widget-form.component.html',
                styleUrls: ['./widget-form.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: EditorStore }]; }, { propsFormContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();

const _c0$2 = ["instance"];
function PropertyFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"])(0);
} }
class PropertyFormComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.formComponent$ = this.store
            .select((state) => state.selected.size)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((size) => (size === 1 ? WidgetFormComponent : CanvasFormsComponent)));
    }
}
PropertyFormComponent.ɵfac = function PropertyFormComponent_Factory(t) { return new (t || PropertyFormComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
PropertyFormComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PropertyFormComponent, selectors: [["ce-property-form"], ["", "cePropertyForm", ""]], viewQuery: function PropertyFormComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"])(_c0$2, true);
    } if (rf & 2) {
        let _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.instance = _t.first);
    } }, decls: 2, vars: 3, consts: [[4, "ngComponentOutlet"]], template: function PropertyFormComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, PropertyFormComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngComponentOutlet", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 1, ctx.formComponent$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgComponentOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["[cePropertyForm],ce-property-form{display:block;margin:-12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PropertyFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-property-form,[cePropertyForm]',
                templateUrl: './property-form.component.html',
                styleUrls: ['./property-form.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }]; }, { instance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['instance']
        }] }); })();

function ResizeHandleComponent_ce_rotate_handle_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "ce-rotate-handle");
} }
function ResizeHandleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_div_2_Template_div_ceOnStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r10); const ctx_r9 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r9.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_2_Template_div_ceOnMove_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r10); const ctx_r11 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r11.resizing($event, "t"); })("ceOnStop", function ResizeHandleComponent_div_2_Template_div_ceOnStop_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r10); const ctx_r12 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r12.resizeEnd(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function ResizeHandleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_div_4_Template_div_ceOnStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r14); const ctx_r13 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r13.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_4_Template_div_ceOnMove_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r14); const ctx_r15 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r15.resizing($event, "r"); })("ceOnStop", function ResizeHandleComponent_div_4_Template_div_ceOnStop_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r14); const ctx_r16 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r16.resizeEnd(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function ResizeHandleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_div_6_Template_div_ceOnStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r18); const ctx_r17 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r17.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_6_Template_div_ceOnMove_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r18); const ctx_r19 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r19.resizing($event, "b"); })("ceOnStop", function ResizeHandleComponent_div_6_Template_div_ceOnStop_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r18); const ctx_r20 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r20.resizeEnd(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function ResizeHandleComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_div_8_Template_div_ceOnStart_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r22); const ctx_r21 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r21.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_8_Template_div_ceOnMove_0_listener($event) { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r22); const ctx_r23 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r23.resizing($event, "l"); })("ceOnStop", function ResizeHandleComponent_div_8_Template_div_ceOnStop_0_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r22); const ctx_r24 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r24.resizeEnd(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} }
function ResizeHandleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 21);
} }
function ResizeHandleComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 22);
} }
function ResizeHandleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 23);
} }
function ResizeHandleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 24);
} }
class ResizeHandleComponent {
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
ResizeHandleComponent.ɵfac = function ResizeHandleComponent_Factory(t) { return new (t || ResizeHandleComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ResizeHandleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: ResizeHandleComponent, selectors: [["ce-resize-handle"], ["", "ceResizeHandle", ""]], hostVars: 12, hostBindings: function ResizeHandleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("display", ctx.display)("width", ctx.width, "px")("height", ctx.height, "px")("left", ctx.left, "px")("top", ctx.top, "px")("transform", ctx.transform);
    } }, decls: 26, vars: 27, consts: [[4, "ngIf"], ["class", "resizable-handle t", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle r", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle b", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle l", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["ceDraggable", "", 1, "resizable-handle", "tr", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "br", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "tl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "bl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["class", "t circle", 4, "ngIf"], ["class", "r circle", 4, "ngIf"], ["class", "b circle", 4, "ngIf"], ["class", "l circle", 4, "ngIf"], [1, "tr", "circle"], [1, "br", "circle"], [1, "tl", "circle"], [1, "bl", "circle"], ["ceDraggable", "", 1, "resizable-handle", "t", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "r", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "b", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "l", 3, "ceOnStart", "ceOnMove", "ceOnStop"], [1, "t", "circle"], [1, "r", "circle"], [1, "b", "circle"], [1, "l", "circle"]], template: function ResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, ResizeHandleComponent_ce_rotate_handle_0_Template, 1, 0, "ce-rotate-handle", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(1, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(2, ResizeHandleComponent_div_2_Template, 1, 0, "div", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(3, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(4, ResizeHandleComponent_div_4_Template, 1, 0, "div", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(5, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(6, ResizeHandleComponent_div_6_Template, 1, 0, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(7, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(8, ResizeHandleComponent_div_8_Template, 1, 0, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(9, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_10_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_10_listener($event) { return ctx.resizing($event, "tr"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_10_listener() { return ctx.resizeEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_11_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_11_listener($event) { return ctx.resizing($event, "br"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_11_listener() { return ctx.resizeEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(12, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_12_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_12_listener($event) { return ctx.resizing($event, "tl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_12_listener() { return ctx.resizeEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(13, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_13_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_13_listener($event) { return ctx.resizing($event, "bl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_13_listener() { return ctx.resizeEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(14, ResizeHandleComponent_div_14_Template, 1, 0, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(15, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(16, ResizeHandleComponent_div_16_Template, 1, 0, "div", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(17, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(18, ResizeHandleComponent_div_18_Template, 1, 0, "div", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(19, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(20, ResizeHandleComponent_div_20_Template, 1, 0, "div", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(21, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(22, "div", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(23, "div", 14);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(24, "div", 15);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(25, "div", 16);
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(1, 9, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(3, 11, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(5, 13, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(7, 15, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(9, 17, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(15, 19, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(17, 21, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(19, 23, ctx.hasSelected$));
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(21, 25, ctx.hasSelected$));
    } }, styles: ["[ceResizeHandle],ce-resize-handle{border:1px solid #1890ff;box-sizing:border-box;position:absolute}[ceResizeHandle] .resizable-handle,ce-resize-handle .resizable-handle{cursor:pointer;height:14px;pointer-events:auto;position:absolute;width:14px;z-index:1}[ceResizeHandle] .circle,ce-resize-handle .circle{background:#fff;border:1px solid #1890ff;border-radius:50%;height:7px;position:absolute;width:7px}[ceResizeHandle] .b,[ceResizeHandle] .t,ce-resize-handle .b,ce-resize-handle .t{left:50%;margin-left:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .t.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .t.resizable-handle{margin-left:-7px}[ceResizeHandle] .l,[ceResizeHandle] .r,ce-resize-handle .l,ce-resize-handle .r{margin-top:-3.5px;top:50%}[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .r.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .r.resizable-handle{margin-top:-7px}[ceResizeHandle] .t,[ceResizeHandle] .tl,[ceResizeHandle] .tr,ce-resize-handle .t,ce-resize-handle .tl,ce-resize-handle .tr{top:-3.5px}[ceResizeHandle] .t.resizable-handle,[ceResizeHandle] .tl.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .t.resizable-handle,ce-resize-handle .tl.resizable-handle,ce-resize-handle .tr.resizable-handle{top:-7px}[ceResizeHandle] .b,[ceResizeHandle] .bl,[ceResizeHandle] .br,ce-resize-handle .b,ce-resize-handle .bl,ce-resize-handle .br{bottom:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .br.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .br.resizable-handle{bottom:-7px}[ceResizeHandle] .br,[ceResizeHandle] .r,[ceResizeHandle] .tr,ce-resize-handle .br,ce-resize-handle .r,ce-resize-handle .tr{right:-3.5px}[ceResizeHandle] .br.resizable-handle,[ceResizeHandle] .r.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .br.resizable-handle,ce-resize-handle .r.resizable-handle,ce-resize-handle .tr.resizable-handle{right:-7px}[ceResizeHandle] .bl,[ceResizeHandle] .l,[ceResizeHandle] .tl,ce-resize-handle .bl,ce-resize-handle .l,ce-resize-handle .tl{left:-3.5px}[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .tl.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .tl.resizable-handle{left:-7px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ResizeHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-resize-handle,[ceResizeHandle]',
                templateUrl: 'resize-handle.component.html',
                styleUrls: ['resize-handle.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { display: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.display']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.left.px']
        }], top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.top.px']
        }], transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
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

class RotateHandleComponent {
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
RotateHandleComponent.ɵfac = function RotateHandleComponent_Factory(t) { return new (t || RotateHandleComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(ResizeHandleComponent, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService)); };
RotateHandleComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: RotateHandleComponent, selectors: [["ce-rotate-handle"]], decls: 3, vars: 2, consts: [["ceDraggable", "", 1, "rotate", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["width", "14", "height", "14", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z", "fill-rule", "nonzero"]], template: function RotateHandleComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function RotateHandleComponent_Template_div_ceOnStart_0_listener($event) { return ctx.rotateStart($event); })("ceOnMove", function RotateHandleComponent_Template_div_ceOnMove_0_listener($event) { return ctx.rotating($event); })("ceOnStop", function RotateHandleComponent_Template_div_ceOnStop_0_listener() { return ctx.rotateStop(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "svg", 1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(2, "path", 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("cursor", ctx.rotateSnapshot && "grabbing");
    } }, directives: [DraggableDirective], styles: [".rotate{align-items:center;cursor:grab;display:flex;height:18px;justify-content:center;left:50%;margin-left:-9px;pointer-events:auto;position:absolute;top:-26px;width:18px}.rotate path{fill:#1890ff}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(RotateHandleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-rotate-handle',
                templateUrl: 'rotate-handle.component.html',
                styleUrls: ['rotate-handle.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: ResizeHandleComponent, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: EditorStore }, { type: CeUtilsService }]; }, null); })();

class NoZoomAreaDirective {
    constructor(store) {
        this.store = store;
        this.store
            .select((state) => (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })))
            .subscribe((state) => {
            this.width = state.width * state.scale;
            this.height = state.height * state.scale;
        });
    }
}
NoZoomAreaDirective.ɵfac = function NoZoomAreaDirective_Factory(t) { return new (t || NoZoomAreaDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
NoZoomAreaDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: NoZoomAreaDirective, selectors: [["", "ceNoZoomArea", ""]], hostVars: 4, hostBindings: function NoZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceNoZoomArea"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(NoZoomAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ceNoZoomArea]',
                exportAs: 'ceNoZoomArea',
            }]
    }], function () { return [{ type: EditorStore }]; }, { width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }] }); })();

class SelectorDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.move$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'pointermove');
        this.up$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(window, 'pointerup');
        this.startPointSnapshot = null;
        this.ceSelectorDisabled = false;
        this.ceOnSelectorStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ceOnSelectorMoving = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ceOnSelectorStop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(this.eleRef.nativeElement, 'pointerdown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => e.button === 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(() => !this.ceSelectorDisabled), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((ev) => {
            this.boxRect = this.eleRef.nativeElement.getBoundingClientRect();
            this.startPointSnapshot = [ev.clientX, ev.clientY];
            this.ceOnSelectorStart.emit();
            return this.move$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
                this.startPointSnapshot = null;
                this.ceOnSelectorStop.emit();
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.up$));
        }))
            .subscribe((e) => {
            if (this.startPointSnapshot) {
                let x;
                let y;
                const [mx, my] = [e.clientX - this.startPointSnapshot[0], e.clientY - this.startPointSnapshot[1]];
                if (mx >= 0) {
                    x = this.startPointSnapshot[0] - this.boxRect.left;
                }
                else {
                    x = e.clientX - this.boxRect.left;
                }
                if (my >= 0) {
                    y = this.startPointSnapshot[1] - this.boxRect.top;
                }
                else {
                    y = e.clientY - this.boxRect.top;
                }
                this.ceOnSelectorMoving.emit({ x, y, width: Math.abs(mx), height: Math.abs(my) });
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SelectorDirective.ɵfac = function SelectorDirective_Factory(t) { return new (t || SelectorDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
SelectorDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: SelectorDirective, selectors: [["", "ceSelector", ""]], inputs: { ceSelectorDisabled: "ceSelectorDisabled" }, outputs: { ceOnSelectorStart: "ceOnSelectorStart", ceOnSelectorMoving: "ceOnSelectorMoving", ceOnSelectorStop: "ceOnSelectorStop" }, exportAs: ["ceSelector"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_7__["__decorate"])([
    Object(ng_zorro_antd_core_util__WEBPACK_IMPORTED_MODULE_8__["InputBoolean"])()
], SelectorDirective.prototype, "ceSelectorDisabled", void 0);
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(SelectorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ceSelector]',
                exportAs: 'ceSelector',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { ceSelectorDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ceOnSelectorStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ceOnSelectorMoving: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], ceOnSelectorStop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class ZoomAreaDirective {
    constructor(store) {
        this.store = store;
        this.transformOrigin = '0 0';
        this.store
            .select((state) => (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })))
            .subscribe((state) => {
            this.scale = `perspective(1px) scale(${state.scale})`;
            this.width = state.width;
            this.height = state.height;
        });
    }
}
ZoomAreaDirective.ɵfac = function ZoomAreaDirective_Factory(t) { return new (t || ZoomAreaDirective)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
ZoomAreaDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: ZoomAreaDirective, selectors: [["", "ceZoomArea", ""]], hostVars: 8, hostBindings: function ZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("transform-origin", ctx.transformOrigin)("transform", ctx.scale)("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceZoomArea"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ZoomAreaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ceZoomArea]',
                exportAs: 'ceZoomArea',
            }]
    }], function () { return [{ type: EditorStore }]; }, { transformOrigin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.transform-origin']
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.transform']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
        }] }); })();

class CeToolbarDirective {
    constructor() { }
}
CeToolbarDirective.ɵfac = function CeToolbarDirective_Factory(t) { return new (t || CeToolbarDirective)(); };
CeToolbarDirective.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: CeToolbarDirective, selectors: [["", "ceToolbar", ""]], exportAs: ["ceToolbar"] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(CeToolbarDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ceToolbar]',
                exportAs: 'ceToolbar',
            }]
    }], function () { return []; }, null); })();

function ToolbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} }
function ToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "nz-card", 2);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "span", 4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(3, "Canvas Title");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(4, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(6, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "i", 7);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(8, "button", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(9, "i", 9);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(10, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "button", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ToolbarComponent_ng_template_1_Template_button_click_11_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const ctx_r3 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r3.groupNodes(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(12, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(13, "i", 11);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(14, "button", 10);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function ToolbarComponent_ng_template_1_Template_button_click_14_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const ctx_r5 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r5.breakNode(); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(15, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(16, "i", 12);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(17, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(18, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(19, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(20, "i", 13);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(21, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(22, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(23, "i", 14);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(24, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(25, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(26, "i", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(27, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(28, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(29, "i", 16);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(30, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(31, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(32, "i", 17);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(33, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(34, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(35, "i", 18);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(36, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(37, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(38, "i", 19);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(39, "button", 6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(40, "async");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(41, "i", 20);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(42, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(43, "nz-tag", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_43_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const ctx_r6 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r6.store.togglePanelVisible("LAYERS"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(44, "i", 22);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(45, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(46, "\u56FE\u5C42");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(47, "nz-tag", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_47_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const ctx_r7 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r7.store.togglePanelVisible("WIDGET_LIST"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(48, "i", 23);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(49, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(50, "\u7EC4\u4EF6");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(51, "nz-tag", 21);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_51_listener() { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"])(_r4); const ctx_r8 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])(); return ctx_r8.store.togglePanelVisible("PROPERTIES"); });
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(52, "i", 24);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(53, "span");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(54, "\u5C5E\u6027");
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(55, "div", 5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(56, "button", 8);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(57, "i", 25);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    let tmp_11_0 = null;
    let tmp_12_0 = null;
    let tmp_13_0 = null;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(5);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(6, 14, ctx_r2.copyStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(6);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(12, 16, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", !Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(15, 18, ctx_r2.breakStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(19, 20, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(22, 22, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(25, 24, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(28, 26, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(31, 28, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(34, 30, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(37, 32, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("disabled", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(40, 34, ctx_r2.groupStatus$));
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzChecked", (tmp_11_0 = ctx_r2.store.getPanel("LAYERS")) == null ? null : tmp_11_0.show);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzChecked", (tmp_12_0 = ctx_r2.store.getPanel("WIDGET_LIST")) == null ? null : tmp_12_0.show);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(4);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("nzChecked", (tmp_13_0 = ctx_r2.store.getPanel("PROPERTIES")) == null ? null : tmp_13_0.show);
} }
const _c0$3 = [[["", "ceToolbar", ""]]];
const _c1$1 = ["[ceToolbar]"];
class ToolbarComponent {
    constructor(store, utils) {
        this.store = store;
        this.utils = utils;
        this.store
            .selectDifferent((state) => ({ selected: state.selected, nodes: state.nodes }))
            .subscribe(({ selected, nodes }) => {
            this.selected = selected;
            this.nodes = nodes;
        });
        this.selected$ = this.store.selectDifferent((state) => state.selected);
        this.groupStatus$ = this.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((state) => state.size <= 1));
        this.breakStatus$ = this.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((state) => (state.size === 1 ? [...state][0] : false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((id) => { var _a, _b; return id && !!((_b = (_a = this.utils.getNodeById(id, this.nodes)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length); }));
    }
    get copyStatus$() {
        return this.selected$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((state) => state.size === 0));
    }
    groupNodes() {
        const ids = [...this.selected];
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(groupNodes(ids));
    }
    breakNode() {
        const node = this.utils.getNodeById([...this.selected][0], this.nodes);
        this.store.dispatch(clearSelected());
        this.store.dispatch(clearBordered());
        this.store.dispatch(breakNode(node.id));
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(CeUtilsService)); };
ToolbarComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: ToolbarComponent, selectors: [["ce-toolbar"]], contentQueries: function ToolbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"])(dirIndex, CeToolbarDirective, true);
    } if (rf & 2) {
        let _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.ceToolbar = _t.first);
    } }, exportAs: ["ceToolbar"], ngContentSelectors: _c1$1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["nzSize", "small", 1, "tool-bar"], [1, "d-flex", "align-items-center", "col", "p-0"], [1, "ml-2"], [1, "d-flex", "ml-auto", "align-items-center"], ["nz-button", "", "nzType", "link", 3, "disabled"], ["nz-icon", "", "nzIconfont", "icon-copy"], ["nz-button", "", "nzType", "link"], ["nz-icon", "", "nzIconfont", "icon-paste"], ["nz-button", "", "nzType", "link", 3, "disabled", "click"], ["nz-icon", "", "nzIconfont", "icon-group"], ["nz-icon", "", "nzIconfont", "icon-break"], ["nz-icon", "", "nzIconfont", "icon-horizontal-between"], ["nz-icon", "", "nzIconfont", "icon-horizontal-align"], ["nz-icon", "", "nzIconfont", "icon-vertical-between"], ["nz-icon", "", "nzIconfont", "icon-vertical-align"], ["nz-icon", "", "nzIconfont", "icon-left-align"], ["nz-icon", "", "nzIconfont", "icon-right-align"], ["nz-icon", "", "nzIconfont", "icon-top-align"], ["nz-icon", "", "nzIconfont", "icon-bottom-align"], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", "nzIconfont", "icon-tuceng"], ["nz-icon", "", "nzIconfont", "icon-widgets"], ["nz-icon", "", "nzIconfont", "icon-widget"], ["nz-icon", "", "nzIconfont", "icon-run"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c0$3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(0, ToolbarComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, ToolbarComponent_ng_template_1_Template, 58, 36, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.ceToolbar)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonComponent"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_12__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconDirective"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__["NzTagComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["ce-toolbar{display:flex;flex:1;height:40px;max-height:40px;width:100%}ce-toolbar .tool-bar{flex:1}ce-toolbar .tool-bar [nz-icon]{font-size:18px}ce-toolbar .tool-bar nz-tag{margin:auto .2rem;padding:auto 2px}ce-toolbar .tool-bar nz-tag [nz-icon]{font-size:13px}ce-toolbar .tool-bar .ant-card-body{display:flex;height:100%;padding:2px 5px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-toolbar',
                exportAs: 'ceToolbar',
                templateUrl: 'toolbar.component.html',
                styleUrls: ['toolbar.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, { ceToolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [CeToolbarDirective]
        }] }); })();

class WidgetListComponent {
    constructor() { }
    ngOnInit() { }
}
WidgetListComponent.ɵfac = function WidgetListComponent_Factory(t) { return new (t || WidgetListComponent)(); };
WidgetListComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: WidgetListComponent, selectors: [["ce-widget-list"]], decls: 2, vars: 0, template: function WidgetListComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(0, "p");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"])(1, "widget-list works!");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
    } }, styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(WidgetListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-widget-list',
                templateUrl: 'widget-list.component.html',
                styleUrls: ['widget-list.component.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return []; }, null); })();

const _c0$4 = ["container"];
function AngularEditorLibComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "div", 14);
} if (rf & 2) {
    const ctx_r2 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])();
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", ctx_r2.selectorRect.x, "px")("top", ctx_r2.selectorRect.y, "px")("width", ctx_r2.selectorRect.width, "px")("height", ctx_r2.selectorRect.height, "px");
} }
function AngularEditorLibComponent_ng_container_33_ce_panel_1_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(0, "ce-panel", 16);
} if (rf & 2) {
    const panel_r4 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"])().$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("panel", panel_r4);
} }
function AngularEditorLibComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"])(0);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(1, AngularEditorLibComponent_ng_container_33_ce_panel_1_Template, 1, 1, "ce-panel", 15);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"])();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", panel_r4.show);
} }
const _c1$2 = [[["", "toolbar", ""]]];
const _c2$1 = ["[toolbar]"];
class AngularEditorLibComponent {
    constructor(store) {
        this.store = store;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
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
        this.subscription.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(scaleEle, 'wheel')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((e) => e.ctrlKey))
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
AngularEditorLibComponent.ɵfac = function AngularEditorLibComponent_Factory(t) { return new (t || AngularEditorLibComponent)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(EditorStore)); };
AngularEditorLibComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: AngularEditorLibComponent, selectors: [["ce-editor"]], viewQuery: function AngularEditorLibComponent_Query(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"])(_c0$4, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
    } if (rf & 2) {
        let _t;
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"])(_t = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"])()) && (ctx.containerEleRef = _t.first);
    } }, inputs: { state: "state" }, exportAs: ["ceEditor"], features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([EditorStore])], ngContentSelectors: _c2$1, decls: 35, vars: 60, consts: [[1, "col", "p-0", "d-flex"], ["ceDraggable", "", "ceUseSpace", "", "ceSelector", "", 1, "canvas-container", 3, "ceSelectorDisabled", "ceOnStart", "ceOnMove", "ceOnStop", "ceOnSelectorStart", "ceOnSelectorMoving", "ceOnSelectorStop"], ["ceDrag", "ceDraggable", "container", ""], [1, "canvas-content"], ["ceNoZoomArea", ""], ["ceZoomArea", ""], ["cx", "", 1, "ref-line", "y"], ["cy", "", 1, "ref-line", "x"], ["tx", "", 1, "ref-line", "y"], ["bx", "", 1, "ref-line", "y"], ["ly", "", 1, "ref-line", "x"], ["ry", "", 1, "ref-line", "x"], ["class", "selector", 3, "left", "top", "width", "height", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selector"], [3, "panel", 4, "ngIf"], [3, "panel"]], template: function AngularEditorLibComponent_Template(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"])(_c1$2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"])(0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(1, "div", 0);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(2, "div", 1, 2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("ceOnStart", function AngularEditorLibComponent_Template_div_ceOnStart_2_listener($event) { return ctx.dragStart($event); })("ceOnMove", function AngularEditorLibComponent_Template_div_ceOnMove_2_listener($event) { return ctx.dragging($event); })("ceOnStop", function AngularEditorLibComponent_Template_div_ceOnStop_2_listener() { return ctx.dragEnd(); })("ceOnSelectorStart", function AngularEditorLibComponent_Template_div_ceOnSelectorStart_2_listener() { return ctx.selectorStart(); })("ceOnSelectorMoving", function AngularEditorLibComponent_Template_div_ceOnSelectorMoving_2_listener($event) { return ctx.selectorMoving($event); })("ceOnSelectorStop", function AngularEditorLibComponent_Template_div_ceOnSelectorStop_2_listener() { return ctx.selectorEnd(); });
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(5, "div", 3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(6, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(7, "ce-canvas-background");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(8, "ce-canvas-grid");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(9, "div", 5);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(10, "ce-canvas");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"])(11, "div", 4);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(12, "ce-bordered-area");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(13, "ce-resize-handle");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(14, "div", 6);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(15, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(16, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(17, "div", 7);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(18, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(19, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(20, "div", 8);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(21, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(22, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(23, "div", 9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(24, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(25, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(26, "div", 10);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(27, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(28, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"])(29, "div", 11);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(30, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(31, "async");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(32, AngularEditorLibComponent_div_32_Template, 1, 8, "div", 12);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"])();
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"])(33, AngularEditorLibComponent_ng_container_33_Template, 2, 1, "ng-container", 13);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"])(34, "async");
    } if (rf & 2) {
        const _r0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"])(3);
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(2);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("start-drag", _r0.spaceKeyDown)("dragging", ctx.startPoints);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ceSelectorDisabled", _r0.spaceKeyDown);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("transform", ctx.matrix);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(9);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("top", ((tmp_4_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(15, 34, ctx.refLineState$)) == null ? null : tmp_4_0.cx == null ? null : tmp_4_0.cx.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_5_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(16, 36, ctx.refLineState$)) == null ? null : tmp_5_0.cx == null ? null : tmp_5_0.cx.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", ((tmp_6_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(18, 38, ctx.refLineState$)) == null ? null : tmp_6_0.cy == null ? null : tmp_6_0.cy.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_7_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(19, 40, ctx.refLineState$)) == null ? null : tmp_7_0.cy == null ? null : tmp_7_0.cy.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("top", ((tmp_8_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(21, 42, ctx.refLineState$)) == null ? null : tmp_8_0.tx == null ? null : tmp_8_0.tx.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_9_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(22, 44, ctx.refLineState$)) == null ? null : tmp_9_0.tx == null ? null : tmp_9_0.tx.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("top", ((tmp_10_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(24, 46, ctx.refLineState$)) == null ? null : tmp_10_0.bx == null ? null : tmp_10_0.bx.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_11_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(25, 48, ctx.refLineState$)) == null ? null : tmp_11_0.bx == null ? null : tmp_11_0.bx.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", ((tmp_12_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(27, 50, ctx.refLineState$)) == null ? null : tmp_12_0.ly == null ? null : tmp_12_0.ly.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_13_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(28, 52, ctx.refLineState$)) == null ? null : tmp_13_0.ly == null ? null : tmp_13_0.ly.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"])("left", ((tmp_14_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(30, 54, ctx.refLineState$)) == null ? null : tmp_14_0.ry == null ? null : tmp_14_0.ry.position) * ctx.canvasPosition.scale, "px");
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"])("active", (tmp_15_0 = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(31, 56, ctx.refLineState$)) == null ? null : tmp_15_0.ry == null ? null : tmp_15_0.ry.state);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(3);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngIf", ctx.selectorRect);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"])(1);
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"])("ngForOf", Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"])(34, 58, ctx.store.panels$))("ngForTrackBy", ctx.panelsTrackByFn);
    } }, directives: [DraggableDirective, SelectorDirective, NoZoomAreaDirective, CanvasBackgroundComponent, CanvasGridComponent, ZoomAreaDirective, CanvasComponent, BorderedAreaComponent, ResizeHandleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], PanelComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["@import \"styles/bootstrap.css\";[nz-button]~[nz-button],[nz-icon]~[nz-icon]{margin-left:.5rem}.svg-icon{width:80px}.svg-icon>*{fill:currentColor}[ceNoZoomArea]{display:block;pointer-events:none}[ceNoZoomArea],[ceZoomArea]{position:absolute}.ant-tree .ant-tree-treenode{align-items:center}ce-editor{bottom:0;display:flex;flex-direction:column;height:100vh;left:0;overflow:hidden;position:absolute;right:0;top:0;width:100vw}ce-editor .left-side{width:300px}ce-editor .canvas-container{background-color:#f0f0f0;flex:1;overflow:hidden;position:relative}ce-editor .canvas-container.start-drag{cursor:grab}ce-editor .canvas-container.start-drag>*{pointer-events:none}ce-editor .canvas-container.start-drag.dragging{cursor:grabbing}ce-editor .canvas-container .canvas-content{position:absolute}ce-editor .canvas-container .selector{background-color:rgba(24,144,255,.3);border:1px solid #1890ff;box-sizing:border-box;position:absolute}ce-editor .canvas-container .ref-line{background-color:#fa8c16;display:none;opacity:.8;position:absolute;z-index:999999999999}ce-editor .canvas-container .ref-line.active{display:inline-block}ce-editor .canvas-container .ref-line.x{bottom:0;height:100%;top:0;width:1px}ce-editor .canvas-container .ref-line.y{height:1px;left:0;right:0;width:100%}ce-editor .aside{border:solid #f0f0f0;border-width:0 1px 0 0;display:flex}ce-editor .aside ul{list-style:none;margin:0;padding:0}ce-editor .aside ul li{align-items:center;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;margin:0;padding:3px 0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularEditorLibComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-editor',
                templateUrl: 'angular-editor-lib.component.html',
                styleUrls: ['angular-editor-lib.less'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [EditorStore],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                exportAs: 'ceEditor',
            }]
    }], function () { return [{ type: EditorStore }]; }, { state: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], containerEleRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }] }); })();
function isInBound(rect, bound) {
    return (rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height);
}

const antDesignIcons = _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_28__;
const ICONS = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
const ANTD_MODULES = [
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"].forRoot(ICONS),
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonModule"],
    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_20__["NzInputNumberModule"],
    ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__["NzTabsModule"],
    ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeModule"],
    ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
    ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_6__["NzPipesModule"],
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_31__["NzToolTipModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__["NzInputModule"],
    ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__["NzTagModule"],
    ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__["NzDividerModule"],
    ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_22__["NzCollapseModule"],
    ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchModule"],
    ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzSelectModule"],
];
const CDK_MODULES = [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"]];
const FORMS_COMPONENT = [CanvasFormsComponent, WidgetFormComponent];
const COMPONENTS = [
    ToolbarComponent,
    LayerTreeComponent,
    WidgetListComponent,
    CanvasComponent,
    CanvasGridComponent,
    CanvasBackgroundComponent,
    BoxItemComponent,
    ResizeHandleComponent,
    RotateHandleComponent,
    BorderedAreaComponent,
    AngularEditorLibComponent,
    PanelComponent,
    PropertyFormComponent,
];
const DIRECTIVES = [NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective];
class AngularEditorLibModule {
    constructor(injector) {
        this.injector = injector;
        this.injector.get(ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconService"]).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_lmnttxhl5lk.js' });
    }
}
AngularEditorLibModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: AngularEditorLibModule });
AngularEditorLibModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function AngularEditorLibModule_Factory(t) { return new (t || AngularEditorLibModule)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], ...ANTD_MODULES, ...CDK_MODULES]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(AngularEditorLibModule, { declarations: [ToolbarComponent,
        LayerTreeComponent,
        WidgetListComponent,
        CanvasComponent,
        CanvasGridComponent,
        CanvasBackgroundComponent,
        BoxItemComponent,
        ResizeHandleComponent,
        RotateHandleComponent,
        BorderedAreaComponent,
        AngularEditorLibComponent,
        PanelComponent,
        PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective, CanvasFormsComponent, WidgetFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_14__["NzCardModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_11__["NzIconModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_16__["NzButtonModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_20__["NzInputNumberModule"],
        ng_zorro_antd_tabs__WEBPACK_IMPORTED_MODULE_30__["NzTabsModule"],
        ng_zorro_antd_tree__WEBPACK_IMPORTED_MODULE_9__["NzTreeModule"],
        ng_zorro_antd_dropdown__WEBPACK_IMPORTED_MODULE_10__["NzDropDownModule"],
        ng_zorro_antd_pipes__WEBPACK_IMPORTED_MODULE_6__["NzPipesModule"],
        ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_31__["NzToolTipModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_18__["NzFormModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_21__["NzInputModule"],
        ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_25__["NzTagModule"],
        ng_zorro_antd_divider__WEBPACK_IMPORTED_MODULE_29__["NzDividerModule"],
        ng_zorro_antd_collapse__WEBPACK_IMPORTED_MODULE_22__["NzCollapseModule"],
        ng_zorro_antd_switch__WEBPACK_IMPORTED_MODULE_23__["NzSwitchModule"],
        ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_24__["NzSelectModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"]], exports: [ToolbarComponent,
        LayerTreeComponent,
        WidgetListComponent,
        CanvasComponent,
        CanvasGridComponent,
        CanvasBackgroundComponent,
        BoxItemComponent,
        ResizeHandleComponent,
        RotateHandleComponent,
        BorderedAreaComponent,
        AngularEditorLibComponent,
        PanelComponent,
        PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(AngularEditorLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], ...ANTD_MODULES, ...CDK_MODULES],
                declarations: [...COMPONENTS, ...DIRECTIVES, ...FORMS_COMPONENT],
                exports: [...COMPONENTS, ...DIRECTIVES],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();
Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"])(ResizeHandleComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], RotateHandleComponent, DraggableDirective], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]]);

/*
 * Public API Surface of angular-editor-lib
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-editor-lib.js.map


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/huangjiangheng/Projects/angular-view-editor/src/main.ts */"zUnb");


/***/ }),

/***/ "0QMH":
/*!********************!*\
  !*** ./src/hmr.ts ***!
  \********************/
/*! exports provided: hmrBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hmrBootstrap", function() { return hmrBootstrap; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angularclass/hmr */ "rB/T");



const hmrBootstrap = (module, bootstrap) => {
    module.hot.accept();
    const bootstrap$ = bootstrap();
    module.hot.dispose(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const ngModule = yield bootstrap$;
        const makeVisible = Object(_angularclass_hmr__WEBPACK_IMPORTED_MODULE_2__["createNewHosts"])(ngModule.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]).components.map((comp) => comp.location.nativeElement));
        ngModule.destroy();
        makeVisible();
    }));
};


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "+Vou");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    iconUrl: '',
    production: false,
    hmr: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_editor_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-editor-lib */ "/f4r");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ce-root"]], decls: 2, vars: 0, consts: [["toolbar", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ce-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ce-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [angular_editor_lib__WEBPACK_IMPORTED_MODULE_1__["AngularEditorLibComponent"], angular_editor_lib__WEBPACK_IMPORTED_MODULE_1__["ToolbarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ce-root',
                templateUrl: 'app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var angular_editor_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-editor-lib */ "/f4r");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], angular_editor_lib__WEBPACK_IMPORTED_MODULE_2__["AngularEditorLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], angular_editor_lib__WEBPACK_IMPORTED_MODULE_2__["AngularEditorLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], angular_editor_lib__WEBPACK_IMPORTED_MODULE_2__["AngularEditorLibModule"]],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _hmr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hmr */ "0QMH");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
const main = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]); });
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].hmr) {
    // tslint:disable-next-line: no-string-literal
    if (false) {}
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
    }
}
else {
    main()
        .then()
        .catch((err) => console.log(err));
}


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map