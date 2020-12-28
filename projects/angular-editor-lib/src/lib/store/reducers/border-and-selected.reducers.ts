import { createReducer, on } from '@ngrx/store';
import {
  addBorderedNodes,
  addSelectedNodes,
  clearBorderedNodes,
  clearSelectedNodes,
  removeBorderedNodes,
  removeSelectedNodes,
  setBorderedNodes,
  setSelectedNodes,
} from '../actions';
import { DEFAULT_STORE } from '../store';

export const selectedReducer = createReducer(
  DEFAULT_STORE.selected,
  on(clearSelectedNodes, () => new Set<string>()),
  on(
    addSelectedNodes,
    (state, { ids }) => new Set<string>([...state, ...ids])
  ),
  on(removeSelectedNodes, (state, { ids }) => ids.reduce((s, id) => (s.delete(id) ? s : s), state)),
  on(setSelectedNodes, (...args) => new Set([...args[1].ids]))
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
