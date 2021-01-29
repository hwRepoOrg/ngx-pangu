import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { INode } from '../../store';
import * as i0 from "@angular/core";
export declare class BoxItemComponent<T = any> implements AfterViewInit {
    private renderer;
    private eleRef;
    private _node;
    get node(): INode<T>;
    set node(val: INode<T>);
    constructor(renderer: Renderer2, eleRef: ElementRef<HTMLElement>);
    ngAfterViewInit(): void;
    private generatorStyles;
    static ɵfac: i0.ɵɵFactoryDef<BoxItemComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BoxItemComponent<any>, "ce-box-item", never, { "node": "node"; }, {}, never, never>;
}
//# sourceMappingURL=box-item.component.d.ts.map