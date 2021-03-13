import { Directive, HostBinding } from '@angular/core';
import { EditorStore } from '../services';
import { IStore } from '../store';

@Directive({
  selector: '[ceZoomArea]',
  exportAs: 'ceZoomArea',
})
export class ZoomAreaDirective {
  @HostBinding('style.transform-origin')
  transformOrigin = '0 0';
  @HostBinding('style.transform')
  public scale: string;
  @HostBinding('style.width.px')
  width: number;
  @HostBinding('style.height.px')
  height: number;
  constructor(private store: EditorStore<IStore>) {
    this.store
      .select((state) => ({ ...state.canvasSize, scale: state.canvasPosition.scale }))
      .subscribe((state) => {
        this.scale = `perspective(1px) scale(${state.scale})`;
        this.width = state.width;
        this.height = state.height;
      });
  }
}
