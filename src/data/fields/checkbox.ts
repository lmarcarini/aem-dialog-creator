import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const checkbox: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/checkbox",
  displayTitle: "Checkbox",
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
      title: "deleteHint",
      required: false,
      default: "true",
      type: "boolean",
      description:
        "true to generate the SlingPostServlet @Delete hidden input based on the field name.",
    },
    {
      title: "value",
      required: true,
      type: "string",
      description: "The value of the field.",
    },
    {
      title: "uncheckedValue",
      required: true,
      type: "string",
      description: "The submit value of the field when it is unchecked.",
    },
    {
      title: "checked",
      required: false,
      type: "boolean",
      description: "checked",
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
      title: "ignoreData",
      required: false,
      type: "boolean",
      description:
        "If false, the checked state is based on matching the form values by name and value properties. Otherwise, the form values are ignored, and the checked state is based on checked property specified.",
    },
    {
      title: "text",
      required: false,
      type: "string",
      description: "The text of the checkbox.",
    },
    {
      title: "autosubmit",
      required: false,
      type: "boolean",
      description:
        "true to automatically submit the form when the checkbox is checked/unchecked.",
    },
    {
      title: "showEmptyInReadOnly",
      required: false,
      type: "string",
      description: "Shows read-only version even when it is unchecked.",
    },
    {
      title: "wrapperClass",
      required: false,
      type: "string",
      description: "The class for the wrapper element.",
    },
  ],
};
