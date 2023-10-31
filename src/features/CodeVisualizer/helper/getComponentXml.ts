import { ComponentI } from "../../../stores/useComponentsStore";

const TAB_SPACING = 4;

const getTextField = (nestingLevel: number) => {
  const spacing = " ".repeat(nestingLevel * TAB_SPACING);
  return `${spacing}<text
${spacing}    jcr:primaryType="nt:unstructured"
${spacing}    sling:resourceType="granite/ui/components/coral/foundation/form/textfield"
${spacing}    fieldLabel="Text"
${spacing}    name="./text"/>`;
};

export const getComponentXml = (structure: ComponentI[]) => {
  const childrenXml = structure.map(() => getTextField(5)).join("\n");

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
