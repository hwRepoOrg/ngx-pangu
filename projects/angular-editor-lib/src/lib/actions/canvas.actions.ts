import { IActionType, ICanvasBackground, ICanvasPosition, ICanvasSize } from '../store';

export function updateCanvasSize<T = any>(canvasSize: Partial<ICanvasSize>): IActionType<T> {
  return (state) => ({ ...state, canvasSize: { ...state.canvasSize, ...canvasSize } });
}

export function updateCanvasPosition<T = any>(canvasPosition: Partial<ICanvasPosition>): IActionType<T> {
  return (state) => ({ ...state, canvasPosition: { ...state.canvasPosition, ...canvasPosition } });
}

export function updateCanvasBackground<T = any>(canvasBackground: Partial<ICanvasBackground>): IActionType<T> {
  return (state) => ({ ...state, canvasBackground: { ...state.canvasBackground, ...canvasBackground } });
}
