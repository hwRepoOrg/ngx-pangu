import { IDOMRect } from '../services';
import { IActionType, INode } from '../store';
export declare function lockNodes<T = any>(ids: string[]): IActionType<T>;
export declare function unlockNodes<T = any>(ids: string[]): IActionType<T>;
export declare function addNodes<T = any>(nodes: INode<T>[]): IActionType<T>;
export declare function removeNodes<T = any>(ids: string[]): IActionType<T>;
export declare function updateNodes<T = any>(nodes: INode<T>[]): IActionType<T>;
export declare function updateNodesSize<T = any>(nodesSizeMap: Map<string, IDOMRect>): IActionType<T>;
export declare function groupNodes<T = any>(ids: string[]): IActionType<T>;
export declare function breakNode<T = any>(id: string): IActionType<T>;
//# sourceMappingURL=nodes.actions.d.ts.map