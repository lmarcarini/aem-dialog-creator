import { fieldBaseProperty } from "data/fields/base";
import { FieldPropertiesType } from "types/fieldsPropertiesType";

export const colorField: FieldPropertiesType = {
  resourceTypePath: "granite/ui/components/coral/foundation/form/colorfield",
  displayTitle: "Color Field",
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
      description:
        "The value of the field. This value can be set in 5 different formats (HEX, RGB, RGBA, HSB and CMYK)",
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
      title: "variant",
      required: false,
      type: "list",
      default: "default",
      listOptions: ["", "default", "swatch"],
      description:
        "Enumeration for colorfield variant: default Use ColorField as a formfield | swatch Use a simple swatch as ColorField",
    },
    {
      title: "autogenerateColors",
      required: false,
      type: "list",
      default: "off",
      listOptions: ["", "off", "shades", "tints"],
      description:
        "Enumeration for auto generated colors state: off Disable auto generation | shades Automatically generate shades (darker colors) of all colors | tints Automatically generate tints (lighter colors) of all colors",
    },
    {
      title: "showSwatches",
      required: false,
      type: "boolean",
      description:
        "Indicates if swatches view should be displayed. swatches view is the right side container that allows to select color from swatches.",
    },
    {
      title: "showProperties",
      required: false,
      type: "boolean",
      description:
        "Indicates if color properties view should be displayed. color properties view is the left side container having sliders, hex and RGBA inputs",
    },
    {
      title: "showDefaultColors",
      required: false,
      type: "boolean",
      description: "Indicates if default colors should be displayed.",
    },
    {
      title: "validation",
      required: false,
      type: "string",
      description: "The name of the validator to be applied.",
    },
  ],
};
