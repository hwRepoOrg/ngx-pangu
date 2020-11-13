import { createAction, props } from '@ngrx/store';
import { IDOMRect } from '../../services/utils.service';
import { INode } from '../store';

export const addNodes = createAction('[editor] Add nodes', props<{ nodes: INode[] }>());

export const removeNodes = createAction('[editor] Remove nodes', props<{ nodes: INode[] }>());

export const updateNodes = createAction('[editor] Update nodes', props<{ nodes: INode[] }>());

export const updateNodesSize = createAction('[editor] Update nodes size', props<{ nodesSizeMap: Map<string, IDOMRect> }>());

export const groupNodes = createAction('[editor] Group nodes', props<{ ids: string[] }>());

export const breakNode = createAction('[editor] Break node', props<{ id: string }>());
