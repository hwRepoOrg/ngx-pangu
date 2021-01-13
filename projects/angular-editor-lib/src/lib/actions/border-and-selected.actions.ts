import { IActionType } from '../store';

export function clearSelected<T = any>(): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([]) });
}

export function addSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...state.selected, ...ids]) });
}

export function removeSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...state.selected].filter((id) => !ids.includes(id))) });
}

export function setSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...ids]) });
}

export function clearBordered<T = any>(): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([]) });
}

export function addBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...state.bordered, ...ids]) });
}

export function removeBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...state.bordered].filter((id) => !ids.includes(id))) });
}

export function setBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...ids]) });
}
