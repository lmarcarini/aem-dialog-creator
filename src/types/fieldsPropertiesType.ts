export type FieldOptionType =
  | {
      title: string;
      required: boolean;
      type: "string" | "boolean" | "number";
      description?: string;
      listOptions?: string[];
      default?: string;
    }
  | {
      title: string;
      required: boolean;
      type: "list";
      description?: string;
      listOptions: string[];
      default?: string;
    };

export type FieldPropertiesType = {
  resourceTypePath: string;
  displayTitle: string;
  nestable?: boolean;
  optionFields: FieldOptionType[];
};
