import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, map, pairwise, startWith } from 'rxjs/operators';
import { DEFAULT_STORE, IStore } from '../store';
import { CeUtilsService } from './utils.service';

@Injectable()
export class EditorStore<T = any> extends ComponentStore<IStore<T>> {
  constructor(private utils: CeUtilsService) {
    super(DEFAULT_STORE);
  }

  initialize(state: IStore<T>) {
    this.setState(state);
  }

  dispatch(action: (state: IStore<T>) => IStore<T>) {
    this.setState(action);
  }

  selectDifferent<R>(cb: (state: IStore<T>) => R) {
    return this.select(cb).pipe(
      startWith(0, 0),
      pairwise<R>(),
      filter(([prev, present]) => !this.utils.isDeepEqual(prev, present)),
      map(([, present]) => present)
    );
  }

  toJSON() {
    return JSON.stringify(this.get());
  }
}
