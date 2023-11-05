import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import styles from "./DeleteButton.module.css";
import { useComponentsStore } from "stores/useComponentsStore";

type Props = { path: number[] };

export const DeleteButton = (props: Props) => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  const removeNode = (path: number[]) => () => {
    if (path.length < 1) return;
    if (path.length === 1) {
      const newStructure = [...structure];
      const nodeNumber = path.at(0);
      if (nodeNumber === undefined) return;
      newStructure.splice(nodeNumber, 1);
      setStructure(newStructure);
    }
  };

  return (
    <ActionIcon onClick={removeNode(props.path)} className={styles.trashButton}>
      <IconTrash className={styles.trashIcon} />
    </ActionIcon>
  );
};
