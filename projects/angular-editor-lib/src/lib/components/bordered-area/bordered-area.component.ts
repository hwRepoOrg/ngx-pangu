import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { ICanvasSize, INode } from '../../store';

@Component({
  selector: 'ce-bordered-area',
  templateUrl: 'bordered-area.component.html',
  styleUrls: ['bordered-area.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class BorderedAreaComponent implements OnInit {
  private nodes: INode<any>[];
  public borderedNodeMap = new Map<string, Partial<DOMRect & { rotate: number }>>();
  private bordered: Set<string>;
  private canvasSize: ICanvasSize;
  public get nodeList(): ({ id: string } & Partial<DOMRect & { rotate: number }>)[] {
    return [...this.borderedNodeMap].map(([id, { width, height, left, top, rotate }]) => ({ id, width, height, left, top, rotate }));
  }

  constructor(private store: EditorStore, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.store
      .select((state) => state.nodes)
      .subscribe((nodes) => {
        this.nodes = nodes;
        this.refreshBorderedList();
      });
    this.store
      .select((state) => state.canvasSize)
      .pipe(
        map((canvasSize) => (this.canvasSize = canvasSize)),
        filter(() => !!this.bordered)
      )
      .subscribe(() => this.refreshBorderedList());
    this.store
      .select((state) => state.bordered)
      .pipe(
        filter(() => !!this.nodes && !!this.canvasSize),
        map((bordered) => {
          this.bordered = bordered;
          if (bordered.size) {
            this.borderedNodeMap.forEach((...args) => {
              if (!bordered.has(args[1])) {
                this.borderedNodeMap.delete(args[1]);
              }
            });
          } else {
            this.borderedNodeMap.clear();
          }
        })
      )
      .subscribe(() => this.refreshBorderedList(true));
  }

  getRotate(rotate: number): string {
    return `rotate(${rotate}deg)`;
  }

  trackByFn(...args: [number, { id: string } & Partial<DOMRect & { rotate: number }>]): string {
    return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
  }

  refreshBorderedList(cache = false): void {
    if (!this.bordered || !this.nodes) {
      return;
    }
    this.bordered.forEach((id) => {
      if (!cache || (cache && !this.borderedNodeMap.has(id))) {
        const [node, ...parents] = this.utils.getNodeAndParentListById(id, this.nodes);
        let child = { ...node };
        while (parents.length) {
          const parent = parents.shift();
          child = {
            ...child,
            ...this.utils.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate ?? 0, child),
            rotate: child.rotate + parent.rotate,
          };
        }
        if (node) {
          this.borderedNodeMap.set(id, {
            width: (child.width / this.canvasSize.width) * 100,
            height: (child.height / this.canvasSize.height) * 100,
            left: (child.left / this.canvasSize.width) * 100,
            top: (child.top / this.canvasSize.height) * 100,
            rotate: child.rotate,
          });
        }
      }
    });
  }
}
