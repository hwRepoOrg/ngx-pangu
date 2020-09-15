import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { filter, finalize, map, switchMap, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[ceDraggable]',
  exportAs: 'ceDraggable',
})
export class DraggableDirective implements OnInit, OnDestroy {
  @Input()
  @InputBoolean()
  public ceUseSpace = false;
  @Output()
  public ceOnStart = new EventEmitter<PointerEvent>();
  @Output()
  public ceOnMove = new EventEmitter<MouseEvent>();
  @Output()
  public ceOnStop = new EventEmitter<PointerEvent>();
  @Output()
  public ceOnSpaceKeyDown = new EventEmitter<void>();
  public spaceKeyDown = false;
  private subscription = new Subscription();
  private mouseMove$ = fromEvent<PointerEvent>(window, 'pointermove');
  private mouseUp$ = fromEvent<PointerEvent>(window, 'pointerup');
  private mouseDown$: Observable<PointerEvent>;
  private mouseEnter$: Observable<PointerEvent>;
  private mouseLeave$: Observable<PointerEvent>;
  private keyDown$ = fromEvent<KeyboardEvent>(document, 'keydown');
  private keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
  constructor(private eleRef: ElementRef<HTMLElement>) {
    this.mouseDown$ = fromEvent<PointerEvent>(this.eleRef.nativeElement, 'pointerdown');
    this.mouseEnter$ = fromEvent<PointerEvent>(this.eleRef.nativeElement, 'pointerenter');
    this.mouseLeave$ = fromEvent<PointerEvent>(this.eleRef.nativeElement, 'pointerleave');
  }

  ngOnInit(): void {
    this.listenSpaceKeyEvent();
    this.mouseDown$
      .pipe(
        filter(() => (this.ceUseSpace ? this.spaceKeyDown : true)),
        switchMap((startEv) => {
          this.ceOnStart.emit(startEv);
          return this.mouseMove$.pipe(takeUntil(this.mouseUp$.pipe(map((stopEv) => this.ceOnStop.emit(stopEv)))));
        })
      )
      .subscribe((moveEv) => this.ceOnMove.emit(moveEv));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  listenSpaceKeyEvent(): void {
    this.subscription.add(
      this.mouseEnter$
        .pipe(
          switchMap(() =>
            this.keyDown$.pipe(
              switchMap((e) => {
                this.spaceKeyDown = e.key === ' ';
                if (this.spaceKeyDown) {
                  e.preventDefault();
                  e.stopPropagation();
                }
                return this.keyUp$;
              }),
              map(() => {
                this.spaceKeyDown = false;
                this.ceOnStop.emit();
              }),
              takeUntil(this.mouseLeave$),
              finalize(() => {
                this.spaceKeyDown = false;
                this.ceOnStop.emit();
              })
            )
          )
        )
        .subscribe()
    );
  }
}
