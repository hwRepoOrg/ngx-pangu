import { Directive, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { IStore } from '../store/store';

@Directive({
  selector: '[ceZoomArea]',
})
export class ZoomAreaDirective {
  @HostBinding('style.transform-origin')
  transformOrigin = '0 0';
  @HostBinding('style.transform')
  public scale: string;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store
        .select('canvasState')
        .pipe(
          map((state) => state.scale),
          filter((scale) => !!scale),
          map((scale) => `scale(${scale})`)
        )
        .subscribe((scale) => (this.scale = scale))
    );
  }
}
