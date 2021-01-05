import { Injectable, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import { INode } from '../store';

export type IPosition = [number, number];
export interface IAbsolutePosition {
  tl: IPosition;
  tr: IPosition;
  bl: IPosition;
  br: IPosition;
}

export interface IVerticalAndHorizontalPosition {
  t: IPosition;
  r: IPosition;
  b: IPosition;
  l: IPosition;
}

export interface IDOMRect {
  width: number;
  height: number;
  left: number;
  top: number;
  cx?: number;
  cy?: number;
  bottom?: number;
  right?: number;
}

export type IRectDirection = 'tl' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l';

const SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);

export function genNodeId(): string {
  return `${Date.now()}${Math.round(Math.random() * 1000000000000)}`;
}

@Injectable({ providedIn: 'root' })
export class CeUtilsService {
  public static shared: CeUtilsService;

  constructor() {
    CeUtilsService.shared = this;
  }

  public isTemplateType(content: any) {
    return content instanceof TemplateRef;
  }

  /**
   * 通过节点ID在树中查找节点
   * @param id 节点ID
   * @param nodes 节点树
   */
  public getNodeById<T = any>(id: string, nodes: INode<T>[]): INode<T> {
    let flag = false;
    let node: INode<T>;
    const stack = [...nodes];
    while (!flag && stack.length) {
      const item = stack.pop();
      if (item.id === id) {
        flag = true;
        node = item;
      } else {
        if (item.children && item.children.length) {
          stack.push(...item.children.map((i) => ({ ...i, parentNode: item })));
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
  public getNodeAndParentListById<T = any>(id: string | undefined, nodes: INode<T>[]): INode[] {
    if (!id) {
      return [];
    }
    const rootIdSet = new Set(nodes.map((node) => node.id));
    let flag = false;
    let path: INode[] = [];
    const stack = [...nodes];
    while (!flag && stack.length) {
      const node = stack.shift();
      if (rootIdSet.has(node.id)) {
        path = [];
      }
      if (node.id === id) {
        flag = true;
        path.unshift(node);
      } else {
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
  public getSameLayerParentByChildren(childrenIds: string[], nodes: INode[]): INode | false {
    let flag = true;
    const parents = childrenIds.map((id) => this.getNodeAndParentListById(id, nodes)[1]);
    let prevParent = parents.pop();
    while (flag && parents.length) {
      const parent = parents.pop();
      if (prevParent?.id === parent?.id) {
        prevParent = parent;
      } else {
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
  public getPointInLine(direction: 'x' | 'y', n: number, line: [[number, number], [number, number]]): number {
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
  public getAbsolutePosition(cx: number, cy: number, width: number, height: number, rotate = 0): IAbsolutePosition {
    if (SPECIAL_ROTATE.has(rotate)) {
      return this.getAbsolutePositionSpecial(cx, cy, width, height, rotate);
    } else {
      const r = Math.sqrt((width / 2) ** 2 + (height / 2) ** 2);
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
  public getAbsolutePositionSpecial(cx: number, cy: number, width: number, height: number, rotate: number): IAbsolutePosition | undefined {
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
  public getVerticalAndHorizontalPointByAbsolutePosition(position: IAbsolutePosition): IVerticalAndHorizontalPosition {
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
  public getBoundingBox(width: number, height: number, left: number, top: number, rotate = 0): IDOMRect {
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
  public getAxisListByPosition(axis: 'x' | 'y', positions: IAbsolutePosition[]): number[] {
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
  public getOuterBoundingBox(positions: IAbsolutePosition[]): IDOMRect {
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
  public sortNodeListByIndex(list?: INode[]): INode[] {
    return (
      list &&
      _.chain(list)
        .sortBy((item) => item.zIndex)
        .map((item) => ({ ...item, children: this.sortNodeListByIndex(item.children) }))
        .value()
    );
  }

  /**
   * 通过直线的斜率方程和直线上两点A，B以及直线外一点D，求出D点上直线AB的垂线DC和直线AB的交点C的坐标
   * @param PA 点A
   * @param PB 点B
   * @param PD 点D
   */
  public getVerticalLineCrossPoint(PA: [number, number], PB: [number, number], PD: [number, number]): [number, number] {
    const [PAx, PAy] = PA;
    const [PBx, PBy] = PB;
    const [PDx, PDy] = PD;
    if (PAx === PBx) {
      return [PAx, PDy];
    } else if (PAy === PBy) {
      return [PDx, PAy];
    } else {
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
  public getRelativePosition(position: IAbsolutePosition): IDOMRect {
    const { tl, bl, br, tr } = position;
    const width: number = Math.sqrt((tr[0] - tl[0]) ** 2 + (tr[1] - tl[1]) ** 2);

    const height: number = Math.sqrt((bl[0] - tl[0]) ** 2 + (bl[1] - tl[1]) ** 2);

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
  public getItemPercentPositionInGroup(group: IDOMRect, item: IAbsolutePosition): IAbsolutePosition {
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
  public getRotate(cx: number, cy: number, sx: number, sy: number, ex: number, ey: number): number {
    const rotate =
      (Math.acos(
        ((cy - sy) ** 2 + (cx - sx) ** 2 + (cx - ex) ** 2 + (cy - ey) ** 2 - ((ex - sx) ** 2 + (ey - sy) ** 2)) /
          (2 * Math.sqrt((cy - sy) ** 2 + (cx - sx) ** 2) * Math.sqrt((cx - ex) ** 2 + (cy - ey) ** 2))
      ) *
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
  public getPointByVectorSum(ab: [number, number], ac: [number, number], a: [number, number]): [number, number] {
    return [ab[0] + ac[0] + a[0], ab[1] + ac[1] + a[1]];
  }

  /**
   * 获取两点之间的线段长度
   * @param point1 点1
   * @param point2 点2
   */
  public getDistanceBeforeToPoint(point1: [number, number], point2: [number, number]): number {
    return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
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
  public getChildPositionBaseOnParentCoordinateSystem(parentRect: IDOMRect, parentRotate: number, childRect: IDOMRect): IDOMRect {
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
  public getChildPositionBaseOnMultipleParentCoordinataSystem(child: IDOMRect, parents: INode[]): IDOMRect {
    let rect: IDOMRect = { ...child };
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
  public getChildrenBoundingBoxBaseOnParentCoordinateSystem(children: INode[], parents: INode[]): IDOMRect {
    const outerBox = this.getOuterBoundingBox(
      children.map((child) =>
        this.getAbsolutePosition(child.left + child.width / 2, child.top + child.height / 2, child.width, child.height, child.rotate)
      )
    );
    let domRect = { ...outerBox };
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
  public getResizeBoundingBox(selected: string[], nodes: INode[]): IDOMRect & { rotate: number } {
    let rect: IDOMRect;
    let rotate: number;
    if (selected.length === 1) {
      const [node, ...parents] = this.getNodeAndParentListById(selected[0], nodes);
      rect = { ...this.getChildPositionBaseOnMultipleParentCoordinataSystem(node, [...parents]) };
      rotate = parents.reduce((sum, p) => sum + (p.rotate ?? 0), node.rotate ?? 0);
    } else {
      const parent = this.getSameLayerParentByChildren(selected, nodes);
      if (parent !== false) {
        const parents = this.getNodeAndParentListById(parent?.id, nodes);
        rect = this.getChildrenBoundingBoxBaseOnParentCoordinateSystem(
          selected.map((id) => this.getNodeById(id, nodes)),
          [...parents]
        );
        rotate = parents.reduce((sum, p) => sum + (p.rotate ?? 0), 0);
      }
    }
    return { ...rect, rotate };
  }
}
