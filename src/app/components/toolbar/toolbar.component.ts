import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { scaleCanvas } from 'src/app/store/actions';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
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
    this.selected$ = this.store.select('canvasState').pipe(map((state) => state.selected));
    this.subscription.add(
      this.store.select('canvasState').subscribe((state) => {
        this.scale = state.scale;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setCanvasScale(scale: number): void {
    this.store.dispatch(scaleCanvas({ scale: scale / 100 }));
  }
}
