import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const fieldBaseProperty: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/field",
  displayTitle: "Field",
  optionFields: [
    { title: "fieldLabel", required: true, type: "string" },
    { title: "fieldDescription", required: false, type: "string" },
    {
      title: "tooltipPosition",
      required: false,
      type: "list",
      listOptions: ["", "right", "left", "top", "bottom"],
    },
  ],
};
