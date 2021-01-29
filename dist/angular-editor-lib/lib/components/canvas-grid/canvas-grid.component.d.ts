import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class CanvasGridComponent {
    private store;
    childDPath$: Observable<string>;
    parentDPath$: Observable<string>;
    childWidth$: Observable<number>;
    parentWidth$: Observable<number>;
    constructor(store: EditorStore<IStore>);
    getPath(size: number, scale: number): string;
    static ɵfac: i0.ɵɵFactoryDef<CanvasGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CanvasGridComponent, "ce-canvas-grid", never, {}, {}, never, never>;
}
//# sourceMappingURL=canvas-grid.component.d.ts.map