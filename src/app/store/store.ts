import { genNodeId } from '../services/utils.service';

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
  nodeMoveState: boolean;
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

export const DEFAULT_STORE: IStore<any> = {
  nodeMoveState: false,
  nodes: new Array(20).fill(1).map((v, index) => ({
    id: genNodeId(),
    name: `test${index + 1}`,
    locked: !Math.round(Math.random() * 10),
    width: Math.round(Math.random() * 500 + 10),
    height: Math.round(Math.random() * 400 + 10),
    left: Math.round(Math.random() * 1000) + 100,
    top: Math.round(Math.random() * 1000) + 100,
    zIndex: index + 1,
    borderWidth: 1,
    borderStyle: 'solid',
    rotate: [0, 30, 90, 100, 180, 200, 270][Math.round(Math.random() * 7)],
  })),
  selected: new Set(),
  bordered: new Set(),
  canvasBackground: {},
  canvasPosition: {
    left: 200,
    top: 200,
    scale: 1,
  },
  canvasSize: {
    width: 1920,
    height: 1080,
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
