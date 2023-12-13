import { ComponentI } from "stores/useComponentsStore";
import { getFieldProperties } from "utils/getFieldProperties";

type Args = {
  nodeNumber: number;
  node: ComponentI;
  structure: ComponentI[];
  formData: FormData;
};

/**
 * Alters one specified node
 * @param nodeNumber
 * @param node
 * @param structure
 * @param formData
 * @returns the component tree modified
 */
export const changeNode = ({ nodeNumber, node, structure, formData }: Args) => {
  const properties = getFieldProperties(node.type);
  const optionsForm = Object.fromEntries(
    properties.optionFields
      .filter((optionData) => formData.get(optionData.title))
      .map((optionData) => [
        optionData.title,
        formData.get(optionData.title) as string,
      ])
  );
  return structure.with(nodeNumber, {
    ...node,
    title: formData.get("title")?.toString() || "",
    options: optionsForm,
  });
};
