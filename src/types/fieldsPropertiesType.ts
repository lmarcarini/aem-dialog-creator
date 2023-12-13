export type FieldOptionType = {
  title: string;
  required: boolean;
  type: "string" | "boolean" | "number" | "list";
  description?: string;
  listOptions?: string[];
  default?: string;
};

export type FieldPropertiesType = {
  resourceTypePath: string;
  optionFields: FieldOptionType[];
};
