export interface INode<T = any> {
  id: string;
  name: string;
  data?: T;
  children?: INode[];
  width: number;
  height: number;
  left: number;
  top: number;
  rotate?: number;
  borderStyle?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
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

export interface IStore<T = any> {
  nodes: INode<T>[];
  selected: Set<string>;
  bordered: Set<string>;
  canvasBackground: ICanvasBackground;
  canvasSize: ICanvasSize;
  canvasPosition: ICanvasPosition;
  shadowVisible: boolean;
}

export const DEFAULT_STORE: IStore<any> = {
  shadowVisible: false,
  nodes: new Array(500).fill(1).map((v, index) => ({
    id: `${Math.round(Math.random() * 1000000000000)}`,
    name: `test${index + 1}`,
    width: Math.round(Math.random() * 500),
    height: Math.round(Math.random() * 400),
    left: Math.round(Math.random() * 1000),
    top: Math.round(Math.random() * 1000),
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
};
