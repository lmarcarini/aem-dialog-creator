import SortableTree from "@nosferatu500/react-sortable-tree";
import "@nosferatu500/react-sortable-tree/style.css";
import "./TreeCustomStyle.css";
import styles from "./TreeVisualizer.module.css";
import { DeleteButton, EditButton } from "./components";
import { useComponentsStore } from "stores/useComponentsStore";

export const TreeVisualizer = () => {
  const structure = useComponentsStore((state) => state.structure);
  const setStructure = useComponentsStore((state) => state.setStructure);

  return (
    <div className={styles.treeWrapper}>
      <SortableTree
        className="customTree"
        treeData={structure}
        onChange={setStructure}
        canNodeHaveChildren={(_node) => false}
        generateNodeProps={({ path }) => ({
          buttons: [<EditButton path={path} />, <DeleteButton path={path} />],
        })}
      />
    </div>
  );
};
