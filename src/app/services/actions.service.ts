import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { breakNode, clearBorderedNodes, clearSelectedNodes, removeNodes, setBorderedNodes, setSelectedNodes } from '../store/actions';
import { IStore } from '../store/store';
import { CeUtilsService } from './utils.service';

@Injectable({ providedIn: 'root' })
export class ActionsService {
  constructor(public store: Store<IStore>, public utils: CeUtilsService) {}

  setSelected(ids: string[]): void {
    this.store.dispatch(setSelectedNodes({ ids }));
    this.store.dispatch(setBorderedNodes({ ids }));
  }

  setSelectedNode(id: string): void {
    this.setSelected([id]);
  }

  setSelectedNodes(ids: string[]): void {
    this.store.dispatch(setSelectedNodes({ ids }));
    this.store.dispatch(setBorderedNodes({ ids }));
  }

  breakNode(id: string): void {
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(breakNode({ id }));
  }

  deleteNodes(ids: string[]): void {
    this.store.dispatch(clearSelectedNodes());
    this.store.dispatch(clearBorderedNodes());
    this.store.dispatch(removeNodes({ ids }));
  }
}
