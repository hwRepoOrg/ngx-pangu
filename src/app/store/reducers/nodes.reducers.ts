import { createReducer, on } from '@ngrx/store';
import { CeUtilsService, genNodeId, IDOMRect } from '../../services/utils.service';
import { addNodes, groupNodes, removeNodes, updateNodes, updateNodesSize } from '../actions';
import { DEFAULT_STORE, INode } from '../store';

/**
 * 递归更新节点的位置和大小
 * @param nodes 节点列表
 * @param oldParentRect 父节点的旧尺寸和位置
 * @param newParentRect 父节点的新尺寸和位置
 */
function recursiveUpdateNodeChildrenSize(nodes: INode[], oldParentRect: IDOMRect, newParentRect: IDOMRect): INode[] {
  const { width, height } = newParentRect;
  return nodes.map((node) => {
    const nodeAbsolutePosition = CeUtilsService.shared.getAbsolutePosition(
      node.left + node.width / 2,
      node.top + node.height / 2,
      node.width,
      node.height,
      node.rotate
    );
    const { tl, tr, bl, br } = CeUtilsService.shared.getItemPercentPositionInGroup(
      {
        ...oldParentRect,
        left: 0,
        top: 0,
      },
      nodeAbsolutePosition
    );
    const newNodeRect = CeUtilsService.shared.getRelativePosition({
      tl: [tl[0] * width, tl[1] * height],
      tr: [tr[0] * width, tr[1] * height],
      bl: [bl[0] * width, bl[1] * height],
      br: [br[0] * width, br[1] * height],
    });
    if (node.children && node.children.length) {
      return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
    } else {
      return { ...node, ...newNodeRect };
    }
  });
}

function updateNodesSizeReducer(state: INode[], { nodesSizeMap }: { nodesSizeMap: Map<string, IDOMRect> }): INode[] {
  return state.map((node) => {
    if (!nodesSizeMap.has(node.id)) {
      return node;
    } else {
      const newNode = { ...node, ...nodesSizeMap.get(node.id) };
      if (node.children && node.children.length) {
        return { ...newNode, children: recursiveUpdateNodeChildrenSize(newNode.children, { ...node }, { ...newNode }) };
      } else {
        return newNode;
      }
    }
  });
}

function groupNodesReducer(state: INode[], { ids }: { ids: string[] }): INode[] {
  const nodeMap = new Map<string, INode>();
  ids.forEach((id) => {
    const node = state.find((i) => i.id === id);
    if (node) {
      nodeMap.set(id, node);
    }
  });
  const groupRect = CeUtilsService.shared.getOuterBoundingBox(
    ids
      .filter((id) => nodeMap.has(id))
      .map((id) => {
        const node = nodeMap.get(id);
        return CeUtilsService.shared.getAbsolutePosition(
          node.left + node.width / 2,
          node.top + node.height / 2,
          node.width,
          node.height,
          node.rotate
        );
      })
  );
  const groupNode: INode = {
    id: genNodeId(),
    name: 'Group',
    ...groupRect,
    rotate: 0,
    zIndex: Math.max(...state.filter((node) => !nodeMap.has(node.id)).map((node) => node.zIndex)) + 1,
    children: ids
      .filter((id) => nodeMap.has(id))
      .map((id) => {
        const node = nodeMap.get(id);
        const { bl, br, tl, tr } = CeUtilsService.shared.getAbsolutePosition(
          node.left + node.width / 2,
          node.top + node.height / 2,
          node.width,
          node.height,
          node.rotate
        );
        return {
          ...node,
          ...CeUtilsService.shared.getRelativePosition({
            bl: [bl[0] - groupRect.left, bl[1] - groupRect.top],
            br: [br[0] - groupRect.left, br[1] - groupRect.top],
            tl: [tl[0] - groupRect.left, tl[1] - groupRect.top],
            tr: [tr[0] - groupRect.left, tr[1] - groupRect.top],
          }),
        };
      }),
  };
  return [...state.filter((node) => !nodeMap.has(node.id)), groupNode];
}

export const nodesReducer = createReducer<INode[]>(
  DEFAULT_STORE.nodes,
  on(addNodes, (state, { nodes }) => [...state, ...nodes]),
  on(removeNodes, (state, { nodes }) => [...state].filter((node) => !nodes.find((i) => i.id === node.id))),
  on(updateNodes, (state, { nodes }) => state.map((item) => nodes.find((i) => i.id === item.id) ?? item)),
  on(updateNodesSize, updateNodesSizeReducer),
  on(groupNodes, groupNodesReducer)
);