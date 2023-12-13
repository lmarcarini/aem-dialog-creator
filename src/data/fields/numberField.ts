import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const numberField: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/numberfield",
  displayTitle: "Number Field",
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
      title: "typeHint",
      required: false,
      type: "string",
      description: "The value of SlingPostServlet @TypeHint.",
    },
    {
      title: "validation",
      required: false,
      type: "string",
      description: "The name of the validator to be applied.",
    },
    {
      title: "min",
      required: false,
      type: "number",
      description: "The minimum value allowed.",
    },
    {
      title: "max",
      required: false,
      type: "number",
      description: "The maximum value allowed.",
    },
    {
      title: "step",
      required: false,
      type: "string",
      default: "1",
      description:
        "The increment/decrement step amount. \nnumber A double that is greater than zero. In this case, the field accepts only values at multiples of the step value greater than the minimum. \n'any' The value can be in any number.",
    },
  ],
};
