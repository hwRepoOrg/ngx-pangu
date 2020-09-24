import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ISelectorRect } from './directives/selector.directive';
import { clearBorderedNodes, clearSelectedNodes, setBorderedNodes, setSelectedNodes, updateCanvasPosition } from './store/actions';
import { ICanvasPosition, INode, IStore } from './store/store';

@Component({
  selector: 'ce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ElementRef, static: true })
  private containerEleRef: ElementRef<HTMLDivElement>;
  private subscription = new Subscription();
  private canvasPosition: ICanvasPosition;
  public startPoints: number[] = [];
  public get matrix(): string {
    return `translate3d(${this.canvasPosition.left}px,${this.canvasPosition.top}px,0)`;
  }
  public selectorRect: ISelectorRect = null;
  public nodes: INode[];
  private nodesRectSnapshot: Map<string, Partial<DOMRect>> = null;
  private nodeIdList: string[] = null;
  constructor(private store: Store<IStore>, private cdr: ChangeDetectorRef) {
    this.subscription.add(
      this.store.select('canvasPosition').subscribe((canvasPosition) => {
        this.canvasPosition = canvasPosition;
      })
    );
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
  }

  ngAfterViewInit(): void {
    this.listenScaleEvent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dragStart(ev: PointerEvent): void {
    this.startPoints = [ev.clientX, ev.clientY, this.canvasPosition.left, this.canvasPosition.top];
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
          if (this.canvasPosition.scale + wheelDelta >= 0.2) {
            this.store.dispatch(
              updateCanvasPosition({
                scale: this.canvasPosition.scale + wheelDelta,
                left: (this.canvasPosition.left - x) * (wheelDelta / this.canvasPosition.scale) + this.canvasPosition.left,
                top: (this.canvasPosition.top - y) * (wheelDelta / this.canvasPosition.scale) + this.canvasPosition.top,
              })
            );
          }
        })
    );
  }

  selectorStart(): void {
    this.clearSelectAndBorder();
    const boxRect = this.containerEleRef.nativeElement.getBoundingClientRect();
    this.nodesRectSnapshot = new Map<string, Partial<DOMRect>>();
    this.nodes.forEach((node) => {
      const rect = document.querySelector(`#box-item-${node.id}`)?.getBoundingClientRect();
      if (rect) {
        const { width, height, left, top } = rect;
        this.nodesRectSnapshot.set(node.id, { width, height, left: left - boxRect.left, top: top - boxRect.top });
      }
    });
  }

  selectorMoving(rect: ISelectorRect): void {
    this.selectorRect = rect;
  }

  selectorEnd(): void {
    if (this.selectorRect) {
      this.nodeIdList = [];
      this.nodesRectSnapshot.forEach((item, id) => {
        if (isInBound(item, this.selectorRect)) {
          this.nodeIdList.push(id);
        }
      });
      this.store.dispatch(setBorderedNodes({ ids: [...this.nodeIdList] }));
      this.store.dispatch(setSelectedNodes({ ids: [...this.nodeIdList] }));
    }
    this.nodeIdList = [];
    this.selectorRect = null;
    this.nodesRectSnapshot = null;
  }

  private clearSelectAndBorder(): void {
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(clearSelectedNodes());
  }
}

function isInBound(rect: Partial<DOMRect>, bound: ISelectorRect): boolean {
  return (
    rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height
  );
}
