import { ActionIcon, Button, Group, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import { MappedInput } from "features/EditButton/components";
import { useMemo } from "react";
import { useComponentsStore } from "stores/useComponentsStore";
import { getFieldProperties } from "utils/getFieldProperties";
import styles from "./EditButton.module.css";
import { getNode } from "./utils/getNode";
import { changeNode } from "features/EditButton/utils/changeNode";

type Props = { path: number[] };

export const EditButton = (props: Props) => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  const [opened, { open, close }] = useDisclosure(false);

  const node = useMemo(
    () => getNode(props.path, structure),
    [props.path, structure]
  );

  if (!node) return null;

  const properties = getFieldProperties(node.type);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nodeNumber = props.path.at(0);
    if (nodeNumber === undefined) return null;
    const formData = new FormData(e.currentTarget);
    setStructure(changeNode({ nodeNumber, node, formData, structure }));
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
          {properties.optionFields.map((optionData) => (
            <MappedInput node={node} optionData={optionData} />
          ))}
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
