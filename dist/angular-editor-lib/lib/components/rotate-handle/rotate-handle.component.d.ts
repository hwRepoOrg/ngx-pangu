import { OnInit } from '@angular/core';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';
import { ResizeHandleComponent } from '../resize-handle/resize-handle.component';
import * as i0 from "@angular/core";
export declare class RotateHandleComponent implements OnInit {
    private parent;
    private store;
    private utils;
    private selected;
    private nodes;
    rotateSnapshot: [number, number, number, number, INode];
    constructor(parent: ResizeHandleComponent, store: EditorStore<IStore>, utils: CeUtilsService);
    ngOnInit(): void;
    rotateStart(event: PointerEvent): void;
    rotating(event: PointerEvent): void;
    rotateStop(): void;
    static ɵfac: i0.ɵɵFactoryDef<RotateHandleComponent, [{ optional: true; skipSelf: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<RotateHandleComponent, "ce-rotate-handle", never, {}, {}, never, never>;
}
//# sourceMappingURL=rotate-handle.component.d.ts.map