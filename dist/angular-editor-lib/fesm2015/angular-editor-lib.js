import { TemplateRef, ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵinject, ɵɵelement, ɵɵnextContext, ɵɵstyleProp, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵtemplate, ɵɵpipe, ɵɵproperty, ɵɵpipeBind1, Component, ViewEncapsulation, ChangeDetectionStrategy, ɵɵelementContainerStart, ɵɵelementContainerEnd, ɵɵadvance, Renderer2, ElementRef, Input, ɵɵpipeBind2, ɵɵsanitizeUrl, ɵɵelementStart, ɵɵelementEnd, ɵɵnamespaceSVG, ɵɵattribute, EventEmitter, ChangeDetectorRef, ɵɵdefineDirective, Directive, Output, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵtext, ɵɵclassProp, ɵɵtextInterpolate, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵtemplateRefExtractor, ViewChild, ɵɵelementContainer, ComponentFactoryResolver, ɵɵpureFunction1, ɵɵpureFunction0, HostBinding, Optional, SkipSelf, ɵɵprojection, ɵɵcontentQuery, ɵɵprojectionDef, ContentChild, ɵɵstaticViewQuery, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, Injector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { startWith, pairwise, filter, map, switchMap, takeUntil, finalize } from 'rxjs/operators';
import { chain, cloneDeep } from 'lodash';
import { ComponentStore } from '@ngrx/component-store';
import { BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { NgForOf, AsyncPipe, NgIf, NgTemplateOutlet, NgComponentOutlet, NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { NzSanitizerPipe, NzPipesModule } from 'ng-zorro-antd/pipes';
import { __decorate, __rest } from 'tslib';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzTreeComponent, NzTreeModule } from 'ng-zorro-antd/tree';
import { NzContextMenuService, NzDropdownMenuComponent, NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconDirective, NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzMenuDirective, NzMenuItemDirective } from 'ng-zorro-antd/menu';
import { NzCardComponent, NzCardModule } from 'ng-zorro-antd/card';
import { CdkDrag, CdkDragHandle, DragDropModule } from '@angular/cdk/drag-drop';
import { NzButtonComponent, NzButtonModule } from 'ng-zorro-antd/button';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormDirective, NzFormItemComponent, NzFormLabelComponent, NzFormControlComponent, NzFormModule } from 'ng-zorro-antd/form';
import { NzRowDirective, NzColDirective } from 'ng-zorro-antd/grid';
import { NzInputNumberComponent, NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputDirective, NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseComponent, NzCollapsePanelComponent, NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSwitchComponent, NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSelectComponent, NzOptionComponent, NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagComponent, NzTagModule } from 'ng-zorro-antd/tag';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

const SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);
function genNodeId() {
    return `${Date.now()}${Math.round(Math.random() * 1000000000000)}`;
}
class CeUtilsService {
    constructor() {
        CeUtilsService.shared = this;
    }
    isTemplateType(content) {
        return content instanceof TemplateRef;
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
            chain(list)
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
CeUtilsService.ɵprov = ɵɵdefineInjectable({ token: CeUtilsService, factory: CeUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CeUtilsService, [{
        type: Injectable,
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

class EditorStore extends ComponentStore {
    constructor(utils) {
        super(DEFAULT_STORE);
        this.utils = utils;
        this._defaultPanels = [
            { key: 'LAYERS', title: '图层', content: LayerTreeComponent, show: true, x: 10, y: 60 },
            { key: 'WIDGET_LIST', title: '组件', content: WidgetListComponent, show: false, x: 50, y: 60 },
            { key: 'PROPERTIES', title: '属性', content: PropertyFormComponent, show: true, x: window.innerWidth - 350, y: 60 },
        ];
        this.panels = [];
        this.panels$ = new BehaviorSubject([...this._defaultPanels, ...this.panels]);
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
        return this.select(cb).pipe(startWith(null, cb(this.get())), pairwise(), filter(([prev, present]) => !this.utils.isDeepEqual(prev, present)), map(([, present]) => present));
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
EditorStore.ɵfac = function EditorStore_Factory(t) { return new (t || EditorStore)(ɵɵinject(CeUtilsService)); };
EditorStore.ɵprov = ɵɵdefineInjectable({ token: EditorStore, factory: EditorStore.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(EditorStore, [{
        type: Injectable
    }], function () { return [{ type: CeUtilsService }]; }, null); })();

function BorderedAreaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("left", node_r1.left, "%")("top", node_r1.top, "%")("width", node_r1.width, "%")("height", node_r1.height, "%")("transform", ctx_r0.getRotate(node_r1.rotate));
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
            .pipe(map(({ bordered, nodes, canvasSize }) => {
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
BorderedAreaComponent.ɵfac = function BorderedAreaComponent_Factory(t) { return new (t || BorderedAreaComponent)(ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService)); };
BorderedAreaComponent.ɵcmp = ɵɵdefineComponent({ type: BorderedAreaComponent, selectors: [["ce-bordered-area"], ["", "ceBorderedArea", ""]], decls: 2, vars: 4, consts: [["class", "box-border", 3, "left", "top", "width", "height", "transform", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "box-border"]], template: function BorderedAreaComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BorderedAreaComponent_div_0_Template, 1, 10, "div", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.borderedNodeList$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [NgForOf], pipes: [AsyncPipe], styles: ["[ceBorderedArea],ce-bordered-area{bottom:0;display:block;left:0;position:absolute;right:0;top:0}[ceBorderedArea] .box-border,ce-bordered-area .box-border{border:1px solid #1890ff;box-sizing:border-box;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BorderedAreaComponent, [{
        type: Component,
        args: [{
                selector: 'ce-bordered-area,[ceBorderedArea]',
                templateUrl: './bordered-area.component.html',
                styleUrls: ['./bordered-area.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, null); })();

function BoxItemComponent_ng_container_0_ce_box_item_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ce-box-item", 2);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    ɵɵproperty("node", item_r2);
} }
function BoxItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, BoxItemComponent_ng_container_0_ce_box_item_1_Template, 1, 1, "ce-box-item", 1);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.node.children);
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
BoxItemComponent.ɵfac = function BoxItemComponent_Factory(t) { return new (t || BoxItemComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef)); };
BoxItemComponent.ɵcmp = ɵɵdefineComponent({ type: BoxItemComponent, selectors: [["ce-box-item"]], inputs: { node: "node" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "node", 4, "ngFor", "ngForOf"], [3, "node"]], template: function BoxItemComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, BoxItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", (ctx.node == null ? null : ctx.node.children) && (ctx.node == null ? null : ctx.node.children.length));
    } }, directives: [NgIf, NgForOf, BoxItemComponent], styles: ["ce-box-item{box-sizing:border-box;display:block;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(BoxItemComponent, [{
        type: Component,
        args: [{
                selector: 'ce-box-item',
                templateUrl: 'box-item.component.html',
                styleUrls: ['box-item.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: Renderer2 }, { type: ElementRef }]; }, { node: [{
            type: Input
        }] }); })();

function CanvasBackgroundComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 1);
    ɵɵpipe(1, "nzSanitizer");
    ɵɵpipe(2, "async");
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ɵɵpipeBind2(1, 1, ɵɵpipeBind1(2, 4, ctx_r0.backgroundImage$), "url"), ɵɵsanitizeUrl);
} }
class CanvasBackgroundComponent {
    constructor(store) {
        this.store = store;
        this.backgroundColor$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundColor);
        this.backgroundImage$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundImage);
    }
}
CanvasBackgroundComponent.ɵfac = function CanvasBackgroundComponent_Factory(t) { return new (t || CanvasBackgroundComponent)(ɵɵdirectiveInject(EditorStore)); };
CanvasBackgroundComponent.ɵcmp = ɵɵdefineComponent({ type: CanvasBackgroundComponent, selectors: [["ce-canvas-background"], ["", "ceCanvasBackground", ""]], decls: 4, vars: 7, consts: [[3, "ngIf"], ["alt", "", 3, "src"]], template: function CanvasBackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵpipe(1, "async");
        ɵɵtemplate(2, CanvasBackgroundComponent_ng_template_2_Template, 3, 6, "ng-template", 0);
        ɵɵpipe(3, "async");
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("background-color", ɵɵpipeBind1(1, 3, ctx.backgroundColor$));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(3, 5, ctx.backgroundImage$));
    } }, directives: [NgIf], pipes: [AsyncPipe, NzSanitizerPipe], styles: ["ce-canvas-background{display:block;left:0;overflow:hidden;position:absolute;top:0}ce-canvas-background,ce-canvas-background>div{height:100%;width:100%}ce-canvas-background img{height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanvasBackgroundComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-background,[ceCanvasBackground]',
                templateUrl: 'canvas-background.component.html',
                styleUrls: ['canvas-background.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: EditorStore }]; }, null); })();

class CanvasGridComponent {
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
CanvasGridComponent.ɵfac = function CanvasGridComponent_Factory(t) { return new (t || CanvasGridComponent)(ɵɵdirectiveInject(EditorStore)); };
CanvasGridComponent.ɵcmp = ɵɵdefineComponent({ type: CanvasGridComponent, selectors: [["ce-canvas-grid"]], decls: 16, vars: 24, consts: [["data-html2canvas-ignore", "", "width", "100%", "height", "100%", 1, "grid"], ["id", "smallGrid", "patternUnits", "userSpaceOnUse"], ["fill", "none", "stroke", "rgba(207, 207, 207, 0.8)", "stroke-width", "1"], ["id", "grid", "patternUnits", "userSpaceOnUse"], ["fill", "url(#smallGrid)"], ["fill", "none", "stroke", "rgba(186, 186, 186, 1)", "stroke-width", "1"], ["width", "100%", "height", "100%", "fill", "url(#grid)"]], template: function CanvasGridComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelementStart(1, "defs");
        ɵɵelementStart(2, "pattern", 1);
        ɵɵpipe(3, "async");
        ɵɵpipe(4, "async");
        ɵɵelement(5, "path", 2);
        ɵɵpipe(6, "async");
        ɵɵelementEnd();
        ɵɵelementStart(7, "pattern", 3);
        ɵɵpipe(8, "async");
        ɵɵpipe(9, "async");
        ɵɵelement(10, "rect", 4);
        ɵɵpipe(11, "async");
        ɵɵpipe(12, "async");
        ɵɵelement(13, "path", 5);
        ɵɵpipe(14, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(15, "rect", 6);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵattribute("width", ɵɵpipeBind1(3, 8, ctx.childWidth$))("height", ɵɵpipeBind1(4, 10, ctx.childWidth$));
        ɵɵadvance(3);
        ɵɵattribute("d", ɵɵpipeBind1(6, 12, ctx.childDPath$));
        ɵɵadvance(2);
        ɵɵattribute("width", ɵɵpipeBind1(8, 14, ctx.parentWidth$))("height", ɵɵpipeBind1(9, 16, ctx.parentWidth$));
        ɵɵadvance(3);
        ɵɵattribute("width", ɵɵpipeBind1(11, 18, ctx.parentWidth$))("height", ɵɵpipeBind1(12, 20, ctx.parentWidth$));
        ɵɵadvance(3);
        ɵɵattribute("d", ɵɵpipeBind1(14, 22, ctx.parentDPath$));
    } }, pipes: [AsyncPipe], styles: ["ce-canvas-grid{display:block;height:100%;left:0;position:absolute;top:0;width:100%}ce-canvas-grid .grid{border-bottom:1px solid #cfcfcf;border-right:1px solid #cfcfcf;left:0;position:absolute;top:0;z-index:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanvasGridComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-grid',
                templateUrl: 'canvas-grid.component.html',
                styleUrls: ['canvas-grid.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
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
            const parents = CeUtilsService.shared.getNodeAndParentListById(parent.id, cloneDeep(state.nodes));
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
        const [node, ...parents] = CeUtilsService.shared.getNodeAndParentListById(id, cloneDeep(state.nodes));
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
        this.ceOnStart = new EventEmitter();
        this.ceOnMove = new EventEmitter();
        this.ceOnStop = new EventEmitter();
        this.ceOnSpaceKeyDown = new EventEmitter();
        this.spaceKeyDown = false;
        this.subscription = new Subscription();
        this.mouseMove$ = fromEvent(window, 'pointermove');
        this.mouseUp$ = fromEvent(window, 'pointerup');
        this.keyDown$ = fromEvent(document, 'keydown');
        this.keyUp$ = fromEvent(document, 'keyup');
        this.mouseDown$ = fromEvent(this.eleRef.nativeElement, 'pointerdown').pipe(filter((e) => e.button === 0));
        this.mouseEnter$ = fromEvent(this.eleRef.nativeElement, 'pointerenter');
        this.mouseLeave$ = fromEvent(this.eleRef.nativeElement, 'pointerleave');
    }
    ngOnInit() {
        this.listenSpaceKeyEvent();
        this.mouseDown$
            .pipe(filter(() => !this.ceDragDisabled), filter(() => (this.ceUseSpace ? this.spaceKeyDown : true)), switchMap((startEv) => {
            this.ceOnStart.emit(startEv);
            return this.mouseMove$.pipe(takeUntil(this.mouseUp$.pipe(map((stopEv) => this.ceOnStop.emit(stopEv)))));
        }))
            .subscribe((moveEv) => this.ceOnMove.emit(moveEv));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    listenSpaceKeyEvent() {
        this.subscription.add(this.mouseEnter$
            .pipe(filter(() => !this.ceDragDisabled), filter(() => this.ceUseSpace), switchMap(() => this.keyDown$.pipe(switchMap((e) => {
            this.spaceKeyDown = e.key === ' ';
            this.cdr.detectChanges();
            if (this.spaceKeyDown) {
                e.preventDefault();
                e.stopPropagation();
            }
            return this.keyUp$;
        }), map(() => {
            this.spaceKeyDown = false;
            this.ceOnStop.emit();
        }), takeUntil(this.mouseLeave$), finalize(() => {
            this.spaceKeyDown = false;
            this.ceOnStop.emit();
        }))))
            .subscribe());
    }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) { return new (t || DraggableDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef)); };
DraggableDirective.ɵdir = ɵɵdefineDirective({ type: DraggableDirective, selectors: [["", "ceDraggable", ""]], inputs: { ceDragDisabled: "ceDragDisabled", ceUseSpace: "ceUseSpace" }, outputs: { ceOnStart: "ceOnStart", ceOnMove: "ceOnMove", ceOnStop: "ceOnStop", ceOnSpaceKeyDown: "ceOnSpaceKeyDown" }, exportAs: ["ceDraggable"] });
__decorate([
    InputBoolean()
], DraggableDirective.prototype, "ceDragDisabled", void 0);
__decorate([
    InputBoolean()
], DraggableDirective.prototype, "ceUseSpace", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(DraggableDirective, [{
        type: Directive,
        args: [{
                selector: '[ceDraggable]',
                exportAs: 'ceDraggable',
            }]
    }], function () { return [{ type: ElementRef }, { type: ChangeDetectorRef }]; }, { ceDragDisabled: [{
            type: Input
        }], ceUseSpace: [{
            type: Input
        }], ceOnStart: [{
            type: Output
        }], ceOnMove: [{
            type: Output
        }], ceOnStop: [{
            type: Output
        }], ceOnSpaceKeyDown: [{
            type: Output
        }] }); })();

function CanvasComponent_ce_box_item_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ce-box-item", 1);
    ɵɵlistener("ceOnStart", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStart_0_listener($event) { ɵɵrestoreView(_r3); const node_r1 = ctx.$implicit; const ctx_r2 = ɵɵnextContext(); return ctx_r2.moveStart($event, node_r1); })("ceOnMove", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnMove_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.moving($event); })("ceOnStop", function CanvasComponent_ce_box_item_0_Template_ce_box_item_ceOnStop_0_listener() { ɵɵrestoreView(_r3); const ctx_r5 = ɵɵnextContext(); return ctx_r5.moveEnd(); })("pointerenter", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerenter_0_listener() { ɵɵrestoreView(_r3); const node_r1 = ctx.$implicit; const ctx_r6 = ɵɵnextContext(); return ctx_r6.showBorder(node_r1.id); })("pointerleave", function CanvasComponent_ce_box_item_0_Template_ce_box_item_pointerleave_0_listener() { ɵɵrestoreView(_r3); const node_r1 = ctx.$implicit; const ctx_r7 = ɵɵnextContext(); return ctx_r7.removeBorder(node_r1.id); });
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    ɵɵproperty("ceDragDisabled", node_r1 == null ? null : node_r1.locked)("node", node_r1);
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
                const { cxPercent, cyPercent, width, height, nodeRect } = node, properties = __rest(node, ["cxPercent", "cyPercent", "width", "height", "nodeRect"]);
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
CanvasComponent.ɵfac = function CanvasComponent_Factory(t) { return new (t || CanvasComponent)(ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService)); };
CanvasComponent.ɵcmp = ɵɵdefineComponent({ type: CanvasComponent, selectors: [["ce-canvas"]], decls: 2, vars: 4, consts: [["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["ceDraggable", "", 3, "ceDragDisabled", "node", "ceOnStart", "ceOnMove", "ceOnStop", "pointerenter", "pointerleave"]], template: function CanvasComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, CanvasComponent_ce_box_item_0_Template, 1, 2, "ce-box-item", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngForOf", ɵɵpipeBind1(1, 2, ctx.nodes$))("ngForTrackBy", ctx.nodeListTrackByFn);
    } }, directives: [NgForOf, BoxItemComponent, DraggableDirective], pipes: [AsyncPipe], styles: ["ce-canvas{bottom:0;left:0;position:absolute;right:0;top:0}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanvasComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas',
                templateUrl: 'canvas.component.html',
                styleUrls: ['canvas.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
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
    ɵɵelement(0, "i", 5);
} if (rf & 2) {
    const node_r5 = ɵɵnextContext().$implicit;
    ɵɵproperty("nzType", node_r5.isExpanded ? "folder-open" : "folder");
} }
function LayerTreeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, LayerTreeComponent_ng_template_4_i_0_Template, 1, 1, "i", 4);
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    ɵɵproperty("ngIf", !node_r5.isLeaf);
} }
function LayerTreeComponent_ng_template_6_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_6_Template_li_click_0_listener() { ɵɵrestoreView(_r16); const ctx_r15 = ɵɵnextContext(2); const _r0 = ɵɵreference(1); return ctx_r15.toggleNodesLockState(_r0.nzSelectedKeys, true); });
    ɵɵelement(1, "i", 12);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u9501\u5B9A");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_7_Template_li_click_0_listener() { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(2); const _r0 = ɵɵreference(1); return ctx_r17.toggleNodesLockState(_r0.nzSelectedKeys, false); });
    ɵɵelement(1, "i", 13);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u89E3\u9501");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_12_Template_li_click_0_listener() { ɵɵrestoreView(_r20); const ctx_r19 = ɵɵnextContext(2); const _r0 = ɵɵreference(1); return ctx_r19.group(_r0.nzSelectedKeys); });
    ɵɵelement(1, "i", 14);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u7EC4\u5408");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 15);
    ɵɵtext(5, " ctrl+shift+G ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r23 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 10);
    ɵɵlistener("click", function LayerTreeComponent_ng_template_6_li_14_Template_li_click_0_listener() { ɵɵrestoreView(_r23); const node_r9 = ɵɵnextContext().origin; const ctx_r21 = ɵɵnextContext(); return ctx_r21.breakNode(node_r9.id); });
    ɵɵelement(1, "i", 16);
    ɵɵelementStart(2, "span");
    ɵɵtext(3, "\u6253\u6563");
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 15);
    ɵɵtext(5, " ctrl+shift+B ");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function LayerTreeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r25 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6);
    ɵɵlistener("contextmenu", function LayerTreeComponent_ng_template_6_Template_div_contextmenu_0_listener($event) { ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const _r10 = ɵɵreference(4); const ctx_r24 = ɵɵnextContext(); return ctx_r24.contextMenu($event, _r10, node_r9); })("pointerenter", function LayerTreeComponent_ng_template_6_Template_div_pointerenter_0_listener() { ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const ctx_r26 = ɵɵnextContext(); return ctx_r26.showBordered(node_r9.id); })("pointerleave", function LayerTreeComponent_ng_template_6_Template_div_pointerleave_0_listener() { ɵɵrestoreView(_r25); const node_r9 = ctx.origin; const ctx_r27 = ɵɵnextContext(); return ctx_r27.clearBordered(node_r9.id); });
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(3, "nz-dropdown-menu", null, 7);
    ɵɵelementStart(5, "ul", 8);
    ɵɵtemplate(6, LayerTreeComponent_ng_template_6_li_6_Template, 4, 0, "li", 9);
    ɵɵtemplate(7, LayerTreeComponent_ng_template_6_li_7_Template, 4, 0, "li", 9);
    ɵɵelementStart(8, "li", 10);
    ɵɵlistener("click", function LayerTreeComponent_ng_template_6_Template_li_click_8_listener() { ɵɵrestoreView(_r25); const ctx_r28 = ɵɵnextContext(); const _r0 = ɵɵreference(1); return ctx_r28.deleteNodes(_r0.nzSelectedKeys); });
    ɵɵelement(9, "i", 11);
    ɵɵelementStart(10, "span");
    ɵɵtext(11, "\u5220\u9664");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtemplate(12, LayerTreeComponent_ng_template_6_li_12_Template, 6, 0, "li", 9);
    ɵɵpipe(13, "async");
    ɵɵtemplate(14, LayerTreeComponent_ng_template_6_li_14_Template, 6, 0, "li", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const node_r9 = ctx.origin;
    const ctx_r4 = ɵɵnextContext();
    ɵɵclassProp("locked", node_r9.locked);
    ɵɵadvance(2);
    ɵɵtextInterpolate(node_r9.title);
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !node_r9.locked);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", node_r9.locked);
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ɵɵpipeBind1(13, 7, ctx_r4.groupStatus$));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r4.selected.size === 1 && node_r9.children && node_r9.children.length);
} }
class LayerTreeComponent {
    constructor(eleRef, store, utils, contextMenuSrv) {
        this.eleRef = eleRef;
        this.store = store;
        this.utils = utils;
        this.contextMenuSrv = contextMenuSrv;
        this.treeNodes$ = this.store
            .selectDifferent((state) => state.nodes)
            .pipe(map((nodes) => this.transferNodesToNzNodes(this.utils.sortNodeListByIndex(nodes))));
        this.selectedKeys$ = this.store.selectDifferent((state) => state.selected).pipe(map((selected) => [...selected]));
        this.groupStatus$ = this.store
            .selectDifferent((state) => state.selected)
            .pipe(filter(() => !!this.layerTree), map((selected) => selected.size > 1
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
LayerTreeComponent.ɵfac = function LayerTreeComponent_Factory(t) { return new (t || LayerTreeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService), ɵɵdirectiveInject(NzContextMenuService)); };
LayerTreeComponent.ɵcmp = ɵɵdefineComponent({ type: LayerTreeComponent, selectors: [["ce-layer-tree"]], viewQuery: function LayerTreeComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, true, NzTreeComponent);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.layerTree = _t.first);
    } }, exportAs: ["ceLayerTree"], decls: 8, vars: 8, consts: [["nzBlockNode", "", "nzMultiple", "", 3, "nzData", "nzSelectedKeys", "nzTreeTemplate", "nzExpandedIcon", "nzClick"], ["layerTree", ""], ["multiExpandedIconTpl", ""], ["nzTreeTemplate", ""], ["nz-icon", "", "class", "ant-tree-switcher-line-icon", 3, "nzType", 4, "ngIf"], ["nz-icon", "", 1, "ant-tree-switcher-line-icon", 3, "nzType"], [1, "layer", 3, "contextmenu", "pointerenter", "pointerleave"], ["menu", "nzDropdownMenu"], ["nz-menu", ""], ["nz-menu-item", "", "class", "action-item", 3, "click", 4, "ngIf"], ["nz-menu-item", "", 1, "action-item", 3, "click"], ["nz-icon", "", "nzType", "delete"], ["nz-icon", "", "nzType", "lock"], ["nz-icon", "", "nzType", "unlock"], ["nz-icon", "", "nzIconfont", "icon-group"], [1, "shortcuts"], ["nz-icon", "", "nzIconfont", "icon-break"]], template: function LayerTreeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-tree", 0, 1);
        ɵɵlistener("nzClick", function LayerTreeComponent_Template_nz_tree_nzClick_0_listener($event) { return ctx.clickNode($event); });
        ɵɵpipe(2, "async");
        ɵɵpipe(3, "async");
        ɵɵtemplate(4, LayerTreeComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵtemplate(6, LayerTreeComponent_ng_template_6_Template, 15, 9, "ng-template", null, 3, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = ɵɵreference(5);
        const _r3 = ɵɵreference(7);
        ɵɵproperty("nzData", ɵɵpipeBind1(2, 4, ctx.treeNodes$))("nzSelectedKeys", ɵɵpipeBind1(3, 6, ctx.selectedKeys$))("nzTreeTemplate", _r3)("nzExpandedIcon", _r1);
    } }, directives: [NzTreeComponent, NgIf, NzIconDirective, ɵNzTransitionPatchDirective, NzDropdownMenuComponent, NzMenuDirective, NzMenuItemDirective], pipes: [AsyncPipe], styles: ["ce-layer-tree{display:block;height:100%;margin:0 -12px 0 0;overflow:auto;position:relative}ce-layer-tree ::-webkit-scrollbar{position:absolute;right:0}ce-layer-tree .layer{align-items:center;display:flex}ce-layer-tree .layer.locked{color:rgba(0,0,0,.45)}.action-item{align-items:center;display:flex;justify-content:flex-start;min-width:200px}.action-item .shortcuts{color:rgba(0,0,0,.45);margin-left:auto}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(LayerTreeComponent, [{
        type: Component,
        args: [{
                selector: 'ce-layer-tree',
                exportAs: 'ceLayerTree',
                templateUrl: 'layer-tree.component.html',
                styleUrls: ['layer-tree.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ElementRef }, { type: EditorStore }, { type: CeUtilsService }, { type: NzContextMenuService }]; }, { layerTree: [{
            type: ViewChild,
            args: ['layerTree', { read: NzTreeComponent }]
        }] }); })();

function PanelComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r1.panel == null ? null : ctx_r1.panel.title);
} }
function PanelComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PanelComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.panel.content);
} }
function PanelComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function PanelComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngComponentOutlet", ctx_r3.panel.content);
} }
function PanelComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_0_listener() { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.toggleCollapsed(); });
    ɵɵelement(1, "i", 8);
    ɵɵelementEnd();
    ɵɵelementStart(2, "button", 9);
    ɵɵlistener("click", function PanelComponent_ng_template_5_Template_button_click_2_listener() { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.close(); });
    ɵɵelement(3, "i", 10);
    ɵɵelementEnd();
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
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(ɵɵdirectiveInject(CeUtilsService), ɵɵdirectiveInject(EditorStore)); };
PanelComponent.ɵcmp = ɵɵdefineComponent({ type: PanelComponent, selectors: [["ce-panel"], ["", "cePanel", ""]], inputs: { panel: "panel" }, decls: 7, vars: 7, consts: [["nzSize", "small", "cdkDrag", "", 3, "nzTitle", "nzExtra", "cdkDragFreeDragPosition", "cdkDragEnded"], ["cardTitle", ""], [4, "ngIf"], ["cardExtra", ""], ["cdkDragHandle", "", 1, "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [4, "ngComponentOutlet"], ["nz-button", "", "nzSize", "small", "nzType", "link", 1, "collapse-icon", 3, "click"], ["nz-icon", "", "nzType", "caret-down"], ["nz-button", "", "nzSize", "small", "nzType", "link", 3, "click"], ["nz-icon", "", "nzType", "close"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-card", 0);
        ɵɵlistener("cdkDragEnded", function PanelComponent_Template_nz_card_cdkDragEnded_0_listener($event) { return ctx.updatePosition($event); });
        ɵɵtemplate(1, PanelComponent_ng_template_1_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, PanelComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        ɵɵtemplate(4, PanelComponent_ng_container_4_Template, 2, 1, "ng-container", 2);
        ɵɵelementEnd();
        ɵɵtemplate(5, PanelComponent_ng_template_5_Template, 4, 0, "ng-template", null, 3, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(2);
        const _r4 = ɵɵreference(6);
        ɵɵclassProp("collapsed", ctx.panel == null ? null : ctx.panel.collapsed);
        ɵɵproperty("nzTitle", _r0)("nzExtra", _r4)("cdkDragFreeDragPosition", ctx.panel);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.utils.isTemplateType(ctx.panel.content));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.utils.isTemplateType(ctx.panel.content));
    } }, directives: [NzCardComponent, CdkDrag, NgIf, CdkDragHandle, NgTemplateOutlet, NgComponentOutlet, NzButtonComponent, ɵNzTransitionPatchDirective, NzIconDirective], styles: ["[cePanel],ce-panel{display:block;pointer-events:none;position:absolute;width:300px}[cePanel] *,ce-panel *{pointer-events:auto}[cePanel]>nz-card.collapsed .ant-card-body,ce-panel>nz-card.collapsed .ant-card-body{height:0;overflow:hidden;padding:0}[cePanel]>nz-card.collapsed .collapse-icon,ce-panel>nz-card.collapsed .collapse-icon{transform:rotate(-180deg)}[cePanel]>nz-card .collapse-icon,ce-panel>nz-card .collapse-icon{transform:rotate(0deg);transition:transform .3s ease-in-out}[cePanel]>nz-card .ant-card-head-title,ce-panel>nz-card .ant-card-head-title{cursor:move}[cePanel]>nz-card .ant-card-body,ce-panel>nz-card .ant-card-body{height:calc(100vh - 110px);transition:height .3s ease-in-out,padding .3s ease-in-out}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PanelComponent, [{
        type: Component,
        args: [{
                selector: 'ce-panel,[cePanel]',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: CeUtilsService }, { type: EditorStore }]; }, { panel: [{
            type: Input
        }] }); })();

