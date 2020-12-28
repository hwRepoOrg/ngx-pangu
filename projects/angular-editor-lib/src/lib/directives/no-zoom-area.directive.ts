import { Directive, HostBinding } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { SizeScaleSelector } from '../store/selectors';
import { IStore } from '../store/store';

@Directive({
  selector: '[ceNoZoomArea]',
  exportAs: 'ceNoZoomArea',
})
export class NoZoomAreaDirective {
  @HostBinding('style.width.px')
  public width: number;
  @HostBinding('style.height.px')
  public height: number;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.pipe(select(SizeScaleSelector)).subscribe((state) => {
        this.width = state.width * state.scale;
        this.height = state.height * state.scale;
      })
    );
  }
}
