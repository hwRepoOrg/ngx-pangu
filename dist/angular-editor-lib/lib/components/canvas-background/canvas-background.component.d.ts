import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class CanvasBackgroundComponent {
    private store;
    backgroundColor$: Observable<string>;
    backgroundImage$: Observable<string>;
    constructor(store: EditorStore<IStore>);
    static ɵfac: i0.ɵɵFactoryDef<CanvasBackgroundComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CanvasBackgroundComponent, "ce-canvas-background,[ceCanvasBackground]", never, {}, {}, never, never>;
}
//# sourceMappingURL=canvas-background.component.d.ts.map