function CanvasFormsComponent_img_60_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "img", 20);
    ɵɵpipe(1, "nzSanitizer");
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵstyleProp("max-width", 100, "%");
    ɵɵproperty("src", ɵɵpipeBind2(1, 3, ctx_r0.canvasBackgroundFormGroup.controls["backgroundImage"].value, "url"), ɵɵsanitizeUrl);
} }
class CanvasFormsComponent {
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
CanvasFormsComponent.ɵfac = function CanvasFormsComponent_Factory(t) { return new (t || CanvasFormsComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(EditorStore)); };
CanvasFormsComponent.ɵcmp = ɵɵdefineComponent({ type: CanvasFormsComponent, selectors: [["ce-canvas-forms"], ["", "ceCanvasForms", ""]], decls: 61, vars: 4, consts: [["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], [1, "mt-2"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzIconfont", "icon-scale"], ["nzSize", "small", "formControlName", "scale"], ["nz-icon", "", "nzIconfont", "icon-color"], ["type", "color", "nz-input", "", "nzSize", "small", "formControlName", "backgroundColor"], ["nz-icon", "", "nzIconfont", "icon-image"], ["type", "text", "nz-input", "", "nzSize", "small", "formControlName", "backgroundImage"], [1, "mt-1"], [3, "max-width", "src", 4, "ngIf"], [3, "src"]], template: function CanvasFormsComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵelementStart(1, "h4");
        ɵɵtext(2, "\u753B\u5E03\u5C3A\u5BF8");
        ɵɵelementEnd();
        ɵɵelementStart(3, "form", 0);
        ɵɵelementStart(4, "nz-row", 1);
        ɵɵelementStart(5, "nz-col", 2);
        ɵɵelementStart(6, "nz-form-item");
        ɵɵelementStart(7, "nz-form-label");
        ɵɵelement(8, "i", 3);
        ɵɵelementEnd();
        ɵɵelementStart(9, "nz-form-control");
        ɵɵelement(10, "nz-input-number", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "nz-col", 2);
        ɵɵelementStart(12, "nz-form-item");
        ɵɵelementStart(13, "nz-form-label");
        ɵɵelement(14, "i", 5);
        ɵɵelementEnd();
        ɵɵelementStart(15, "nz-form-control");
        ɵɵelement(16, "nz-input-number", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "div", 7);
        ɵɵelementStart(18, "h4");
        ɵɵtext(19, "\u753B\u5E03\u4F4D\u7F6E");
        ɵɵelementEnd();
        ɵɵelementStart(20, "form", 0);
        ɵɵelementStart(21, "nz-row", 1);
        ɵɵelementStart(22, "nz-col", 2);
        ɵɵelementStart(23, "nz-form-item");
        ɵɵelementStart(24, "nz-form-label");
        ɵɵelement(25, "i", 8);
        ɵɵelementEnd();
        ɵɵelementStart(26, "nz-form-control");
        ɵɵelement(27, "nz-input-number", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "nz-col", 2);
        ɵɵelementStart(29, "nz-form-item");
        ɵɵelementStart(30, "nz-form-label");
        ɵɵelement(31, "i", 10);
        ɵɵelementEnd();
        ɵɵelementStart(32, "nz-form-control");
        ɵɵelement(33, "nz-input-number", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "nz-col", 2);
        ɵɵelementStart(35, "nz-form-item");
        ɵɵelementStart(36, "nz-form-label");
        ɵɵelement(37, "i", 12);
        ɵɵelementEnd();
        ɵɵelementStart(38, "nz-form-control");
        ɵɵelement(39, "nz-input-number", 13);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(40, "div", 7);
        ɵɵelementStart(41, "h4");
        ɵɵtext(42, "\u753B\u5E03\u80CC\u666F");
        ɵɵelementEnd();
        ɵɵelementStart(43, "form", 0);
        ɵɵelementStart(44, "nz-row", 1);
        ɵɵelementStart(45, "nz-col", 2);
        ɵɵelementStart(46, "nz-form-item");
        ɵɵelementStart(47, "nz-form-label");
        ɵɵelement(48, "i", 14);
        ɵɵelementEnd();
        ɵɵelementStart(49, "nz-form-control");
        ɵɵelement(50, "input", 15);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(51, "nz-col", 2);
        ɵɵelementStart(52, "nz-form-item");
        ɵɵelementStart(53, "nz-form-label");
        ɵɵelement(54, "i", 16);
        ɵɵelementEnd();
        ɵɵelementStart(55, "nz-form-control");
        ɵɵelement(56, "input", 17);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(57, "h5", 18);
        ɵɵtext(58, "\u80CC\u666F\u9884\u89C8");
        ɵɵelementEnd();
        ɵɵelementStart(59, "div");
        ɵɵtemplate(60, CanvasFormsComponent_img_60_Template, 2, 6, "img", 19);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.canvasSizeFormGroup);
        ɵɵadvance(17);
        ɵɵproperty("formGroup", ctx.canvasPositionFormGroup);
        ɵɵadvance(23);
        ɵɵproperty("formGroup", ctx.canvasBackgroundFormGroup);
        ɵɵadvance(17);
        ɵɵproperty("ngIf", ctx.canvasBackgroundFormGroup.controls["backgroundImage"].value);
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NzFormDirective, FormGroupDirective, NzRowDirective, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzIconDirective, ɵNzTransitionPatchDirective, NzFormControlComponent, NzInputNumberComponent, NgControlStatus, FormControlName, NzInputDirective, DefaultValueAccessor, NgIf], pipes: [NzSanitizerPipe], styles: ["[ceCanvasForms],ce-canvas-forms{display:block;padding:12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CanvasFormsComponent, [{
        type: Component,
        args: [{
                selector: 'ce-canvas-forms,[ceCanvasForms]',
                templateUrl: './canvas-forms.component.html',
                styleUrls: ['./canvas-forms.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: FormBuilder }, { type: EditorStore }]; }, null); })();

const _c0$1 = ["container"];
function WidgetFormComponent_ng_template_56_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, "none");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 31);
    ɵɵelement(2, "path", 32);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 31);
    ɵɵelement(2, "path", 33);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 31);
    ɵɵelement(2, "path", 34);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} }
function WidgetFormComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementContainerStart(1, 29);
    ɵɵtemplate(2, WidgetFormComponent_ng_template_56_ng_container_2_Template, 3, 0, "ng-container", 30);
    ɵɵtemplate(3, WidgetFormComponent_ng_template_56_ng_container_3_Template, 3, 0, "ng-container", 30);
    ɵɵtemplate(4, WidgetFormComponent_ng_template_56_ng_container_4_Template, 3, 0, "ng-container", 30);
    ɵɵtemplate(5, WidgetFormComponent_ng_template_56_ng_container_5_Template, 3, 0, "ng-container", 30);
    ɵɵelementContainerEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const selected_r8 = ctx.$implicit;
    ɵɵstyleProp("width", 40, "px");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitch", selected_r8.nzValue);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "none");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "dashed");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "solid");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "dotted");
} }
function WidgetFormComponent_ng_container_60_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_62_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
function WidgetFormComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
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
            id: [, [Validators.required]],
            name: [],
            width: [, [Validators.required]],
            height: [, [Validators.required]],
            left: [, [Validators.required]],
            top: [, [Validators.required]],
            locked: [],
            rotate: [, [Validators.required]],
            zIndex: [, [Validators.required]],
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
            .pipe(filter((selected) => selected.size === 1), map((selected) => [...selected][0]), switchMap((id) => this.store.select((state) => state.nodes.find((item) => item.id === id))), filter((node) => !!node))
            .subscribe((node) => {
            this.boundingFormGroup.patchValue(Object.assign(Object.assign({}, node), { width: Math.round(node.width), height: Math.round(node.height), left: Math.round(node.left), top: Math.round(node.top) }), { emitEvent: false });
        });
        this.boundingFormGroup.valueChanges.subscribe((values) => {
            this.store.dispatch(updateNodes([values]));
        });
    }
}
WidgetFormComponent.ɵfac = function WidgetFormComponent_Factory(t) { return new (t || WidgetFormComponent)(ɵɵdirectiveInject(FormBuilder), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(EditorStore)); };
WidgetFormComponent.ɵcmp = ɵɵdefineComponent({ type: WidgetFormComponent, selectors: [["ce-widget-form"], ["", "ceWidgetForm", ""]], viewQuery: function WidgetFormComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$1, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.propsFormContainer = _t.first);
    } }, decls: 70, vars: 25, consts: [["nzGhost", "", "nzAccordion", "", "nzSize", "small", 3, "nzBordered"], ["nzHeader", "\u5916\u5305\u56F4\u76D2\u5C5E\u6027", "nzActive", ""], ["nz-form", "", "nzLayout", "inline", 3, "formGroup"], ["nzGutter", "8"], ["nzSpan", "12"], ["nz-icon", "", "nzIconfont", "icon-kuandu"], ["nzSize", "small", "formControlName", "width"], ["nz-icon", "", "nzIconfont", "icon-gaodu"], ["nzSize", "small", "formControlName", "height"], ["nz-icon", "", "nzIconfont", "icon-left"], ["nzSize", "small", "formControlName", "left"], ["nz-icon", "", "nzIconfont", "icon-top"], ["nzSize", "small", "formControlName", "top"], ["nz-icon", "", "nzType", "rotate-right"], ["nzSize", "small", "formControlName", "rotate"], ["nz-icon", "", "nzType", "lock"], ["formControlName", "locked"], ["nzSpan", "24"], ["nz-icon", "", "nzType", "border-outer"], ["borderStyleTpl", ""], ["nzSize", "small", "formControlName", "borderStyle", 3, "nzCustomTemplate"], ["nzValue", "none", "nzLabel", "none"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["nzValue", "dashed", "nzLabel", "dashed", "nzCustomContent", ""], ["nzValue", "solid", "nzLabel", "solid", "nzCustomContent", ""], ["nzValue", "dotted", "nzLabel", "dotted", "nzCustomContent", ""], ["nzHeader", "\u7EC4\u4EF6\u5C5E\u6027"], ["container", ""], [1, "d-flex", "align-items-center", "h-100"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["viewBox", "0 0 40 1", 1, "svg-icon"], ["d", "M0 1h5V0H0v1zm9 0h5V0H9v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1zm9 0h5V0h-5v1zm10 0h5V0h-5v1zm9 0h5V0h-5v1z"], ["d", "M0 0h80v1H0z"], ["d", "M0 1h1V0H0v1zm4 0h1V0H4v1zm4 0h1V0H8v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1zm4 0h1V0h-1v1z"]], template: function WidgetFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "nz-collapse", 0);
        ɵɵelementStart(1, "nz-collapse-panel", 1);
        ɵɵelementStart(2, "div");
        ɵɵelementStart(3, "h5");
        ɵɵtext(4, "\u5C3A\u5BF8");
        ɵɵelementEnd();
        ɵɵelementStart(5, "form", 2);
        ɵɵelementStart(6, "nz-row", 3);
        ɵɵelementStart(7, "nz-col", 4);
        ɵɵelementStart(8, "nz-form-item");
        ɵɵelementStart(9, "nz-form-label");
        ɵɵelement(10, "i", 5);
        ɵɵelementEnd();
        ɵɵelementStart(11, "nz-form-control");
        ɵɵelement(12, "nz-input-number", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "nz-col", 4);
        ɵɵelementStart(14, "nz-form-item");
        ɵɵelementStart(15, "nz-form-label");
        ɵɵelement(16, "i", 7);
        ɵɵelementEnd();
        ɵɵelementStart(17, "nz-form-control");
        ɵɵelement(18, "nz-input-number", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(19, "h5");
        ɵɵtext(20, "\u4F4D\u7F6E");
        ɵɵelementEnd();
        ɵɵelementStart(21, "form", 2);
        ɵɵelementStart(22, "nz-row", 3);
        ɵɵelementStart(23, "nz-col", 4);
        ɵɵelementStart(24, "nz-form-item");
        ɵɵelementStart(25, "nz-form-label");
        ɵɵelement(26, "i", 9);
        ɵɵelementEnd();
        ɵɵelementStart(27, "nz-form-control");
        ɵɵelement(28, "nz-input-number", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "nz-col", 4);
        ɵɵelementStart(30, "nz-form-item");
        ɵɵelementStart(31, "nz-form-label");
        ɵɵelement(32, "i", 11);
        ɵɵelementEnd();
        ɵɵelementStart(33, "nz-form-control");
        ɵɵelement(34, "nz-input-number", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(35, "nz-col", 4);
        ɵɵelementStart(36, "nz-form-item");
        ɵɵelementStart(37, "nz-form-label");
        ɵɵelement(38, "i", 13);
        ɵɵelementEnd();
        ɵɵelementStart(39, "nz-form-control");
        ɵɵelement(40, "nz-input-number", 14);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(41, "nz-col", 4);
        ɵɵelementStart(42, "nz-form-item");
        ɵɵelementStart(43, "nz-form-label");
        ɵɵelement(44, "i", 15);
        ɵɵelementEnd();
        ɵɵelementStart(45, "nz-form-control");
        ɵɵelement(46, "nz-switch", 16);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(47, "h5");
        ɵɵtext(48, "\u8FB9\u6846");
        ɵɵelementEnd();
        ɵɵelementStart(49, "form", 2);
        ɵɵelementStart(50, "nz-row", 3);
        ɵɵelementStart(51, "nz-col", 17);
        ɵɵelementStart(52, "nz-form-item");
        ɵɵelementStart(53, "nz-form-label");
        ɵɵelement(54, "i", 18);
        ɵɵelementEnd();
        ɵɵelementStart(55, "nz-form-control");
        ɵɵtemplate(56, WidgetFormComponent_ng_template_56_Template, 6, 7, "ng-template", null, 19, ɵɵtemplateRefExtractor);
        ɵɵelementStart(58, "nz-select", 20);
        ɵɵelementStart(59, "nz-option", 21);
        ɵɵtemplate(60, WidgetFormComponent_ng_container_60_Template, 1, 0, "ng-container", 22);
        ɵɵelementEnd();
        ɵɵelementStart(61, "nz-option", 23);
        ɵɵtemplate(62, WidgetFormComponent_ng_container_62_Template, 1, 0, "ng-container", 22);
        ɵɵelementEnd();
        ɵɵelementStart(63, "nz-option", 24);
        ɵɵtemplate(64, WidgetFormComponent_ng_container_64_Template, 1, 0, "ng-container", 22);
        ɵɵelementEnd();
        ɵɵelementStart(65, "nz-option", 25);
        ɵɵtemplate(66, WidgetFormComponent_ng_container_66_Template, 1, 0, "ng-container", 22);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(67, "nz-collapse-panel", 26);
        ɵɵtemplate(68, WidgetFormComponent_ng_template_68_Template, 0, 0, "ng-template", null, 27, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(57);
        ɵɵproperty("nzBordered", false);
        ɵɵadvance(5);
        ɵɵproperty("formGroup", ctx.boundingFormGroup);
        ɵɵadvance(16);
        ɵɵproperty("formGroup", ctx.boundingFormGroup);
        ɵɵadvance(28);
        ɵɵproperty("formGroup", ctx.boundingFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("nzCustomTemplate", _r0);
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c2, ɵɵpureFunction0(13, _c1)));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction1(17, _c2, ɵɵpureFunction0(16, _c3)));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction1(20, _c2, ɵɵpureFunction0(19, _c4)));
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", _r0)("ngTemplateOutletContext", ɵɵpureFunction1(23, _c2, ɵɵpureFunction0(22, _c5)));
    } }, directives: [NzCollapseComponent, NzCollapsePanelComponent, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NzFormDirective, FormGroupDirective, NzRowDirective, NzColDirective, NzFormItemComponent, NzFormLabelComponent, NzIconDirective, ɵNzTransitionPatchDirective, NzFormControlComponent, NzInputNumberComponent, NgControlStatus, FormControlName, NzSwitchComponent, NzSelectComponent, NzOptionComponent, NgTemplateOutlet, NgSwitch, NgSwitchCase], styles: ["[ceWidgetForm],ce-widget-form{display:block}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item,ce-widget-form .ant-collapse-ghost>.ant-collapse-item{border-bottom:1px solid #d9d9d9}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header{padding-left:20px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{left:5px}[ceWidgetForm] .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box,ce-widget-form .ant-collapse-ghost>.ant-collapse-item>.ant-collapse-content>.ant-collapse-content-box{padding:8px}[ceWidgetForm] .ant-form-item-control-input-content,ce-widget-form .ant-form-item-control-input-content{align-items:center;display:flex}"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WidgetFormComponent, [{
        type: Component,
        args: [{
                selector: 'ce-widget-form,[ceWidgetForm]',
                templateUrl: './widget-form.component.html',
                styleUrls: ['./widget-form.component.less'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return [{ type: FormBuilder }, { type: ComponentFactoryResolver }, { type: EditorStore }]; }, { propsFormContainer: [{
            type: ViewChild,
            args: ['container']
        }] }); })();

const _c0$2 = ["instance"];
function PropertyFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainer(0);
} }
class PropertyFormComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.formComponent$ = this.store
            .select((state) => state.selected.size)
            .pipe(map((size) => (size === 1 ? WidgetFormComponent : CanvasFormsComponent)));
    }
}
PropertyFormComponent.ɵfac = function PropertyFormComponent_Factory(t) { return new (t || PropertyFormComponent)(ɵɵdirectiveInject(EditorStore)); };
PropertyFormComponent.ɵcmp = ɵɵdefineComponent({ type: PropertyFormComponent, selectors: [["ce-property-form"], ["", "cePropertyForm", ""]], viewQuery: function PropertyFormComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.instance = _t.first);
    } }, decls: 2, vars: 3, consts: [[4, "ngComponentOutlet"]], template: function PropertyFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, PropertyFormComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        ɵɵpipe(1, "async");
    } if (rf & 2) {
        ɵɵproperty("ngComponentOutlet", ɵɵpipeBind1(1, 1, ctx.formComponent$));
    } }, directives: [NgComponentOutlet], pipes: [AsyncPipe], styles: ["[cePropertyForm],ce-property-form{display:block;margin:-12px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(PropertyFormComponent, [{
        type: Component,
        args: [{
                selector: 'ce-property-form,[cePropertyForm]',
                templateUrl: './property-form.component.html',
                styleUrls: ['./property-form.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: EditorStore }]; }, { instance: [{
            type: ViewChild,
            args: ['instance']
        }] }); })();

