import "@mantine/code-highlight/styles.css";
import {
  ActionIcon,
  AppShell,
  Burger,
  Divider,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { IconCode, IconListTree } from "@tabler/icons-react";
import {
  CodeVisualizer,
  FormPickerMenu,
  ResetButton,
  TreeVisualizer,
} from "features";
import { useViewStore } from "stores/useViewStore";
import styles from "./App.module.css";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const { currentView, setView } = useViewStore((state) => state);

  return (
    <AppShell
      header={{ height: "64" }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={styles.header}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text>Views</Text>
          <ActionIcon onClick={() => setView("code")} bg="unset">
            <IconCode
              color={currentView === "code" ? "white" : "rgb(193, 194, 197)"}
            />
          </ActionIcon>
          <ActionIcon onClick={() => setView("tree")} bg="unset">
            <IconListTree
              color={currentView === "tree" ? "white" : "rgb(193, 194, 197)"}
            />
          </ActionIcon>
          <Divider orientation="vertical" />
          <ResetButton />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <FormPickerMenu />
      </AppShell.Navbar>
      <AppShell.Main>
        {currentView === "code" && <CodeVisualizer />}
        {currentView === "tree" && <TreeVisualizer />}
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
