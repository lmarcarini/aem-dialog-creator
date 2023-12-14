import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const well: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/well",
  displayTitle: "Well",
  nestable: true,
  optionFields: [
    {
      title: "margin",
      required: false,
      type: "boolean",
      description: "Put vertical margin to the root element.",
    },
  ],
};
