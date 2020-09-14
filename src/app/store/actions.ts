import { createAction, props } from '@ngrx/store';
import { INode } from './store';

export const addNodes = createAction('[editor] Add nodes', props<{ nodes: INode[] }>());

export const removeNodes = createAction('[editor] Remove nodes', props<{ nodes: INode[] }>());

export const updateNodes = createAction('[editor] Update nodes', props<{ nodes: INode[] }>());

export const moveCanvas = createAction('[editor] Move canvas', props<{ left: number; top: number }>());

export const resizeCanvas = createAction('[editor] Resize canvas', props<{ width: number; height: number }>());

export const scaleCanvas = createAction(
  '[editor] Scale canvas',
  props<{ width: number; height: number; left: number; top: number; scale: number }>()
);

export const setSelectedNodes = createAction('[editor] Set selected nodes', props<{ ids: string[] }>());

export const setBorderedNodes = createAction('[editor] Set bordered nodes', props<{ ids: string[] }>());

export const setCanvasBackgroundColor = createAction('[editor] Set canvas background color', props<{ color: string }>());

export const setCanvasBackgroundImage = createAction('[editor] Set canvas background image', props<{ image: string }>());
