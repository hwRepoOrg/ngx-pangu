import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-canvas-grid',
  templateUrl: './canvas-grid.component.html',
  styleUrls: ['./canvas-grid.component.less'],
})
export class CanvasGridComponent implements OnDestroy {
  public scale: number;
  private subscription = new Subscription();
  constructor(private store: Store<IStore>) {
    this.subscription.add(
      this.store
        .select('canvasPosition')
        .pipe(map((state) => state.scale))
        .subscribe((scale) => (this.scale = scale))
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  getPath(size: number, scale: number): string {
    return `M ${size * scale || 0} 0 L 0 0 0 ${size * scale || 0}`;
  }
}
