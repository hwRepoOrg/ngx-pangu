import { Directive, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IStore } from '../store/store';

@Directive({
  selector: '[ceZoomArea]',
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
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.select('canvasState').subscribe((state) => {
        this.scale = `scale(${state.scale})`;
        this.width = state.width;
        this.height = state.height;
      })
    );
  }
}
