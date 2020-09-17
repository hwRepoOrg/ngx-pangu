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
}

export const DEFAULT_STORE: IStore<any> = {
  nodes: [
    { id: '1', name: 'test1', width: 100, height: 50, left: 20, top: 20, borderWidth: 1, borderStyle: 'solid' },
    {
      id: '2',
      name: 'test2',
      width: 200,
      height: 100,
      left: 120,
      top: 120,
      borderWidth: 1,
      borderStyle: 'solid',
    },
    { id: '3', name: 'test3', width: 50, height: 30, left: 20, top: 20, borderWidth: 1, borderStyle: 'solid' },
    { id: '4', name: 'test4', width: 50, height: 30, left: 60, top: 60, rotate: 20, borderWidth: 1, borderStyle: 'solid' },
  ],
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
