import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { updateNodesSize } from '../../actions';
import { EditorStore } from '../../services';
import { CeUtilsService, IAbsolutePosition, IDOMRect, IRectDirection } from '../../services/utils.service';
import { ICanvasPosition, INode, IStore } from '../../store';

@Component({
  selector: 'ce-resize-handle,[ceResizeHandle]',
  templateUrl: 'resize-handle.component.html',
  styleUrls: ['resize-handle.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizeHandleComponent {
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
  public selectedSize$: Observable<number>;
  canvasPosition: ICanvasPosition;
  rotate: number;
  nodes: INode[];
  selectedHasRotated: boolean;
  groupRectSnapshot: IDOMRect;
  groupAbsolutePositionSnapshot: IAbsolutePosition;
  resizePointSnapshot: { absolute: [number, number]; relative: [number, number] };

  nodePositionSnapshotList = new Map<string, IAbsolutePosition>();

  constructor(private store: EditorStore<IStore>, private utils: CeUtilsService, public eleRef: ElementRef<HTMLElement>) {
    this.selectedSize$ = this.store.selectDifferent((state) => state.selected.size);
    this.store
      .selectDifferent((state) => ({ selected: state.selected, canvasPosition: state.canvasPosition, nodes: state.nodes }))
      .subscribe(({ selected, canvasPosition, nodes }) => {
        this.selectedHasRotated = this.utils.hasRotated(nodes, [...selected]);
        this.display = selected.size ? 'block' : 'none';
        this.selected = selected;
        this.canvasPosition = canvasPosition;
        this.nodes = nodes;
        if (this.selected.size) {
          this.refreshResizeHandle();
        }
      });
  }

  refreshResizeHandle(): any {
    if (!this.selected || !this.nodes) {
      return;
    }

    const { left, top, width, height, rotate } = this.utils.getResizeBoundingBox([...this.selected], this.nodes);
    this.left = left * this.canvasPosition.scale;
    this.top = top * this.canvasPosition.scale;
    this.width = width * this.canvasPosition.scale;
    this.height = height * this.canvasPosition.scale;
    this.rotate = rotate;
  }

  resizeStart(event: PointerEvent): void {
    event.preventDefault();
    event.stopPropagation();
    const { scale } = this.canvasPosition;
    const canvasRect = document.querySelector('ce-canvas').getBoundingClientRect();
    this.groupRectSnapshot = {
      width: this.width / scale,
      height: this.height / scale,
      left: this.left / scale,
      top: this.top / scale,
      cx: (this.left + this.width / 2) / scale,
      cy: (this.top + this.height / 2) / scale,
      bottom: (this.top + this.height) / scale,
      right: (this.left + this.width) / scale,
    };
    this.groupAbsolutePositionSnapshot = this.utils.getAbsolutePosition(
      this.groupRectSnapshot.cx,
      this.groupRectSnapshot.cy,
      this.groupRectSnapshot.width,
      this.groupRectSnapshot.height,
      this.selected.size === 1 ? this.utils.getNodeById([...this.selected.values()][0], this.nodes).rotate : 0
    );
    this.resizePointSnapshot = {
      absolute: [event.clientX, event.clientY],
      relative: [(event.clientX - canvasRect.left) / scale, (event.clientY - canvasRect.top) / scale],
    };
    this.selected.forEach((id) => {
      const node = this.utils.getNodeById(id, this.nodes);
      const nodeAbsolutePosition = this.utils.getAbsolutePosition(
        node.left + node.width / 2,
        node.top + node.height / 2,
        node.width,
        node.height,
        node.rotate
      );

      const percentPosition = this.utils.getItemPercentPositionInGroup({ ...this.groupRectSnapshot }, nodeAbsolutePosition);
      this.nodePositionSnapshotList.set(id, this.selected.size === 1 ? { tl: [0, 0], tr: [1, 0], bl: [0, 1], br: [1, 1] } : percentPosition);
      console.log(percentPosition);
    });
  }

  resizing(event: PointerEvent, direction: IRectDirection) {
    if (this.resizePointSnapshot && this.groupRectSnapshot) {
      const [mx, my] = [event.clientX - this.resizePointSnapshot.absolute[0], event.clientY - this.resizePointSnapshot.absolute[1]];
      if (this.selectedHasRotated) {
        const node = this.utils.getNodeById([...this.selected.values()][0], this.nodes);
        const childIds = node.children?.map((child) => child.id) || [];
        const childrenHasRotated = this.utils.hasRotated(this.nodes, childIds);
        if (this.selected.size === 1 && (!node.children?.length || !childrenHasRotated)) {
          return this.normalResizing(direction, mx, my);
        }
        return this.geometricResizing(direction, mx, my);
      }
      return this.normalResizing(direction, mx, my);
    }
  }

  resizeEnd(): void {
    this.groupRectSnapshot = null;
    this.resizePointSnapshot = null;
    this.nodePositionSnapshotList.clear();
  }

  geometricResizing(direction: IRectDirection, mx: number, my: number) {
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
    this.store.dispatch(updateNodesSize(nodesSizeMap));
  }

  normalResizing(direction: IRectDirection, mx: number, my: number) {
    const { scale } = this.canvasPosition;
    const { relative } = this.resizePointSnapshot;
    const endPointer: [number, number] = [relative[0] + mx / scale, relative[1] + my / scale];
    const groupRect = getBoundingRectByDirectionAndPosition(direction, this.groupAbsolutePositionSnapshot, endPointer);
    console.log(`mx: ${mx} my: ${my} groupRect: ${JSON.stringify(groupRect)} nodeSnapshotList:`, this.nodePositionSnapshotList.values()[0]);
    const nodeSizeMap = new Map<string, IDOMRect>();
    this.nodePositionSnapshotList.forEach(({ tl, bl, br, tr }, id) => {
      nodeSizeMap.set(
        id,
        this.utils.getRelativePosition({
          tl: [tl[0] * groupRect.width + groupRect.left, tl[1] * groupRect.height + groupRect.top],
          tr: [tr[0] * groupRect.width + groupRect.left, tr[1] * groupRect.height + groupRect.top],
          bl: [bl[0] * groupRect.width + groupRect.left, bl[1] * groupRect.height + groupRect.top],
          br: [br[0] * groupRect.width + groupRect.left, br[1] * groupRect.height + groupRect.top],
        })
      );
    });
    this.store.dispatch(updateNodesSize(nodeSizeMap));
  }

  resizingNodeList(direction: IRectDirection, mx: number, my: number): void {}
}

function getGroupDiagonalByDirection(direction: IRectDirection, absolutePosition: IAbsolutePosition): [[number, number], [number, number]] {
  const verticalAndHorizontalPosition = CeUtilsService.shared.getVerticalAndHorizontalPointByAbsolutePosition(absolutePosition);
  switch (direction) {
    case 'tl':
    case 'br':
      return [absolutePosition.tl, absolutePosition.br];
    case 'tr':
    case 'bl':
      return [absolutePosition.tr, absolutePosition.bl];
    case 't':
    case 'b':
      return [verticalAndHorizontalPosition.t, verticalAndHorizontalPosition.b];
    case 'l':
    case 'r':
      return [verticalAndHorizontalPosition.l, verticalAndHorizontalPosition.r];
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

function getBoundingRectByDirectionAndPosition(direction: IRectDirection, position: IAbsolutePosition, endPointer: [number, number]): IDOMRect {
  const { bl, br, tl, tr } = position;
  let newTLPoint: [number, number];
  let newTRPoint: [number, number];
  let newBLPoint: [number, number];
  let newBRPoint: [number, number];
  switch (direction) {
    case 'tl':
      newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
      newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl: endPointer, tr: newTRPoint, bl: newBLPoint, br });
    case 'tr':
      newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
      newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: endPointer, bl, br: newBRPoint });
    case 'bl':
      newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
      newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr, bl: endPointer, br: newBRPoint });
    case 'br':
      newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
      newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl, tr: newTRPoint, bl: newBLPoint, br: endPointer });
    case 't':
      newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, tl, endPointer);
      newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, tr, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr: newTRPoint, bl, br });
    case 'r':
      newTRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, tr, endPointer);
      newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(bl, br, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl, tr: newTRPoint, bl, br: newBRPoint });
    case 'b':
      newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tl, bl, endPointer);
      newBRPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, br, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl, tr, bl: newBLPoint, br: newBRPoint });
    case 'l':
      newTLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(tr, tl, endPointer);
      newBLPoint = CeUtilsService.shared.getVerticalLineCrossPoint(br, bl, endPointer);
      return CeUtilsService.shared.getRelativePosition({ tl: newTLPoint, tr, bl: newBLPoint, br });
  }
}
