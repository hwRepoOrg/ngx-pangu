import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { DEFAULT_STORE, IStore } from '../store';

@Injectable()
export class EditorStore<T = any> extends ComponentStore<IStore<T>> {
  constructor() {
    super(DEFAULT_STORE);
  }

  initialize(state: IStore<T>) {
    this.setState(state);
  }

  dispatch(action: (state: IStore<T>) => IStore<T>) {
    this.setState(action);
  }
}
