import { Directive, HostBinding } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IStore } from '../store/store';

@Directive({
  selector: '[ceNoZoomArea]',
})
export class NoZoomAreaDirective {
  @HostBinding('style.width.px')
  public width: number;
  @HostBinding('style.height.px')
  public height: number;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store.select('canvasState').subscribe((state) => {
        this.width = state.width * state.scale;
        this.height = state.height * state.scale;
      })
    );
  }
}
