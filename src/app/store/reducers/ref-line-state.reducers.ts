import { createReducer, on } from '@ngrx/store';
import { resetRefLineState, updateRefLinesState, updateRefLineState } from '../actions';
import { DEFAULT_STORE } from '../store';

export const refLineStateReducers = createReducer(
  DEFAULT_STORE.refLineState,
  on(updateRefLineState, (original, { direction, state }) => ({ ...original, [direction]: state })),
  on(resetRefLineState, () => DEFAULT_STORE.refLineState),
  on(updateRefLinesState, (original, { state }) => ({ ...original, ...state }))
);
