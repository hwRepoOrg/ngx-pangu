import { Injectable } from '@angular/core';
import { INode } from '../store/store';

type IPosition = [number, number];
interface IAbsolutePosition {
  tl: IPosition;
  tr: IPosition;
  bl: IPosition;
  br: IPosition;
}

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

  public getAbsolutePosition(cx: number, cy: number, width: number, height: number, rotate: number): IAbsolutePosition {
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
          tl: [cx - width / 2, cy - height / 2],
          tr: [cx + width / 2, cy - height / 2],
          bl: [cx - width / 2, cy + height / 2],
          br: [cx + width / 2, cy + height / 2],
        };
        break;
      case 180:
        break;
      case 270:
        break;
    }
  }
}
