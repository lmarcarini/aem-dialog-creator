import { CodeHighlight } from "@mantine/code-highlight";
import { getComponentXml } from "./helper/getComponentXml";
import { useMemo } from "react";
import { useComponentsStore } from "../../stores/useComponentsStore";

export const CodeVisualizer = () => {
  const structure = useComponentsStore((state) => state.structure);

  const code = useMemo(() => getComponentXml(structure), [structure]);

  return <CodeHighlight code={code} language="xml" />;
};
