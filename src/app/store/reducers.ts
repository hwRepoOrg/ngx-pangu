import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import {
  addBorderedNodes,
  addNodes,
  addSelectedNodes,
  clearBorderedNodes,
  clearSelectedNodes,
  removeBorderedNodes,
  removeNodes,
  removeSelectedNodes,
  setBorderedNodes,
  updateCanvasBackground,
  updateCanvasPosition,
  updateCanvasSize,
  updateNodes,
} from './actions';
import { DEFAULT_STORE, ICanvasPosition, ICanvasSize, INode, IStore } from './store';

export const nodesReducer = createReducer<INode[]>(
  DEFAULT_STORE.nodes,
  on(addNodes, (state, { nodes }) => [...state, ...nodes]),
  on(removeNodes, (state, { nodes }) => [...state].filter((node) => !nodes.find((i) => i.id === node.id))),
  on(updateNodes, (state, { nodes }) => state.map((item) => nodes.find((i) => i.id === item.id) ?? item))
);

export const canvasSizeReducer = createReducer<ICanvasSize>(
  DEFAULT_STORE.canvasSize,
  on(updateCanvasSize, (state, newState) => ({ ...state, ...newState }))
);

export const canvasPositionReducer = createReducer<ICanvasPosition>(
  DEFAULT_STORE.canvasPosition,
  on(updateCanvasPosition, (state, newState) => ({ ...state, ...newState }))
);

export const canvasBackgroundReducer = createReducer(
  DEFAULT_STORE.canvasBackground,
  on(updateCanvasBackground, (state, newState) => ({ ...state, ...newState }))
);

export const selectedReducer = createReducer(
  DEFAULT_STORE.selected,
  on(clearSelectedNodes, () => new Set<string>()),
  on(
    addSelectedNodes,
    (state, { ids }) => new Set<string>([...state, ...ids])
  ),
  on(removeSelectedNodes, (state, { ids }) => ids.reduce((s, id) => (s.delete(id) ? s : s), state))
);

export const borderedReducer = createReducer(
  DEFAULT_STORE.bordered,
  on(clearBorderedNodes, () => new Set<string>()),
  on(
    addBorderedNodes,
    (state, { ids }) => new Set<string>([...state, ...ids])
  ),
  on(
    removeBorderedNodes,
    (state, { ids }) => new Set<string>([...ids.reduce((s, id) => (s.delete(id) ? s : s), state)])
  ),
  on(setBorderedNodes, (...args) => new Set([...args[1].ids]))
);

export default {
  nodes: nodesReducer,
  canvasBackground: canvasBackgroundReducer,
  canvasPosition: canvasPositionReducer,
  canvasSize: canvasSizeReducer,
  selected: selectedReducer,
  bordered: borderedReducer,
} as ActionReducerMap<IStore>;
