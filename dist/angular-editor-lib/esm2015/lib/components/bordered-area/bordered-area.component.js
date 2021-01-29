import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services";
import * as i2 from "../../services/utils.service";
import * as i3 from "@angular/common";
function BorderedAreaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 1);
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", node_r1.left, "%")("top", node_r1.top, "%")("width", node_r1.width, "%")("height", node_r1.height, "%")("transform", ctx_r0.getRotate(node_r1.rotate));
} }
export class BorderedAreaComponent {
    constructor(store, utils) {
        this.store = store;
        this.utils = utils;
        this.borderedNodeMap = new Map();
    }
    ngOnInit() {
        this.borderedNodeList$ = this.store
            .selectDifferent((state) => ({ bordered: state.bordered, nodes: state.nodes, canvasSize: state.canvasSize }))
            .pipe(map(({ bordered, nodes, canvasSize }) => {
            if (!bordered.size) {
                return [];
            }
            else {
                return this.refreshBorderedList(nodes, bordered, canvasSize);
            }
        }));
    }
    getRotate(rotate) {
        return `rotate(${rotate}deg)`;
    }
    trackByFn(...args) {
        return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
    }
    refreshBorderedList(nodes, bordered, canvasSize) {
        return [...bordered]
            .map((id) => this.utils.getNodeById(id, nodes))
            .filter((node) => !!node)
            .map((node) => {
            var _a;
            {
                const [, ...parents] = this.utils.getNodeAndParentListById(node.id, nodes);
                let child = Object.assign({}, node);
                while (parents.length) {
                    const parent = parents.shift();
                    child = Object.assign(Object.assign(Object.assign({}, child), this.utils.getChildPositionBaseOnParentCoordinateSystem(parent, (_a = parent.rotate) !== null && _a !== void 0 ? _a : 0, child)), { rotate: child.rotate + parent.rotate });
                }
                return {
                    id: node.id,
                    width: (child.width / canvasSize.width) * 100,
                    height: (child.height / canvasSize.height) * 100,
                    left: (child.left / canvasSize.width) * 100,
                    top: (child.top / canvasSize.height) * 100,
                    rotate: child.rotate,
                };
            }
        });
    }
}
BorderedAreaComponent.ɵfac = function BorderedAreaComponent_Factory(t) { return new (t || BorderedAreaComponent)(i0.ɵɵdirectiveInject(i1.EditorStore), i0.ɵɵdirectiveInject(i2.CeUtilsService)); };
BorderedAreaComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BorderedAreaComponent, selectors: [["ce-bordered-area"], ["", "ceBorderedArea", ""]], decls: 2, vars: 4, consts: [["class", "box-border", 3, "left", "top", "width", "height", "transform", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "box-border"]], template: function BorderedAreaComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BorderedAreaComponent_div_0_Template, 1, 10, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(1, 2, ctx.borderedNodeList$))("ngForTrackBy", ctx.trackByFn);
    } }, directives: [i3.NgForOf], pipes: [i3.AsyncPipe], styles: ["[ceBorderedArea],ce-bordered-area{bottom:0;display:block;left:0;position:absolute;right:0;top:0}[ceBorderedArea] .box-border,ce-bordered-area .box-border{border:1px solid #1890ff;box-sizing:border-box;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BorderedAreaComponent, [{
        type: Component,
        args: [{
                selector: 'ce-bordered-area,[ceBorderedArea]',
                templateUrl: './bordered-area.component.html',
                styleUrls: ['./bordered-area.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i1.EditorStore }, { type: i2.CeUtilsService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9yZGVyZWQtYXJlYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3ItbGliL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2JvcmRlcmVkLWFyZWEvYm9yZGVyZWQtYXJlYS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9ib3JkZXJlZC1hcmVhL2JvcmRlcmVkLWFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7OztJQ0ZyQyx5QkFRTzs7OztJQUxMLHlDQUEwQix5QkFBQSw2QkFBQSwrQkFBQSwrQ0FBQTs7QURXNUIsTUFBTSxPQUFPLHFCQUFxQjtJQUloQyxZQUFvQixLQUFrQixFQUFVLEtBQXFCO1FBQWpELFVBQUssR0FBTCxLQUFLLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUg5RCxvQkFBZSxHQUFHLElBQUksR0FBRyxFQUFpRCxDQUFDO0lBR1YsQ0FBQztJQUV6RSxRQUFRO1FBQ04sSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLO2FBQ2hDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUM1RyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2xCLE9B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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgQ2VVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcbmltcG9ydCB7IElDYW52YXNTaXplLCBJTm9kZSB9IGZyb20gJy4uLy4uL3N0b3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2UtYm9yZGVyZWQtYXJlYSxbY2VCb3JkZXJlZEFyZWFdJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvcmRlcmVkLWFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib3JkZXJlZC1hcmVhLmNvbXBvbmVudC5sZXNzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCb3JkZXJlZEFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgYm9yZGVyZWROb2RlTWFwID0gbmV3IE1hcDxzdHJpbmcsIFBhcnRpYWw8RE9NUmVjdCAmIHsgcm90YXRlOiBudW1iZXIgfT4+KCk7XG4gIHB1YmxpYyBib3JkZXJlZE5vZGVMaXN0JDogT2JzZXJ2YWJsZTwoeyBpZDogc3RyaW5nIH0gJiBQYXJ0aWFsPERPTVJlY3QgJiB7IHJvdGF0ZTogbnVtYmVyIH0+KVtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0b3JlOiBFZGl0b3JTdG9yZSwgcHJpdmF0ZSB1dGlsczogQ2VVdGlsc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5ib3JkZXJlZE5vZGVMaXN0JCA9IHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3REaWZmZXJlbnQoKHN0YXRlKSA9PiAoeyBib3JkZXJlZDogc3RhdGUuYm9yZGVyZWQsIG5vZGVzOiBzdGF0ZS5ub2RlcywgY2FudmFzU2l6ZTogc3RhdGUuY2FudmFzU2l6ZSB9KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgYm9yZGVyZWQsIG5vZGVzLCBjYW52YXNTaXplIH0pID0+IHtcbiAgICAgICAgICBpZiAoIWJvcmRlcmVkLnNpemUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVmcmVzaEJvcmRlcmVkTGlzdChub2RlcywgYm9yZGVyZWQsIGNhbnZhc1NpemUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBnZXRSb3RhdGUocm90YXRlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiBgcm90YXRlKCR7cm90YXRlfWRlZylgO1xuICB9XG5cbiAgdHJhY2tCeUZuKC4uLmFyZ3M6IFtudW1iZXIsIHsgaWQ6IHN0cmluZyB9ICYgUGFydGlhbDxET01SZWN0ICYgeyByb3RhdGU6IG51bWJlciB9Pl0pOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHthcmdzWzFdLmlkfS0ke2FyZ3NbMV0ud2lkdGh9LSR7YXJnc1sxXS5oZWlnaHR9LSR7YXJnc1sxXS5sZWZ0fS0ke2FyZ3NbMV0udG9wfS0ke2FyZ3NbMV0ucm90YXRlfWA7XG4gIH1cblxuICByZWZyZXNoQm9yZGVyZWRMaXN0KG5vZGVzOiBJTm9kZVtdLCBib3JkZXJlZDogU2V0PHN0cmluZz4sIGNhbnZhc1NpemU6IElDYW52YXNTaXplKSB7XG4gICAgcmV0dXJuIFsuLi5ib3JkZXJlZF1cbiAgICAgIC5tYXAoKGlkKSA9PiB0aGlzLnV0aWxzLmdldE5vZGVCeUlkKGlkLCBub2RlcykpXG4gICAgICAuZmlsdGVyKChub2RlKSA9PiAhIW5vZGUpXG4gICAgICAubWFwKChub2RlKSA9PiB7XG4gICAgICAgIHtcbiAgICAgICAgICBjb25zdCBbLCAuLi5wYXJlbnRzXSA9IHRoaXMudXRpbHMuZ2V0Tm9kZUFuZFBhcmVudExpc3RCeUlkKG5vZGUuaWQsIG5vZGVzKTtcbiAgICAgICAgICBsZXQgY2hpbGQgPSB7IC4uLm5vZGUgfTtcbiAgICAgICAgICB3aGlsZSAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICAgICAgICAgIGNoaWxkID0ge1xuICAgICAgICAgICAgICAuLi5jaGlsZCxcbiAgICAgICAgICAgICAgLi4udGhpcy51dGlscy5nZXRDaGlsZFBvc2l0aW9uQmFzZU9uUGFyZW50Q29vcmRpbmF0ZVN5c3RlbShwYXJlbnQsIHBhcmVudC5yb3RhdGUgPz8gMCwgY2hpbGQpLFxuICAgICAgICAgICAgICByb3RhdGU6IGNoaWxkLnJvdGF0ZSArIHBhcmVudC5yb3RhdGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICB3aWR0aDogKGNoaWxkLndpZHRoIC8gY2FudmFzU2l6ZS53aWR0aCkgKiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IChjaGlsZC5oZWlnaHQgLyBjYW52YXNTaXplLmhlaWdodCkgKiAxMDAsXG4gICAgICAgICAgICBsZWZ0OiAoY2hpbGQubGVmdCAvIGNhbnZhc1NpemUud2lkdGgpICogMTAwLFxuICAgICAgICAgICAgdG9wOiAoY2hpbGQudG9wIC8gY2FudmFzU2l6ZS5oZWlnaHQpICogMTAwLFxuICAgICAgICAgICAgcm90YXRlOiBjaGlsZC5yb3RhdGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2xhc3M9XCJib3gtYm9yZGVyXCJcbiAgKm5nRm9yPVwibGV0IG5vZGUgb2YgYm9yZGVyZWROb2RlTGlzdCQgfCBhc3luYzsgdHJhY2tCeTogdHJhY2tCeUZuXCJcbiAgW3N0eWxlLmxlZnQuJV09XCJub2RlLmxlZnRcIlxuICBbc3R5bGUudG9wLiVdPVwibm9kZS50b3BcIlxuICBbc3R5bGUud2lkdGguJV09XCJub2RlLndpZHRoXCJcbiAgW3N0eWxlLmhlaWdodC4lXT1cIm5vZGUuaGVpZ2h0XCJcbiAgW3N0eWxlLnRyYW5zZm9ybV09XCJnZXRSb3RhdGUobm9kZS5yb3RhdGUpXCJcbj48L2Rpdj5cbiJdfQ==