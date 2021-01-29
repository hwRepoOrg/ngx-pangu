import { IActionType } from '../store';
export declare function clearSelected<T = any>(): IActionType<T>;
export declare function addSelectedNodes<T = any>(ids: string[]): IActionType<T>;
export declare function removeSelectedNodes<T = any>(ids: string[]): IActionType<T>;
export declare function setSelectedNodes<T = any>(ids: string[]): IActionType<T>;
export declare function clearBordered<T = any>(): IActionType<T>;
export declare function addBorderedNodes<T = any>(ids: string[]): IActionType<T>;
export declare function removeBorderedNodes<T = any>(ids: string[]): IActionType<T>;
export declare function setBorderedNodes<T = any>(ids: string[]): IActionType<T>;
//# sourceMappingURL=border-and-selected.actions.d.ts.map