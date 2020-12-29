import { DEFAULT_STORE, IActionType, IRefLineDirection, IRefLineState } from '../store';

export function updateRefLineState<T = any>(direction: IRefLineDirection, state: IRefLineState): IActionType<T> {
  return (state) => ({ ...state, refLineState: { ...state.refLineState, [direction]: state } });
}

export function resetRefLineState<T = any>(): IActionType<T> {
  return (state) => ({ ...state, refLineState: DEFAULT_STORE.refLineState });
}

export function updateRefLinesState<T = any>(refLineState: { [K in IRefLineDirection]: IRefLineState }): IActionType<T> {
  return (state) => ({ ...state, refLineState: { ...state.refLineState, ...refLineState } });
}
