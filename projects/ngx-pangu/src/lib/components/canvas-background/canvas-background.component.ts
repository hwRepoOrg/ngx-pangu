import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EditorStore } from '../../services';
import { IStore } from '../../store';

@Component({
  selector: 'ce-canvas-background,[ceCanvasBackground]',
  templateUrl: 'canvas-background.component.html',
  styleUrls: ['canvas-background.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasBackgroundComponent {
  public backgroundColor$: Observable<string>;
  public backgroundImage$: Observable<string>;
  constructor(private store: EditorStore<IStore>) {
    this.backgroundColor$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundColor);
    this.backgroundImage$ = this.store.selectDifferent((state) => state.canvasBackground.backgroundImage);
  }
}
