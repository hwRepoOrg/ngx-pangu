import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services";
export class ZoomAreaDirective {
    constructor(store) {
        this.store = store;
        this.transformOrigin = '0 0';
        this.store
            .select((state) => (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })))
            .subscribe((state) => {
            this.scale = `perspective(1px) scale(${state.scale})`;
            this.width = state.width;
            this.height = state.height;
        });
    }
}
ZoomAreaDirective.ɵfac = function ZoomAreaDirective_Factory(t) { return new (t || ZoomAreaDirective)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
ZoomAreaDirective.ɵdir = i0.ɵɵdefineDirective({ type: ZoomAreaDirective, selectors: [["", "ceZoomArea", ""]], hostVars: 8, hostBindings: function ZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("transform-origin", ctx.transformOrigin)("transform", ctx.scale)("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceZoomArea"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ZoomAreaDirective, [{
        type: Directive,
        args: [{
                selector: '[ceZoomArea]',
                exportAs: 'ceZoomArea',
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, { transformOrigin: [{
            type: HostBinding,
            args: ['style.transform-origin']
        }], scale: [{
            type: HostBinding,
            args: ['style.transform']
        }], width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9vbS1hcmVhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvem9vbS1hcmVhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUXZELE1BQU0sT0FBTyxpQkFBaUI7SUFTNUIsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFQOUMsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFRdEIsSUFBSSxDQUFDLEtBQUs7YUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlDQUFNLEtBQUssQ0FBQyxVQUFVLEtBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLENBQUM7YUFDL0UsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRywwQkFBMEIsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztrRkFqQlUsaUJBQWlCO3NEQUFqQixpQkFBaUI7OztrREFBakIsaUJBQWlCO2NBSjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFLFlBQVk7YUFDdkI7OERBR0MsZUFBZTtrQkFEZCxXQUFXO21CQUFDLHdCQUF3QjtZQUc5QixLQUFLO2tCQURYLFdBQVc7bUJBQUMsaUJBQWlCO1lBRzlCLEtBQUs7a0JBREosV0FBVzttQkFBQyxnQkFBZ0I7WUFHN0IsTUFBTTtrQkFETCxXQUFXO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2Vab29tQXJlYV0nLFxuICBleHBvcnRBczogJ2NlWm9vbUFyZWEnLFxufSlcbmV4cG9ydCBjbGFzcyBab29tQXJlYURpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUudHJhbnNmb3JtLW9yaWdpbicpXG4gIHRyYW5zZm9ybU9yaWdpbiA9ICcwIDAnO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnRyYW5zZm9ybScpXG4gIHB1YmxpYyBzY2FsZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLndpZHRoLnB4JylcbiAgd2lkdGg6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBoZWlnaHQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yZTogRWRpdG9yU3RvcmU8SVN0b3JlPikge1xuICAgIHRoaXMuc3RvcmVcbiAgICAgIC5zZWxlY3QoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZS5jYW52YXNTaXplLCBzY2FsZTogc3RhdGUuY2FudmFzUG9zaXRpb24uc2NhbGUgfSkpXG4gICAgICAuc3Vic2NyaWJlKChzdGF0ZSkgPT4ge1xuICAgICAgICB0aGlzLnNjYWxlID0gYHBlcnNwZWN0aXZlKDFweCkgc2NhbGUoJHtzdGF0ZS5zY2FsZX0pYDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHN0YXRlLndpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHN0YXRlLmhlaWdodDtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=