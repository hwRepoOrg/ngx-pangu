import { createReducer, on } from '@ngrx/store';
import { updateRefLineState } from '../actions';
import { DEFAULT_STORE } from '../store';

export const refLineStateReducers = createReducer(
  DEFAULT_STORE.refLineState,
  on(updateRefLineState, (original, { direction, state }) => ({ ...original, [direction]: state }))
);
