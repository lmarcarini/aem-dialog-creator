import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const pathField: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/pathfield",
  displayTitle: "Path Field",
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
      title: "multiple",
      required: false,
      type: "boolean",
      description:
        "Indicates if the user is able to select multiple selections.",
    },
    {
      title: "forceSelection",
      required: false,
      type: "boolean",
      description:
        "Indicates if the user must only select from the list of given options. If it is not forced, the user can enter arbitrary value.",
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
      title: "suggestionSrc",
      required: false,
      type: "string",
      description:
        "The URI template that returns the suggestion markup. Accepted variables: query, offset, limit.",
    },
    {
      title: "pickerSrc",
      required: false,
      type: "string",
      description:
        "The URI template that returns the picker markup. Accepted variables: value.",
    },
    {
      title: "rootPath",
      required: true,
      default: "/",
      type: "string",
      description: "The path of the root of the pathfield.",
    },
  ],
};
