import SortableTree from "@nosferatu500/react-sortable-tree";
import styles from "./TreeVisualizer.module.css";
import { useComponentsStore } from "../../stores/useComponentsStore";
import "@nosferatu500/react-sortable-tree/style.css";
import "./TreeCustomStyle.css";

export const TreeVisualizer = () => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  return (
    <div className={styles.treeWrapper}>
      <SortableTree
        className="customTree"
        treeData={structure}
        onChange={(curStructure) => setStructure(curStructure)}
        canNodeHaveChildren={(_node) => false}
      />
    </div>
  );
};
