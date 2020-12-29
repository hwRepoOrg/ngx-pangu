import { Injectable } from '@angular/core';
import { breakNode, clearBordered, clearSelected, groupNodes, removeNodes, setBorderedNodes, setSelectedNodes } from '../actions';
import { IStore } from '../store';
import { EditorStore } from './store.service';
import { CeUtilsService } from './utils.service';

@Injectable()
export class ActionsService {
  constructor(public store: EditorStore<IStore>, public utils: CeUtilsService) {}

  clearSelected(): void {}

  setSelected(ids: string[]): void {
    this.store.dispatch(setSelectedNodes(ids));
    this.store.dispatch(setBorderedNodes(ids));
  }

  setSelectedNode(id: string): void {
    this.setSelected([id]);
  }

  setSelectedNodes(ids: string[]): void {
    this.store.dispatch(setSelectedNodes(ids));
    this.store.dispatch(setBorderedNodes(ids));
  }

  group(ids: string[]): void {
    this.store.dispatch(groupNodes(ids));
  }

  breakNode(id: string): void {
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(breakNode(id));
  }

  deleteNodes(ids: string[]): void {
    this.store.dispatch(clearSelected());
    this.store.dispatch(clearBordered());
    this.store.dispatch(removeNodes(ids));
  }
}
