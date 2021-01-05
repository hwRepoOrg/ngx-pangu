import * as _ from 'lodash';
import { CeUtilsService, genNodeId, IDOMRect } from '../services';
import { IActionType, INode } from '../store';

export function addNodes<T = any>(nodes: INode<T>[]): IActionType<T> {
  return (state) => ({ ...state, nodes: [...state.nodes, ...nodes] });
}

export function removeNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => {
    let parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
    if (parent === false) {
      return { ...state };
    } else if (parent === undefined) {
      return { ...state, nodes: state.nodes.filter((node) => !ids.includes(node.id)) };
    } else {
      const originalParentId = parent.id;
      let prevParent: INode;
      let prevParentId: string;
      const parents = CeUtilsService.shared.getNodeAndParentListById(parent.id, _.cloneDeep(state.nodes));
      while (parents.length) {
        parent = parents.shift();
        let children: INode<T>[];
        if (parent.id === originalParentId) {
          children = parent.children.filter((child: INode<T>) => !ids.includes(child.id));
        } else {
          children = parent.children
            .filter((child: INode<T>) => (child.id === prevParentId ? prevParent : child))
            .filter((child: INode<T>) => !!child);
        }
        prevParentId = parent.id;
        if (children.length > 1) {
          const rect = CeUtilsService.shared.getOuterBoundingBox(
            children
              .map((child) => ({
                rotate: child.rotate,
                ...CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent as INode, (parent as INode).rotate, child),
              }))
              .map((item) => CeUtilsService.shared.getAbsolutePosition(item.cx, item.cy, item.width, item.height, item.rotate))
          );
          parent.width = rect.width;
          parent.height = rect.height;
          parent.left = rect.left;
          parent.top = rect.top;
          parent.children = children;
        } else if (children.length === 1) {
          const rect = CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, children[0]);
          parent = { ...children[0], ...rect };
        } else if (children.length === 0) {
          parent = null;
        }
        prevParent = parent as INode;
      }
      return { ...state, nodes: state.nodes.map((node) => (node.id === prevParentId ? parent : node)).filter((node) => !!node) as INode<T>[] };
    }
  };
}

export function updateNodes<T = any>(nodes: INode<T>[]): IActionType<T> {
  return (state) => ({ ...state, nodes: state.nodes.map((item) => nodes.find((i) => i.id === item.id) ?? item) });
}

export function updateNodesSize<T = any>(nodesSizeMap: Map<string, IDOMRect>): IActionType<T> {
  return (state) => {
    let inSameLayer = true;
    const ids = [...nodesSizeMap.keys()];
    let parent: INode;
    while (inSameLayer && ids.length) {
      const id = ids.pop();
      const node = CeUtilsService.shared.getNodeById(id, state.nodes);
      inSameLayer = parent?.id === node.parentNode?.id;
      parent = node.parentNode;
    }

    if (!inSameLayer) {
      return state;
    } else {
      if (!parent) {
        return {
          ...state,
          nodes: state.nodes.map((node) => {
            const newNode = { ...node, ...nodesSizeMap.get(node.id) };
            if (node.children && node.children.length) {
              return { ...newNode, children: recursiveUpdateNodeChildrenSize(newNode.children, { ...node }, { ...newNode }) };
            } else {
              return newNode;
            }
          }),
        };
      } else {
        return state;
      }
    }
  };
}

export function groupNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => {
    const parent = CeUtilsService.shared.getSameLayerParentByChildren(ids, state.nodes);
    if (parent === false) {
      return state;
    }
    const nodeMap = new Map<string, INode>();
    ids.forEach((id) => {
      const node = state.nodes.find((i) => i.id === id);
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
      zIndex: Math.max(...state.nodes.filter((node) => !nodeMap.has(node.id)).map((node) => node.zIndex)) + 1,
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
    return { ...state, nodes: [...state.nodes.filter((node) => !nodeMap.has(node.id)), groupNode] };
  };
}

export function breakNode<T = any>(id: string): IActionType<T> {
  return (state) => {
    const [node, ...parents] = CeUtilsService.shared.getNodeAndParentListById(id, _.cloneDeep(state.nodes));
    const newNodes = node.children.map((child: INode<T>) => {
      return {
        ...child,
        ...CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(node, node.rotate, child),
        rotate: (child.rotate ?? 0) + (node.rotate ?? 0),
      };
    });
    if (!parents.length) {
      return { ...state, nodes: [...state.nodes.filter((i) => i.id !== node.id), ...newNodes] };
    } else {
      let parent = parents.shift();
      parent.children = [...parent.children.filter((child: INode<T>) => child.id !== node.id), ...newNodes];
      while (parents.length) {
        const nextParent = parents.shift();
        nextParent.children = nextParent.children.map((child: INode<T>) => (child.id === parent.id ? parent : child));
        parent = nextParent;
      }
      return { ...state, nodes: [...state.nodes.filter((i) => i.id !== parent.id), parent] };
    }
  };
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
//     const cxPercent = (node.left + node.width / 2) / oldParentRect.width;
//     const cyPercent = (node.top + node.height / 2) / oldParentRect.height;
//     const widthPercent = node.width / oldParentRect.width;
//     const heightPercent = node.height / oldParentRect.height;
//     const newNodeRect: IDOMRect = {
//       width: widthPercent * width,
//       height: heightPercent * height,
//       left: cxPercent * width - (widthPercent * width) / 2,
//       top: cyPercent * height - (heightPercent * height) / 2,
//     };
//     if (node.children && node.children.length) {
//       return { ...node, ...newNodeRect, children: recursiveUpdateNodeChildrenSize(node.children, { ...node }, { ...newNodeRect }) };
//     } else {
//       return { ...node, ...newNodeRect };
//     }
//   });
// }

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
