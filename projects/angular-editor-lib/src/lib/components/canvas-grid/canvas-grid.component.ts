import { Component, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { EditorStore } from '../../services';
import { IStore } from '../../store';

@Component({
  selector: 'ce-canvas-grid',
  templateUrl: 'canvas-grid.component.html',
  styleUrls: ['canvas-grid.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CanvasGridComponent {
  public scale: number;
  constructor(private store: EditorStore<IStore>) {
    this.store
      .select((state) => state.canvasPosition)
      .pipe(map((state) => state.scale))
      .subscribe((scale) => (this.scale = scale));
  }
  getPath(size: number, scale: number): string {
    return `M ${size * scale || 0} 0 L 0 0 0 ${size * scale || 0}`;
  }
}
