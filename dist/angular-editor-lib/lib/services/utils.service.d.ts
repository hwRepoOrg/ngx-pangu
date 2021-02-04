import { INode } from '../store';
import * as i0 from "@angular/core";
export declare type IPosition = [number, number];
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
export declare type IRectDirection = 'tl' | 't' | 'tr' | 'r' | 'br' | 'b' | 'bl' | 'l';
export declare function genNodeId(): string;
export declare class CeUtilsService {
    static shared: CeUtilsService;
    constructor();
    isTemplateType(content: any): boolean;
    isDeepEqual(v1: any, v2: any): any;
    /**
     * 通过节点ID在树中查找节点
     * @param id 节点ID
     * @param nodes 节点树
     */
    getNodeById<T = any>(id: string, nodes: INode<T>[]): INode<T>;
    /**
     * 通过节点ID查找节点及节点所有父级
     * @param id 节点ID
     * @param nodes 节点树
     */
    getNodeAndParentListById<T = any>(id: string | undefined, nodes: INode<T>[]): INode[];
    /**
     * 通过子节点id集合和节点树，获取子节点的父节点，若子节点不在同一级则返回undefined
     * @param childrenIds 子节点ID列表
     * @param nodes 节点集合
     */
    getSameLayerParentByChildren(childrenIds: string[], nodes: INode[]): INode | false;
    /**
     * 通过直线的两点方程获取直线上人一点点的坐标
     * y = (x-x1)*(y2-y1)/(x2-x1)+y1
     * x = (y-y1)*(x2-x1)/(y2-y1)+x1
     * @param direction 要获取点的坐标轴
     * @param n 要获取点的已知轴的坐标
     * @param line 确定一条直线的两点的坐标
     */
    getPointInLine(direction: 'x' | 'y', n: number, line: [[number, number], [number, number]]): number;
    /**
     * 通过元素在所在坐标系的中心点、宽、高以及旋转角度获取元素在所在坐标系的四个顶点的坐标
     * @param cx 中心点x轴坐标
     * @param cy 中心点y轴坐标
     * @param width 宽
     * @param height 高
     * @param rotate 旋转角度
     */
    getAbsolutePosition(cx: number, cy: number, width: number, height: number, rotate?: number): IAbsolutePosition;
    /**
     * 获取特殊旋转角度下元素的四个顶点在所在坐标系的坐标
     * @param cx 元素的中心点x轴坐标
     * @param cy 元素的中心点y轴坐标
     * @param width 宽
     * @param height 高
     * @param rotate 旋转角度
     */
    getAbsolutePositionSpecial(cx: number, cy: number, width: number, height: number, rotate: number): IAbsolutePosition | undefined;
    /**
     * 通过元素顶点坐标获取上、右、下和左方向的坐标
     * @param position
     */
    getVerticalAndHorizontalPointByAbsolutePosition(position: IAbsolutePosition): IVerticalAndHorizontalPosition;
    /**
     * 通过HTML元素的宽、高、旋转角度以及所在坐标系的x、y点获取元素在所在坐标系的包围盒
     * @param width 宽
     * @param height 高
     * @param left 在所在坐标系中x轴的坐标
     * @param top 在所在坐标系中y轴的坐标
     * @param rotate 旋转角度
     */
    getBoundingBox(width: number, height: number, left: number, top: number, rotate?: number): IDOMRect;
    /**
     * 通过盒子的绝对坐标列表获取对应坐标的值的集合
     * @param axis 要获取的坐标轴
     * @param positions 绝对坐标列表
     */
    getAxisListByPosition(axis: 'x' | 'y', positions: IAbsolutePosition[]): number[];
    /**
     * 获取多个盒子的最小外包围盒的尺寸
     * @param positions 盒子绝对坐标列表
     */
    getOuterBoundingBox(positions: IAbsolutePosition[]): IDOMRect;
    /**
     * 依据zIndex对节点递归排序
     * @param list 节点列表
     */
    sortNodeListByIndex(list?: INode[]): INode[];
    /**
     * 通过直线的斜率方程和直线上两点A，B以及直线外一点D，求出D点上直线AB的垂线DC和直线AB的交点C的坐标
     * @param PA 点A
     * @param PB 点B
     * @param PD 点D
     */
    getVerticalLineCrossPoint(PA: [number, number], PB: [number, number], PD: [number, number]): [number, number];
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
    getRelativePosition(position: IAbsolutePosition): IDOMRect;
    /**
     * 获取元素的四个顶点在外包围盒的矩形内的坐标的百分比
     * @param group 元素外包围盒
     * @param item 元素的四个顶点坐标
     */
    getItemPercentPositionInGroup(group: IDOMRect, item: IAbsolutePosition): IAbsolutePosition;
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
    getRotate(cx: number, cy: number, sx: number, sy: number, ex: number, ey: number): number;
    /**
     * 通过向量四边形法则求出向量ab、向量ac的对角线ad的d点坐标, ab + ac = ad
     * @param ab 向量ab
     * @param ac 向量ac
     * @param a a点坐标
     */
    getPointByVectorSum(ab: [number, number], ac: [number, number], a: [number, number]): [number, number];
    /**
     * 获取两点之间的线段长度
     * @param point1 点1
     * @param point2 点2
     */
    getDistanceBeforeToPoint(point1: [number, number], point2: [number, number]): number;
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
    getChildPositionBaseOnParentCoordinateSystem(parentRect: IDOMRect, parentRotate: number, childRect: IDOMRect): IDOMRect;
    /**
     * 获取单个子节点相对于多层父节点的坐标
     * @param child 子节点size
     * @param parents 父节点集合（排序为从左往右依次外扩）
     */
    getChildPositionBaseOnMultipleParentCoordinataSystem(child: IDOMRect, parents: INode[]): IDOMRect;
    /**
     * 获取多个子节点相对与多层父节点的坐标
     * @param children 子节点列表
     * @param parents 父节点列表
     */
    getChildrenBoundingBoxBaseOnParentCoordinateSystem(children: INode[], parents: INode[]): IDOMRect;
    /**
     * 获取已选中节点的缩放框的尺寸
     * @param selected 已选中节点
     * @param nodes 节点树
     */
    getResizeBoundingBox(selected: string[], nodes: INode[]): IDOMRect & {
        rotate: number;
    };
    static ɵfac: i0.ɵɵFactoryDef<CeUtilsService, never>;
    static ɵprov: i0.ɵɵInjectableDef<CeUtilsService>;
}
//# sourceMappingURL=utils.service.d.ts.map