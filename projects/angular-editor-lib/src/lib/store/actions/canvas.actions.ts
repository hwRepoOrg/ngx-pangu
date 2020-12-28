import { createAction, props } from '@ngrx/store';
import { ICanvasBackground, ICanvasPosition, ICanvasSize } from '../store';

export const updateCanvasSize = createAction('[editor] Update canvas size', props<Partial<ICanvasSize>>());

export const updateCanvasPosition = createAction('[editor] Update canvas position', props<Partial<ICanvasPosition>>());

export const updateCanvasBackground = createAction('[editor] Set canvas background color', props<Partial<ICanvasBackground>>());

export const updateNodeMoveState = createAction('[editor] Update node move state', props<{ state: boolean }>());
