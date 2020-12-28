import { Directive, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SizeScaleSelector } from '../store/selectors';
import { IStore } from '../store/store';

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
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.pipe(select(SizeScaleSelector)).subscribe((state) => {
        this.scale = `perspective(1px) scale(${state.scale})`;
        this.width = state.width;
        this.height = state.height;
      })
    );
  }
}
