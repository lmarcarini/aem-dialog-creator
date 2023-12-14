import { getFieldProperties } from "utils/getFieldProperties";
import { ComponentI } from "../../../stores/useComponentsStore";

const TAB_SPACING = 4;

const getNestableXml =
  (childrenXml: string) =>
  (nestingLevel: number, component: ComponentI): string => {
    const singleSpacing = " ".repeat(TAB_SPACING);
    const spacing = singleSpacing.repeat(nestingLevel);
    const properties = getFieldProperties(component.type);

    const filterNoOption = (option: (typeof properties.optionFields)[0]) =>
      component.options && component.options[option.title];

    const getOptions = (option: (typeof properties.optionFields)[0]) => {
      if (!component.options || !component.options[option.title]) return "";
      const curValue = component.options[option.title];
      if (option.type === "boolean")
        return `${spacing}    ${option.title}="{Boolean}${curValue === "on"}"`;
      return `${spacing}    ${option.title}="${curValue}"`;
    };

    return `${spacing}<${component.title}
${spacing + singleSpacing}jcr:primaryType="nt:unstructured"
${spacing + singleSpacing}sling:resourceType="${properties.resourceTypePath}"
${
  properties.optionFields.filter(filterNoOption).map(getOptions).join("\n") ||
  spacing + singleSpacing
}>
${spacing}    <items jcr:primaryType="nt:unstructured">
${childrenXml}
${spacing}    </items>
${spacing}</${component.title}>`;
  };

const getFieldXml = (nestingLevel: number, component: ComponentI): string => {
  const singleSpacing = " ".repeat(TAB_SPACING);
  const spacing = singleSpacing.repeat(nestingLevel);
  const properties = getFieldProperties(component.type);

  const filterNoOption = (option: (typeof properties.optionFields)[0]) =>
    component.options && component.options[option.title];

  const getOptions = (option: (typeof properties.optionFields)[0]) => {
    if (!component.options || !component.options[option.title]) return "";
    const curValue = component.options[option.title];
    if (option.type === "boolean")
      return `${spacing}    ${option.title}="{Boolean}${curValue === "on"}"`;
    return `${spacing}    ${option.title}="${curValue}"`;
  };

  return `${spacing}<${component.title}
${spacing + singleSpacing}jcr:primaryType="nt:unstructured"
${spacing + singleSpacing}sling:resourceType="${properties.resourceTypePath}"
${
  properties.optionFields.filter(filterNoOption).map(getOptions).join("\n") ||
  spacing + singleSpacing
}/>`;
};

const getSingleComponentXml =
  (nestingLevel: number) =>
  (component: ComponentI): string => {
    const properties = getFieldProperties(component.type);
    if (properties.nestable && component.children)
      return getNestableXml(
        component.children
          .map(getSingleComponentXml(nestingLevel + 2))
          .join("\n")
      )(nestingLevel, component);
    return getFieldXml(nestingLevel, component);
  };

export const getComponentXml = (structure: ComponentI[]) => {
  const childrenXml = structure.map(getSingleComponentXml(5)).join("\n");

  return `
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:sling="http://sling.apache.org/jcr/sling/1.0" xmlns:cq="http://www.day.com/jcr/cq/1.0" xmlns:jcr="http://www.jcp.org/jcr/1.0" xmlns:nt="http://www.jcp.org/jcr/nt/1.0"
    jcr:primaryType="nt:unstructured"
    jcr:title="Properties"
    sling:resourceType="cq/gui/components/authoring/dialog">
    <content
        jcr:primaryType="nt:unstructured"
        sling:resourceType="granite/ui/components/coral/foundation/fixedcolumns">
        <items jcr:primaryType="nt:unstructured">
            <column
                jcr:primaryType="nt:unstructured"
                sling:resourceType="granite/ui/components/coral/foundation/container">
                <items jcr:primaryType="nt:unstructured">
${childrenXml}
                </items>
            </column>
        </items>
    </content>
</jcr:root>
`;
};
