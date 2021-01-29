import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { ICanvasSize, INode } from '../../store';
import * as i0 from "@angular/core";
export declare class BorderedAreaComponent implements OnInit {
    private store;
    private utils;
    borderedNodeMap: Map<string, Partial<DOMRect & {
        rotate: number;
    }>>;
    borderedNodeList$: Observable<({
        id: string;
    } & Partial<DOMRect & {
        rotate: number;
    }>)[]>;
    constructor(store: EditorStore, utils: CeUtilsService);
    ngOnInit(): void;
    getRotate(rotate: number): string;
    trackByFn(...args: [number, {
        id: string;
    } & Partial<DOMRect & {
        rotate: number;
    }>]): string;
    refreshBorderedList(nodes: INode[], bordered: Set<string>, canvasSize: ICanvasSize): {
        id: string;
        width: number;
        height: number;
        left: number;
        top: number;
        rotate: number;
    }[];
    static ɵfac: i0.ɵɵFactoryDef<BorderedAreaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BorderedAreaComponent, "ce-bordered-area,[ceBorderedArea]", never, {}, {}, never, never>;
}
//# sourceMappingURL=bordered-area.component.d.ts.map