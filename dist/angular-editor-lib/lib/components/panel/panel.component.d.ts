import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { CeUtilsService, EditorStore } from '../../services';
import { IPanel } from '../../store';
import * as i0 from "@angular/core";
export declare class PanelComponent<T> {
    utils: CeUtilsService;
    store: EditorStore;
    private _panel;
    set panel(val: IPanel<T>);
    get panel(): IPanel<T>;
    constructor(utils: CeUtilsService, store: EditorStore);
    updatePosition(event: CdkDragEnd): void;
    toggleCollapsed(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDef<PanelComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PanelComponent<any>, "ce-panel,[cePanel]", never, { "panel": "panel"; }, {}, never, never>;
}
//# sourceMappingURL=panel.component.d.ts.map