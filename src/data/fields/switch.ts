import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const switchProperties: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/switch",
  displayTitle: "Switch",
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
      default: "true",
      required: false,
      type: "string",
      description: "The value of the field.",
    },
    {
      title: "deleteHint",
      default: "true",
      required: false,
      type: "boolean",
      description:
        "set it to true to generate the SlingPostServlet @Selete hidden input based on the name.",
    },
    {
      title: "uncheckedValue",
      default: "false",
      required: false,
      type: "boolean",
      description: "The submit value of the field when it is unchecked.",
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
      title: "validation",
      required: false,
      type: "string",
      description: "The name of the validator to be applied.",
    },
    {
      title: "checked",
      required: false,
      type: "boolean",
      description: "true to pre-check this field, false otherwise",
    },
    {
      title: "ignoreData",
      required: false,
      type: "boolean",
      description:
        "If false, the checked status is based on matching the form values by name and value properties. Otherwise, the form are not matched, and the checked status is based on checked property specified.",
    },
    {
      title: "wrapperClass",
      required: false,
      type: "string",
      description: "The class for the wrapper element.",
    },
  ],
};
