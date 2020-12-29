import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EditorStore } from '../../services';
import { IStore } from '../../store';

@Component({
  selector: 'ce-canvas-background',
  templateUrl: 'canvas-background.component.html',
  styleUrls: ['canvas-background.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CanvasBackgroundComponent {
  @HostBinding('style.background-color')
  public backgroundColor: string;
  public backgroundImage: string;
  constructor(private store: EditorStore<IStore>, public ds: DomSanitizer) {
    this.store
      .select((state) => state.canvasBackground)
      .subscribe((state) => {
        this.backgroundColor = state.backgroundColor;
        this.backgroundImage = state.backgroundImage;
      });
  }
}
