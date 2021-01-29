import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { fromEvent, Subscription } from 'rxjs';
import { filter, finalize, switchMap, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class SelectorDirective {
    constructor(eleRef) {
        this.eleRef = eleRef;
        this.subscription = new Subscription();
        this.move$ = fromEvent(window, 'pointermove');
        this.up$ = fromEvent(window, 'pointerup');
        this.startPointSnapshot = null;
        this.ceSelectorDisabled = false;
        this.ceOnSelectorStart = new EventEmitter();
        this.ceOnSelectorMoving = new EventEmitter();
        this.ceOnSelectorStop = new EventEmitter();
    }
    ngOnInit() {
        this.subscription.add(fromEvent(this.eleRef.nativeElement, 'pointerdown')
            .pipe(filter((e) => e.button === 0), filter(() => !this.ceSelectorDisabled), switchMap((ev) => {
            this.boxRect = this.eleRef.nativeElement.getBoundingClientRect();
            this.startPointSnapshot = [ev.clientX, ev.clientY];
            this.ceOnSelectorStart.emit();
            return this.move$.pipe(finalize(() => {
                this.startPointSnapshot = null;
                this.ceOnSelectorStop.emit();
            }), takeUntil(this.up$));
        }))
            .subscribe((e) => {
            if (this.startPointSnapshot) {
                let x;
                let y;
                const [mx, my] = [e.clientX - this.startPointSnapshot[0], e.clientY - this.startPointSnapshot[1]];
                if (mx >= 0) {
                    x = this.startPointSnapshot[0] - this.boxRect.left;
                }
                else {
                    x = e.clientX - this.boxRect.left;
                }
                if (my >= 0) {
                    y = this.startPointSnapshot[1] - this.boxRect.top;
                }
                else {
                    y = e.clientY - this.boxRect.top;
                }
                this.ceOnSelectorMoving.emit({ x, y, width: Math.abs(mx), height: Math.abs(my) });
            }
        }));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SelectorDirective.ɵfac = function SelectorDirective_Factory(t) { return new (t || SelectorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
SelectorDirective.ɵdir = i0.ɵɵdefineDirective({ type: SelectorDirective, selectors: [["", "ceSelector", ""]], inputs: { ceSelectorDisabled: "ceSelectorDisabled" }, outputs: { ceOnSelectorStart: "ceOnSelectorStart", ceOnSelectorMoving: "ceOnSelectorMoving", ceOnSelectorStop: "ceOnSelectorStop" }, exportAs: ["ceSelector"] });
__decorate([
    InputBoolean()
], SelectorDirective.prototype, "ceSelectorDisabled", void 0);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectorDirective, [{
        type: Directive,
        args: [{
                selector: '[ceSelector]',
                exportAs: 'ceSelector',
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { ceSelectorDisabled: [{
            type: Input
        }], ceOnSelectorStart: [{
            type: Output
        }], ceOnSelectorMoving: [{
            type: Output
        }], ceOnSelectorStop: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3IuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItZWRpdG9yLWxpYi9zcmMvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlcy9zZWxlY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBYXhFLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCLFlBQW9CLE1BQWtDO1FBQWxDLFdBQU0sR0FBTixNQUFNLENBQTRCO1FBZjlDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsU0FBUyxDQUFlLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUN2RCxRQUFHLEdBQUcsU0FBUyxDQUFlLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNuRCx1QkFBa0IsR0FBYSxJQUFJLENBQUM7UUFLckMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFdkMsdUJBQWtCLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFdkQscUJBQWdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUNZLENBQUM7SUFFMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixTQUFTLENBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFD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cmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmluYWxpemUsIHN3aXRjaE1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZWxlY3RvclJlY3Qge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjZVNlbGVjdG9yXScsXG4gIGV4cG9ydEFzOiAnY2VTZWxlY3RvcicsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgcHJpdmF0ZSBtb3ZlJCA9IGZyb21FdmVudDxQb2ludGVyRXZlbnQ+KHdpbmRvdywgJ3BvaW50ZXJtb3ZlJyk7XG4gIHByaXZhdGUgdXAkID0gZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4od2luZG93LCAncG9pbnRlcnVwJyk7XG4gIHByaXZhdGUgc3RhcnRQb2ludFNuYXBzaG90OiBudW1iZXJbXSA9IG51bGw7XG4gIHByaXZhdGUgYm94UmVjdDogRE9NUmVjdDtcblxuICBASW5wdXQoKVxuICBASW5wdXRCb29sZWFuKClcbiAgcHVibGljIGNlU2VsZWN0b3JEaXNhYmxlZCA9IGZhbHNlO1xuICBAT3V0cHV0KClcbiAgcHVibGljIGNlT25TZWxlY3RvclN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KClcbiAgcHVibGljIGNlT25TZWxlY3Rvck1vdmluZyA9IG5ldyBFdmVudEVtaXR0ZXI8SVNlbGVjdG9yUmVjdD4oKTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBjZU9uU2VsZWN0b3JTdG9wID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZVJlZjogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD4pIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgZnJvbUV2ZW50PFBvaW50ZXJFdmVudD4odGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudCwgJ3BvaW50ZXJkb3duJylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKChlKSA9PiBlLmJ1dHRvbiA9PT0gMCksXG4gICAgICAgICAgZmlsdGVyKCgpID0+ICF0aGlzLmNlU2VsZWN0b3JEaXNhYmxlZCksXG4gICAgICAgICAgc3dpdGNoTWFwKChldikgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib3hSZWN0ID0gdGhpcy5lbGVSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRQb2ludFNuYXBzaG90ID0gW2V2LmNsaWVudFgsIGV2LmNsaWVudFldO1xuICAgICAgICAgICAgdGhpcy5jZU9uU2VsZWN0b3JTdGFydC5lbWl0KCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlJC5waXBlKFxuICAgICAgICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFBvaW50U25hcHNob3QgPSBudWxsO1xuICAgICAgICAgICAgICAgIHRoaXMuY2VPblNlbGVjdG9yU3RvcC5lbWl0KCk7XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy51cCQpXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXJ0UG9pbnRTbmFwc2hvdCkge1xuICAgICAgICAgICAgbGV0IHg6IG51bWJlcjtcbiAgICAgICAgICAgIGxldCB5OiBudW1iZXI7XG4gICAgICAgICAgICBjb25zdCBbbXgsIG15XSA9IFtlLmNsaWVudFggLSB0aGlzLnN0YXJ0UG9pbnRTbmFwc2hvdFswXSwgZS5jbGllbnRZIC0gdGhpcy5zdGFydFBvaW50U25hcHNob3RbMV1dO1xuICAgICAgICAgICAgaWYgKG14ID49IDApIHtcbiAgICAgICAgICAgICAgeCA9IHRoaXMuc3RhcnRQb2ludFNuYXBzaG90WzBdIC0gdGhpcy5ib3hSZWN0LmxlZnQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB4ID0gZS5jbGllbnRYIC0gdGhpcy5ib3hSZWN0LmxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobXkgPj0gMCkge1xuICAgICAgICAgICAgICB5ID0gdGhpcy5zdGFydFBvaW50U25hcHNob3RbMV0gLSB0aGlzLmJveFJlY3QudG9wO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgeSA9IGUuY2xpZW50WSAtIHRoaXMuYm94UmVjdC50b3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNlT25TZWxlY3Rvck1vdmluZy5lbWl0KHsgeCwgeSwgd2lkdGg6IE1hdGguYWJzKG14KSwgaGVpZ2h0OiBNYXRoLmFicyhteSkgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=