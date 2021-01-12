import { TemplateRef, Type } from '@angular/core';

export interface INode<T = any> {
  id: string;
  name: string;
  locked?: boolean;
  data?: T;
  children?: INode[];
  width: number;
  height: number;
  left: number;
  top: number;
  rotate: number;
  zIndex: number;
  borderStyle?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundRepeat?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  [key: string]: any;
}

export interface ICanvasBackground {
  backgroundColor?: string;
  backgroundImage?: string;
}

export interface ICanvasSize {
  width: number;
  height: number;
}
export interface ICanvasPosition {
  scale: number;
  left: number;
  top: number;
}

export type IRefLineDirection = 'tx' | 'bx' | 'ly' | 'ry' | 'cx' | 'cy';
export interface IRefLineState {
  state: boolean;
  position?: number;
}

export interface IStore<T = any> {
  nodes: INode<T>[];
  selected: Set<string>;
  bordered: Set<string>;
  canvasBackground: ICanvasBackground;
  canvasSize: ICanvasSize;
  canvasPosition: ICanvasPosition;
  refLineState: {
    [P in IRefLineDirection]: IRefLineState;
  };
}

export type IActionType<T = any> = (state: IStore<T>) => IStore<T>;

export const DEFAULT_STORE: IStore<any> = {
  nodes: new Array(10).fill(1).map<INode<any>>((_v, i) => ({
    id: `${Math.round(Math.random() * Math.pow(10, 8))}`,
    height: 100,
    width: 200,
    left: Math.round(Math.random() * 900),
    top: Math.round(Math.random() * 500),
    name: 'test',
    rotate: 0,
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

export interface IWidget<T = any> {
  type: string;
  name: string;
  thumbnail: string;
  propsComponent: T;
}

export interface ITabConfig<T = any> {
  key: string;
  title: string;
  icon: string;
  content: T;
}

export interface IPanel<T = any> {
  title: string;
  key: string;
  content: Type<T> | TemplateRef<T>;
  show: boolean;
  x: number;
  y: number;
  collapsed?: boolean;
}
