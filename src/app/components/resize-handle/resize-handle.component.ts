import { Component, ElementRef, HostBinding, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CeUtilsService } from 'src/app/services/utils.service';
import { updateNodes } from 'src/app/store/actions';
import { ICanvasPosition, INode, IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-resize-handle',
  templateUrl: './resize-handle.component.html',
  styleUrls: ['./resize-handle.component.less'],
})
export class ResizeHandleComponent implements OnDestroy {
  @HostBinding('style.display')
  public display = 'none';
  @HostBinding('style.width.px')
  public width: number;
  @HostBinding('style.height.px')
  public height: number;
  @HostBinding('style.left.px')
  public left: number;
  @HostBinding('style.top.px')
  public top: number;
  @HostBinding('style.transform')
  public transform: string;
  private subscription = new Subscription();
  public selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private nodes: INode[];
  public rotateSnapshot: [number, number, number, number, INode] = null;
  constructor(private store: Store<IStore>, private utils: CeUtilsService, private eleRef: ElementRef<HTMLElement>) {
    this.subscription.add(
      this.store.select('canvasPosition').subscribe((state) => {
        this.canvasPosition = state;
        this.refreshResizeHandleBoundingBox();
      })
    );
    this.subscription.add(
      this.store.select('nodes').subscribe((nodes) => {
        this.nodes = nodes;
        this.refreshResizeHandleBoundingBox();
      })
    );
    this.subscription.add(
      this.store
        .select('selected')
        .pipe(
          map((selected) => {
            this.display = selected.size ? 'block' : 'none';
            return selected;
          }),
          filter((selected) => !!selected.size)
        )
        .subscribe((selected) => {
          this.selected = selected;
          this.refreshResizeHandleBoundingBox();
        })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  refreshResizeHandleBoundingBox(): void {
    if (!this.selected || !this.nodes) {
      return;
    }
    if (this.selected.size > 1) {
      this.refreshBatchResizeHandle();
    } else {
      this.refreshSingleResizeHandle();
    }
  }

  refreshBatchResizeHandle(): void {
    const leftSet = new Set<number>();
    const topSet = new Set<number>();
    const rightSet = new Set<number>();
    const bottomSet = new Set<number>();
    this.selected.forEach((id) => {
      const node = this.utils.getNodeById(id, this.nodes);
      const { bl, br, tl, tr } = this.utils.getAbsolutePosition(
        node.left + node.width / 2,
        node.top + node.height / 2,
        node.width,
        node.height,
        node.rotate
      );
      leftSet.add(Math.min(tl[0], tr[0], bl[0], br[0]));
      topSet.add(Math.min(tl[1], tr[1], bl[1], br[1]));
      rightSet.add(Math.max(tl[0], tr[0], bl[0], br[0]));
      bottomSet.add(Math.max(tl[1], tr[1], bl[1], br[1]));
    });
    const left = Math.min(...leftSet);
    const right = Math.max(...rightSet);
    const top = Math.min(...topSet);
    const bottom = Math.max(...bottomSet);
    this.left = left * this.canvasPosition.scale;
    this.top = top * this.canvasPosition.scale;
    this.width = (right - left) * this.canvasPosition.scale;
    this.height = (bottom - top) * this.canvasPosition.scale;
    this.transform = '';
  }

  refreshSingleResizeHandle(): void {
    this.selected.forEach((id) => {
      const { left, top, width, height, rotate } = this.utils.getNodeById(id, this.nodes);
      this.left = left * this.canvasPosition.scale;
      this.top = top * this.canvasPosition.scale;
      this.width = width * this.canvasPosition.scale;
      this.height = height * this.canvasPosition.scale;
      this.transform = `rotate(${rotate ?? 0}deg)`;
    });
  }

  rotateStart(event: PointerEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const rect = this.eleRef.nativeElement.getBoundingClientRect().toJSON();
    this.rotateSnapshot = [
      rect.left + rect.width / 2,
      rect.top + rect.height / 2,
      rect.left + rect.width / 2,
      rect.top + rect.height / 2 - 100,
      this.utils.getNodeById([...this.selected][0], this.nodes),
    ];
  }

  rotating(event: PointerEvent): void {
    if (this.rotateSnapshot) {
      const [cx, cy, sx, sy, node] = this.rotateSnapshot;
      const ex = event.clientX;
      const ey = event.clientY;
      const rotate = Math.round(this.utils.getRotate(cx, cy, sx, sy, ex, ey));
      this.store.dispatch(
        updateNodes({
          nodes: [{ ...node, rotate: rotate === 360 ? 0 : rotate }],
        })
      );
    }
  }

  rotateStop(): void {
    this.rotateSnapshot = null;
  }
}
