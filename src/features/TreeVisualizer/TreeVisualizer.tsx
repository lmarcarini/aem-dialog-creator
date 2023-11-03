import { ActionIcon } from "@mantine/core";
import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import { IconTrash } from "@tabler/icons-react";
import { useComponentsStore } from "../../stores/useComponentsStore";
import "./TreeCustomStyle.css";
import styles from "./TreeVisualizer.module.css";

export const TreeVisualizer = () => {
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
    <div className={styles.treeWrapper}>
      <SortableTree
        className="customTree"
        treeData={structure}
        onChange={setStructure}
        canNodeHaveChildren={(_node) => false}
        generateNodeProps={({ path }) => ({
          buttons: [
            <ActionIcon onClick={removeNode(path)}>
              <IconTrash />
            </ActionIcon>,
          ],
        })}
      />
    </div>
  );
};
