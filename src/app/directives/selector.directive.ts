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
          filter(() => !this.ceSelectorDisabled),
          switchMap((ev) => {
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
            const boxRect = this.eleRef.nativeElement.getBoundingClientRect();
            let x: number;
            let y: number;
            const [mx, my] = [e.clientX - this.startPointSnapshot[0], e.clientY - this.startPointSnapshot[1]];
            if (mx >= 0) {
              x = this.startPointSnapshot[0] - boxRect.left;
            } else {
              x = e.clientX - boxRect.left;
            }
            if (my >= 0) {
              y = this.startPointSnapshot[1] - boxRect.top;
            } else {
              y = e.clientY - boxRect.top;
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
