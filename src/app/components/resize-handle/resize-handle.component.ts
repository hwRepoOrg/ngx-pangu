import { Component, ElementRef, HostBinding, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { evaluate } from 'mathjs';
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
      event.clientX,
      event.clientY,
      this.utils.getNodeById([...this.selected][0], this.nodes),
    ];
  }

  rotating(event: PointerEvent): void {
    if (this.rotateSnapshot) {
      const [cx, cy, sx, sy, node] = this.rotateSnapshot;
      const ex = event.clientX;
      const ey = event.clientY;
      const moveRotate = getRotate(cx, cy, sx, sy, ex, ey, node.rotate ?? 0);
      const patchedRotate = (node.rotate ?? 0) + Math.round(moveRotate);
      const relativeRotate = patchedRotate >= 360 ? patchedRotate % 360 : patchedRotate;
      const absoluteRotate = relativeRotate < 0 ? 360 + relativeRotate : relativeRotate;
      this.store.dispatch(
        updateNodes({
          nodes: [{ ...node, rotate: absoluteRotate }],
        })
      );
    }
  }

  rotateStop(): void {
    this.rotateSnapshot = null;
  }
}

function getRotate(cx: number, cy: number, sx: number, sy: number, ex: number, ey: number, originalRotate: number): number {
  const rotate = evaluate(
    `acos(((cx-sx)^2+(cy-sy)^2+(cx-ex)^2+(cy-ey)^2 - (sx-ex)^2-(sy-ey)^2)/(2*sqrt((cx-sx)^2+(cy-sy)^2)*sqrt((cx-ex)^2+(cy-ey)^2)))*180/PI`,
    {
      cx,
      cy,
      ex,
      ey,
      sx,
      sy,
    }
  );
  const y = getLineYAxisByXAxis(ex, cx, cy, sx, sy);

  return ey >= y ? (originalRotate > 180 ? -rotate : rotate) : originalRotate > 180 ? rotate : -rotate;
}

function getLineYAxisByXAxis(x: number, cx: number, cy: number, sx: number, sy: number): number {
  return evaluate(`(x - cx)*(sy-cy)/(sx-cx)+cy`, { x, cx, cy, sx, sy });
}
