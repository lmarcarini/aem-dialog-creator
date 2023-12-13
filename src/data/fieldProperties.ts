import { colorField } from "data/fields/colorField";
import { datePicker } from "data/fields/datePicker";
import { numberField } from "data/fields/numberField";
import { password } from "data/fields/password";
import { pathField } from "data/fields/pathField";
import { switchProperties } from "data/fields/switch";
import { textAreaProperties as textfield } from "data/fields/textArea";
import { textFieldProperties as textarea } from "data/fields/textField";

export const fieldProperties = {
  colorField,
  datePicker,
  numberField,
  password,
  pathField,
  switch: switchProperties,
  textarea,
  textfield,
};
