import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import styles from "./DeleteButton.module.css";
import { useComponentsStore } from "stores/useComponentsStore";

type Props = { path: number[] };

export const DeleteButton = (props: Props) => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  const removeNode = (path: number[]) => () => {
    if (path.length !== 1) return;
    const nodeNumber = path.at(0);
    if (nodeNumber === undefined) return;
    setStructure(structure.toSpliced(nodeNumber, 1));
  };

  return (
    <ActionIcon onClick={removeNode(props.path)} className={styles.trashButton}>
      <IconTrash className={styles.trashIcon} />
    </ActionIcon>
  );
};
