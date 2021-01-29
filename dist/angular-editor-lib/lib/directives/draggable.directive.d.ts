import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DraggableDirective implements OnInit, OnDestroy {
    private eleRef;
    private cdr;
    ceDragDisabled: boolean;
    ceUseSpace: boolean;
    ceOnStart: EventEmitter<PointerEvent>;
    ceOnMove: EventEmitter<MouseEvent>;
    ceOnStop: EventEmitter<PointerEvent>;
    ceOnSpaceKeyDown: EventEmitter<void>;
    spaceKeyDown: boolean;
    private subscription;
    private mouseMove$;
    private mouseUp$;
    private mouseDown$;
    private mouseEnter$;
    private mouseLeave$;
    private keyDown$;
    private keyUp$;
    constructor(eleRef: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    listenSpaceKeyEvent(): void;
    static ɵfac: i0.ɵɵFactoryDef<DraggableDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<DraggableDirective, "[ceDraggable]", ["ceDraggable"], { "ceDragDisabled": "ceDragDisabled"; "ceUseSpace": "ceUseSpace"; }, { "ceOnStart": "ceOnStart"; "ceOnMove": "ceOnMove"; "ceOnStop": "ceOnStop"; "ceOnSpaceKeyDown": "ceOnSpaceKeyDown"; }, never>;
}
//# sourceMappingURL=draggable.directive.d.ts.map