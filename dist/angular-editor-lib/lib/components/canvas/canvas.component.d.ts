import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';
import * as i0 from "@angular/core";
export declare class CanvasComponent {
    private store;
    private utils;
    nodes$: Observable<INode[]>;
    nodes: INode[];
    private selected;
    private canvasPosition;
    private pointerSnapshot;
    private nodesSnapshot;
    private outerBoxSnapshot;
    private unselectedNodes;
    private gap;
    constructor(store: EditorStore<IStore>, utils: CeUtilsService);
    nodeListTrackByFn(i: number, node: INode): string;
    moveStart(ev: PointerEvent, node: INode): void;
    moving(ev: PointerEvent): void;
    moveEnd(): void;
    showBorder(id: string): void;
    removeBorder(id: string): void;
    static ɵfac: i0.ɵɵFactoryDef<CanvasComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CanvasComponent, "ce-canvas", never, {}, {}, never, never>;
}
//# sourceMappingURL=canvas.component.d.ts.map