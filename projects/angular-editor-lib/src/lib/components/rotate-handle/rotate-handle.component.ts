import { Component, OnInit, Optional, SkipSelf, ViewEncapsulation } from '@angular/core';
import { updateNodes } from '../../actions';
import { EditorStore } from '../../services';
import { CeUtilsService } from '../../services/utils.service';
import { INode, IStore } from '../../store';
import { ResizeHandleComponent } from '../resize-handle/resize-handle.component';

@Component({
  selector: 'ce-rotate-handle',
  templateUrl: 'rotate-handle.component.html',
  styleUrls: ['rotate-handle.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class RotateHandleComponent implements OnInit {
  private selected: Set<string>;
  private nodes: INode[];
  public rotateSnapshot: [number, number, number, number, INode] = null;

  constructor(@Optional() @SkipSelf() private parent: ResizeHandleComponent, private store: EditorStore<IStore>, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.store.select((state) => state.selected).subscribe((selected) => (this.selected = selected));
    this.store.select((state) => state.nodes).subscribe((nodes) => (this.nodes = nodes));
  }

  rotateStart(event: PointerEvent): void {
    event.stopPropagation();
    event.preventDefault();
    const rect = this.parent.eleRef.nativeElement.getBoundingClientRect().toJSON();
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
      this.store.dispatch(updateNodes([{ ...node, rotate: rotate === 360 ? 0 : rotate }]));
    }
  }

  rotateStop(): void {
    this.rotateSnapshot = null;
  }
}
