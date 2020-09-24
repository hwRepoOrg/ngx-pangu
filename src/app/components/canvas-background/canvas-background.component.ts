import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-canvas-background',
  templateUrl: './canvas-background.component.html',
  styleUrls: ['./canvas-background.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
