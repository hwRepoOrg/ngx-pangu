import { createAction, props } from '@ngrx/store';
import { IRectDirection } from 'src/app/services/utils.service';
import { IRefLineDirection, IRefLineState } from '../store';

export const updateRefLineState = createAction('[editor] Update ref line state', props<{ direction: IRefLineDirection; state: IRefLineState }>());

export const updateRefLinesState = createAction('[editor] Update ref lines state', props<{ state: { [P in IRefLineDirection]: IRefLineState } }>());

export const resetRefLineState = createAction('[editor] Reset ref line state', props());
