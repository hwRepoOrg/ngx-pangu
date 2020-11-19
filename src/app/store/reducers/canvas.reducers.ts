import { createReducer, on } from '@ngrx/store';
import { updateCanvasBackground, updateCanvasPosition, updateCanvasSize, updateNodeMoveState } from '../actions';
import { DEFAULT_STORE, ICanvasPosition, ICanvasSize } from '../store';

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

export const nodeMoveStateReducer = createReducer(
  false,
  on(updateNodeMoveState, (...args) => args[1].state)
);
