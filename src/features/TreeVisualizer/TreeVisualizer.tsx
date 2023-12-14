import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import "./TreeCustomStyle.css";
import styles from "./TreeVisualizer.module.css";
import { useComponentsStore } from "stores/useComponentsStore";
import { getFieldProperties } from "utils/getFieldProperties";

type Props = {
  editButton: (path: number[]) => JSX.Element | null;
  deleteButton: (path: number[]) => JSX.Element | null;
};

export const TreeVisualizer = ({ editButton, deleteButton }: Props) => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  return (
    <div className={styles.treeWrapper}>
      <SortableTree
        className="customTree"
        treeData={structure}
        onChange={setStructure}
        canNodeHaveChildren={(node) => !!getFieldProperties(node.type).nestable}
        generateNodeProps={({ path }) => ({
          buttons: [editButton(path), deleteButton(path)],
        })}
      />
    </div>
  );
};
