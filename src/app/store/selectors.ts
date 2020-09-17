import { createSelector } from '@ngrx/store';
import { IStore } from './store';

export const selectCanvasSize = (state: IStore) => state.canvasSize;
export const selectCanvasPosition = (state: IStore) => state.canvasPosition;
export const SizeScaleSelector = createSelector(selectCanvasSize, selectCanvasPosition, ({ width, height }, { scale }) => ({ width, height, scale }));
