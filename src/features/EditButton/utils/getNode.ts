import { ComponentI } from "stores/useComponentsStore";

/**
 * Returns the current node of the component tree
 * @param path The component position
 * @param structure The component tree
 * @returns The component node
 */
export const getNode = (
  path: number[],
  structure: ComponentI[]
): ComponentI | null => {
  if (path.length < 1) return null;
  if (path.length === 1) {
    const nodeNumber = path.at(0);
    if (nodeNumber === undefined) return null;
    return structure.at(nodeNumber) ?? null;
  }
  return null;
};
