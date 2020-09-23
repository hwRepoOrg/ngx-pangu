import { createAction, props } from '@ngrx/store';
import { ICanvasBackground, ICanvasPosition, ICanvasSize, INode } from './store';

export const addNodes = createAction('[editor] Add nodes', props<{ nodes: INode[] }>());

export const removeNodes = createAction('[editor] Remove nodes', props<{ nodes: INode[] }>());

export const updateNodes = createAction('[editor] Update nodes', props<{ nodes: INode[] }>());

export const updateCanvasSize = createAction('[editor] Update canvas size', props<Partial<ICanvasSize>>());

export const updateCanvasPosition = createAction('[editor] Update canvas position', props<Partial<ICanvasPosition>>());

export const updateCanvasBackground = createAction('[editor] Set canvas background color', props<Partial<ICanvasBackground>>());

export const clearSelectedNodes = createAction('[editor] Clear selected nodes');

export const setSelectedNodes = createAction('[editor] Set selected nodes', props<{ ids: string[] }>());

export const addSelectedNodes = createAction('[editor] Add selected nodes', props<{ ids: string[] }>());

export const removeSelectedNodes = createAction('[editor] Remove node from selected', props<{ ids: string[] }>());

export const clearBorderedNodes = createAction('[editor] Clear bordered nodes');

export const addBorderedNodes = createAction('[editor] Add bordered nodes', props<{ ids: string[] }>());

export const removeBorderedNodes = createAction('[editor] Remove node from bordered', props<{ ids: string[] }>());

export const setBorderedNodes = createAction('[editor] Set bordered nodes', props<{ ids: string[] }>());

export const toggleShadowVisible = createAction('[editor] Set shadow dom visible', props<{ visible: boolean }>());
