import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { fromEvent, Subscription } from 'rxjs';
import { filter, finalize, switchMap, takeUntil } from 'rxjs/operators';

export interface ISelectorRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

@Directive({
  selector: '[ceSelector]',
})
export class SelectorDirective implements OnInit, OnDestroy {
  private subscription = new Subscription();
  private move$ = fromEvent<PointerEvent>(window, 'pointermove');
  private up$ = fromEvent<PointerEvent>(window, 'pointerup');
  private startPointSnapshot: number[] = null;
  private boxRect: DOMRect;

  @Input()
  @InputBoolean()
  public ceSelectorDisabled = false;
  @Output()
  public ceOnSelectorStart = new EventEmitter();
  @Output()
  public ceOnSelectorMoving = new EventEmitter<ISelectorRect>();
  @Output()
  public ceOnSelectorStop = new EventEmitter();
  constructor(private eleRef: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    this.subscription.add(
      fromEvent<PointerEvent>(this.eleRef.nativeElement, 'pointerdown')
        .pipe(
          filter((e) => e.button === 0),
          filter(() => !this.ceSelectorDisabled),
          switchMap((ev) => {
            this.boxRect = this.eleRef.nativeElement.getBoundingClientRect();
            this.startPointSnapshot = [ev.clientX, ev.clientY];
            this.ceOnSelectorStart.emit();
            return this.move$.pipe(
              finalize(() => {
                this.startPointSnapshot = null;
                this.ceOnSelectorStop.emit();
              }),
              takeUntil(this.up$)
            );
          })
        )
        .subscribe((e) => {
          if (this.startPointSnapshot) {
            let x: number;
            let y: number;
            const [mx, my] = [e.clientX - this.startPointSnapshot[0], e.clientY - this.startPointSnapshot[1]];
            if (mx >= 0) {
              x = this.startPointSnapshot[0] - this.boxRect.left;
            } else {
              x = e.clientX - this.boxRect.left;
            }
            if (my >= 0) {
              y = this.startPointSnapshot[1] - this.boxRect.top;
            } else {
              y = e.clientY - this.boxRect.top;
            }
            this.ceOnSelectorMoving.emit({ x, y, width: Math.abs(mx), height: Math.abs(my) });
          }
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
