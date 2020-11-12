import { Component, ElementRef, HostBinding, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CeUtilsService, IAbsolutePosition, IDOMRect, IRectDirection } from 'src/app/services/utils.service';
import { updateNodesSize } from 'src/app/store/actions';
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
  public get transform(): string {
    return `rotate(${this.rotate ?? 0}deg)`;
  }
  public selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private rotate: number;
  private nodes: INode[];
  private resizeMode: 'GROUP' | 'SINGLE';
  private groupRectSnapshot: IDOMRect;
  private groupAbsolutePositionSnapshot: IAbsolutePosition;
  private resizePointSnapshot: { absolute: [number, number]; relative: [number, number] };
  private nodePositionSnapshotList = new Map<string, IAbsolutePosition>();
  private subscription = new Subscription();

  constructor(private store: Store<IStore>, private utils: CeUtilsService, public eleRef: ElementRef<HTMLElement>) {
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
    this.rotate = null;
  }

  refreshSingleResizeHandle(): void {
    this.selected.forEach((id) => {
      const { left, top, width, height, rotate } = this.utils.getNodeById(id, this.nodes);
      this.left = left * this.canvasPosition.scale;
      this.top = top * this.canvasPosition.scale;
      this.width = width * this.canvasPosition.scale;
      this.height = height * this.canvasPosition.scale;
      this.rotate = rotate ?? 0;
    });
  }

  resizeStart(event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const { scale } = this.canvasPosition;
    const canvasRect = document.querySelector('ce-canvas').getBoundingClientRect();
    this.groupRectSnapshot = { width: this.width / scale, height: this.height / scale, left: this.left / scale, top: this.top / scale };
    this.groupAbsolutePositionSnapshot = this.utils.getAbsolutePosition(
      (this.left + this.width / 2) / scale,
      (this.top + this.height / 2) / scale,
      this.width / scale,
      this.height / scale
    );
    this.resizePointSnapshot = {
      absolute: [event.clientX, event.clientY],
      relative: [(event.clientX - canvasRect.left) / scale, (event.clientY - canvasRect.top) / scale],
    };
    this.selected.forEach((id) => {
      const node = this.nodes.find((i) => i.id === id);
      const nodeAbsolutePosition = this.utils.getAbsolutePosition(
        node.left + node.width / 2,
        node.top + node.height / 2,
        node.width,
        node.height,
        node.rotate
      );
      if (this.selected.size > 1) {
        this.resizeMode = 'GROUP';
        const percentPosition = this.utils.getItemPercentPositionInGroup({ ...this.groupRectSnapshot }, nodeAbsolutePosition);
        this.nodePositionSnapshotList.set(id, percentPosition);
      } else {
        this.resizeMode = 'SINGLE';
        this.nodePositionSnapshotList.set(id, nodeAbsolutePosition);
      }
    });
  }

  resizing(event: PointerEvent, direction: IRectDirection): void {
    if (this.resizePointSnapshot && this.groupRectSnapshot && this.resizeMode) {
      const [mx, my] = [event.clientX - this.resizePointSnapshot.absolute[0], event.clientY - this.resizePointSnapshot.absolute[1]];
      switch (this.resizeMode) {
        case 'GROUP':
          this.resizingNodeList(direction, mx, my);
          break;
        case 'SINGLE':
          this.resizingNode(direction, mx, my);
          break;
      }
    }
  }

  resizeEnd(): void {
    this.groupRectSnapshot = null;
    this.resizePointSnapshot = null;
    this.nodePositionSnapshotList.clear();
  }

  resizingNodeList(direction: IRectDirection, mx: number, my: number): void {
    const { scale } = this.canvasPosition;
    const { relative } = this.resizePointSnapshot;
    const endPointer: [number, number] = [relative[0] + mx / scale, relative[1] + my / scale];
    const line = getGroupDiagonalByDirection(direction, this.groupAbsolutePositionSnapshot);
    const newPoint = getPointByEndPointer(direction, endPointer, line);
    const newGroupRect: IDOMRect = getGroupRectByDirectionPoint(direction, this.groupAbsolutePositionSnapshot, newPoint);
    const nodesSizeMap = new Map<string, IDOMRect>();
    this.nodePositionSnapshotList.forEach(({ tl, bl, br, tr }, id) => {
      nodesSizeMap.set(
        id,
        this.utils.getRelativePosition({
          bl: [bl[0] * newGroupRect.width + newGroupRect.left, bl[1] * newGroupRect.height + newGroupRect.top],
          br: [br[0] * newGroupRect.width + newGroupRect.left, br[1] * newGroupRect.height + newGroupRect.top],
          tl: [tl[0] * newGroupRect.width + newGroupRect.left, tl[1] * newGroupRect.height + newGroupRect.top],
          tr: [tr[0] * newGroupRect.width + newGroupRect.left, tr[1] * newGroupRect.height + newGroupRect.top],
        })
      );
    });
    this.store.dispatch(updateNodesSize({ nodesSizeMap }));
  }

  resizingNode(direction: IRectDirection, mx: number, my: number): void {
    const { scale } = this.canvasPosition;
    const { relative } = this.resizePointSnapshot;
    const endPointer: [number, number] = [relative[0] + mx / scale, relative[1] + my / scale];
    let newDOMRect: IDOMRect;
    this.nodePositionSnapshotList.forEach(({ bl, br, tl, tr }, id) => {
      let newTLPoint: [number, number];
      let newTRPoint: [number, number];
      let newBLPoint: [number, number];
      let newBRPoint: [number, number];
      switch (direction) {
        case 'tl':
          newTRPoint = this.utils.getVerticalLineCrossPoint(br, tr, endPointer);
          newBLPoint = this.utils.getVerticalLineCrossPoint(br, bl, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl: endPointer, tr: newTRPoint, bl: newBLPoint, br });
          break;
        case 'tr':
          newTLPoint = this.utils.getVerticalLineCrossPoint(bl, tl, endPointer);
          newBRPoint = this.utils.getVerticalLineCrossPoint(bl, br, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl: newTLPoint, tr: endPointer, bl, br: newBRPoint });
          break;
        case 'bl':
          newTLPoint = this.utils.getVerticalLineCrossPoint(tr, tl, endPointer);
          newBRPoint = this.utils.getVerticalLineCrossPoint(tr, br, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl: newTLPoint, tr, bl: endPointer, br: newBRPoint });
          break;
        case 'br':
          newTRPoint = this.utils.getVerticalLineCrossPoint(tl, tr, endPointer);
          newBLPoint = this.utils.getVerticalLineCrossPoint(tl, bl, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl, tr: newTRPoint, bl: newBLPoint, br: endPointer });
          break;
        case 't':
          newTLPoint = this.utils.getVerticalLineCrossPoint(bl, tl, endPointer);
          newTRPoint = this.utils.getVerticalLineCrossPoint(br, tr, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl: newTLPoint, tr: newTRPoint, bl, br });
          break;
        case 'r':
          newTRPoint = this.utils.getVerticalLineCrossPoint(tl, tr, endPointer);
          newBRPoint = this.utils.getVerticalLineCrossPoint(bl, br, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl, tr: newTRPoint, bl, br: newBRPoint });
          break;
        case 'b':
          newBLPoint = this.utils.getVerticalLineCrossPoint(tl, bl, endPointer);
          newBRPoint = this.utils.getVerticalLineCrossPoint(tr, br, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl, tr, bl: newBLPoint, br: newBRPoint });
          break;
        case 'l':
          newTLPoint = this.utils.getVerticalLineCrossPoint(tr, tl, endPointer);
          newBLPoint = this.utils.getVerticalLineCrossPoint(br, bl, endPointer);
          newDOMRect = this.utils.getRelativePosition({ tl: newTLPoint, tr, bl: newBLPoint, br });
          break;
      }
      this.store.dispatch(
        updateNodesSize({ nodesSizeMap: new Map<string, IDOMRect>([[id, newDOMRect]]) })
      );
    });
  }
}

