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
    { id: '1', name: 'test', width: 100, height: 50, left: 20, top: 20 },
    {
      id: '2',
      name: 'test',
      width: 100,
      height: 50,
      left: 20,
      top: 20,
      children: [{ id: '3', name: 'test', width: 100, height: 50, left: 20, top: 20 }],
    },
  ],
  canvasState: {
    selected: new Set(),
    bordered: new Set(),
    width: 1000,
    height: 800,
    scale: 1,
    left: 100,
    top: 100,
  },
};
