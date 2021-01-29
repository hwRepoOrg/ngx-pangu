import { Directive, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services";
export class NoZoomAreaDirective {
    constructor(store) {
        this.store = store;
        this.store
            .select((state) => (Object.assign(Object.assign({}, state.canvasSize), { scale: state.canvasPosition.scale })))
            .subscribe((state) => {
            this.width = state.width * state.scale;
            this.height = state.height * state.scale;
        });
    }
}
NoZoomAreaDirective.ɵfac = function NoZoomAreaDirective_Factory(t) { return new (t || NoZoomAreaDirective)(i0.ɵɵdirectiveInject(i1.EditorStore)); };
NoZoomAreaDirective.ɵdir = i0.ɵɵdefineDirective({ type: NoZoomAreaDirective, selectors: [["", "ceNoZoomArea", ""]], hostVars: 4, hostBindings: function NoZoomAreaDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.width, "px")("height", ctx.height, "px");
    } }, exportAs: ["ceNoZoomArea"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NoZoomAreaDirective, [{
        type: Directive,
        args: [{
                selector: '[ceNoZoomArea]',
                exportAs: 'ceNoZoomArea',
            }]
    }], function () { return [{ type: i1.EditorStore }]; }, { width: [{
            type: HostBinding,
            args: ['style.width.px']
        }], height: [{
            type: HostBinding,
            args: ['style.height.px']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm8tem9vbS1hcmVhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyLWVkaXRvci1saWIvc3JjLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZXMvbm8tem9vbS1hcmVhLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O0FBUXZELE1BQU0sT0FBTyxtQkFBbUI7SUFLOUIsWUFBb0IsS0FBMEI7UUFBMUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDNUMsSUFBSSxDQUFDLEtBQUs7YUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlDQUFNLEtBQUssQ0FBQyxVQUFVLEtBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFHLENBQUM7YUFDL0UsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztzRkFaVSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7O2tEQUFuQixtQkFBbUI7Y0FKL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzhEQUdRLEtBQUs7a0JBRFgsV0FBVzttQkFBQyxnQkFBZ0I7WUFHdEIsTUFBTTtrQkFEWixXQUFXO21CQUFDLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVkaXRvclN0b3JlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuaW1wb3J0IHsgSVN0b3JlIH0gZnJvbSAnLi4vc3RvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY2VOb1pvb21BcmVhXScsXG4gIGV4cG9ydEFzOiAnY2VOb1pvb21BcmVhJyxcbn0pXG5leHBvcnQgY2xhc3MgTm9ab29tQXJlYURpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgucHgnKVxuICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQucHgnKVxuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvcmU6IEVkaXRvclN0b3JlPElTdG9yZT4pIHtcbiAgICB0aGlzLnN0b3JlXG4gICAgICAuc2VsZWN0KChzdGF0ZSkgPT4gKHsgLi4uc3RhdGUuY2FudmFzU2l6ZSwgc2NhbGU6IHN0YXRlLmNhbnZhc1Bvc2l0aW9uLnNjYWxlIH0pKVxuICAgICAgLnN1YnNjcmliZSgoc3RhdGUpID0+IHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHN0YXRlLndpZHRoICogc3RhdGUuc2NhbGU7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gc3RhdGUuaGVpZ2h0ICogc3RhdGUuc2NhbGU7XG4gICAgICB9KTtcbiAgfVxufVxuIl19