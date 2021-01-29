import { Observable } from 'rxjs';
import { ISelectorRect } from './directives/selector.directive';
import { EditorStore } from './services/store.service';
import { ICanvasPosition, INode, IPanel, IRefLineDirection, IRefLineState, IStore } from './store';
import * as i0 from "@angular/core";
export declare class AngularEditorLibComponent<T = any> {
    store: EditorStore;
    set state(state: Partial<IStore<T>>);
    private containerEleRef;
    private subscription;
    canvasPosition: ICanvasPosition;
    startPoints: number[];
    matrix: string;
    selectorRect: ISelectorRect;
    nodes: INode[];
    refLineState$: Observable<{
        [P in IRefLineDirection]: IRefLineState;
    }>;
    private nodesRectSnapshot;
    private nodeIdList;
    constructor(store: EditorStore);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    panelsTrackByFn(_i: number, panel: IPanel<any>): string;
    dragStart(ev: PointerEvent): void;
    dragging(ev: PointerEvent): void;
    dragEnd(): void;
    listenScaleEvent(): void;
    selectorStart(): void;
    selectorMoving(rect: ISelectorRect): void;
    selectorEnd(): void;
    private clearSelectAndBorder;
    static ɵfac: i0.ɵɵFactoryDef<AngularEditorLibComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<AngularEditorLibComponent<any>, "ce-editor", ["ceEditor"], { "state": "state"; }, {}, never, ["[toolbar]"]>;
}
//# sourceMappingURL=angular-editor-lib.component.d.ts.map