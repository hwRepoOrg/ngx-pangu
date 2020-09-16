export interface INode<T = any> {
  id: string;
  name: string;
  data?: T;
  width: number;
  height: number;
  left: number;
  top: number;
  rotate?: number;
  borderStyle?: string;
  borderWidth?: number;
  borderColor?: string;
  children?: INode[];
}

export interface ICanvasState {
  selected: Set<string>;
  bordered: Set<string>;
  width: number;
  height: number;
  backgroundColor?: string;
  backgroundImage?: string;
  scale: number;
  left: number;
  top: number;
}

export interface IStore<T = any> {
  nodes: INode<T>[];
  canvasState: ICanvasState;
}

export const DEFAULT_STORE: IStore<any> = {
  nodes: [
    { id: '1', name: 'test1', width: 100, height: 50, left: 20, top: 20 },
    {
      id: '2',
      name: 'test2',
      width: 200,
      height: 100,
      left: 20,
      top: 20,
      children: [
        { id: '3', name: 'test3', width: 50, height: 30, left: 20, top: 20 },
        { id: '4', name: 'test4', width: 50, height: 30, left: 60, top: 60, rotate: 20 },
      ],
    },
  ],
  canvasState: {
    selected: new Set(),
    bordered: new Set(),
    width: 1920,
    height: 1080,
    scale: 0.5,
    left: 300,
    top: 100,
  },
};
