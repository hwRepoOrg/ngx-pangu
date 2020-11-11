import { createAction, props } from '@ngrx/store';

export const clearSelectedNodes = createAction('[editor] Clear selected nodes');

export const setSelectedNodes = createAction('[editor] Set selected nodes', props<{ ids: string[] }>());

export const addSelectedNodes = createAction('[editor] Add selected nodes', props<{ ids: string[] }>());

export const removeSelectedNodes = createAction('[editor] Remove node from selected', props<{ ids: string[] }>());

export const clearBorderedNodes = createAction('[editor] Clear bordered nodes');

export const addBorderedNodes = createAction('[editor] Add bordered nodes', props<{ ids: string[] }>());

export const removeBorderedNodes = createAction('[editor] Remove node from bordered', props<{ ids: string[] }>());

export const setBorderedNodes = createAction('[editor] Set bordered nodes', props<{ ids: string[] }>());
