import { IActionType } from '../store';

export function clearSelected<T = any>(): IActionType<T> {
  return (state) => ({ ...state, selected: new Set() });
}

export function addSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...state.selected, ...ids]) });
}

export function removeSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...ids.reduce((selected, id) => (selected.delete(id) ? selected : selected), state.selected)]) });
}

export function setSelectedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, selected: new Set([...ids]) });
}

export function clearBordered<T = any>(): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set() });
}

export function addBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...state.bordered, ...ids]) });
}

export function removeBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...ids.reduce((bordered, id) => (bordered.delete(id) ? bordered : bordered), state.bordered)]) });
}

export function setBorderedNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, bordered: new Set([...ids]) });
}
