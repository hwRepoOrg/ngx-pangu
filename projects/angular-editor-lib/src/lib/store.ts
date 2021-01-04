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

export type IActionType<T = any> = (state: IStore<T>) => IStore<T>;

export const DEFAULT_STORE: IStore<any> = {
  nodeMoveState: false,
  nodes: [],
  selected: new Set(),
  bordered: new Set(),
  canvasBackground: {},
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
  component: T;
}

export interface ITabConfig<T = any> {
  title: string;
  icon: string;
  content: T;
}
