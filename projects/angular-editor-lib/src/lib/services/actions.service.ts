import { Injectable } from '@angular/core';
import { IStore } from '../store';
import { EditorStore } from './store.service';
import { CeUtilsService } from './utils.service';

@Injectable()
export class ActionsService {
  constructor(public store: EditorStore<IStore>, public utils: CeUtilsService) {}
}
