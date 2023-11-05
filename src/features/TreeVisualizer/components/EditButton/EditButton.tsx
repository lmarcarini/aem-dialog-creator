import { ActionIcon, Button, Group, Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconEdit } from "@tabler/icons-react";
import styles from "./EditButton.module.css";
import { useMemo } from "react";
import { useComponentsStore } from "stores/useComponentsStore";

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nodeNumber = props.path.at(0);
    if (nodeNumber === undefined) return null;
    const newStructure = [...structure];
    newStructure[nodeNumber] = {
      ...node,
      title: formData.get("title")?.toString() || "",
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
