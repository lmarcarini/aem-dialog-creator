import { fieldProperties } from "data/fieldProperties";

export const getFieldProperties = (field: keyof typeof fieldProperties) =>
  fieldProperties[field];
