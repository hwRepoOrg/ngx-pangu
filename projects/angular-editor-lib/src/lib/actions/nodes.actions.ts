import * as _ from 'lodash';
import { CeUtilsService, genNodeId, IDOMRect } from '../services';
import { IActionType, INode } from '../store';

export function lockNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, nodes: state.nodes.map((node) => (ids.includes(node.id) ? { ...node, locked: true } : node)) });
}

export function unlockNodes<T = any>(ids: string[]): IActionType<T> {
  return (state) => ({ ...state, nodes: state.nodes.map((node) => (ids.includes(node.id) ? { ...node, locked: false } : node)) });
}

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
      let originalParentId = parent.id;
      let newNodes = state.nodes.filter((node) => !ids.includes(node.id));
      let prevParent: INode;
      let prevParentId: string;
      const parents = CeUtilsService.shared.getNodeAndParentListById(parent.id, _.cloneDeep(state.nodes));
      while (parents.length) {
        let parent: INode = parents.shift();
        let children: INode<T>[];
        const parentChildren = CeUtilsService.shared.getNodeChildren(parent.id, state.nodes);
        if (parent.id === originalParentId) {
          children = parentChildren.filter((child: INode<T>) => !ids.includes(child.id));
        } else {
          children = parentChildren
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
        } else if (children.length === 1) {
          const rect = CeUtilsService.shared.getChildPositionBaseOnParentCoordinateSystem(parent, parent.rotate, children[0]);
          parent = { ...children[0], ...rect, parentId: parent.parentId };
          newNodes = newNodes.map((node) => (node.id === parent.id ? { ...parent } : node));
        } else if (children.length === 0) {
          newNodes = newNodes.filter((node) => node.id !== parent.id);
          parent = null;
        }
        prevParent = parent as INode;
      }
      return { ...state, nodes: newNodes };
    }
  };
}

export function updateNodes<T = any>(nodes: INode<T>[]): IActionType<T> {
  return (state) => ({ ...state, nodes: state.nodes.map((item) => ({ ...item, ...nodes.find((i) => i.id === item.id) })) });
}

export function updateNodesSize<T = any>(nodesSizeMap: Map<string, IDOMRect>): IActionType<T> {
  return (state) => state;
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
