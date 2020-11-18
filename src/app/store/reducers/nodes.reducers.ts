import { createReducer, on } from '@ngrx/store';
import { CeUtilsService, genNodeId, IDOMRect } from '../../services/utils.service';
import { addNodes, breakNode, groupNodes, removeNodes, updateNodes, updateNodesSize } from '../actions';
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
    const cxPercent = (node.left + node.width / 2) / oldParentRect.width;
    const cyPercent = (node.top + node.height / 2) / oldParentRect.height;
    const widthPercent = node.width / oldParentRect.width;
    const heightPercent = node.height / oldParentRect.height;
    const newNodeRect: IDOMRect = {
      width: widthPercent * width,
      height: heightPercent * height,
      left: cxPercent * width - (widthPercent * width) / 2,
      top: cyPercent * height - (heightPercent * height) / 2,
    };
    if (node.children && node.children.length) {
      return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
    } else {
      return { ...node, ...newNodeRect };
    }
  });
}

// /**
//  * 递归更新节点的位置和大小
//  * @param nodes 节点列表
//  * @param oldParentRect 父节点的旧尺寸和位置
//  * @param newParentRect 父节点的新尺寸和位置
//  */
// function recursiveUpdateNodeChildrenSize(nodes: INode[], oldParentRect: IDOMRect, newParentRect: IDOMRect): INode[] {
//   const { width, height } = newParentRect;
//   return nodes.map((node) => {
//     const nodeAbsolutePosition = CeUtilsService.shared.getAbsolutePosition(
//       node.left + node.width / 2,
//       node.top + node.height / 2,
//       node.width,
//       node.height,
//       node.rotate
//     );
//     const { tl, tr, bl, br } = CeUtilsService.shared.getItemPercentPositionInGroup(
//       {
//         ...oldParentRect,
//         left: 0,
//         top: 0,
//       },
//       nodeAbsolutePosition
//     );
//     const newNodeRect = CeUtilsService.shared.getRelativePosition({
//       tl: [tl[0] * width, tl[1] * height],
//       tr: [tr[0] * width, tr[1] * height],
//       bl: [bl[0] * width, bl[1] * height],
//       br: [br[0] * width, br[1] * height],
//     });
//     if (node.children && node.children.length) {
//       return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
//     } else {
//       return { ...node, ...newNodeRect };
//     }
//   });
// }

function updateNodesSizeReducer(state: INode[], { nodesSizeMap }: { nodesSizeMap: Map<string, IDOMRect> }): INode[] {
  let inSameLayer = true;
  const ids = [...nodesSizeMap.keys()];
  let parent: INode;
  while (inSameLayer && ids.length) {
    const id = ids.pop();
    const node = CeUtilsService.shared.getNodeById(id, state);
    inSameLayer = parent?.id === node.parentNode?.id;
    parent = node.parentNode;
  }

  if (!inSameLayer) {
    return state;
  } else {
    if (!parent) {
      return state.map((node) => {
        const newNode = { ...node, ...nodesSizeMap.get(node.id) };
        if (node.children && node.children.length) {
          return { ...newNode, children: recursiveUpdateNodeChildrenSize(newNode.children, { ...node }, { ...newNode }) };
        } else {
          return newNode;
        }
      });
    } else {
      return state;
    }
  }
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

function breakNodeReducer(state: INode[], { id }: { id: string }): INode[] {
  const [node, ...parents] = CeUtilsService.shared.getNodeAndParentListById(id, state);
  const newNodes = node.children.map((child) => {
    return {
      ...child,
      ...CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(node, node.rotate, child),
      rotate: (child.rotate ?? 0) + (node.rotate ?? 0),
    };
  });
  if (!parents.length) {
    return [...state.filter((i) => i.id !== node.id), ...newNodes];
  } else {
    let parent = parents.shift();
    parent.children = [...parent.children.filter((child) => child.id !== node.id), ...newNodes];
    while (parents.length) {
      const nextParent = parents.shift();
      nextParent.children = nextParent.children.map((child) => (child.id === parent.id ? parent : child));
      parent = nextParent;
    }
    return [...state.filter((i) => i.id !== parent.id), parent];
  }
}

export const nodesReducer = createReducer<INode[]>(
  DEFAULT_STORE.nodes,
  on(addNodes, (state, { nodes }) => [...state, ...nodes]),
  on(removeNodes, (state, { ids }) => [...state].filter((node) => !ids.find((i) => i === node.id))),
  on(updateNodes, (state, { nodes }) => state.map((item) => nodes.find((i) => i.id === item.id) ?? item)),
  on(updateNodesSize, updateNodesSizeReducer),
  on(groupNodes, groupNodesReducer),
  on(breakNode, breakNodeReducer)
);
