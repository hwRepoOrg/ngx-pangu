import { createReducer, on } from '@ngrx/store';
import {
  addNodes,
  moveCanvas,
  removeNodes,
  resizeCanvas,
  setBorderedNodes,
  setCanvasBackgroundColor,
  setCanvasBackgroundImage,
  setSelectedNodes,
  updateNodes,
} from './actions';
import { DEFAULT_STORE, ICanvasState, INode } from './store';

export const nodesReducer = createReducer<INode[]>(
  DEFAULT_STORE.nodes,
  on(addNodes, (state, { nodes }) => [...state, ...nodes]),
  on(removeNodes, (state, { nodes }) => [...state].filter((node) => !nodes.find((i) => i.id === node.id))),
  on(updateNodes, (state, { nodes }) => state.map((item) => nodes.find((i) => i.id === item.id) ?? item))
);

export const canvasStateReducer = createReducer<ICanvasState>(
  DEFAULT_STORE.canvasState,
  on(moveCanvas, (state, { left, top }) => ({ ...state, left, top })),
  on(resizeCanvas, (state, { width, height }) => ({ ...state, width, height })),
  on(resizeCanvas, (state, newState) => ({ ...state, ...newState })),
  on(setSelectedNodes, (state, { ids }) => ({ ...state, selected: new Set(...ids) })),
  on(setBorderedNodes, (state, { ids }) => ({ ...state, bordered: new Set(...ids) })),
  on(setCanvasBackgroundColor, (state, { color }) => ({ ...state, backgroundColor: color })),
  on(setCanvasBackgroundImage, (state, { image }) => ({ ...state, backgroundImage: image }))
);
