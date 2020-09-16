import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { createSelector, select, Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { moveCanvas, scaleCanvas } from './store/actions';
import { IStore } from './store/store';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('scaleEle', { read: ElementRef })
  private scaleEleRef: ElementRef<HTMLDivElement>;
  private subscription = new Subscription();
  public canvasLeft: number;
  public canvasTop: number;
  public canvasScale: number;
  public startPoints: number[] = null;
  public get matrix(): string {
    return `matrix(1,0,0,1,${this.canvasLeft},${this.canvasTop})`;
  }
  constructor(private store: Store<IStore>) {
    const selectCanvasState = createSelector(
      (state: IStore) => state.canvasState.left,
      (state: IStore) => state.canvasState.top,
      (state: IStore) => state.canvasState.scale,
      (left, top, scale) => ({ left, top, scale })
    );
    this.subscription.add(
      this.store.pipe(select(selectCanvasState)).subscribe((state) => {
        this.canvasLeft = state.left;
        this.canvasTop = state.top;
        this.canvasScale = state.scale;
      })
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.listenScaleEvent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dragStart(ev: PointerEvent): void {
    this.startPoints = [ev.clientX, ev.clientY, this.canvasLeft, this.canvasTop];
  }

  dragging(ev: PointerEvent): void {
    if (this.startPoints) {
      const [sx, sy, left, top] = this.startPoints;
      const [mx, my] = [ev.clientX - sx, ev.clientY - sy];
      this.store.dispatch(moveCanvas({ left: left + mx, top: top + my }));
    }
  }

  dragEnd(): void {
    this.startPoints = null;
  }

  listenScaleEvent(): void {
    const scaleEle = this.scaleEleRef.nativeElement;
    this.subscription.add(
      fromEvent<WheelEvent & { wheelDelta: number }>(scaleEle, 'wheel')
        .pipe(filter((e) => e.ctrlKey))
        .subscribe((e) => {
          e.preventDefault();
          e.stopPropagation();
          const containerBox = scaleEle.getBoundingClientRect();
          const wheelDelta = (e.wheelDelta / 120 || -e.deltaY / 3) * 0.05;
          const [x, y] = [e.clientX - containerBox.left, e.clientY - containerBox.top];
          if (this.canvasScale + wheelDelta >= 0.2) {
            this.store.dispatch(
              scaleCanvas({
                scale: this.canvasScale + wheelDelta,
                left: (this.canvasLeft - x) * (wheelDelta / this.canvasScale) + this.canvasLeft,
                top: (this.canvasTop - y) * (wheelDelta / this.canvasScale) + this.canvasTop,
              })
            );
          }
        })
    );
  }
}
