import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { IStore } from '../../store';

@Component({
  selector: 'ce-canvas-grid',
  templateUrl: 'canvas-grid.component.html',
  styleUrls: ['canvas-grid.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasGridComponent {
  public childDPath$: Observable<string>;
  public parentDPath$: Observable<string>;
  public childWidth$: Observable<number>;
  public parentWidth$: Observable<number>;
  constructor(private store: EditorStore<IStore>) {
    const scale$ = this.store.selectDifferent((state) => state.canvasPosition.scale);
    this.childDPath$ = scale$.pipe(map((scale) => this.getPath(10, scale)));
    this.parentDPath$ = scale$.pipe(map((scale) => this.getPath(50, scale)));
    this.childWidth$ = scale$.pipe(map((scale) => 10 * scale));
    this.parentWidth$ = scale$.pipe(map((scale) => 50 * scale));
  }
  getPath(size: number, scale: number): string {
    return `M ${size * scale || 0} 0 L 0 0 0 ${size * scale || 0}`;
  }
}
