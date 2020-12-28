import { createSelector } from '@ngrx/store';
import { IStore } from './store';

export const selectCanvasSize = (state: IStore) => state.canvasSize;
export const selectCanvasPosition = (state: IStore) => state.canvasPosition;
export const SizeScaleSelector = createSelector(selectCanvasSize, selectCanvasPosition, ({ width, height }, { scale }) => ({ width, height, scale }));

export const selectNodes = (state: IStore) => state.nodes;
export const selectSelected = (state: IStore) => state.selected;
export const ResizeRefreshSelector = createSelector(selectSelected, selectCanvasPosition, selectNodes, (...args) => args);
