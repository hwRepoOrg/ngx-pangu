import { createAction, props } from '@ngrx/store';
import { IRectDirection } from 'src/app/services/utils.service';
import { IRefLineState } from '../store';

export const updateRefLineState = createAction('[editor] Update ref line state', props<{ direction: IRectDirection; state: IRefLineState }>());