function getGroupDiagonalByDirection(direction: IRectDirection, absolutePosition: IAbsolutePosition): [[number, number], [number, number]] {
  switch (direction) {
    case 'tl':
    case 'br':
      return [absolutePosition.tl, absolutePosition.br];
    case 'tr':
    case 'bl':
      return [absolutePosition.tr, absolutePosition.bl];
  }
}

function getPointByEndPointer(direction: IRectDirection, endPointer: [number, number], line: [[number, number], [number, number]]): [number, number] {
  switch (direction) {
    case 'tl':
    case 'tr':
      if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
        return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
      } else {
        return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
      }
    case 'bl':
    case 'br':
      if (endPointer[1] >= CeUtilsService.shared.getPointInLine('y', endPointer[0], line)) {
        return [CeUtilsService.shared.getPointInLine('x', endPointer[1], line), endPointer[1]];
      } else {
        return [endPointer[0], CeUtilsService.shared.getPointInLine('y', endPointer[0], line)];
      }
  }
}

function getGroupRectByDirectionPoint(direction: IRectDirection, absolutePoint: IAbsolutePosition, point: [number, number]): IDOMRect {
  switch (direction) {
    case 'tl':
      return { left: point[0], top: point[1], width: absolutePoint.tr[0] - point[0], height: absolutePoint.bl[1] - point[1] };
    case 'tr':
      return { left: absolutePoint.tl[0], top: point[1], width: point[0] - absolutePoint.tl[0], height: absolutePoint.br[1] - point[1] };
    case 'br':
      return { left: absolutePoint.tl[0], top: absolutePoint.tl[1], width: point[0] - absolutePoint.bl[0], height: point[1] - absolutePoint.tr[1] };
    case 'bl':
      return { left: point[0], top: absolutePoint.tl[1], width: absolutePoint.br[0] - point[0], height: point[1] - absolutePoint.tl[1] };
  }
}
