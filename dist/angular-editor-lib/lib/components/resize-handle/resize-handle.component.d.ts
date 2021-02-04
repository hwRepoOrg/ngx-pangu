import { ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { CeUtilsService, IRectDirection } from '../../services/utils.service';
import { IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class ResizeHandleComponent {
    private store;
    private utils;
    eleRef: ElementRef<HTMLElement>;
    display: string;
    width: number;
    height: number;
    left: number;
    top: number;
    get transform(): string;
    selected: Set<string>;
    selectedSize$: Observable<number>;
    private canvasPosition;
    private rotate;
    private nodes;
    private resizeMode;
    private groupRectSnapshot;
    private groupAbsolutePositionSnapshot;
    private resizePointSnapshot;
    private nodePositionSnapshotList;
    constructor(store: EditorStore<IStore>, utils: CeUtilsService, eleRef: ElementRef<HTMLElement>);
    refreshResizeHandle(): any;
    resizeStart(event: PointerEvent): void;
    resizing(event: PointerEvent, direction: IRectDirection): void;
    resizeEnd(): void;
    resizingNodeList(direction: IRectDirection, mx: number, my: number): void;
    resizingNode(direction: IRectDirection, mx: number, my: number): void;
    static ɵfac: i0.ɵɵFactoryDef<ResizeHandleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ResizeHandleComponent, "ce-resize-handle,[ceResizeHandle]", never, {}, {}, never, never>;
}
//# sourceMappingURL=resize-handle.component.d.ts.map