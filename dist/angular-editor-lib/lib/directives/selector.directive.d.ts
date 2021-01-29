import { ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export interface ISelectorRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class SelectorDirective implements OnInit, OnDestroy {
    private eleRef;
    private subscription;
    private move$;
    private up$;
    private startPointSnapshot;
    private boxRect;
    ceSelectorDisabled: boolean;
    ceOnSelectorStart: EventEmitter<any>;
    ceOnSelectorMoving: EventEmitter<ISelectorRect>;
    ceOnSelectorStop: EventEmitter<any>;
    constructor(eleRef: ElementRef<HTMLDivElement>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<SelectorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<SelectorDirective, "[ceSelector]", ["ceSelector"], { "ceSelectorDisabled": "ceSelectorDisabled"; }, { "ceOnSelectorStart": "ceOnSelectorStart"; "ceOnSelectorMoving": "ceOnSelectorMoving"; "ceOnSelectorStop": "ceOnSelectorStop"; }, never>;
}
//# sourceMappingURL=selector.directive.d.ts.map