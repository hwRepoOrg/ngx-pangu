import { Directive, HostBinding } from '@angular/core';
import { EditorStore } from '../services';
import { IStore } from '../store';

@Directive({
  selector: '[ceNoZoomArea]',
  exportAs: 'ceNoZoomArea',
})
export class NoZoomAreaDirective {
  @HostBinding('style.width.px')
  public width: number;
  @HostBinding('style.height.px')
  public height: number;
  constructor(private store: EditorStore<IStore>) {
    this.store
      .select((state) => ({ ...state.canvasSize, scale: state.canvasPosition.scale }))
      .subscribe((state) => {
        this.width = state.width * state.scale;
        this.height = state.height * state.scale;
      });
  }
}
