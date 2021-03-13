import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { ICanvasSize, INode } from '../../store';

@Component({
  selector: 'ce-bordered-area,[ceBorderedArea]',
  templateUrl: './bordered-area.component.html',
  styleUrls: ['./bordered-area.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BorderedAreaComponent implements OnInit {
  public borderedNodeMap = new Map<string, Partial<DOMRect & { rotate: number }>>();
  public borderedNodeList$: Observable<({ id: string } & Partial<DOMRect & { rotate: number }>)[]>;

  constructor(private store: EditorStore, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.borderedNodeList$ = this.store
      .selectDifferent((state) => ({ bordered: state.bordered, nodes: state.nodes, canvasSize: state.canvasSize }))
      .pipe(
        map(({ bordered, nodes, canvasSize }) => {
          if (!bordered.size) {
            return [];
          } else {
            return this.refreshBorderedList(nodes, bordered, canvasSize);
          }
        })
      );
  }

  getRotate(rotate: number): string {
    return `rotate(${rotate}deg)`;
  }

  trackByFn(...args: [number, { id: string } & Partial<DOMRect & { rotate: number }>]): string {
    return `${args[1].id}-${args[1].width}-${args[1].height}-${args[1].left}-${args[1].top}-${args[1].rotate}`;
  }

  refreshBorderedList(nodes: INode[], bordered: Set<string>, canvasSize: ICanvasSize) {
    return [...bordered]
      .map((id) => this.utils.getNodeById(id, nodes))
      .filter((node) => !!node)
      .map((node) => {
        {
          const [, ...parents] = this.utils.getNodeAndParentListById(node.id, nodes);
          let child = { ...node };
          while (parents.length) {
            const parent = parents.shift();
            child = {
              ...child,
              ...this.utils.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate ?? 0, child),
              rotate: child.rotate + parent.rotate,
            };
          }
          return {
            id: node.id,
            width: (child.width / canvasSize.width) * 100,
            height: (child.height / canvasSize.height) * 100,
            left: (child.left / canvasSize.width) * 100,
            top: (child.top / canvasSize.height) * 100,
            rotate: child.rotate,
          };
        }
      });
  }
}
