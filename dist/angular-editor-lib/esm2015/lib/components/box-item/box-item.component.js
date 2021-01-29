import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BoxItemComponent_ng_container_0_ce_box_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "ce-box-item", 2);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("node", item_r2);
} }
function BoxItemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BoxItemComponent_ng_container_0_ce_box_item_1_Template, 1, 1, "ce-box-item", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r0.node.children);
} }
export class BoxItemComponent {
    constructor(renderer, eleRef) {
        this.renderer = renderer;
        this.eleRef = eleRef;
    }
    get node() {
        return this._node;
    }
    set node(val) {
        this._node = val;
        this.generatorStyles();
    }
    ngAfterViewInit() {
        this.generatorStyles();
    }
    generatorStyles() {
        var _a;
        if (this.eleRef.nativeElement) {
            this.renderer.setAttribute(this.eleRef.nativeElement, 'id', `box-item-${this.node.id}`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'width', `${this.node.width}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'height', `${this.node.height}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'left', `${this.node.left}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'top', `${this.node.top}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'transform', `translate3d(0,0,0) rotate(${(_a = this.node.rotate) !== null && _a !== void 0 ? _a : 0}deg)`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-style', this.node.borderStyle);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-color', this.node.borderColor);
            this.renderer.setStyle(this.eleRef.nativeElement, 'border-width', `${this.node.borderWidth}px`);
            this.renderer.setStyle(this.eleRef.nativeElement, 'z-index', this.node.zIndex);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-image', this.node.backgroundImage);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-position', this.node.backgroundPosition);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-repeat', this.node.backgroundRepeat);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-size', this.node.backgroundSize);
            this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', this.node.backgroundColor);
        }
    }
}
BoxItemComponent.ɵfac = function BoxItemComponent_Factory(t) { return new (t || BoxItemComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
BoxItemComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BoxItemComponent, selectors: [["ce-box-item"]], inputs: { node: "node" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "node", 4, "ngFor", "ngForOf"], [3, "node"]], template: function BoxItemComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BoxItemComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", (ctx.node == null ? null : ctx.node.children) && (ctx.node == null ? null : ctx.node.children.length));
    } }, directives: [i1.NgIf, i1.NgForOf, BoxItemComponent], styles: ["ce-box-item{box-sizing:border-box;display:block;position:absolute}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BoxItemComponent, [{
        type: Component,
        args: [{
                selector: 'ce-box-item',
                templateUrl: 'box-item.component.html',
                styleUrls: ['box-item.component.less'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { node: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm94LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9ib3gtaXRlbS9ib3gtaXRlbS5jb21wb25lbnQudHMiLCJsaWIvY29tcG9uZW50cy9ib3gtaXRlbS9ib3gtaXRlbS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWlCLHVCQUF1QixFQUFFLFNBQVMsRUFBYyxLQUFLLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7SUNDakksaUNBQTRFOzs7SUFBNUIsOEJBQWE7OztJQUQvRCw2QkFDRTtJQUFBLGdHQUE0RTtJQUM5RSwwQkFBZTs7O0lBRGlCLGVBQWdCO0lBQWhCLDhDQUFnQjs7QURTaEQsTUFBTSxPQUFPLGdCQUFnQjtJQVczQixZQUFvQixRQUFtQixFQUFVLE1BQStCO1FBQTVELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUFHLENBQUM7SUFUcEYsSUFDSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxJQUFJLElBQUksQ0FBQyxHQUFhO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBSUQsZUFBZTtRQUNiLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU8sZUFBZTs7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENB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LHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDtxRkFJSyxJQUFJO2tCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSU5vZGUgfSBmcm9tICcuLi8uLi9zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NlLWJveC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdib3gtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydib3gtaXRlbS5jb21wb25lbnQubGVzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQm94SXRlbUNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9ub2RlOiBJTm9kZTxUPjtcbiAgQElucHV0KClcbiAgZ2V0IG5vZGUoKTogSU5vZGU8VD4ge1xuICAgIHJldHVybiB0aGlzLl9ub2RlO1xuICB9XG4gIHNldCBub2RlKHZhbDogSU5vZGU8VD4pIHtcbiAgICB0aGlzLl9ub2RlID0gdmFsO1xuICAgIHRoaXMuZ2VuZXJhdG9yU3R5bGVzKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxlUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50Pikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5nZW5lcmF0b3JTdHlsZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuZXJhdG9yU3R5bGVzKCkge1xuICAgIGlmICh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCBgYm94LWl0ZW0tJHt0aGlzLm5vZGUuaWR9YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMubm9kZS53aWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5ub2RlLmhlaWdodH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnbGVmdCcsIGAke3RoaXMubm9kZS5sZWZ0fXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICd0b3AnLCBgJHt0aGlzLm5vZGUudG9wfXB4YCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoMCwwLDApIHJvdGF0ZSgke3RoaXMubm9kZS5yb3RhdGUgPz8gMH1kZWcpYCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICdib3JkZXItc3R5bGUnLCB0aGlzLm5vZGUuYm9yZGVyU3R5bGUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnYm9yZGVyLWNvbG9yJywgdGhpcy5ub2RlLmJvcmRlckNvbG9yKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudCwgJ2JvcmRlci13aWR0aCcsIGAke3RoaXMubm9kZS5ib3JkZXJXaWR0aH1weGApO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnei1pbmRleCcsIHRoaXMubm9kZS56SW5kZXgpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1pbWFnZScsIHRoaXMubm9kZS5iYWNrZ3JvdW5kSW1hZ2UpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1wb3NpdGlvbicsIHRoaXMubm9kZS5iYWNrZ3JvdW5kUG9zaXRpb24pO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1yZXBlYXQnLCB0aGlzLm5vZGUuYmFja2dyb3VuZFJlcGVhdCk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlUmVmLm5hdGl2ZUVsZW1lbnQsICdiYWNrZ3JvdW5kLXNpemUnLCB0aGlzLm5vZGUuYmFja2dyb3VuZFNpemUpO1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZVJlZi5uYXRpdmVFbGVtZW50LCAnYmFja2dyb3VuZC1jb2xvcicsIHRoaXMubm9kZS5iYWNrZ3JvdW5kQ29sb3IpO1xuICAgIH1cbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vZGU/LmNoaWxkcmVuICYmIG5vZGU/LmNoaWxkcmVuLmxlbmd0aFwiPlxuICA8Y2UtYm94LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2Ygbm9kZS5jaGlsZHJlblwiIFtub2RlXT1cIml0ZW1cIj48L2NlLWJveC1pdGVtPlxuPC9uZy1jb250YWluZXI+XG4iXX0=