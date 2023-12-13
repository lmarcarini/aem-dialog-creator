import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const password: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/password",
  displayTitle: "Password",
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
      title: "autocomplete",
      required: false,
      type: "string",
      description:
        "Indicates if the value can be automatically completed by the browser.",
      default: "off",
    },
    {
      title: "autofocus",
      required: false,
      type: "string",
      description:
        "The autofocus attribute to lets you specify that the field should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute.",
    },

    {
      title: "retype",
      required: false,
      type: "string",
      description:
        "The name of the other password field that is used to verify this field. If the values of both fields do not match, validation error is shown.",
    },
    {
      title: "validation",
      required: false,
      type: "string",
      description: "The name of the validator to be applied.",
    },
  ],
};
