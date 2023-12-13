import { Checkbox, NativeSelect, NumberInput, TextInput } from "@mantine/core";
import { ComponentI } from "stores/useComponentsStore";
import { FieldOptionType } from "types/fieldsPropertiesType";

type Props = { optionData: FieldOptionType; node: ComponentI };

export const MappedInput = ({ optionData, node }: Props) => {
  const defaultValue = node.options && node.options[optionData.title];
  const renderInput = {
    string: (
      <TextInput
        key={optionData.title}
        label={optionData.title}
        description={optionData.description}
        required={!!optionData.required}
        name={optionData.title}
        defaultValue={defaultValue}
      />
    ),
    number: (
      <NumberInput
        key={optionData.title}
        label={optionData.title}
        description={optionData.description}
        required={!!optionData.required}
        name={optionData.title}
        defaultValue={defaultValue}
      />
    ),
    boolean: (
      <Checkbox
        required={!!optionData.required}
        name={optionData.title}
        label={optionData.title}
        defaultChecked={!!defaultValue}
      />
    ),
    list: (
      <NativeSelect
        key={optionData.title}
        label={optionData.title}
        description={optionData.description}
        required={!!optionData.required}
        name={optionData.title}
        defaultValue={defaultValue}
        data={optionData.listOptions}
      />
    ),
  };

  return <>{renderInput[optionData.type]}</>;
};