function ResizeHandleComponent_ce_rotate_handle_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ce-rotate-handle");
} }
function ResizeHandleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 17);
    ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_2_Template_div_ceOnStart_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r9 = ɵɵnextContext(); return ctx_r9.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_2_Template_div_ceOnMove_0_listener($event) { ɵɵrestoreView(_r10); const ctx_r11 = ɵɵnextContext(); return ctx_r11.resizing($event, "t"); })("ceOnStop", function ResizeHandleComponent_div_2_Template_div_ceOnStop_0_listener() { ɵɵrestoreView(_r10); const ctx_r12 = ɵɵnextContext(); return ctx_r12.resizeEnd(); });
    ɵɵelementEnd();
} }
function ResizeHandleComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 18);
    ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_4_Template_div_ceOnStart_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_4_Template_div_ceOnMove_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r15 = ɵɵnextContext(); return ctx_r15.resizing($event, "r"); })("ceOnStop", function ResizeHandleComponent_div_4_Template_div_ceOnStop_0_listener() { ɵɵrestoreView(_r14); const ctx_r16 = ɵɵnextContext(); return ctx_r16.resizeEnd(); });
    ɵɵelementEnd();
} }
function ResizeHandleComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19);
    ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_6_Template_div_ceOnStart_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r17 = ɵɵnextContext(); return ctx_r17.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_6_Template_div_ceOnMove_0_listener($event) { ɵɵrestoreView(_r18); const ctx_r19 = ɵɵnextContext(); return ctx_r19.resizing($event, "b"); })("ceOnStop", function ResizeHandleComponent_div_6_Template_div_ceOnStop_0_listener() { ɵɵrestoreView(_r18); const ctx_r20 = ɵɵnextContext(); return ctx_r20.resizeEnd(); });
    ɵɵelementEnd();
} }
function ResizeHandleComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 20);
    ɵɵlistener("ceOnStart", function ResizeHandleComponent_div_8_Template_div_ceOnStart_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r21 = ɵɵnextContext(); return ctx_r21.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_div_8_Template_div_ceOnMove_0_listener($event) { ɵɵrestoreView(_r22); const ctx_r23 = ɵɵnextContext(); return ctx_r23.resizing($event, "l"); })("ceOnStop", function ResizeHandleComponent_div_8_Template_div_ceOnStop_0_listener() { ɵɵrestoreView(_r22); const ctx_r24 = ɵɵnextContext(); return ctx_r24.resizeEnd(); });
    ɵɵelementEnd();
} }
function ResizeHandleComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 21);
} }
function ResizeHandleComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 22);
} }
function ResizeHandleComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 23);
} }
function ResizeHandleComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 24);
} }
class ResizeHandleComponent {
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
ResizeHandleComponent.ɵfac = function ResizeHandleComponent_Factory(t) { return new (t || ResizeHandleComponent)(ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService), ɵɵdirectiveInject(ElementRef)); };
ResizeHandleComponent.ɵcmp = ɵɵdefineComponent({ type: ResizeHandleComponent, selectors: [["ce-resize-handle"], ["", "ceResizeHandle", ""]], hostVars: 12, hostBindings: function ResizeHandleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵstyleProp("display", ctx.display)("width", ctx.width, "px")("height", ctx.height, "px")("left", ctx.left, "px")("top", ctx.top, "px")("transform", ctx.transform);
    } }, decls: 26, vars: 27, consts: [[4, "ngIf"], ["class", "resizable-handle t", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle r", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle b", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["class", "resizable-handle l", "ceDraggable", "", 3, "ceOnStart", "ceOnMove", "ceOnStop", 4, "ngIf"], ["ceDraggable", "", 1, "resizable-handle", "tr", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "br", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "tl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "bl", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["class", "t circle", 4, "ngIf"], ["class", "r circle", 4, "ngIf"], ["class", "b circle", 4, "ngIf"], ["class", "l circle", 4, "ngIf"], [1, "tr", "circle"], [1, "br", "circle"], [1, "tl", "circle"], [1, "bl", "circle"], ["ceDraggable", "", 1, "resizable-handle", "t", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "r", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "b", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["ceDraggable", "", 1, "resizable-handle", "l", 3, "ceOnStart", "ceOnMove", "ceOnStop"], [1, "t", "circle"], [1, "r", "circle"], [1, "b", "circle"], [1, "l", "circle"]], template: function ResizeHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, ResizeHandleComponent_ce_rotate_handle_0_Template, 1, 0, "ce-rotate-handle", 0);
        ɵɵpipe(1, "async");
        ɵɵtemplate(2, ResizeHandleComponent_div_2_Template, 1, 0, "div", 1);
        ɵɵpipe(3, "async");
        ɵɵtemplate(4, ResizeHandleComponent_div_4_Template, 1, 0, "div", 2);
        ɵɵpipe(5, "async");
        ɵɵtemplate(6, ResizeHandleComponent_div_6_Template, 1, 0, "div", 3);
        ɵɵpipe(7, "async");
        ɵɵtemplate(8, ResizeHandleComponent_div_8_Template, 1, 0, "div", 4);
        ɵɵpipe(9, "async");
        ɵɵelementStart(10, "div", 5);
        ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_10_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_10_listener($event) { return ctx.resizing($event, "tr"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_10_listener() { return ctx.resizeEnd(); });
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 6);
        ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_11_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_11_listener($event) { return ctx.resizing($event, "br"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_11_listener() { return ctx.resizeEnd(); });
        ɵɵelementEnd();
        ɵɵelementStart(12, "div", 7);
        ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_12_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_12_listener($event) { return ctx.resizing($event, "tl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_12_listener() { return ctx.resizeEnd(); });
        ɵɵelementEnd();
        ɵɵelementStart(13, "div", 8);
        ɵɵlistener("ceOnStart", function ResizeHandleComponent_Template_div_ceOnStart_13_listener($event) { return ctx.resizeStart($event); })("ceOnMove", function ResizeHandleComponent_Template_div_ceOnMove_13_listener($event) { return ctx.resizing($event, "bl"); })("ceOnStop", function ResizeHandleComponent_Template_div_ceOnStop_13_listener() { return ctx.resizeEnd(); });
        ɵɵelementEnd();
        ɵɵtemplate(14, ResizeHandleComponent_div_14_Template, 1, 0, "div", 9);
        ɵɵpipe(15, "async");
        ɵɵtemplate(16, ResizeHandleComponent_div_16_Template, 1, 0, "div", 10);
        ɵɵpipe(17, "async");
        ɵɵtemplate(18, ResizeHandleComponent_div_18_Template, 1, 0, "div", 11);
        ɵɵpipe(19, "async");
        ɵɵtemplate(20, ResizeHandleComponent_div_20_Template, 1, 0, "div", 12);
        ɵɵpipe(21, "async");
        ɵɵelement(22, "div", 13);
        ɵɵelement(23, "div", 14);
        ɵɵelement(24, "div", 15);
        ɵɵelement(25, "div", 16);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ɵɵpipeBind1(1, 9, ctx.selectedSize$) === 1);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(3, 11, ctx.selectedSize$));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(5, 13, ctx.selectedSize$));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(7, 15, ctx.selectedSize$));
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(9, 17, ctx.selectedSize$));
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ɵɵpipeBind1(15, 19, ctx.selectedSize$) === 1);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(17, 21, ctx.selectedSize$) === 1);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(19, 23, ctx.selectedSize$) === 1);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ɵɵpipeBind1(21, 25, ctx.selectedSize$) === 1);
    } }, styles: ["[ceResizeHandle],ce-resize-handle{border:1px solid #1890ff;box-sizing:border-box;position:absolute}[ceResizeHandle] .resizable-handle,ce-resize-handle .resizable-handle{cursor:pointer;height:14px;pointer-events:auto;position:absolute;width:14px;z-index:1}[ceResizeHandle] .circle,ce-resize-handle .circle{background:#fff;border:1px solid #1890ff;border-radius:50%;height:7px;position:absolute;width:7px}[ceResizeHandle] .b,[ceResizeHandle] .t,ce-resize-handle .b,ce-resize-handle .t{left:50%;margin-left:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .t.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .t.resizable-handle{margin-left:-7px}[ceResizeHandle] .l,[ceResizeHandle] .r,ce-resize-handle .l,ce-resize-handle .r{margin-top:-3.5px;top:50%}[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .r.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .r.resizable-handle{margin-top:-7px}[ceResizeHandle] .t,[ceResizeHandle] .tl,[ceResizeHandle] .tr,ce-resize-handle .t,ce-resize-handle .tl,ce-resize-handle .tr{top:-3.5px}[ceResizeHandle] .t.resizable-handle,[ceResizeHandle] .tl.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .t.resizable-handle,ce-resize-handle .tl.resizable-handle,ce-resize-handle .tr.resizable-handle{top:-7px}[ceResizeHandle] .b,[ceResizeHandle] .bl,[ceResizeHandle] .br,ce-resize-handle .b,ce-resize-handle .bl,ce-resize-handle .br{bottom:-3.5px}[ceResizeHandle] .b.resizable-handle,[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .br.resizable-handle,ce-resize-handle .b.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .br.resizable-handle{bottom:-7px}[ceResizeHandle] .br,[ceResizeHandle] .r,[ceResizeHandle] .tr,ce-resize-handle .br,ce-resize-handle .r,ce-resize-handle .tr{right:-3.5px}[ceResizeHandle] .br.resizable-handle,[ceResizeHandle] .r.resizable-handle,[ceResizeHandle] .tr.resizable-handle,ce-resize-handle .br.resizable-handle,ce-resize-handle .r.resizable-handle,ce-resize-handle .tr.resizable-handle{right:-7px}[ceResizeHandle] .bl,[ceResizeHandle] .l,[ceResizeHandle] .tl,ce-resize-handle .bl,ce-resize-handle .l,ce-resize-handle .tl{left:-3.5px}[ceResizeHandle] .bl.resizable-handle,[ceResizeHandle] .l.resizable-handle,[ceResizeHandle] .tl.resizable-handle,ce-resize-handle .bl.resizable-handle,ce-resize-handle .l.resizable-handle,ce-resize-handle .tl.resizable-handle{left:-7px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ResizeHandleComponent, [{
        type: Component,
        args: [{
                selector: 'ce-resize-handle,[ceResizeHandle]',
                templateUrl: 'resize-handle.component.html',
                styleUrls: ['resize-handle.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }, { type: ElementRef }]; }, { display: [{
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
RotateHandleComponent.ɵfac = function RotateHandleComponent_Factory(t) { return new (t || RotateHandleComponent)(ɵɵdirectiveInject(ResizeHandleComponent, 12), ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService)); };
RotateHandleComponent.ɵcmp = ɵɵdefineComponent({ type: RotateHandleComponent, selectors: [["ce-rotate-handle"]], decls: 3, vars: 2, consts: [["ceDraggable", "", 1, "rotate", 3, "ceOnStart", "ceOnMove", "ceOnStop"], ["width", "14", "height", "14", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.536 3.464A5 5 0 1 0 11 10l1.424 1.425a7 7 0 1 1-.475-9.374L13.659.34A.2.2 0 0 1 14 .483V5.5a.5.5 0 0 1-.5.5H8.483a.2.2 0 0 1-.142-.341l2.195-2.195z", "fill-rule", "nonzero"]], template: function RotateHandleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("ceOnStart", function RotateHandleComponent_Template_div_ceOnStart_0_listener($event) { return ctx.rotateStart($event); })("ceOnMove", function RotateHandleComponent_Template_div_ceOnMove_0_listener($event) { return ctx.rotating($event); })("ceOnStop", function RotateHandleComponent_Template_div_ceOnStop_0_listener() { return ctx.rotateStop(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(1, "svg", 1);
        ɵɵelement(2, "path", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵstyleProp("cursor", ctx.rotateSnapshot && "grabbing");
    } }, directives: [DraggableDirective], styles: [".rotate{align-items:center;cursor:grab;display:flex;height:18px;justify-content:center;left:50%;margin-left:-9px;pointer-events:auto;position:absolute;top:-26px;width:18px}.rotate path{fill:#1890ff}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(RotateHandleComponent, [{
        type: Component,
        args: [{
                selector: 'ce-rotate-handle',
                templateUrl: 'rotate-handle.component.html',
                styleUrls: ['rotate-handle.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: ResizeHandleComponent, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
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
NoZoomAreaDirective.ɵfac = function NoZoomAreaDirective_Factory(t) { return new (t || NoZoomAreaDirective)(ɵɵdirectiveInject(EditorStore)); };
NoZoomAreaDirective.ɵdir = ɵɵdefineDirective({ type: NoZoomAreaDirective, selectors: [["", "ceNoZoomArea", ""]], hostVars: 4, hostBindings: function NoZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceNoZoomArea"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NoZoomAreaDirective, [{
        type: Directive,
        args: [{
                selector: '[ceNoZoomArea]',
                exportAs: 'ceNoZoomArea',
            }]
    }], function () { return [{ type: EditorStore }]; }, { width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }] }); })();

class SelectorDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.subscription = new Subscription();
        this.move$ = fromEvent(window, 'pointermove');
        this.up$ = fromEvent(window, 'pointerup');
        this.startPointSnapshot = null;
        this.ceSelectorDisabled = false;
        this.ceOnSelectorStart = new EventEmitter();
        this.ceOnSelectorMoving = new EventEmitter();
        this.ceOnSelectorStop = new EventEmitter();
    }
    ngOnInit() {
        this.subscription.add(fromEvent(this.eleRef.nativeElement, 'pointerdown')
            .pipe(filter((e) => e.button === 0), filter(() => !this.ceSelectorDisabled), switchMap((ev) => {
            this.boxRect = this.eleRef.nativeElement.getBoundingClientRect();
            this.startPointSnapshot = [ev.clientX, ev.clientY];
            this.ceOnSelectorStart.emit();
            return this.move$.pipe(finalize(() => {
                this.startPointSnapshot = null;
                this.ceOnSelectorStop.emit();
            }), takeUntil(this.up$));
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
SelectorDirective.ɵfac = function SelectorDirective_Factory(t) { return new (t || SelectorDirective)(ɵɵdirectiveInject(ElementRef)); };
SelectorDirective.ɵdir = ɵɵdefineDirective({ type: SelectorDirective, selectors: [["", "ceSelector", ""]], inputs: { ceSelectorDisabled: "ceSelectorDisabled" }, outputs: { ceOnSelectorStart: "ceOnSelectorStart", ceOnSelectorMoving: "ceOnSelectorMoving", ceOnSelectorStop: "ceOnSelectorStop" }, exportAs: ["ceSelector"] });
__decorate([
    InputBoolean()
], SelectorDirective.prototype, "ceSelectorDisabled", void 0);
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectorDirective, [{
        type: Directive,
        args: [{
                selector: '[ceSelector]',
                exportAs: 'ceSelector',
            }]
    }], function () { return [{ type: ElementRef }]; }, { ceSelectorDisabled: [{
            type: Input
        }], ceOnSelectorStart: [{
            type: Output
        }], ceOnSelectorMoving: [{
            type: Output
        }], ceOnSelectorStop: [{
            type: Output
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
ZoomAreaDirective.ɵfac = function ZoomAreaDirective_Factory(t) { return new (t || ZoomAreaDirective)(ɵɵdirectiveInject(EditorStore)); };
ZoomAreaDirective.ɵdir = ɵɵdefineDirective({ type: ZoomAreaDirective, selectors: [["", "ceZoomArea", ""]], hostVars: 8, hostBindings: function ZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵstyleProp("transform-origin", ctx.transformOrigin)("transform", ctx.scale)("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceZoomArea"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ZoomAreaDirective, [{
        type: Directive,
        args: [{
                selector: '[ceZoomArea]',
                exportAs: 'ceZoomArea',
            }]
    }], function () { return [{ type: EditorStore }]; }, { transformOrigin: [{
            type: HostBinding,
            args: ['style.transform-origin']
        }], scale: [{
            type: HostBinding,
            args: ['style.transform']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }] }); })();

class CeToolbarDirective {
    constructor() { }
}
CeToolbarDirective.ɵfac = function CeToolbarDirective_Factory(t) { return new (t || CeToolbarDirective)(); };
CeToolbarDirective.ɵdir = ɵɵdefineDirective({ type: CeToolbarDirective, selectors: [["", "ceToolbar", ""]], exportAs: ["ceToolbar"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CeToolbarDirective, [{
        type: Directive,
        args: [{
                selector: '[ceToolbar]',
                exportAs: 'ceToolbar',
            }]
    }], function () { return []; }, null); })();

function ToolbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵprojection(1);
    ɵɵelementContainerEnd();
} }
function ToolbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "nz-card", 2);
    ɵɵelementStart(1, "div", 3);
    ɵɵelementStart(2, "span", 4);
    ɵɵtext(3, "Canvas Title");
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 5);
    ɵɵelementStart(5, "button", 6);
    ɵɵpipe(6, "async");
    ɵɵelement(7, "i", 7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 8);
    ɵɵelement(9, "i", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "div", 5);
    ɵɵelementStart(11, "button", 10);
    ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_11_listener() { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.groupNodes(); });
    ɵɵpipe(12, "async");
    ɵɵelement(13, "i", 11);
    ɵɵelementEnd();
    ɵɵelementStart(14, "button", 10);
    ɵɵlistener("click", function ToolbarComponent_ng_template_1_Template_button_click_14_listener() { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.breakNode(); });
    ɵɵpipe(15, "async");
    ɵɵelement(16, "i", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "div", 5);
    ɵɵelementStart(18, "button", 6);
    ɵɵpipe(19, "async");
    ɵɵelement(20, "i", 13);
    ɵɵelementEnd();
    ɵɵelementStart(21, "button", 6);
    ɵɵpipe(22, "async");
    ɵɵelement(23, "i", 14);
    ɵɵelementEnd();
    ɵɵelementStart(24, "button", 6);
    ɵɵpipe(25, "async");
    ɵɵelement(26, "i", 15);
    ɵɵelementEnd();
    ɵɵelementStart(27, "button", 6);
    ɵɵpipe(28, "async");
    ɵɵelement(29, "i", 16);
    ɵɵelementEnd();
    ɵɵelementStart(30, "button", 6);
    ɵɵpipe(31, "async");
    ɵɵelement(32, "i", 17);
    ɵɵelementEnd();
    ɵɵelementStart(33, "button", 6);
    ɵɵpipe(34, "async");
    ɵɵelement(35, "i", 18);
    ɵɵelementEnd();
    ɵɵelementStart(36, "button", 6);
    ɵɵpipe(37, "async");
    ɵɵelement(38, "i", 19);
    ɵɵelementEnd();
    ɵɵelementStart(39, "button", 6);
    ɵɵpipe(40, "async");
    ɵɵelement(41, "i", 20);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(42, "div", 5);
    ɵɵelementStart(43, "nz-tag", 21);
    ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_43_listener() { ɵɵrestoreView(_r4); const ctx_r6 = ɵɵnextContext(); return ctx_r6.store.togglePanelVisible("LAYERS"); });
    ɵɵelement(44, "i", 22);
    ɵɵelementStart(45, "span");
    ɵɵtext(46, "\u56FE\u5C42");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(47, "nz-tag", 21);
    ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_47_listener() { ɵɵrestoreView(_r4); const ctx_r7 = ɵɵnextContext(); return ctx_r7.store.togglePanelVisible("WIDGET_LIST"); });
    ɵɵelement(48, "i", 23);
    ɵɵelementStart(49, "span");
    ɵɵtext(50, "\u7EC4\u4EF6");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(51, "nz-tag", 21);
    ɵɵlistener("nzCheckedChange", function ToolbarComponent_ng_template_1_Template_nz_tag_nzCheckedChange_51_listener() { ɵɵrestoreView(_r4); const ctx_r8 = ɵɵnextContext(); return ctx_r8.store.togglePanelVisible("PROPERTIES"); });
    ɵɵelement(52, "i", 24);
    ɵɵelementStart(53, "span");
    ɵɵtext(54, "\u5C5E\u6027");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(55, "div", 5);
    ɵɵelementStart(56, "button", 8);
    ɵɵelement(57, "i", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    let tmp_11_0 = null;
    let tmp_12_0 = null;
    let tmp_13_0 = null;
    ɵɵadvance(5);
    ɵɵproperty("disabled", ɵɵpipeBind1(6, 14, ctx_r2.copyStatus$));
    ɵɵadvance(6);
    ɵɵproperty("disabled", ɵɵpipeBind1(12, 16, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", !ɵɵpipeBind1(15, 18, ctx_r2.breakStatus$));
    ɵɵadvance(4);
    ɵɵproperty("disabled", ɵɵpipeBind1(19, 20, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(22, 22, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(25, 24, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(28, 26, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(31, 28, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(34, 30, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(37, 32, ctx_r2.groupStatus$));
    ɵɵadvance(3);
    ɵɵproperty("disabled", ɵɵpipeBind1(40, 34, ctx_r2.groupStatus$));
    ɵɵadvance(4);
    ɵɵproperty("nzChecked", (tmp_11_0 = ctx_r2.store.getPanel("LAYERS")) == null ? null : tmp_11_0.show);
    ɵɵadvance(4);
    ɵɵproperty("nzChecked", (tmp_12_0 = ctx_r2.store.getPanel("WIDGET_LIST")) == null ? null : tmp_12_0.show);
    ɵɵadvance(4);
    ɵɵproperty("nzChecked", (tmp_13_0 = ctx_r2.store.getPanel("PROPERTIES")) == null ? null : tmp_13_0.show);
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
        this.groupStatus$ = this.selected$.pipe(map((state) => state.size <= 1));
        this.breakStatus$ = this.selected$.pipe(map((state) => (state.size === 1 ? [...state][0] : false)), map((id) => { var _a, _b; return id && !!((_b = (_a = this.utils.getNodeById(id, this.nodes)) === null || _a === void 0 ? void 0 : _a.children) === null || _b === void 0 ? void 0 : _b.length); }));
    }
    get copyStatus$() {
        return this.selected$.pipe(map((state) => state.size === 0));
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
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(ɵɵdirectiveInject(EditorStore), ɵɵdirectiveInject(CeUtilsService)); };
ToolbarComponent.ɵcmp = ɵɵdefineComponent({ type: ToolbarComponent, selectors: [["ce-toolbar"]], contentQueries: function ToolbarComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CeToolbarDirective, true);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ceToolbar = _t.first);
    } }, exportAs: ["ceToolbar"], ngContentSelectors: _c1$1, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["nzSize", "small", 1, "tool-bar"], [1, "d-flex", "align-items-center", "col", "p-0"], [1, "ml-2"], [1, "d-flex", "ml-auto", "align-items-center"], ["nz-button", "", "nzType", "link", 3, "disabled"], ["nz-icon", "", "nzIconfont", "icon-copy"], ["nz-button", "", "nzType", "link"], ["nz-icon", "", "nzIconfont", "icon-paste"], ["nz-button", "", "nzType", "link", 3, "disabled", "click"], ["nz-icon", "", "nzIconfont", "icon-group"], ["nz-icon", "", "nzIconfont", "icon-break"], ["nz-icon", "", "nzIconfont", "icon-horizontal-between"], ["nz-icon", "", "nzIconfont", "icon-horizontal-align"], ["nz-icon", "", "nzIconfont", "icon-vertical-between"], ["nz-icon", "", "nzIconfont", "icon-vertical-align"], ["nz-icon", "", "nzIconfont", "icon-left-align"], ["nz-icon", "", "nzIconfont", "icon-right-align"], ["nz-icon", "", "nzIconfont", "icon-top-align"], ["nz-icon", "", "nzIconfont", "icon-bottom-align"], ["nzMode", "checkable", 3, "nzChecked", "nzCheckedChange"], ["nz-icon", "", "nzIconfont", "icon-tuceng"], ["nz-icon", "", "nzIconfont", "icon-widgets"], ["nz-icon", "", "nzIconfont", "icon-widget"], ["nz-icon", "", "nzIconfont", "icon-run"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c0$3);
        ɵɵtemplate(0, ToolbarComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        ɵɵtemplate(1, ToolbarComponent_ng_template_1_Template, 58, 36, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.ceToolbar)("ngIfElse", _r1);
    } }, directives: [NgIf, NzCardComponent, NzButtonComponent, ɵNzTransitionPatchDirective, NzIconDirective, NzTagComponent], pipes: [AsyncPipe], styles: ["ce-toolbar{display:flex;flex:1;height:40px;max-height:40px;width:100%}ce-toolbar .tool-bar{flex:1}ce-toolbar .tool-bar [nz-icon]{font-size:18px}ce-toolbar .tool-bar nz-tag{margin:auto .2rem;padding:auto 2px}ce-toolbar .tool-bar nz-tag [nz-icon]{font-size:13px}ce-toolbar .tool-bar .ant-card-body{display:flex;height:100%;padding:2px 5px}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'ce-toolbar',
                exportAs: 'ceToolbar',
                templateUrl: 'toolbar.component.html',
                styleUrls: ['toolbar.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: EditorStore }, { type: CeUtilsService }]; }, { ceToolbar: [{
            type: ContentChild,
            args: [CeToolbarDirective]
        }] }); })();

class WidgetListComponent {
    constructor() { }
    ngOnInit() { }
}
WidgetListComponent.ɵfac = function WidgetListComponent_Factory(t) { return new (t || WidgetListComponent)(); };
WidgetListComponent.ɵcmp = ɵɵdefineComponent({ type: WidgetListComponent, selectors: [["ce-widget-list"]], decls: 2, vars: 0, template: function WidgetListComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, "widget-list works!");
        ɵɵelementEnd();
    } }, styles: [""], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(WidgetListComponent, [{
        type: Component,
        args: [{
                selector: 'ce-widget-list',
                templateUrl: 'widget-list.component.html',
                styleUrls: ['widget-list.component.less'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], function () { return []; }, null); })();

const _c0$4 = ["container"];
function AngularEditorLibComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵstyleProp("left", ctx_r2.selectorRect.x, "px")("top", ctx_r2.selectorRect.y, "px")("width", ctx_r2.selectorRect.width, "px")("height", ctx_r2.selectorRect.height, "px");
} }
function AngularEditorLibComponent_ng_container_33_ce_panel_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "ce-panel", 16);
} if (rf & 2) {
    const panel_r4 = ɵɵnextContext().$implicit;
    ɵɵproperty("panel", panel_r4);
} }
function AngularEditorLibComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, AngularEditorLibComponent_ng_container_33_ce_panel_1_Template, 1, 1, "ce-panel", 15);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", panel_r4.show);
} }
const _c1$2 = [[["", "toolbar", ""]]];
const _c2$1 = ["[toolbar]"];
class AngularEditorLibComponent {
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
AngularEditorLibComponent.ɵfac = function AngularEditorLibComponent_Factory(t) { return new (t || AngularEditorLibComponent)(ɵɵdirectiveInject(EditorStore)); };
AngularEditorLibComponent.ɵcmp = ɵɵdefineComponent({ type: AngularEditorLibComponent, selectors: [["ce-editor"]], viewQuery: function AngularEditorLibComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$4, true, ElementRef);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerEleRef = _t.first);
    } }, inputs: { state: "state" }, exportAs: ["ceEditor"], features: [ɵɵProvidersFeature([EditorStore])], ngContentSelectors: _c2$1, decls: 35, vars: 60, consts: [[1, "col", "p-0", "d-flex"], ["ceDraggable", "", "ceUseSpace", "", "ceSelector", "", 1, "canvas-container", 3, "ceSelectorDisabled", "ceOnStart", "ceOnMove", "ceOnStop", "ceOnSelectorStart", "ceOnSelectorMoving", "ceOnSelectorStop"], ["ceDrag", "ceDraggable", "container", ""], [1, "canvas-content"], ["ceNoZoomArea", ""], ["ceZoomArea", ""], ["cx", "", 1, "ref-line", "y"], ["cy", "", 1, "ref-line", "x"], ["tx", "", 1, "ref-line", "y"], ["bx", "", 1, "ref-line", "y"], ["ly", "", 1, "ref-line", "x"], ["ry", "", 1, "ref-line", "x"], ["class", "selector", 3, "left", "top", "width", "height", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "selector"], [3, "panel", 4, "ngIf"], [3, "panel"]], template: function AngularEditorLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1$2);
        ɵɵprojection(0);
        ɵɵelementStart(1, "div", 0);
        ɵɵelementStart(2, "div", 1, 2);
        ɵɵlistener("ceOnStart", function AngularEditorLibComponent_Template_div_ceOnStart_2_listener($event) { return ctx.dragStart($event); })("ceOnMove", function AngularEditorLibComponent_Template_div_ceOnMove_2_listener($event) { return ctx.dragging($event); })("ceOnStop", function AngularEditorLibComponent_Template_div_ceOnStop_2_listener() { return ctx.dragEnd(); })("ceOnSelectorStart", function AngularEditorLibComponent_Template_div_ceOnSelectorStart_2_listener() { return ctx.selectorStart(); })("ceOnSelectorMoving", function AngularEditorLibComponent_Template_div_ceOnSelectorMoving_2_listener($event) { return ctx.selectorMoving($event); })("ceOnSelectorStop", function AngularEditorLibComponent_Template_div_ceOnSelectorStop_2_listener() { return ctx.selectorEnd(); });
        ɵɵelementStart(5, "div", 3);
        ɵɵelementStart(6, "div", 4);
        ɵɵelement(7, "ce-canvas-background");
        ɵɵelement(8, "ce-canvas-grid");
        ɵɵelementEnd();
        ɵɵelementStart(9, "div", 5);
        ɵɵelement(10, "ce-canvas");
        ɵɵelementEnd();
        ɵɵelementStart(11, "div", 4);
        ɵɵelement(12, "ce-bordered-area");
        ɵɵelement(13, "ce-resize-handle");
        ɵɵelement(14, "div", 6);
        ɵɵpipe(15, "async");
        ɵɵpipe(16, "async");
        ɵɵelement(17, "div", 7);
        ɵɵpipe(18, "async");
        ɵɵpipe(19, "async");
        ɵɵelement(20, "div", 8);
        ɵɵpipe(21, "async");
        ɵɵpipe(22, "async");
        ɵɵelement(23, "div", 9);
        ɵɵpipe(24, "async");
        ɵɵpipe(25, "async");
        ɵɵelement(26, "div", 10);
        ɵɵpipe(27, "async");
        ɵɵpipe(28, "async");
        ɵɵelement(29, "div", 11);
        ɵɵpipe(30, "async");
        ɵɵpipe(31, "async");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(32, AngularEditorLibComponent_div_32_Template, 1, 8, "div", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(33, AngularEditorLibComponent_ng_container_33_Template, 2, 1, "ng-container", 13);
        ɵɵpipe(34, "async");
    } if (rf & 2) {
        const _r0 = ɵɵreference(3);
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
        ɵɵadvance(2);
        ɵɵclassProp("start-drag", _r0.spaceKeyDown)("dragging", ctx.startPoints);
        ɵɵproperty("ceSelectorDisabled", _r0.spaceKeyDown);
        ɵɵadvance(3);
        ɵɵstyleProp("transform", ctx.matrix);
        ɵɵadvance(9);
        ɵɵstyleProp("top", ((tmp_4_0 = ɵɵpipeBind1(15, 34, ctx.refLineState$)) == null ? null : tmp_4_0.cx == null ? null : tmp_4_0.cx.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_5_0 = ɵɵpipeBind1(16, 36, ctx.refLineState$)) == null ? null : tmp_5_0.cx == null ? null : tmp_5_0.cx.state);
        ɵɵadvance(3);
        ɵɵstyleProp("left", ((tmp_6_0 = ɵɵpipeBind1(18, 38, ctx.refLineState$)) == null ? null : tmp_6_0.cy == null ? null : tmp_6_0.cy.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_7_0 = ɵɵpipeBind1(19, 40, ctx.refLineState$)) == null ? null : tmp_7_0.cy == null ? null : tmp_7_0.cy.state);
        ɵɵadvance(3);
        ɵɵstyleProp("top", ((tmp_8_0 = ɵɵpipeBind1(21, 42, ctx.refLineState$)) == null ? null : tmp_8_0.tx == null ? null : tmp_8_0.tx.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_9_0 = ɵɵpipeBind1(22, 44, ctx.refLineState$)) == null ? null : tmp_9_0.tx == null ? null : tmp_9_0.tx.state);
        ɵɵadvance(3);
        ɵɵstyleProp("top", ((tmp_10_0 = ɵɵpipeBind1(24, 46, ctx.refLineState$)) == null ? null : tmp_10_0.bx == null ? null : tmp_10_0.bx.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_11_0 = ɵɵpipeBind1(25, 48, ctx.refLineState$)) == null ? null : tmp_11_0.bx == null ? null : tmp_11_0.bx.state);
        ɵɵadvance(3);
        ɵɵstyleProp("left", ((tmp_12_0 = ɵɵpipeBind1(27, 50, ctx.refLineState$)) == null ? null : tmp_12_0.ly == null ? null : tmp_12_0.ly.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_13_0 = ɵɵpipeBind1(28, 52, ctx.refLineState$)) == null ? null : tmp_13_0.ly == null ? null : tmp_13_0.ly.state);
        ɵɵadvance(3);
        ɵɵstyleProp("left", ((tmp_14_0 = ɵɵpipeBind1(30, 54, ctx.refLineState$)) == null ? null : tmp_14_0.ry == null ? null : tmp_14_0.ry.position) * ctx.canvasPosition.scale, "px");
        ɵɵclassProp("active", (tmp_15_0 = ɵɵpipeBind1(31, 56, ctx.refLineState$)) == null ? null : tmp_15_0.ry == null ? null : tmp_15_0.ry.state);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.selectorRect);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ɵɵpipeBind1(34, 58, ctx.store.panels$))("ngForTrackBy", ctx.panelsTrackByFn);
    } }, directives: [DraggableDirective, SelectorDirective, NoZoomAreaDirective, CanvasBackgroundComponent, CanvasGridComponent, ZoomAreaDirective, CanvasComponent, BorderedAreaComponent, ResizeHandleComponent, NgIf, NgForOf, PanelComponent], pipes: [AsyncPipe], styles: ["@import \"styles/bootstrap.css\";[nz-button]~[nz-button],[nz-icon]~[nz-icon]{margin-left:.5rem}.svg-icon{width:80px}.svg-icon>*{fill:currentColor}[ceNoZoomArea]{display:block;pointer-events:none}[ceNoZoomArea],[ceZoomArea]{position:absolute}.ant-tree .ant-tree-treenode{align-items:center}ce-editor{bottom:0;display:flex;flex-direction:column;height:100vh;left:0;overflow:hidden;position:absolute;right:0;top:0;width:100vw}ce-editor .left-side{width:300px}ce-editor .canvas-container{background-color:#f0f0f0;flex:1;overflow:hidden;position:relative}ce-editor .canvas-container.start-drag{cursor:grab}ce-editor .canvas-container.start-drag>*{pointer-events:none}ce-editor .canvas-container.start-drag.dragging{cursor:grabbing}ce-editor .canvas-container .canvas-content{position:absolute}ce-editor .canvas-container .selector{background-color:rgba(24,144,255,.3);border:1px solid #1890ff;box-sizing:border-box;position:absolute}ce-editor .canvas-container .ref-line{background-color:#fa8c16;display:none;opacity:.8;position:absolute;z-index:999999999999}ce-editor .canvas-container .ref-line.active{display:inline-block}ce-editor .canvas-container .ref-line.x{bottom:0;height:100%;top:0;width:1px}ce-editor .canvas-container .ref-line.y{height:1px;left:0;right:0;width:100%}ce-editor .aside{border:solid #f0f0f0;border-width:0 1px 0 0;display:flex}ce-editor .aside ul{list-style:none;margin:0;padding:0}ce-editor .aside ul li{align-items:center;border-bottom:1px solid #f0f0f0;display:flex;justify-content:center;margin:0;padding:3px 0;width:100%}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularEditorLibComponent, [{
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
    }], function () { return [{ type: EditorStore }]; }, { state: [{
            type: Input
        }], containerEleRef: [{
            type: ViewChild,
            args: ['container', { read: ElementRef, static: true }]
        }] }); })();
