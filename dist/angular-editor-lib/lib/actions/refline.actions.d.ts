import { IActionType, IRefLineDirection, IRefLineState } from '../store';
export declare function updateRefLineState<T = any>(direction: IRefLineDirection, state: IRefLineState): IActionType<T>;
export declare function resetRefLineState<T = any>(): IActionType<T>;
export declare function updateRefLinesState<T = any>(refLineState: {
    [K in IRefLineDirection]: IRefLineState;
}): IActionType<T>;
//# sourceMappingURL=refline.actions.d.ts.map