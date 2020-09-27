import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { evaluate } from 'mathjs';
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
  constructor() {}

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
          break;
      }
    }
  }

  public getBoundingBox(width: number, height: number, left: number, top: number, rotate = 0): Partial<DOMRect> {
    const { tl, tr, bl, br } = this.getAbsolutePosition(left + width / 2, top + height / 2, width, height, rotate);
    const l = Math.min(tl[0], tr[0], bl[0], br[0]);
    const r = Math.max(tl[0], tr[0], bl[0], br[0]);
    const t = Math.min(tl[1], tr[1], bl[1], br[1]);
    const b = Math.max(tl[1], tr[1], bl[1], br[1]);
    return { left: l, top: t, width: r - l, height: b - t };
  }

  sortNodeListByIndex(list?: INode[]): INode[] {
    return (
      list &&
      _.chain(list)
        .sortBy((item) => item.zIndex)
        .map((item) => ({ ...item, children: this.sortNodeListByIndex(item.children) }))
        .value()
    );
  }
}
