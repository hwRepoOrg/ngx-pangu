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
}

export interface IStore<T = any> {
  nodes: INode<T>[];
  canvasState: ICanvasState;
}

export const DEFAULT_STORE: IStore<any> = {
  nodes: [],
  canvasState: {
    selected: new Set(),
    bordered: new Set(),
    width: 1000,
    height: 800,
    scale: 1,
  },
};
