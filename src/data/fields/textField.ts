import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const textFieldProperties: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/textfield",
  optionFields: [
    ...fieldBaseProperty.optionFields,

    {
      title: "name",
      required: true,
      type: "string",
      description:
        "The name that identifies the field when submitting the form.",
    },
    {
      title: "value",
      required: false,
      type: "string",
      description: "The value of the field.",
    },
    {
      title: "emptyText",
      required: false,
      type: "string",
      description:
        "i18n A hint to the user of what can be entered in the field.",
    },
    {
      title: "disabled",
      required: false,
      type: "boolean",
      description: "Indicates if the field is in disabled state.",
    },
    {
      title: "required",
      required: false,
      type: "boolean",
      description: "Indicates if the field is mandatory to be filled.",
    },
    {
      title: "autocomplete",
      required: false,
      type: "string",
      description:
        "Indicates if the value can be automatically completed by the browser.",
      default: "off",
    },
    {
      title: "maxlenght",
      required: false,
      type: "number",
      description:
        "The maximum number of characters (in Unicode code points) that the user can enter.",
    },
  ],
};
