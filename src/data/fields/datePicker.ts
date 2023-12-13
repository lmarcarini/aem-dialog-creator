import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const datePicker: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/datepicker",
  displayTitle: "Date Picker",
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
      title: "typeHint",
      required: false,
      type: "string",
      description: "The value of SlingPostServlet @TypeHint.",
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
      title: "type",
      required: false,
      type: "list",
      default: "date",
      listOptions: ["", "date", "datetime", "time"],
      description: "The type of the picker. date | datetime | time",
    },
    {
      title: "autofocus",
      required: false,
      type: "string",
      description:
        "The autofocus attribute to lets you specify that the field should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form element in a document can have the autofocus attribute.",
    },
    {
      title: "displayedFormat",
      required: false,
      type: "string",
      description: "The date format for display.",
    },
    {
      title: "valueFormat",
      required: false,
      type: "string",
      description:
        "The date format of the actual value, and for form submission..",
      default: "YYYY-MM-DD[T]HH:mm:ss.SSSZ",
    },
    {
      title: "minDate",
      required: false,
      type: "string",
      description: "The minimum boundary of the date.",
    },
    {
      title: "maxDate",
      required: false,
      type: "string",
      description: "The maximum boundary of the date.",
    },
    {
      title: "displayTimezoneMessage",
      required: false,
      type: "boolean",
      description:
        "Indicates if a informative message should be displayed regarding timezone prevalence",
    },
    {
      title: "beforeSelector",
      required: false,
      type: "boolean",
      description:
        "Specifies a CSS selector targeting another datepickers that are before this datepicker. If those datepickers are not before this datepicker, it will be invalid.",
    },
    {
      title: "afterSelector",
      required: false,
      type: "boolean",
      description:
        "Specifies a CSS selector targeting another datepickers that are after this datepicker. If those datepickers are not after this datepicker, it will be invalid.",
    },
    {
      title: "validation",
      required: false,
      type: "string",
      description: "The name of the validator to be applied.",
    },
  ],
};
