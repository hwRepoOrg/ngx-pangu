import { Observable } from 'rxjs';
import { CeToolbarDirective } from '../../directives';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class ToolbarComponent {
    store: EditorStore<IStore>;
    private utils;
    ceToolbar: CeToolbarDirective;
    selected$: Observable<Set<string>>;
    scale: number;
    get copyStatus$(): Observable<boolean>;
    groupStatus$: Observable<boolean>;
    breakStatus$: Observable<boolean>;
    private selected;
    private nodes;
    constructor(store: EditorStore<IStore>, utils: CeUtilsService);
    groupNodes(): void;
    breakNode(): void;
    static ɵfac: i0.ɵɵFactoryDef<ToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ToolbarComponent, "ce-toolbar", ["ceToolbar"], {}, {}, ["ceToolbar"], ["[ceToolbar]"]>;
}
//# sourceMappingURL=toolbar.component.d.ts.map