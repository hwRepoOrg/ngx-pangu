import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Optional, SkipSelf } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CeUtilsService } from 'src/app/services/utils.service';
import { updateNodes } from 'src/app/store/actions';
import { INode, IStore } from 'src/app/store/store';
import { ResizeHandleComponent } from '../resize-handle.component';

@Component({
  selector: 'ce-rotate-handle',
  templateUrl: './rotate-handle.component.html',
  styleUrls: ['./rotate-handle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RotateHandleComponent implements OnInit, OnDestroy {
  private selected: Set<string>;
  private nodes: INode[];
  public rotateSnapshot: [number, number, number, number, INode] = null;
  private subscription = new Subscription();

  constructor(@Optional() @SkipSelf() private parent: ResizeHandleComponent, private store: Store<IStore>, private utils: CeUtilsService) {}

  ngOnInit(): void {
    this.subscription.add(this.store.select('selected').subscribe((selected) => (this.selected = selected)));
    this.subscription.add(this.store.select('nodes').subscribe((nodes) => (this.nodes = nodes)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
