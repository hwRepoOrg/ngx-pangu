import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditorStore } from '../../../../services/store.service';
import * as i0 from "@angular/core";
export declare class CanvasFormsComponent implements OnInit, OnDestroy {
    fb: FormBuilder;
    store: EditorStore;
    canvasSizeFormGroup: FormGroup;
    canvasPositionFormGroup: FormGroup;
    canvasBackgroundFormGroup: FormGroup;
    private subscription;
    constructor(fb: FormBuilder, store: EditorStore);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<CanvasFormsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CanvasFormsComponent, "ce-canvas-forms,[ceCanvasForms]", never, {}, {}, never, never>;
}
//# sourceMappingURL=canvas-forms.component.d.ts.map