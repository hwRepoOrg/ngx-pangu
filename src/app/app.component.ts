import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ISelectorRect } from './directives/selector.directive';
import { clearBorderedNodes, clearSelectedNodes, setBorderedNodes, updateCanvasPosition } from './store/actions';
import { INode, IStore } from './store/store';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ElementRef })
  private containerEleRef: ElementRef<HTMLDivElement>;
  private subscription = new Subscription();
  public canvasLeft: number;
  public canvasTop: number;
  public canvasScale: number;
  public startPoints: number[] = null;
  public get matrix(): string {
    return `translate3d(${this.canvasLeft}px,${this.canvasTop}px,0)`;
  }
  public selectorRect: ISelectorRect = null;
  public nodes: INode[];
  private nodesRectSnapshot: Map<string, Partial<DOMRect>> = null;
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.select('canvasPosition').subscribe((state) => {
        this.canvasLeft = state.left;
        this.canvasTop = state.top;
        this.canvasScale = state.scale;
      })
    );
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
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
      this.store.dispatch(updateCanvasPosition({ left: left + mx, top: top + my }));
    }
  }

  dragEnd(): void {
    this.startPoints = null;
  }

  listenScaleEvent(): void {
    const scaleEle = this.containerEleRef.nativeElement;
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
              updateCanvasPosition({
                scale: this.canvasScale + wheelDelta,
                left: (this.canvasLeft - x) * (wheelDelta / this.canvasScale) + this.canvasLeft,
                top: (this.canvasTop - y) * (wheelDelta / this.canvasScale) + this.canvasTop,
              })
            );
          }
        })
    );
  }

  selectorStart(): void {
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(clearSelectedNodes());
    const boxRect = this.containerEleRef.nativeElement.getBoundingClientRect();
    this.nodesRectSnapshot = new Map(
      this.nodes
        .map((node) => {
          const dom = document.querySelector(`#box-item-${node.id}`);
          return [node.id, dom && dom.getBoundingClientRect()] as [string, DOMRect];
        })
        .filter(([, rect]) => !!rect)
        .map(([id, { width, height, left, top }]) => [id, { width, height, left: left - boxRect.left, top: top - boxRect.top }])
    );
  }

  selectorMoving(rect: ISelectorRect): void {
    this.selectorRect = rect;
    const ids = [];
    this.nodesRectSnapshot.forEach((item, id) => {
      if (isInBound(item, rect)) {
        ids.push(id);
      }
    });
    this.store.dispatch(setBorderedNodes({ ids }));
  }

  selectorEnd(): void {
    this.selectorRect = null;
    this.nodesRectSnapshot = null;
  }
}

function isInBound(rect: Partial<DOMRect>, bound: ISelectorRect): boolean {
  return (
    rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height
  );
}
