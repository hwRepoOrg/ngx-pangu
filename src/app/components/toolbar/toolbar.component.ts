import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { updateCanvasPosition } from 'src/app/store/actions';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnDestroy {
  public selected$: Observable<Set<string>>;
  public scale: number;
  public get copyStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size === 0));
  }
  public get groupStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size <= 1));
  }
  public get breakStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size > 1 || state.size === 0));
  }
  private subscription = new Subscription();

  constructor(private store: Store<IStore>) {
    this.selected$ = this.store.select('selected');
    this.subscription.add(
      this.store.select('canvasPosition').subscribe((state) => {
        this.scale = state.scale;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setCanvasScale(scale: number): void {
    this.store.dispatch(updateCanvasPosition({ scale: scale / 100 }));
  }
}
