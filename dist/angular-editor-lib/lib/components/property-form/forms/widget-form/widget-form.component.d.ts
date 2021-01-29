import { ComponentFactoryResolver, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditorStore } from '../../../../services/store.service';
import * as i0 from "@angular/core";
export declare class WidgetFormComponent implements OnInit {
    private fb;
    private cfr;
    private store;
    propsFormContainer: TemplateRef<any>;
    boundingFormGroup: FormGroup;
    constructor(fb: FormBuilder, cfr: ComponentFactoryResolver, store: EditorStore);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<WidgetFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WidgetFormComponent, "ce-widget-form,[ceWidgetForm]", never, {}, {}, never, never>;
}
//# sourceMappingURL=widget-form.component.d.ts.map