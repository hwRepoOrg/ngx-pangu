import { ActionReducerMap } from '@ngrx/store';
import { IStore } from '../store';
import { borderedReducer, selectedReducer } from './border-and-selected.reducers';
import { canvasBackgroundReducer, canvasPositionReducer, canvasSizeReducer } from './canvas.reducers';
import { nodesReducer } from './nodes.reducers';

export default {
  nodes: nodesReducer,
  canvasBackground: canvasBackgroundReducer,
  canvasPosition: canvasPositionReducer,
  canvasSize: canvasSizeReducer,
  selected: selectedReducer,
  bordered: borderedReducer,
} as ActionReducerMap<IStore>;
