import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import {
  addBorderedNodes,
  addSelectedNodes,
  clearBordered,
  clearSelected,
  removeBorderedNodes,
  resetRefLineState,
  updateNodes,
  updateRefLinesState,
} from '../../actions';
import { EditorStore } from '../../services';
import { CeUtilsService, IDOMRect } from '../../services/utils.service';
import { ICanvasPosition, INode, IRefLineDirection, IRefLineState, IStore } from '../../store';

const REF_LINE_DIRECTION_COMPARE_MAP: {
  [P in IRefLineDirection]: {
    baseKey: keyof IDOMRect;
    referKey: keyof IDOMRect;
    baseValue: (baseRect: IDOMRect, referRect: IDOMRect) => { key: keyof IDOMRect; value: number };
  }[];
} = {
  tx: [
    {
      baseKey: 'top',
      referKey: 'top',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top }),
    },
    {
      baseKey: 'top',
      referKey: 'cy',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy }),
    },
    {
      baseKey: 'top',
      referKey: 'bottom',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom }),
    },
  ],
  bx: [
    {
      baseKey: 'bottom',
      referKey: 'top',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top - baseRect.height }),
    },
    {
      baseKey: 'bottom',
      referKey: 'cy',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy - baseRect.height }),
    },
    {
      baseKey: 'bottom',
      referKey: 'bottom',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom - baseRect.height }),
    },
  ],
  ly: [
    {
      baseKey: 'left',
      referKey: 'left',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left }),
    },
    {
      baseKey: 'left',
      referKey: 'cx',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx }),
    },
    {
      baseKey: 'left',
      referKey: 'right',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right }),
    },
  ],
  ry: [
    {
      baseKey: 'right',
      referKey: 'left',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left - baseRect.width }),
    },
    {
      baseKey: 'right',
      referKey: 'cx',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx - baseRect.width }),
    },
    {
      baseKey: 'right',
      referKey: 'right',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right - baseRect.width }),
    },
  ],
  cx: [
    {
      baseKey: 'cy',
      referKey: 'top',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.top - baseRect.height / 2 }),
    },
    {
      baseKey: 'cy',
      referKey: 'cy',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.cy - baseRect.height / 2 }),
    },
    {
      baseKey: 'cy',
      referKey: 'bottom',
      baseValue: (baseRect, referRect) => ({ key: 'top', value: referRect.bottom - baseRect.height / 2 }),
    },
  ],
  cy: [
    {
      baseKey: 'cx',
      referKey: 'left',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.left - baseRect.width / 2 }),
    },
    {
      baseKey: 'cx',
      referKey: 'cx',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.cx - baseRect.width / 2 }),
    },
    {
      baseKey: 'cx',
      referKey: 'right',
      baseValue: (baseRect, referRect) => ({ key: 'left', value: referRect.right - baseRect.width / 2 }),
    },
  ],
};
@Component({
  selector: 'ce-canvas',
  templateUrl: 'canvas.component.html',
  styleUrls: ['canvas.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  public nodes$: Observable<INode[]>;
  public nodes: INode[];
  private selected: Set<string>;
  private canvasPosition: ICanvasPosition;
  private pointerSnapshot: [number, number] = null;
  private nodesSnapshot: Map<string, INode> = new Map();
  private outerBoxSnapshot: IDOMRect;
  private unselectedNodes: INode[];
  private gap = 5;

  constructor(private store: EditorStore<IStore>, private utils: CeUtilsService) {
    this.nodes$ = this.store.selectDifferent((state) => state.nodes);
    this.store.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
    this.store.select((state) => state.selected).subscribe((state) => (this.selected = state));
    this.store.select((state) => state.canvasPosition).subscribe((state) => (this.canvasPosition = state));
  }

  nodeListTrackByFn(i: number, node: INode): string {
    return node.id;
  }

  moveStart(ev: PointerEvent, node: INode): void {
    ev.preventDefault();
    ev.stopPropagation();
    this.nodesSnapshot.clear();
    this.pointerSnapshot = [ev.clientX, ev.clientY];
    let selected: string[] = [...this.selected];
    if (!this.selected.has(node.id)) {
      this.store.dispatch(clearBordered());
      this.store.dispatch(clearSelected());
      this.store.dispatch(addSelectedNodes([node.id]));
      selected = [node.id];
    }

    this.outerBoxSnapshot = this.utils.getOuterBoundingBox(
      selected
        .map((id) => this.utils.getNodeById(id, this.nodes))
        .map((item) => this.utils.getAbsolutePosition(item.left + item.width / 2, item.top + item.height / 2, item.width, item.height, item.rotate))
    );
    this.unselectedNodes = this.nodes.filter((item) => !selected.includes(item.id));

    selected.forEach((id) => {
      const item = this.nodes.find((n) => n.id === id);
      this.nodesSnapshot.set(item.id, {
        ...item,
        cxPercent: (item.left + item.width / 2 - this.outerBoxSnapshot.left) / this.outerBoxSnapshot.width,
        cyPercent: (item.top + item.height / 2 - this.outerBoxSnapshot.top) / this.outerBoxSnapshot.height,
      });
    });
  }

  moving(ev: PointerEvent): void {
    if (this.pointerSnapshot) {
      this.store.dispatch(resetRefLineState());
      const { scale } = this.canvasPosition;
      const [x, y] = this.pointerSnapshot;
      const [mx, my] = [(ev.clientX - x) / scale, (ev.clientY - y) / scale];
      const baseRect: IDOMRect = {
        ...this.outerBoxSnapshot,
        left: this.outerBoxSnapshot.left + mx,
        top: this.outerBoxSnapshot.top + my,
        right: this.outerBoxSnapshot.right + mx,
        bottom: this.outerBoxSnapshot.bottom + my,
        cx: this.outerBoxSnapshot.cx + mx,
        cy: this.outerBoxSnapshot.cy + my,
      };
      const refLinesState: { [P in IRefLineDirection]: IRefLineState } = {
        bx: null,
        tx: null,
        ly: null,
        ry: null,
        cx: null,
        cy: null,
      };
      this.unselectedNodes.forEach((node) => {
        const nodeRect = this.utils.getBoundingBox(node.width, node.height, node.left, node.top, node.rotate);
        ['tx', 'bx', 'ly', 'ry', 'cx', 'cy'].forEach((direction: IRefLineDirection) => {
          const result = getRefLineStateByDirection(direction, baseRect, nodeRect, this.gap / scale);
          if (result) {
            const { state, position, base } = result;
            if (state) {
              refLinesState[direction] = { state, position };
              baseRect[base.key] = base.value;
            }
          }
        });
      });
      const newNodes: INode[] = [];
      this.nodesSnapshot.forEach((node) => {
        const { cxPercent, cyPercent, width, height, nodeRect, ...properties } = node;
        newNodes.push({
          ...properties,
          width,
          height,
          left: cxPercent * baseRect.width + baseRect.left - width / 2,
          top: cyPercent * baseRect.height + baseRect.top - height / 2,
        });
      });

      this.store.dispatch(updateRefLinesState(refLinesState));
      this.store.dispatch(updateNodes(newNodes));
    }
  }

  moveEnd(): void {
    this.pointerSnapshot = null;
    this.store.dispatch(resetRefLineState());
    this.nodesSnapshot.clear();
  }

  showBorder(id: string): void {
    this.store.dispatch(addBorderedNodes([id]));
  }

  removeBorder(id: string): void {
    if (!this.selected.has(id)) {
      this.store.dispatch(removeBorderedNodes([id]));
    }
  }
}

function getRefLineStateByDirection(
  direction: IRefLineDirection,
  baseRect: IDOMRect,
  referRect: IDOMRect,
  gap: number
): IRefLineState & { base: { key: keyof IDOMRect; value: number } } {
  return REF_LINE_DIRECTION_COMPARE_MAP[direction]
    .map(({ baseKey, referKey, baseValue }) => ({
      state: Math.abs(baseRect[baseKey] - referRect[referKey]) < gap,
      position: referRect[referKey],
      base: baseValue(baseRect, referRect),
    }))
    .find((item) => item.state);
}
