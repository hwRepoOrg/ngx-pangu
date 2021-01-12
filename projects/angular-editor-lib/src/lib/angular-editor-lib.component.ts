import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { clearBordered, clearSelected, setBorderedNodes, setSelectedNodes, updateCanvasPosition } from './actions';
import { ISelectorRect } from './directives/selector.directive';
import { EditorStore } from './services/store.service';
import { ICanvasPosition, INode, IPanel, IRefLineDirection, IRefLineState, IStore } from './store';

@Component({
  selector: 'ce-editor',
  templateUrl: 'angular-editor-lib.component.html',
  styleUrls: ['angular-editor-lib.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [EditorStore],
})
export class AngularEditorLibComponent<T = any> {
  @Input()
  set state(state: Partial<IStore<T>>) {
    this.editorStore?.setState((oldState) => ({ ...oldState, ...state }));
  }
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
  constructor(public editorStore: EditorStore) {
    this.editorStore
      .select((state) => state.canvasPosition)
      .subscribe((canvasPosition) => {
        this.canvasPosition = canvasPosition;
        this.matrix = `translate3d(${this.canvasPosition.left}px,${this.canvasPosition.top}px,0)`;
      });

    this.editorStore.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
    this.editorStore.select((state) => state.refLineState).subscribe((refLineState) => (this.refLineState = refLineState));
  }

  ngAfterViewInit(): void {
    this.listenScaleEvent();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  panelsTrackByFn(_i: number, panel: IPanel<any>) {
    return `${panel.key}_${panel.show.toString()}`;
  }

  dragStart(ev: PointerEvent): void {
    this.startPoints = [ev.clientX, ev.clientY, this.canvasPosition.left, this.canvasPosition.top];
  }

  dragging(ev: PointerEvent): void {
    if (this.startPoints) {
      const [sx, sy, left, top] = this.startPoints;
      const [mx, my] = [ev.clientX - sx, ev.clientY - sy];
      this.editorStore.dispatch(updateCanvasPosition({ left: left + mx, top: top + my }));
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
            this.editorStore.dispatch(
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
    this.editorStore.dispatch(setBorderedNodes<T>(this.nodeIdList));
    this.editorStore.dispatch(setSelectedNodes(this.nodeIdList));
  }

  selectorEnd(): void {
    this.nodeIdList = [];
    this.selectorRect = null;
    this.nodesRectSnapshot = null;
  }

  private clearSelectAndBorder(): void {
    this.editorStore.dispatch(clearBordered<T>());
    this.editorStore.dispatch(clearSelected<T>());
  }
}

function isInBound(rect: Partial<DOMRect>, bound: ISelectorRect): boolean {
  return (
    rect.left >= bound.x && rect.top >= bound.y && rect.left + rect.width <= bound.x + bound.width && rect.top + rect.height <= bound.y + bound.height
  );
}
