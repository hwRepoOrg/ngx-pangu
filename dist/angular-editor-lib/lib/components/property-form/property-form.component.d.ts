import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import * as i0 from "@angular/core";
export declare class PropertyFormComponent implements OnInit {
    store: EditorStore;
    formComponent$: Observable<any>;
    instance: any;
    constructor(store: EditorStore);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<PropertyFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<PropertyFormComponent, "ce-property-form,[cePropertyForm]", never, {}, {}, never, never>;
}
//# sourceMappingURL=property-form.component.d.ts.map