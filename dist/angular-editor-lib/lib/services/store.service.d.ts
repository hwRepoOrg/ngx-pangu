import { ComponentStore } from '@ngrx/component-store';
import { BehaviorSubject } from 'rxjs';
import { IPanel, IStore } from '../store';
import { CeUtilsService } from './utils.service';
import * as i0 from "@angular/core";
export declare class EditorStore<T = any> extends ComponentStore<IStore<T>> {
    private utils;
    private _defaultPanels;
    private panels;
    panels$: BehaviorSubject<IPanel<any>[]>;
    constructor(utils: CeUtilsService);
    initialize(state: IStore<T>): void;
    _get(): IStore<T>;
    dispatch(action: (state: IStore<T>) => IStore<T>): void;
    selectDifferent<R>(cb: (state: IStore<T>) => R): import("rxjs").Observable<R>;
    toJSON(): string;
    addPanels(panels: IPanel[]): void;
    getPanel(key: string): IPanel<any>;
    updatePanelPosition(key: string, [x, y]: [number, number]): void;
    togglePanelVisible(key: string): void;
    togglePanelCollapsed(key: string): void;
    static ɵfac: i0.ɵɵFactoryDef<EditorStore<any>, never>;
    static ɵprov: i0.ɵɵInjectableDef<EditorStore<any>>;
}
//# sourceMappingURL=store.service.d.ts.map