import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ISelectorRect } from './directives/selector.directive';
import { clearBorderedNodes, clearSelectedNodes, setBorderedNodes, setSelectedNodes, updateCanvasPosition } from './store/actions';
import { ICanvasPosition, INode, IRefLineDirection, IRefLineState, IStore } from './store/store';

@Component({
  selector: 'ce-editor',
  templateUrl: 'angular-editor-lib.component.html',
  styleUrls: ['angular-editor-lib.less'],
  encapsulation: ViewEncapsulation.None,
})
export class AngularEditorLibComponent {
  @ViewChild('container', { read: ElementRef, static: true })
  private containerEleRef: ElementRef<HTMLDivElement>;
  private subscription = new Subscription();
  public canvasPosition: ICanvasPosition;
  public startPoints: number[] = [];
  public matrix: string;
  public selectorRect: ISelectorRect = null;
  public nodes: INode[];
  public refLineState: { [P in IRefLineDirection]: IRefLineState };
  private nodesRectSnapshot: Map<string, Partial<DOMRect>> = null;
  private nodeIdList: string[] = null;
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.select('canvasPosition').subscribe((canvasPosition) => {
        this.canvasPosition = canvasPosition;
        this.matrix = `translate3d(${this.canvasPosition.left}px,${this.canvasPosition.top}px,0)`;
      })
    );
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
    this.subscription.add(this.store.select('refLineState').subscribe((refLineState) => (this.refLineState = refLineState)));
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
    this.nodes
      .filter((node) => !node.locked)
      .forEach((node) => {
        const rect = document.querySelector(`#box-item-${node.id}`)?.getBoundingClientRect();
        if (rect) {
          const { width, height, left, top } = rect;
          this.nodesRectSnapshot.set(node.id, { width, height, left: left - boxRect.left, top: top - boxRect.top });
        }
      });
  }

  selectorMoving(rect: ISelectorRect): void {
    this.selectorRect = rect;
    this.nodeIdList = [];
    this.nodesRectSnapshot.forEach((item, id) => {
      if (isInBound(item, this.selectorRect)) {
        this.nodeIdList.push(id);
      }
    });
    this.store.dispatch(setBorderedNodes({ ids: [...this.nodeIdList] }));
    this.store.dispatch(setSelectedNodes({ ids: [...this.nodeIdList] }));
  }

  selectorEnd(): void {
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