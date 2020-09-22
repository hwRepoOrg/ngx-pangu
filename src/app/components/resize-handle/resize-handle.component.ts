import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { ResizeRefreshSelector } from 'src/app/store/selectors';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-resize-handle',
  templateUrl: './resize-handle.component.html',
  styleUrls: ['./resize-handle.component.less'],
})
export class ResizeHandleComponent implements OnInit, OnDestroy {
  private canvasChangeObserver: MutationObserver;
  private canvasChanged$ = new Subject();
  private subscription = new Subscription();
  @HostBinding('style.display')
  public display = 'none';
  constructor(private store: Store<IStore>) {}

  ngOnInit(): void {
    this.canvasChangeObserver = new MutationObserver(() => this.canvasChanged$.next());
    this.canvasChangeObserver.observe(document.querySelector('[ceZoomArea]'), { attributes: true, childList: true, subtree: true });
    this.subscription.add(
      this.store
        .pipe(
          select(ResizeRefreshSelector),
          switchMap((res) => this.canvasChanged$.pipe(map(() => res))),
          map(([selected]) => {
            this.display = selected.size ? 'block' : 'none';
            return selected;
          }),
          filter((selected) => !!selected.size)
        )
        .subscribe((selected) => {})
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
