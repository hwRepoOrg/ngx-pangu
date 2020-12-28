import { Component, HostBinding, OnDestroy, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IStore } from '../../store/store';

@Component({
  selector: 'ce-canvas-background',
  templateUrl: 'canvas-background.component.html',
  styleUrls: ['canvas-background.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class CanvasBackgroundComponent implements OnDestroy {
  @HostBinding('style.background-color')
  public backgroundColor: string;
  public backgroundImage: string;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>, public ds: DomSanitizer) {
    this.subscription.add(
      this.store.select('canvasBackground').subscribe((state) => {
        this.backgroundColor = state.backgroundColor;
        this.backgroundImage = state.backgroundImage;
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
