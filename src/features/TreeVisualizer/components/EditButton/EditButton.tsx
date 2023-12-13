import {
  ActionIcon,
  Button,
  Checkbox,
  Group,
  Modal,
  NativeSelect,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { useMemo } from "react";
import { useComponentsStore } from "stores/useComponentsStore";
import { getFieldProperties } from "utils/getFieldProperties";
import styles from "./EditButton.module.css";

type Props = { path: number[] };

export const EditButton = (props: Props) => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  const [opened, { open, close }] = useDisclosure(false);

  const node = useMemo(() => {
    const path = props.path;
    if (path.length < 1) return null;
    if (path.length === 1) {
      const nodeNumber = path.at(0);
      if (nodeNumber === undefined) return null;
      return structure.at(nodeNumber);
    }
  }, [props.path, structure]);

  if (!node) return null;

  const properties = getFieldProperties(node.type);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nodeNumber = props.path.at(0);
    if (nodeNumber === undefined) return null;
    const optionsForm = Object.fromEntries(
      properties.optionFields
        .filter((optionData) => formData.get(optionData.title))
        .map((optionData) => [
          optionData.title,
          formData.get(optionData.title) as string,
        ])
    );
    const newStructure = [...structure];
    newStructure[nodeNumber] = {
      ...node,
      title: formData.get("title")?.toString() || "",
      options: optionsForm,
    };
    setStructure(newStructure);
    close();
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Properties">
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            label="Title"
            description="Unique name to identify the field"
            placeholder="myField"
            name="title"
            defaultValue={node?.title}
          />
          {properties.optionFields.map((optionData) => {
            const defaultValue = node.options && node.options[optionData.title];
            switch (optionData.type) {
              case "string":
                return (
                  <TextInput
                    key={optionData.title}
                    label={optionData.title}
                    description={optionData.description}
                    required={!!optionData.required}
                    name={optionData.title}
                    defaultValue={defaultValue}
                  />
                );
              case "number":
                return (
                  <NumberInput
                    key={optionData.title}
                    label={optionData.title}
                    description={optionData.description}
                    required={!!optionData.required}
                    name={optionData.title}
                    defaultValue={defaultValue}
                  />
                );
              case "boolean":
                return (
                  <Checkbox
                    required={!!optionData.required}
                    name={optionData.title}
                    label={optionData.title}
                    defaultChecked={!!defaultValue}
                  ></Checkbox>
                );
              case "list":
                return (
                  <NativeSelect
                    key={optionData.title}
                    label={optionData.title}
                    description={optionData.description}
                    required={!!optionData.required}
                    name={optionData.title}
                    defaultValue={defaultValue}
                    data={optionData.listOptions}
                  />
                );
              default:
                return <></>;
            }
          })}
          <Group justify="center">
            <Button variant="outline" onClick={close}>
              Cancel
            </Button>
            <Button type="submit">Confirm</Button>
          </Group>
        </form>
      </Modal>
      <ActionIcon onClick={open} className={styles.editButton}>
        <IconEdit className={styles.editIcon} />
      </ActionIcon>
    </>
  );
};
