import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { evaluate } from 'mathjs';
import * as mathjs from 'mathjs';
import { INode } from '../store/store';

type IPosition = [number, number];
interface IAbsolutePosition {
  tl: IPosition;
  tr: IPosition;
  bl: IPosition;
  br: IPosition;
}

const SPECIAL_ROTATE = new Set([0, 90, 180, 270, 360]);

@Injectable({ providedIn: 'root' })
export class CeUtilsService {
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
          stack.push(...item.children);
        }
      }
    }
    return node;
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
        return ((n - y1) * (x2 - x2)) / (y2 - y1) + x1;
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
      const r = evaluate(`sqrt((${width} / 2) ^ 2 + (${height} / 2) ^ 2)`);
      const patchRad1 = evaluate(`atan((${height}/2) / (${width}/2))`);
      const patchRad2 = evaluate(`atan((${width}/2) / (${height}/2))`);
      const currentRad = evaluate(`${rotate}*PI/180`);
      const scope = { cx, cy, r, patchRad1, patchRad2, currentRad };
      return {
        tl: [evaluate(`cx - cos(currentRad + patchRad1) * r`, scope), evaluate(`cy - sin(currentRad + patchRad1) * r`, scope)],
        tr: [
          evaluate(`cx - cos(currentRad + patchRad1 + patchRad2 * 2) * r`, scope),
          evaluate(`cy - sin(currentRad + patchRad1 + patchRad2 * 2) * r`, scope),
        ],
        bl: [evaluate(`cx - cos(currentRad - patchRad1) * r`, scope), evaluate(`cy - sin(currentRad - patchRad1) * r`, scope)],
        br: [
          evaluate(`cx - cos(currentRad - patchRad1 - patchRad2 * 2) * r`, scope),
          evaluate(`cy - sin(currentRad - patchRad1 - patchRad2 * 2) * r`, scope),
        ],
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
   * 通过HTML元素的宽、高、旋转角度以及所在坐标系的x、y点获取元素在所在坐标系的包围盒
   * @param width 宽
   * @param height 高
   * @param left 在所在坐标系中x轴的坐标
   * @param top 在所在坐标系中y轴的坐标
   * @param rotate 旋转角度
   */
  public getBoundingBox(width: number, height: number, left: number, top: number, rotate = 0): Partial<DOMRect> {
    const { tl, tr, bl, br } = this.getAbsolutePosition(left + width / 2, top + height / 2, width, height, rotate);
    const l = Math.min(tl[0], tr[0], bl[0], br[0]);
    const r = Math.max(tl[0], tr[0], bl[0], br[0]);
    const t = Math.min(tl[1], tr[1], bl[1], br[1]);
    const b = Math.max(tl[1], tr[1], bl[1], br[1]);
    return { left: l, top: t, width: r - l, height: b - t };
  }

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
    const L1k = (PAx - PBy) / (PAx - PBx);
    const L2k = -1 / L1k;
    const a = PAy - L1k * PAx;
    const b = PDy - L2k * PDx;
    const x = (b - a) / (L1k - L2k);
    const y = L1k * x + a;
    return [x, y];
  }

  /**
   * 通过元素在所在坐标系内四个顶点的坐标，使用直线的两点方程求出两两对点所
   * 在直线的交点（矩形的中心点），使用勾股定理求出元素宽高，转换后得到元素
   * 在所在坐标系的宽、高、x轴坐标和y轴坐标
   * width = sqrt((trx - tlx)^2 + (try - tly)^2)
   * height = sqrt((blx - tlx)^2 + (bly - tly)^2)
   * a1*x + b1*y + c1 = 0
   * a2*x + b2*y + c2 = 0
   * a1*x + b1*y + c1 = a2*x + b2*y + c2
   * 由直线的两点式方程可得a=y0-y1, b=x1-x0, c=x0*y1 - x1*y0
   * 解方程组可得两条直线的交点x,y
   * @param position 元素在所在坐标系内四个顶点的坐标
   */
  public getRelativePosition(position: IAbsolutePosition): Partial<DOMRect> {
    const { tl, bl, br, tr } = position;
    const width: number = Math.sqrt(Math.pow(tr[0] - tl[0], 2) + Math.pow(tr[1] - tl[1], 2));

    const height: number = Math.sqrt(Math.pow(bl[0] - tl[0], 2) + Math.pow(bl[1] - tl[1], 2));

    const a1 = br[1] - tl[1];
    const b1 = tl[0] - br[0];
    const c1 = br[0] * tl[1] - tl[0] * br[1];
    const a2 = bl[1] - tr[1];
    const b2 = tr[0] - bl[0];
    const c2 = bl[0] * tr[1] - tr[0] * bl[1];
    const cx = (b1 * c2 - b2 * c1) / (a1 * b2 - a2 * b1);
    const cy = (a2 * c1 - a1 * c2) / (a1 * b2 - a2 * b1);

    return {
      width: +width.toFixed(7),
      height: +height.toFixed(7),
      left: +(cx - width / 2).toFixed(7),
      top: +(cy - height / 2).toFixed(7),
    };
  }
}