function isInBound(rect, bound) {
    return (rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height);
}

const antDesignIcons = AllIcons;
const ICONS = Object.keys(antDesignIcons).map((key) => antDesignIcons[key]);
const ANTD_MODULES = [
    NzCardModule,
    NzIconModule.forRoot(ICONS),
    NzButtonModule,
    NzInputNumberModule,
    NzTabsModule,
    NzTreeModule,
    NzDropDownModule,
    NzPipesModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
    NzTagModule,
    NzDividerModule,
    NzCollapseModule,
    NzSwitchModule,
    NzSelectModule,
];
const CDK_MODULES = [DragDropModule];
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
        this.injector.get(NzIconService).fetchFromIconfont({ scriptUrl: 'https://at.alicdn.com/t/font_1310204_lmnttxhl5lk.js' });
    }
}
AngularEditorLibModule.ɵmod = ɵɵdefineNgModule({ type: AngularEditorLibModule });
AngularEditorLibModule.ɵinj = ɵɵdefineInjector({ factory: function AngularEditorLibModule_Factory(t) { return new (t || AngularEditorLibModule)(ɵɵinject(Injector)); }, imports: [[CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, ...ANTD_MODULES, ...CDK_MODULES]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AngularEditorLibModule, { declarations: [ToolbarComponent,
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
        PropertyFormComponent, NoZoomAreaDirective, ZoomAreaDirective, DraggableDirective, SelectorDirective, CeToolbarDirective, CanvasFormsComponent, WidgetFormComponent], imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, NzCardModule, NzIconModule, NzButtonModule,
        NzInputNumberModule,
        NzTabsModule,
        NzTreeModule,
        NzDropDownModule,
        NzPipesModule,
        NzToolTipModule,
        NzFormModule,
        NzInputModule,
        NzTagModule,
        NzDividerModule,
        NzCollapseModule,
        NzSwitchModule,
        NzSelectModule, DragDropModule], exports: [ToolbarComponent,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(AngularEditorLibModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule, ...ANTD_MODULES, ...CDK_MODULES],
                declarations: [...COMPONENTS, ...DIRECTIVES, ...FORMS_COMPONENT],
                exports: [...COMPONENTS, ...DIRECTIVES],
            }]
    }], function () { return [{ type: Injector }]; }, null); })();
ɵɵsetComponentScope(ResizeHandleComponent, [NgIf, RotateHandleComponent, DraggableDirective], [AsyncPipe]);

/*
 * Public API Surface of angular-editor-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AngularEditorLibComponent, AngularEditorLibModule, BorderedAreaComponent, BoxItemComponent, CanvasBackgroundComponent, CanvasComponent, CanvasGridComponent, CeToolbarDirective, CeUtilsService, DEFAULT_STORE, DraggableDirective, EditorStore, LayerTreeComponent, NoZoomAreaDirective, PanelComponent, PropertyFormComponent, ResizeHandleComponent, RotateHandleComponent, SelectorDirective, ToolbarComponent, WidgetListComponent, ZoomAreaDirective, genNodeId };
//# sourceMappingURL=angular-editor-lib.js.map
