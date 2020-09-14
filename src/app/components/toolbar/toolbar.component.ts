import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IStore } from 'src/app/store/store';

@Component({
  selector: 'ce-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
})
export class ToolbarComponent implements OnInit {
  public selected$: Observable<Set<string>>;
  public get copyStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size === 0));
  }
  public get groupStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size <= 1));
  }
  public get breakStatus$(): Observable<boolean> {
    return this.selected$.pipe(map((state) => state.size > 1 || state.size === 0));
  }
  constructor(private store: Store<IStore>) {
    this.selected$ = this.store.select('canvasState').pipe(map((state) => state.selected));
  }

  ngOnInit(): void {}
}
