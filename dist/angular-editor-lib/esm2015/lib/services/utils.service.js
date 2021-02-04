import { Injectable, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
const SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);
export function genNodeId() {
    return `${Date.now()}${Math.round(Math.random() * 1000000000000)}`;
}
export class CeUtilsService {
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
            _.chain(list)
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
CeUtilsService.ɵprov = i0.ɵɵdefineInjectable({ token: CeUtilsService, factory: CeUtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CeUtilsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBK0I1QixNQUFNLGNBQWMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRXZELE1BQU0sVUFBVSxTQUFTO0lBQ3ZCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUNyRSxDQUFDO0FBR0QsTUFBTSxPQUFPLGNBQWM7SUFHekI7UUFDRSxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUMvQixDQUFDO0lBRU0sY0FBYyxDQUFDLE9BQVk7UUFDaEMsT0FBTyxPQUFPLFlBQVksV0FBVyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxXQUFXLENBQUMsRUFBTyxFQUFFLEVBQU87UUFDakMsSUFBSSxPQUFPLEVBQUUsS0FBSyxPQUFPLEVBQUUsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxRQUFRLE9BQU8sRUFBRSxFQUFFO2dCQUNqQixLQUFLLFFBQVEsQ0FBQztnQkFDZCxLQUFLLFFBQVEsQ0FBQztnQkFDZCxLQUFLLFFBQVEsQ0FBQztnQkFDZCxLQUFLLFNBQVMsQ0FBQztnQkFDZixLQUFLLFFBQVEsQ0FBQztnQkFDZCxLQUFLLFdBQVcsQ0FBQztnQkFDakIsS0FBSyxVQUFVO29CQUNi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OUIsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3ZFO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDO1lBQzFELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7WUFFNUMsT0FBTztnQkFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFGLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFILEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUYsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxTQUFTLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUMzSCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLDBCQUEwQixDQUFDLEVBQVUsRUFBRSxFQUFVLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxNQUFjO1FBQ3JHLElBQUksY0FBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM5QixRQUFRLE1BQU0sRUFBRTtnQkFDZCxLQUFLLENBQUMsQ0FBQztnQkFDUCxLQUFLLEdBQUc7b0JBQ04sT0FBTzt3QkFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDckMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztnQkFDSixLQUFLLEVBQUU7b0JBQ0wsT0FBTzt3QkFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztnQkFDSixLQUFLLEdBQUc7b0JBQ04sT0FBTzt3QkFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQzt3QkFDckMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztxQkFDdEMsQ0FBQztnQkFDSixLQUFLLEdBQUc7b0JBQ04sT0FBTzt3QkFDTCxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7d0JBQ3JDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztxQkFDdEMsQ0FBQzthQUNMO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksK0NBQStDLENBQUMsUUFBMkI7UUFDaEYsTUFBTSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLFFBQVEsQ0FBQztRQUNwQyxPQUFPO1lBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pILENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2xILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLGNBQWMsQ0FBQyxLQUFhLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxHQUFXLEVBQUUsTUFBTSxHQUFHLENBQUM7UUFDeEYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUN6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RSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUU3RSxNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBRTlFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckQsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXJELE9BQU87WUFDTCxFQUFFO1lBQ0YsRUFBRTtZQUNGLEtBQUs7WUFDTCxNQUFNO1lBQ04sSUFBSSxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQztZQUNwQixHQUFHLEVBQUUsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDO1lBQ3BCLE1BQU0sRUFBRSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUM7WUFDdEIsS0FBSyxFQUFFLEVBQUUsR0FBRyxNQUFNLEdBQUcsQ0FBQztTQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSw2QkFBNkIsQ0FBQyxLQUFlLEVBQUUsSUFBdUI7UUFDM0UsT0FBTztZQUNMLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDdEYsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN0RixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3RGLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDdkYsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSSxTQUFTLENBQUMsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVO1FBQ3JGLE1BQU0sTUFBTSxHQUNWLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDUixDQUFDLFNBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBSSxDQUFDLENBQUEsR0FBRyxTQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFJLENBQUMsQ0FBQSxHQUFHLFNBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsQ0FBQyxTQUFBLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFJLENBQUMsQ0FBQSxHQUFHLFNBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUksQ0FBQyxDQUFBLENBQUMsQ0FBQztZQUNyRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQUEsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUksQ0FBQyxDQUFBLEdBQUcsU0FBQSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBSSxDQUFDLENBQUEsQ0FBQyxHQUFHLElBQUksQ0FB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QUUsS0FBSyxDQUFDLENBQUM7WUFDbEUsSUFBSSxNQUFNLEtBQUssS0FBSyxFQUFFO2dCQUNwQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDakUsSUFBSSxHQUFHLElBQUksQ0FBQyxrREFBa0QsQ0FDNUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFDakQsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUNiLENBQUM7Z0JBQ0YsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsV0FBQyxPQUFBLEdBQUcsR0FBRyxPQUFDLENBQUMsQ0FBQyxNQUFNLG1DQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQ0QsdUNBQVksSUFBSSxLQUFFLE1BQU0sSUFBRztJQUM3QixDQUFDOzs0RUExZlUsY0FBYztzREFBZCxjQUFjLFdBQWQsY0FBYyxtQkFERCxNQUFNO2tEQUNuQixjQUFjO2NBRDFCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgSU5vZGUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmV4cG9ydCB0eXBlIElQb3NpdGlvbiA9IFtudW1iZXIsIG51bWJlcl07XG5leHBvcnQgaW50ZXJmYWNlIElBYnNvbHV0ZVBvc2l0aW9uIHtcbiAgdGw6IElQb3NpdGlvbjtcbiAgdHI6IElQb3NpdGlvbjtcbiAgYmw6IElQb3NpdGlvbjtcbiAgYnI6IElQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVmVydGljYWxBbmRIb3Jpem9udGFsUG9zaXRpb24ge1xuICB0OiBJUG9zaXRpb247XG4gIHI6IElQb3NpdGlvbjtcbiAgYjogSVBvc2l0aW9uO1xuICBsOiBJUG9zaXRpb247XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURPTVJlY3Qge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgY3g/OiBudW1iZXI7XG4gIGN5PzogbnVtYmVyO1xuICBib3R0b20/OiBudW1iZXI7XG4gIHJpZ2h0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBJUmVjdERpcmVjdGlvbiA9ICd0bCcgfCAndCcgfCAndHInIHwgJ3InIHwgJ2JyJyB8ICdiJyB8ICdibCcgfCAnbCc7XG5cbmNvbnN0IFNQRUNJQUxfUk9UQVRFID0gbmV3IFNldChbMCwgOTAsIDE4MCwgMjcwLCAzNjBdKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbk5vZGVJZCgpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7RGF0ZS5ub3coKX0ke01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwMDAwMDApfWA7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ2VVdGlsc1NlcnZpY2Uge1xuICBwdWJsaWMgc3RhdGljIHNoYXJlZDogQ2VVdGlsc1NlcnZpY2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgQ2VVdGlsc1NlcnZpY2Uuc2hhcmVkID0gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBpc1RlbXBsYXRlVHlwZShjb250ZW50OiBhbnkpIHtcbiAgICByZXR1cm4gY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xuICB9XG5cbiAgcHVibGljIGlzRGVlcEVxdWFsKHYxOiBhbnksIHYyOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIHYxICE9PSB0eXBlb2YgdjIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoICh0eXBlb2YgdjEpIHtcbiAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgY2FzZSAnYmlnaW50JzpcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIGNhc2UgJ3N5bWJvbCc6XG4gICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICByZXR1cm4gdjEgPT09IHYyO1xuICAgICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICAgIGlmICh2MSA9PT0gbnVsbCB8fCB2MiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHYxID09PSB2MjtcbiAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodjEpKSB7XG4gICAgICAgICAgICBpZiAodjEubGVuZ3RoICE9PSB2Mi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgdjEuZm9yRWFjaCgodiwgaSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgIGZsYWcgPSB0aGlzLmlzRGVlcEVxdWFsKHYsIHYyW2ldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmxhZztcbiAgICAgICAgICB9IGVsc2UgaWYgKHYxIGluc3RhbmNlb2YgU2V0ICYmIHYyIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0RlZXBFcXVhbChbLi4udjFdLCBbLi4udjJdKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModjEpLmZvckVhY2goKHYxaykgPT4ge1xuICAgICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgIGlmICh2Mi5oYXNPd25Qcm9wZXJ0eSh2MWspKSB7XG4gICAgICAgICAgICAgICAgICBmbGFnID0gdGhpcy5pc0RlZXBFcXVhbCh2MVt2MWtdLCB2Mlt2MWtdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmxhZztcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAmui/h+iKgueCuUlE5Zyo5qCR5Lit5p+l5om+6IqC54K5XG4gICAqIEBwYXJhbSBpZCDoioLngrlJRFxuICAgKiBAcGFyYW0gbm9kZXMg6IqC54K55qCRXG4gICAqL1xuICBwdWJsaWMgZ2V0Tm9kZUJ5SWQ8VCA9IGFueT4oaWQ6IHN0cmluZywgbm9kZXM6IElOb2RlPFQ+W10pOiBJTm9kZTxUPiB7XG4gICAgbGV0IGZsYWcgPSBmYWxzZTtcbiAgICBsZXQgbm9kZTogSU5vZGU8VD47XG4gICAgY29uc3Qgc3RhY2sgPSBbLi4ubm9kZXNdO1xuICAgIHdoaWxlICghZmxhZyAmJiBzdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBzdGFjay5wb3AoKTtcbiAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgbm9kZSA9IGl0ZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbiAmJiBpdGVtLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHN0YWNrLnB1c2goLi4uaXRlbS5jaGlsZHJlbi5tYXAoKGkpID0+ICh7IC4uLmksIHBhcmVudE5vZGU6IGl0ZW0gfSkpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJrov4foioLngrlJROafpeaJvuiKgueCueWPiuiKgueCueaJgOacieeItue6p1xuICAgKiBAcGFyYW0gaWQg6IqC54K5SURcbiAgICogQHBhcmFtIG5vZGVzIOiKgueCueagkVxuICAgKi9cbiAgcHVibGljIGdldE5vZGVBbmRQYXJlbnRMaXN0QnlJZDxUID0gYW55PihpZDogc3RyaW5nIHwgdW5kZWZpbmVkLCBub2RlczogSU5vZGU8VD5bXSk6IElOb2RlW10ge1xuICAgIGlmICghaWQpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgY29uc3Qgcm9vdElkU2V0ID0gbmV3IFNldChub2Rlcy5tYXAoKG5vZGUpID0+IG5vZGUuaWQpKTtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuICAgIGxldCBwYXRoOiBJTm9kZVtdID0gW107XG4gICAgY29uc3Qgc3RhY2sgPSBbLi4ubm9kZXNdO1xuICAgIHdoaWxlICghZmxhZyAmJiBzdGFjay5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBzdGFjay5zaGlmdCgpO1xuICAgICAgaWYgKHJvb3RJZFNldC5oYXMobm9kZS5pZCkpIHtcbiAgICAgICAgcGF0aCA9IFtdO1xuICAgICAgfVxuICAgICAgaWYgKG5vZGUuaWQgPT09IGlkKSB7XG4gICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICBwYXRoLnVuc2hpZnQobm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBub2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgIHBhdGgudW5zaGlmdChub2RlKTtcbiAgICAgICAgICBzdGFjay51bnNoaWZ0KC4uLm5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIOmAmui/h+WtkOiKgueCuWlk6ZuG5ZCI5ZKM6IqC54K55qCR77yM6I635Y+W5a2Q6IqC54K555qE54i26IqC54K577yM6Iul5a2Q6IqC54K55LiN5Zyo5ZCM5LiA57qn5YiZ6L+U5ZuedW5kZWZpbmVkXG4gICAqIEBwYXJhbSBjaGlsZHJlbklkcyDlrZDoioLngrlJROWIl+ihqFxuICAgKiBAcGFyYW0gbm9kZXMg6IqC54K56ZuG5ZCIXG4gICAqL1xuICBwdWJsaWMgZ2V0U2FtZUxheWVyUGFyZW50QnlDaGlsZHJlbihjaGlsZHJlbklkczogc3RyaW5nW10sIG5vZGVzOiBJTm9kZVtdKTogSU5vZGUgfCBmYWxzZSB7XG4gICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgIGNvbnN0IHBhcmVudHMgPSBjaGlsZHJlbklkcy5tYXAoKGlkKSA9PiB0aGlzLmdldE5vZGVBbmRQYXJlbnRMaXN0QnlJZChpZCwgbm9kZXMpWzFdKTtcbiAgICBsZXQgcHJldlBhcmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgd2hpbGUgKGZsYWcgJiYgcGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHMucG9wKCk7XG4gICAgICBpZiAocHJldlBhcmVudD8uaWQgPT09IHBhcmVudD8uaWQpIHtcbiAgICAgICAgcHJldlBhcmVudCA9IHBhcmVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZsYWcgJiYgcHJldlBhcmVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiDpgJrov4fnm7Tnur/nmoTkuKTngrnmlrnnqIvojrflj5bnm7Tnur/kuIrkurrkuIDngrnngrnnmoTlnZDmoIdcbiAgICogeSA9ICh4LXgxKSooeTIteTEpLyh4Mi14MSkreTFcbiAgICogeCA9ICh5LXkxKSooeDIteDEpLyh5Mi15MSkreDFcbiAgICogQHBhcmFtIGRpcmVjdGlvbiDopoHojrflj5bngrnnmoTlnZDmoIfovbRcbiAgICogQHBhcmFtIG4g6KaB6I635Y+W54K555qE5bey55+l6L2055qE5Z2Q5qCHXG4gICAqIEBwYXJhbSBsaW5lIOehruWumuS4gOadoeebtOe6v+eahOS4pOeCueeahOWdkOagh1xuICAgKi9cbiAgcHVibGljIGdldFBvaW50SW5MaW5lKGRpcmVjdGlvbjogJ3gnIHwgJ3knLCBuOiBudW1iZXIsIGxpbmU6IFtbbnVtYmVyLCBudW1iZXJdLCBbbnVtYmVyLCBudW1iZXJdXSk6IG51bWJlciB7XG4gICAgY29uc3QgW1t4MSwgeTFdLCBbeDIsIHkyXV0gPSBsaW5lO1xuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuICgobiAtIHkxKSAqICh4MiAtIHgxKSkgLyAoeTIgLSB5MSkgKyB4MTtcbiAgICAgIGNhc2UgJ3knOlxuICAgICAgICByZXR1cm4gKChuIC0geDEpICogKHkyIC0geTEpKSAvICh4MiAtIHgxKSArIHkxO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgJrov4flhYPntKDlnKjmiYDlnKjlnZDmoIfns7vnmoTkuK3lv4PngrnjgIHlrr3jgIHpq5jku6Xlj4rml4vovazop5Lluqbojrflj5blhYPntKDlnKjmiYDlnKjlnZDmoIfns7vnmoTlm5vkuKrpobbngrnnmoTlnZDmoIdcbiAgICogQHBhcmFtIGN4IOS4reW/g+eCuXjovbTlnZDmoIdcbiAgICogQHBhcmFtIGN5IOS4reW/g+eCuXnovbTlnZDmoIdcbiAgICogQHBhcmFtIHdpZHRoIOWuvVxuICAgKiBAcGFyYW0gaGVpZ2h0IOmrmFxuICAgKiBAcGFyYW0gcm90YXRlIOaXi+i9rOinkuW6plxuICAgKi9cbiAgcHVibGljIGdldEFic29sdXRlUG9zaXRpb24oY3g6IG51bWJlciwgY3k6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHJvdGF0ZSA9IDApOiBJQWJzb2x1dGVQb3NpdGlvbiB7XG4gICAgaWYgKFNQRUNJQUxfUk9UQVRFLmhhcyhyb3RhdGUpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBYnNvbHV0ZVBvc2l0aW9uU3BlY2lhbChjeCwgY3ksIHdpZHRoLCBoZWlnaHQsIHJvdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHIgPSBNYXRoLnNxcnQoKHdpZHRoIC8gMikgKiogMiArIChoZWlnaHQgLyAyKSAqKiAyKTtcbiAgICAgIGNvbnN0IHBhdGNoUmFkMSA9IE1hdGguYXRhbihoZWlnaHQgLyAyIC8gKHdpZHRoIC8gMikpO1xuICAgICAgY29uc3QgcGF0Y2hSYWQyID0gTWF0aC5hdGFuKHdpZHRoIC8gMiAvIChoZWlnaHQgLyAyKSk7XG4gICAgICBjb25zdCBjdXJyZW50UmFkID0gKHJvdGF0ZSAqIE1hdGguUEkpIC8gMTgwO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB0bDogW2N4IC0gTWF0aC5jb3MoY3VycmVudFJhZCArIHBhdGNoUmFkMSkgKiByLCBjeSAtIE1hdGguc2luKGN1cnJlbnRSYWQgKyBwYXRjaFJhZDEpICogcl0sXG4gICAgICAgIHRyOiBbY3ggLSBNYXRoLmNvcyhjdXJyZW50UmFkICsgcGF0Y2hSYWQxICsgcGF0Y2hSYWQyICogMikgKiByLCBjeSAtIE1hdGguc2luKGN1cnJlbnRSYWQgKyBwYXRjaFJhZDEgKyBwYXRjaFJhZDIgKiAyKSAqIHJdLFxuICAgICAgICBibDogW2N4IC0gTWF0aC5jb3MoY3VycmVudFJhZCAtIHBhdGNoUmFkMSkgKiByLCBjeSAtIE1hdGguc2luKGN1cnJlbnRSYWQgLSBwYXRjaFJhZDEpICogcl0sXG4gICAgICAgIGJyOiBbY3ggLSBNYXRoLmNvcyhjdXJyZW50UmFkIC0gcGF0Y2hSYWQxIC0gcGF0Y2hSYWQyICogMikgKiByLCBjeSAtIE1hdGguc2luKGN1cnJlbnRSYWQgLSBwYXRjaFJhZDEgLSBwYXRjaFJhZDIgKiAyKSAqIHJdLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W54m55q6K5peL6L2s6KeS5bqm5LiL5YWD57Sg55qE5Zub5Liq6aG254K55Zyo5omA5Zyo5Z2Q5qCH57O755qE5Z2Q5qCHXG4gICAqIEBwYXJhbSBjeCDlhYPntKDnmoTkuK3lv4Pngrl46L205Z2Q5qCHXG4gICAqIEBwYXJhbSBjeSDlhYPntKDnmoTkuK3lv4Pngrl56L205Z2Q5qCHXG4gICAqIEBwYXJhbSB3aWR0aCDlrr1cbiAgICogQHBhcmFtIGhlaWdodCDpq5hcbiAgICogQHBhcmFtIHJvdGF0ZSDml4vovazop5LluqZcbiAgICovXG4gIHB1YmxpYyBnZXRBYnNvbHV0ZVBvc2l0aW9uU3BlY2lhbChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcm90YXRlOiBudW1iZXIpOiBJQWJzb2x1dGVQb3NpdGlvbiB8IHVuZGVmaW5lZCB7XG4gICAgaWYgKFNQRUNJQUxfUk9UQVRFLmhhcyhyb3RhdGUpKSB7XG4gICAgICBzd2l0Y2ggKHJvdGF0ZSkge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgIGNhc2UgMzYwOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0bDogW2N4IC0gd2lkdGggLyAyLCBjeSAtIGhlaWdodCAvIDJdLFxuICAgICAgICAgICAgdHI6IFtjeCArIHdpZHRoIC8gMiwgY3kgLSBoZWlnaHQgLyAyXSxcbiAgICAgICAgICAgIGJsOiBbY3ggLSB3aWR0aCAvIDIsIGN5ICsgaGVpZ2h0IC8gMl0sXG4gICAgICAgICAgICBicjogW2N4ICsgd2lkdGggLyAyLCBjeSArIGhlaWdodCAvIDJdLFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgOTA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRsOiBbY3ggKyBoZWlnaHQgLyAyLCBjeSAtIHdpZHRoIC8gMl0sXG4gICAgICAgICAgICB0cjogW2N4ICsgaGVpZ2h0IC8gMiwgY3kgKyB3aWR0aCAvIDJdLFxuICAgICAgICAgICAgYmw6IFtjeCAtIGhlaWdodCAvIDIsIGN5IC0gd2lkdGggLyAyXSxcbiAgICAgICAgICAgIGJyOiBbY3ggLSBoZWlnaHQgLyAyLCBjeSArIHdpZHRoIC8gMl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAxODA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRsOiBbY3ggKyB3aWR0aCAvIDIsIGN5ICsgaGVpZ2h0IC8gMl0sXG4gICAgICAgICAgICB0cjogW2N4IC0gd2lkdGggLyAyLCBjeSArIGhlaWdodCAvIDJdLFxuICAgICAgICAgICAgYmw6IFtjeCArIHdpZHRoIC8gMiwgY3kgLSBoZWlnaHQgLyAyXSxcbiAgICAgICAgICAgIGJyOiBbY3ggLSB3aWR0aCAvIDIsIGN5IC0gaGVpZ2h0IC8gMl0sXG4gICAgICAgICAgfTtcbiAgICAgICAgY2FzZSAyNzA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRsOiBbY3ggLSBoZWlnaHQgLyAyLCBjeSArIHdpZHRoIC8gMl0sXG4gICAgICAgICAgICB0cjogW2N4IC0gaGVpZ2h0IC8gMiwgY3kgLSB3aWR0aCAvIDJdLFxuICAgICAgICAgICAgYmw6IFtjeCArIGhlaWdodCAvIDIsIGN5ICsgd2lkdGggLyAyXSxcbiAgICAgICAgICAgIGJyOiBbY3ggKyBoZWlnaHQgLyAyLCBjeSAtIHdpZHRoIC8gMl0sXG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+H5YWD57Sg6aG254K55Z2Q5qCH6I635Y+W5LiK44CB5Y+z44CB5LiL5ZKM5bem5pa55ZCR55qE5Z2Q5qCHXG4gICAqIEBwYXJhbSBwb3NpdGlvblxuICAgKi9cbiAgcHVibGljIGdldFZlcnRpY2FsQW5kSG9yaXpvbnRhbFBvaW50QnlBYnNvbHV0ZVBvc2l0aW9uKHBvc2l0aW9uOiBJQWJzb2x1dGVQb3NpdGlvbik6IElWZXJ0aWNhbEFuZEhvcml6b250YWxQb3NpdGlvbiB7XG4gICAgY29uc3QgeyB0bCwgYmwsIGJyLCB0ciB9ID0gcG9zaXRpb247XG4gICAgcmV0dXJuIHtcbiAgICAgIHQ6IFsoTWF0aC5tYXgodGxbMF0sIHRyWzBdKSAtIE1hdGgubWluKHRsWzBdLCB0clswXSkpIC8gMiwgKE1hdGgubWF4KHRsWzFdLCB0clsxXSkgLSBNYXRoLm1pbih0bFsxXSwgdHJbMV0pKSAvIDJdLFxuICAgICAgcjogWyhNYXRoLm1heChiclswXSwgdHJbMF0pIC0gTWF0aC5taW4oYnJbMF0sIHRyWzBdKSkgLyAyLCAoTWF0aC5tYXgoYnJbMV0sIHRyWzFdKSAtIE1hdGgubWluKGJyWzFdLCB0clsxXSkpIC8gMl0sXG4gICAgICBiOiBbKE1hdGgubWF4KGJsWzBdLCBiclswXSkgLSBNYXRoLm1pbihibFswXSwgYnJbMF0pKSAvIDIsIChNYXRoLm1heChibFsxXSwgYnJbMV0pIC0gTWF0aC5taW4oYmxbMV0sIGJyWzFdKSkgLyAyXSxcbiAgICAgIGw6IFsoTWF0aC5tYXgodGxbMF0sIGJsWzBdKSAtIE1hdGgubWluKHRsWzBdLCBibFswXSkpIC8gMiwgKE1hdGgubWF4KHRsWzFdLCBibFsxXSkgLSBNYXRoLm1pbih0bFsxXSwgYmxbMV0pKSAvIDJdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+HSFRNTOWFg+e0oOeahOWuveOAgemrmOOAgeaXi+i9rOinkuW6puS7peWPiuaJgOWcqOWdkOagh+ezu+eahHjjgIF554K56I635Y+W5YWD57Sg5Zyo5omA5Zyo5Z2Q5qCH57O755qE5YyF5Zu055uSXG4gICAqIEBwYXJhbSB3aWR0aCDlrr1cbiAgICogQHBhcmFtIGhlaWdodCDpq5hcbiAgICogQHBhcmFtIGxlZnQg5Zyo5omA5Zyo5Z2Q5qCH57O75LiteOi9tOeahOWdkOagh1xuICAgKiBAcGFyYW0gdG9wIOWcqOaJgOWcqOWdkOagh+ezu+S4rXnovbTnmoTlnZDmoIdcbiAgICogQHBhcmFtIHJvdGF0ZSDml4vovazop5LluqZcbiAgICovXG4gIHB1YmxpYyBnZXRCb3VuZGluZ0JveCh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgbGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcm90YXRlID0gMCk6IElET01SZWN0IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuZ2V0QWJzb2x1dGVQb3NpdGlvbihsZWZ0ICsgd2lkdGggLyAyLCB0b3AgKyBoZWlnaHQgLyAyLCB3aWR0aCwgaGVpZ2h0LCByb3RhdGUpO1xuICAgIGNvbnN0IGwgPSBNYXRoLm1pbiguLi50aGlzLmdldEF4aXNMaXN0QnlQb3NpdGlvbigneCcsIFtwb3NpdGlvbl0pKTtcbiAgICBjb25zdCByID0gTWF0aC5tYXgoLi4udGhpcy5nZXRBeGlzTGlzdEJ5UG9zaXRpb24oJ3gnLCBbcG9zaXRpb25dKSk7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKC4uLnRoaXMuZ2V0QXhpc0xpc3RCeVBvc2l0aW9uKCd5JywgW3Bvc2l0aW9uXSkpO1xuICAgIGNvbnN0IGIgPSBNYXRoLm1heCguLi50aGlzLmdldEF4aXNMaXN0QnlQb3NpdGlvbigneScsIFtwb3NpdGlvbl0pKTtcbiAgICByZXR1cm4geyBsZWZ0OiBsLCB0b3A6IHQsIHdpZHRoOiByIC0gbCwgaGVpZ2h0OiBiIC0gdCwgYm90dG9tOiBiLCByaWdodDogciwgY3g6IGwgKyAociAtIGwpIC8gMiwgY3k6IHQgKyAoYiAtIHQpIC8gMiB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOmAmui/h+ebkuWtkOeahOe7neWvueWdkOagh+WIl+ihqOiOt+WPluWvueW6lOWdkOagh+eahOWAvOeahOmbhuWQiFxuICAgKiBAcGFyYW0gYXhpcyDopoHojrflj5bnmoTlnZDmoIfovbRcbiAgICogQHBhcmFtIHBvc2l0aW9ucyDnu53lr7nlnZDmoIfliJfooahcbiAgICovXG4gIHB1YmxpYyBnZXRBeGlzTGlzdEJ5UG9zaXRpb24oYXhpczogJ3gnIHwgJ3knLCBwb3NpdGlvbnM6IElBYnNvbHV0ZVBvc2l0aW9uW10pOiBudW1iZXJbXSB7XG4gICAgc3dpdGNoIChheGlzKSB7XG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5yZWR1Y2UoKGFyciwgcG9zaXRpb24pID0+IFsuLi5hcnIsIHBvc2l0aW9uLmJsWzBdLCBwb3NpdGlvbi5iclswXSwgcG9zaXRpb24udGxbMF0sIHBvc2l0aW9uLnRyWzBdXSwgW10pO1xuICAgICAgY2FzZSAneSc6XG4gICAgICAgIHJldHVybiBwb3NpdGlvbnMucmVkdWNlKChhcnIsIHBvc2l0aW9uKSA9PiBbLi4uYXJyLCBwb3NpdGlvbi5ibFsxXSwgcG9zaXRpb24uYnJbMV0sIHBvc2l0aW9uLnRsWzFdLCBwb3NpdGlvbi50clsxXV0sIFtdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5aSa5Liq55uS5a2Q55qE5pyA5bCP5aSW5YyF5Zu055uS55qE5bC65a+4XG4gICAqIEBwYXJhbSBwb3NpdGlvbnMg55uS5a2Q57ud5a+55Z2Q5qCH5YiX6KGoXG4gICAqL1xuICBwdWJsaWMgZ2V0T3V0ZXJCb3VuZGluZ0JveChwb3NpdGlvbnM6IElBYnNvbHV0ZVBvc2l0aW9uW10pOiBJRE9NUmVjdCB7XG4gICAgY29uc3QgbCA9IE1hdGgubWluKC4uLnRoaXMuZ2V0QXhpc0xpc3RCeVBvc2l0aW9uKCd4JywgcG9zaXRpb25zKSk7XG4gICAgY29uc3QgciA9IE1hdGgubWF4KC4uLnRoaXMuZ2V0QXhpc0xpc3RCeVBvc2l0aW9uKCd4JywgcG9zaXRpb25zKSk7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKC4uLnRoaXMuZ2V0QXhpc0xpc3RCeVBvc2l0aW9uKCd5JywgcG9zaXRpb25zKSk7XG4gICAgY29uc3QgYiA9IE1hdGgubWF4KC4uLnRoaXMuZ2V0QXhpc0xpc3RCeVBvc2l0aW9uKCd5JywgcG9zaXRpb25zKSk7XG4gICAgcmV0dXJuIHsgbGVmdDogbCwgdG9wOiB0LCB3aWR0aDogciAtIGwsIGhlaWdodDogYiAtIHQsIGJvdHRvbTogYiwgcmlnaHQ6IHIsIGN4OiBsICsgKHIgLSBsKSAvIDIsIGN5OiB0ICsgKGIgLSB0KSAvIDIgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDkvp3mja56SW5kZXjlr7noioLngrnpgJLlvZLmjpLluo9cbiAgICogQHBhcmFtIGxpc3Qg6IqC54K55YiX6KGoXG4gICAqL1xuICBwdWJsaWMgc29ydE5vZGVMaXN0QnlJbmRleChsaXN0PzogSU5vZGVbXSk6IElOb2RlW10ge1xuICAgIHJldHVybiAoXG4gICAgICBsaXN0ICYmXG4gICAgICBfLmNoYWluKGxpc3QpXG4gICAgICAgIC5zb3J0QnkoKGl0ZW0pID0+IGl0ZW0uekluZGV4KVxuICAgICAgICAubWFwKChpdGVtKSA9PiAoeyAuLi5pdGVtLCBjaGlsZHJlbjogdGhpcy5zb3J0Tm9kZUxpc3RCeUluZGV4KGl0ZW0uY2hpbGRyZW4pIH0pKVxuICAgICAgICAudmFsdWUoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+H55u057q/55qE5pac546H5pa556iL5ZKM55u057q/5LiK5Lik54K5Qe+8jELku6Xlj4rnm7Tnur/lpJbkuIDngrlE77yM5rGC5Ye6ROeCueS4iuebtOe6v0FC55qE5Z6C57q/REPlkoznm7Tnur9BQueahOS6pOeCuUPnmoTlnZDmoIdcbiAgICogQHBhcmFtIFBBIOeCuUFcbiAgICogQHBhcmFtIFBCIOeCuUJcbiAgICogQHBhcmFtIFBEIOeCuURcbiAgICovXG4gIHB1YmxpYyBnZXRWZXJ0aWNhbExpbmVDcm9zc1BvaW50KFBBOiBbbnVtYmVyLCBudW1iZXJdLCBQQjogW251bWJlciwgbnVtYmVyXSwgUEQ6IFtudW1iZXIsIG51bWJlcl0pOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgICBjb25zdCBbUEF4LCBQQXldID0gUEE7XG4gICAgY29uc3QgW1BCeCwgUEJ5XSA9IFBCO1xuICAgIGNvbnN0IFtQRHgsIFBEeV0gPSBQRDtcbiAgICBpZiAoUEF4ID09PSBQQngpIHtcbiAgICAgIHJldHVybiBbUEF4LCBQRHldO1xuICAgIH0gZWxzZSBpZiAoUEF5ID09PSBQQnkpIHtcbiAgICAgIHJldHVybiBbUER4LCBQQXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBMMWsgPSAoUEF5IC0gUEJ5KSAvIChQQXggLSBQQngpO1xuICAgICAgY29uc3QgTDJrID0gLTEgLyBMMWs7XG4gICAgICBjb25zdCBhID0gUEF5IC0gTDFrICogUEF4O1xuICAgICAgY29uc3QgYiA9IFBEeSAtIEwyayAqIFBEeDtcbiAgICAgIGNvbnN0IHggPSAoYiAtIGEpIC8gKEwxayAtIEwyayk7XG4gICAgICBjb25zdCB5ID0gTDFrICogeCArIGE7XG4gICAgICByZXR1cm4gW3gsIHldO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDpgJrov4flhYPntKDlnKjmiYDlnKjlnZDmoIfns7vlhoXlm5vkuKrpobbngrnnmoTlnZDmoIfvvIzkvb/nlKjnm7Tnur/nmoTkuKTngrnmlrnnqIvmsYLlh7rkuKTkuKTlr7nngrnmiYDlnKjnm7Tnur/nmoTkuqTngrnvvIjnn6nlvaLnmoTkuK3lv4PngrnvvInvvIxcbiAgICog5L2/55So5Yu+6IKh5a6a55CG5rGC5Ye65YWD57Sg5a696auY77yM6L2s5o2i5ZCO5b6X5Yiw5YWD57Sg5Zyo5omA5Zyo5Z2Q5qCH57O755qE5a6944CB6auY44CBeOi9tOWdkOagh+WSjHnovbTlnZDmoIdcbiAgICogd2lkdGggPSBzcXJ0KCh0cnggLSB0bHgpXjIgKyAodHJ5IC0gdGx5KV4yKVxuICAgKiBoZWlnaHQgPSBzcXJ0KChibHggLSB0bHgpXjIgKyAoYmx5IC0gdGx5KV4yKVxuICAgKiBhMSp4ICsgYjEqeSArIGMxID0gMFxuICAgKiBhMip4ICsgYjIqeSArIGMyID0gMFxuICAgKiBhMSp4ICsgYjEqeSArIGMxID0gYTIqeCArIGIyKnkgKyBjMlxuICAgKiDnlLHnm7Tnur/nmoTkuKTngrnlvI/mlrnnqIvlj6/lvpdhPXkwLXkxLCBiPXgxLXgwLCBjPXgwKnkxIC0geDEqeTBcbiAgICog6Kej5pa556iL57uE5Y+v5b6X5Lik5p2h55u057q/55qE5Lqk54K5eCx5XG4gICAqIEBwYXJhbSBwb3NpdGlvbiDlhYPntKDlnKjmiYDlnKjlnZDmoIfns7vlhoXlm5vkuKrpobbngrnnmoTlnZDmoIdcbiAgICovXG4gIHB1YmxpYyBnZXRSZWxhdGl2ZVBvc2l0aW9uKHBvc2l0aW9uOiBJQWJzb2x1dGVQb3NpdGlvbik6IElET01SZWN0IHtcbiAgICBjb25zdCB7IHRsLCBibCwgYnIsIHRyIH0gPSBwb3NpdGlvbjtcbiAgICBjb25zdCB3aWR0aDogbnVtYmVyID0gTWF0aC5zcXJ0KCh0clswXSAtIHRsWzBdKSAqKiAyICsgKHRyWzFdIC0gdGxbMV0pICoqIDIpO1xuXG4gICAgY29uc3QgaGVpZ2h0OiBudW1iZXIgPSBNYXRoLnNxcnQoKGJsWzBdIC0gdGxbMF0pICoqIDIgKyAoYmxbMV0gLSB0bFsxXSkgKiogMik7XG5cbiAgICBjb25zdCBhMSA9IGJyWzFdIC0gdGxbMV07XG4gICAgY29uc3QgYjEgPSB0bFswXSAtIGJyWzBdO1xuICAgIGNvbnN0IGMxID0gYnJbMF0gKiB0bFsxXSAtIHRsWzBdICogYnJbMV07XG4gICAgY29uc3QgYTIgPSBibFsxXSAtIHRyWzFdO1xuICAgIGNvbnN0IGIyID0gdHJbMF0gLSBibFswXTtcbiAgICBjb25zdCBjMiA9IGJsWzBdICogdHJbMV0gLSB0clswXSAqIGJsWzFdO1xuICAgIGNvbnN0IGN4ID0gKGIxICogYzIgLSBiMiAqIGMxKSAvIChhMSAqIGIyIC0gYTIgKiBiMSk7XG4gICAgY29uc3QgY3kgPSAoYTIgKiBjMSAtIGExICogYzIpIC8gKGExICogYjIgLSBhMiAqIGIxKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjeCxcbiAgICAgIGN5LFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBsZWZ0OiBjeCAtIHdpZHRoIC8gMixcbiAgICAgIHRvcDogY3kgLSBoZWlnaHQgLyAyLFxuICAgICAgYm90dG9tOiBjeCArIHdpZHRoIC8gMixcbiAgICAgIHJpZ2h0OiBjeSArIGhlaWdodCAvIDIsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5blhYPntKDnmoTlm5vkuKrpobbngrnlnKjlpJbljIXlm7Tnm5LnmoTnn6nlvaLlhoXnmoTlnZDmoIfnmoTnmb7liIbmr5RcbiAgICogQHBhcmFtIGdyb3VwIOWFg+e0oOWkluWMheWbtOebklxuICAgKiBAcGFyYW0gaXRlbSDlhYPntKDnmoTlm5vkuKrpobbngrnlnZDmoIdcbiAgICovXG4gIHB1YmxpYyBnZXRJdGVtUGVyY2VudFBvc2l0aW9uSW5Hcm91cChncm91cDogSURPTVJlY3QsIGl0ZW06IElBYnNvbHV0ZVBvc2l0aW9uKTogSUFic29sdXRlUG9zaXRpb24ge1xuICAgIHJldHVybiB7XG4gICAgICB0bDogWyhpdGVtLnRsWzBdIC0gZ3JvdXAubGVmdCkgLyBncm91cC53aWR0aCwgKGl0ZW0udGxbMV0gLSBncm91cC50b3ApIC8gZ3JvdXAuaGVpZ2h0XSxcbiAgICAgIHRyOiBbKGl0ZW0udHJbMF0gLSBncm91cC5sZWZ0KSAvIGdyb3VwLndpZHRoLCAoaXRlbS50clsxXSAtIGdyb3VwLnRvcCkgLyBncm91cC5oZWlnaHRdLFxuICAgICAgYmw6IFsoaXRlbS5ibFswXSAtIGdyb3VwLmxlZnQpIC8gZ3JvdXAud2lkdGgsIChpdGVtLmJsWzFdIC0gZ3JvdXAudG9wKSAvIGdyb3VwLmhlaWdodF0sXG4gICAgICBicjogWyhpdGVtLmJyWzBdIC0gZ3JvdXAubGVmdCkgLyBncm91cC53aWR0aCwgKGl0ZW0uYnJbMV0gLSBncm91cC50b3ApIC8gZ3JvdXAuaGVpZ2h0XSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIOmAmui/h+efqeW9ouS4reW/g+eCueWdkOagh0MoY3gsY3kp5Lit5b+D54K55ZKMWei9tOW5s+ihjOe6v+WcqOS4reW/g+eCueS4iuaWueeahOS4gOeCuVMoc3gsc3kpLOaXi+i9rOiQveeCuUUoZXgsZXkpLOWIqeeUqOS4ieinkuW9ouS9meW8puWumueQhu+8jFxuICAgKiDmsYLlh7riiKBTQ0XnmoTop5LluqbvvIzlho3pgJrov4dleOWSjHN455qE5aSn5bCP5Yik5pat5peL6L2s55qE6KeS5bqm5Li65YaF6KeS6L+Y5piv5aSW6KeSXG4gICAqIEBwYXJhbSBjeCDkuK3lv4Pngrl45Z2Q5qCHXG4gICAqIEBwYXJhbSBjeSDkuK3lv4Pngrl55Z2Q5qCHXG4gICAqIEBwYXJhbSBzeCDkuI7kuK3lv4Pngrnnm7jlkIznmoR45Z2Q5qCHXG4gICAqIEBwYXJhbSBzeSDkuI7kuK3lv4PngrnlkIx45Z2Q5qCH55qE5LiK5pa55LiA54K555qEeeWdkOagh1xuICAgKiBAcGFyYW0gZXgg5peL6L2s57uI54K5eOWdkOagh1xuICAgKiBAcGFyYW0gZXkgeOaXi+i9rOe7iOeCuXnlnZDmoIdcbiAgICovXG4gIHB1YmxpYyBnZXRSb3RhdGUoY3g6IG51bWJlciwgY3k6IG51bWJlciwgc3g6IG51bWJlciwgc3k6IG51bWJlciwgZXg6IG51bWJlciwgZXk6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgcm90YXRlID1cbiAgICAgIChNYXRoLmFjb3MoXG4gICAgICAgICgoY3kgLSBzeSkgKiogMiArIChjeCAtIHN4KSAqKiAyICsgKGN4IC0gZXgpICoqIDIgKyAoY3kgLSBleSkgKiogMiAtICgoZXggLSBzeCkgKiogMiArIChleSAtIHN5KSAqKiAyKSkgL1xuICAgICAgICAgICgyICogTWF0aC5zcXJ0KChjeSAtIHN5KSAqKiAyICsgKGN4IC0gc3gpICoqIDIpICogTWF0aC5zcXJ0KChjeCAtIGV4KSAqKiAyICsgKGN5IC0gZXkpICoqIDIpKVxuICAgICAgKSAqXG4gICAgICAgIDE4MCkgL1xuICAgICAgTWF0aC5QSTtcbiAgICBpZiAoZXggPT09IHN4KSB7XG4gICAgICByZXR1cm4gMTgwO1xuICAgIH1cbiAgICBpZiAoZXggPiBzeCkge1xuICAgICAgcmV0dXJuIHJvdGF0ZTtcbiAgICB9XG4gICAgaWYgKGV4IDwgc3gpIHtcbiAgICAgIHJldHVybiAzNjAgLSByb3RhdGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOmAmui/h+WQkemHj+Wbm+i+ueW9ouazleWImeaxguWHuuWQkemHj2Fi44CB5ZCR6YePYWPnmoTlr7nop5Lnur9hZOeahGTngrnlnZDmoIcsIGFiICsgYWMgPSBhZFxuICAgKiBAcGFyYW0gYWIg5ZCR6YePYWJcbiAgICogQHBhcmFtIGFjIOWQkemHj2FjXG4gICAqIEBwYXJhbSBhIGHngrnlnZDmoIdcbiAgICovXG4gIHB1YmxpYyBnZXRQb2ludEJ5VmVjdG9yU3VtKGFiOiBbbnVtYmVyLCBudW1iZXJdLCBhYzogW251bWJlciwgbnVtYmVyXSwgYTogW251bWJlciwgbnVtYmVyXSk6IFtudW1iZXIsIG51bWJlcl0ge1xuICAgIHJldHVybiBbYWJbMF0gKyBhY1swXSArIGFbMF0sIGFiWzFdICsgYWNbMV0gKyBhWzFdXTtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5bkuKTngrnkuYvpl7TnmoTnur/mrrXplb/luqZcbiAgICogQHBhcmFtIHBvaW50MSDngrkxXG4gICAqIEBwYXJhbSBwb2ludDIg54K5MlxuICAgKi9cbiAgcHVibGljIGdldERpc3RhbmNlQmVmb3JlVG9Qb2ludChwb2ludDE6IFtudW1iZXIsIG51bWJlcl0sIHBvaW50MjogW251bWJlciwgbnVtYmVyXSk6IG51bWJlciB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgocG9pbnQxWzBdIC0gcG9pbnQyWzBdKSAqKiAyICsgKHBvaW50MVsxXSAtIHBvaW50MlsxXSkgKiogMik7XG4gIH1cblxuICAvKipcbiAgICog6YCa6L+H6I635Y+W54i26IqC54K55Lit5b+D54K55Z2Q5qCH5ZKM5Y6f5aeL5a2Q6IqC54K55Lit5b+D54K55Z2Q5qCH77yM5bCG5ZCR6YeP77yI54i26IqC54K55Lit5b+D54K5LeWtkOiKgueCueWOn+Wni+S4reW/g+eCue+8iVxuICAgKiDml4vovazniLboioLngrnml4vovaznmoTop5LluqYocm90YXRlKeWQjuW+l+WIsOWQkemHj++8iOeItuiKgueCueS4reW/g+eCuS3lrZDoioLngrnkuK3lv4PngrnvvInnhLblkI7liKnnlKjlkJHph4/ml4vovaznmoRcbiAgICog5YWs5byP55u05o6l5rGC5Ye65a2Q6IqC54K55Lit5b+D54K55Z2Q5qCHXG4gICAqIHgxID0geDAqY29zKHJvdGF0ZSkgLSB5MCpzaW4ocm90YXRlKVxuICAgKiB5MSA9IHgwKnNpbihyb3RhdGUpIC0geTAqY29zKHJvdGF0ZSlcbiAgICogQHBhcmFtIHBhcmVudFJlY3Qg54i25YWD57Sg5bC65a+4XG4gICAqIEBwYXJhbSBwYXJlbnRSb3RhdGUg54i25YWD57Sg5peL6L2s6KeS5bqmXG4gICAqIEBwYXJhbSBjaGlsZFJlY3Qg5a2Q5YWD57Sg5bC65a+4XG4gICAqL1xuICBwdWJsaWMgZ2V0Q2hpbGRQb3NpdGlvbkJhc2VPblBhcmVudENvb3JkaW5hdGVTeXN0ZW0ocGFyZW50UmVjdDogSURPTVJlY3QsIHBhcmVudFJvdGF0ZTogbnVtYmVyLCBjaGlsZFJlY3Q6IElET01SZWN0KTogSURPTVJlY3Qge1xuICAgIGNvbnN0IHBhcmVudENlbnRlciA9IFtwYXJlbnRSZWN0LmxlZnQgKyBwYXJlbnRSZWN0LndpZHRoIC8gMiwgcGFyZW50UmVjdC50b3AgKyBwYXJlbnRSZWN0LmhlaWdodCAvIDJdO1xuICAgIGNvbnN0IG9yaWdpbmFsQ2VudGVyID0gW2NoaWxkUmVjdC5sZWZ0ICsgY2hpbGRSZWN0LndpZHRoIC8gMiArIHBhcmVudFJlY3QubGVmdCwgY2hpbGRSZWN0LnRvcCArIGNoaWxkUmVjdC5oZWlnaHQgLyAyICsgcGFyZW50UmVjdC50b3BdO1xuICAgIGNvbnN0IFtuZXdDZW50ZXJYLCBuZXdDZW50ZXJZXSA9IFtcbiAgICAgIChvcmlnaW5hbENlbnRlclswXSAtIHBhcmVudENlbnRlclswXSkgKiBNYXRoLmNvcygocGFyZW50Um90YXRlICogTWF0aC5QSSkgLyAxODApIC1cbiAgICAgICAgKG9yaWdpbmFsQ2VudGVyWzFdIC0gcGFyZW50Q2VudGVyWzFdKSAqIE1hdGguc2luKChwYXJlbnRSb3RhdGUgKiBNYXRoLlBJKSAvIDE4MCkgK1xuICAgICAgICBwYXJlbnRDZW50ZXJbMF0sXG4gICAgICAob3JpZ2luYWxDZW50ZXJbMV0gLSBwYXJlbnRDZW50ZXJbMV0pICogTWF0aC5jb3MoKHBhcmVudFJvdGF0ZSAqIE1hdGguUEkpIC8gMTgwKSArXG4gICAgICAgIChvcmlnaW5hbENlbnRlclswXSAtIHBhcmVudENlbnRlclswXSkgKiBNYXRoLnNpbigocGFyZW50Um90YXRlICogTWF0aC5QSSkgLyAxODApICtcbiAgICAgICAgcGFyZW50Q2VudGVyWzFdLFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZnQ6IG5ld0NlbnRlclggLSBjaGlsZFJlY3Qud2lkdGggLyAyLFxuICAgICAgdG9wOiBuZXdDZW50ZXJZIC0gY2hpbGRSZWN0LmhlaWdodCAvIDIsXG4gICAgICBib3R0b206IG5ld0NlbnRlclggKyBjaGlsZFJlY3Qud2lkdGggLyAyLFxuICAgICAgcmlnaHQ6IG5ld0NlbnRlclkgKyBjaGlsZFJlY3QuaGVpZ2h0IC8gMixcbiAgICAgIHdpZHRoOiBjaGlsZFJlY3Qud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNoaWxkUmVjdC5oZWlnaHQsXG4gICAgICBjeDogbmV3Q2VudGVyWCxcbiAgICAgIGN5OiBuZXdDZW50ZXJZLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICog6I635Y+W5Y2V5Liq5a2Q6IqC54K555u45a+55LqO5aSa5bGC54i26IqC54K555qE5Z2Q5qCHXG4gICAqIEBwYXJhbSBjaGlsZCDlrZDoioLngrlzaXplXG4gICAqIEBwYXJhbSBwYXJlbnRzIOeItuiKgueCuembhuWQiO+8iOaOkuW6j+S4uuS7juW3puW+gOWPs+S+neasoeWkluaJqe+8iVxuICAgKi9cbiAgcHVibGljIGdldENoaWxkUG9zaXRpb25CYXNlT25NdWx0aXBsZVBhcmVudENvb3JkaW5hdGFTeXN0ZW0oY2hpbGQ6IElET01SZWN0LCBwYXJlbnRzOiBJTm9kZVtdKTogSURPTVJlY3Qge1xuICAgIGxldCByZWN0OiBJRE9NUmVjdCA9IHsgLi4uY2hpbGQgfTtcbiAgICB3aGlsZSAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICAgIHJlY3QgPSB0aGlzLmdldENoaWxkUG9zaXRpb25CYXNlT25QYXJlbnRDb29yZGluYXRlU3lzdGVtKHBhcmVudCwgcGFyZW50LnJvdGF0ZSwgY2hpbGQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIC8qKlxuICAgKiDojrflj5blpJrkuKrlrZDoioLngrnnm7jlr7nkuI7lpJrlsYLniLboioLngrnnmoTlnZDmoIdcbiAgICogQHBhcmFtIGNoaWxkcmVuIOWtkOiKgueCueWIl+ihqFxuICAgKiBAcGFyYW0gcGFyZW50cyDniLboioLngrnliJfooahcbiAgICovXG4gIHB1YmxpYyBnZXRDaGlsZHJlbkJvdW5kaW5nQm94QmFzZU9uUGFyZW50Q29vcmRpbmF0ZVN5c3RlbShjaGlsZHJlbjogSU5vZGVbXSwgcGFyZW50czogSU5vZGVbXSk6IElET01SZWN0IHtcbiAgICBjb25zdCBvdXRlckJveCA9IHRoaXMuZ2V0T3V0ZXJCb3VuZGluZ0JveChcbiAgICAgIGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+XG4gICAgICAgIHRoaXMuZ2V0QWJzb2x1dGVQb3NpdGlvbihjaGlsZC5sZWZ0ICsgY2hpbGQud2lkdGggLyAyLCBjaGlsZC50b3AgKyBjaGlsZC5oZWlnaHQgLyAyLCBjaGlsZC53aWR0aCwgY2hpbGQuaGVpZ2h0LCBjaGlsZC5yb3RhdGUpXG4gICAgICApXG4gICAgKTtcbiAgICBsZXQgZG9tUmVjdCA9IHsgLi4ub3V0ZXJCb3ggfTtcbiAgICB3aGlsZSAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICAgIGRvbVJlY3QgPSB0aGlzLmdldENoaWxkUG9zaXRpb25CYXNlT25QYXJlbnRDb29yZGluYXRlU3lzdGVtKHBhcmVudCwgcGFyZW50LnJvdGF0ZSwgZG9tUmVjdCk7XG4gICAgfVxuICAgIHJldHVybiBkb21SZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIOiOt+WPluW3sumAieS4reiKgueCueeahOe8qeaUvuahhueahOWwuuWvuFxuICAgKiBAcGFyYW0gc2VsZWN0ZWQg5bey6YCJ5Lit6IqC54K5XG4gICAqIEBwYXJhbSBub2RlcyDoioLngrnmoJFcbiAgICovXG4gIHB1YmxpYyBnZXRSZXNpemVCb3VuZGluZ0JveChzZWxlY3RlZDogc3RyaW5nW10sIG5vZGVzOiBJTm9kZVtdKTogSURPTVJlY3QgJiB7IHJvdGF0ZTogbnVtYmVyIH0ge1xuICAgIGxldCByZWN0OiBJRE9NUmVjdDtcbiAgICBsZXQgcm90YXRlOiBudW1iZXI7XG4gICAgaWYgKHNlbGVjdGVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgW25vZGUsIC4uLnBhcmVudHNdID0gdGhpcy5nZXROb2RlQW5kUGFyZW50TGlzdEJ5SWQoc2VsZWN0ZWRbMF0sIG5vZGVzKTtcbiAgICAgIHJlY3QgPSB7IC4uLnRoaXMuZ2V0Q2hpbGRQb3NpdGlvbkJhc2VPbk11bHRpcGxlUGFyZW50Q29vcmRpbmF0YVN5c3RlbShub2RlLCBbLi4ucGFyZW50c10pIH07XG4gICAgICByb3RhdGUgPSBwYXJlbnRzLnJlZHVjZSgoc3VtLCBwKSA9PiBzdW0gKyAocC5yb3RhdGUgPz8gMCksIG5vZGUucm90YXRlID8/IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFNhbWVMYXllclBhcmVudEJ5Q2hpbGRyZW4oc2VsZWN0ZWQsIG5vZGVzKTtcbiAgICAgIGlmIChwYXJlbnQgIT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudHMgPSB0aGlzLmdldE5vZGVBbmRQYXJlbnRMaXN0QnlJZChwYXJlbnQ/LmlkLCBub2Rlcyk7XG4gICAgICAgIHJlY3QgPSB0aGlzLmdldENoaWxkcmVuQm91bmRpbmdCb3hCYXNlT25QYXJlbnRDb29yZGluYXRlU3lzdGVtKFxuICAgICAgICAgIHNlbGVjdGVkLm1hcCgoaWQpID0+IHRoaXMuZ2V0Tm9kZUJ5SWQoaWQsIG5vZGVzKSksXG4gICAgICAgICAgWy4uLnBhcmVudHNdXG4gICAgICAgICk7XG4gICAgICAgIHJvdGF0ZSA9IHBhcmVudHMucmVkdWNlKChzdW0sIHApID0+IHN1bSArIChwLnJvdGF0ZSA/PyAwKSwgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IC4uLnJlY3QsIHJvdGF0ZSB9O1xuICB9XG59XG4iXX0=