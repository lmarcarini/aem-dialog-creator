import "@mantine/code-highlight/styles.css";
import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import "@mantine/core/styles.css";
import { useDisclosure } from "@mantine/hooks";
import { IconCode, IconListTree } from "@tabler/icons-react";
import styles from "./App.module.css";
import {
  CodeVisualizer,
  FormPickerMenu,
  ResetButton,
  TreeVisualizer,
} from "./features";
import { useViewStore } from "./stores/useViewStore";

function App() {
  const [opened, { toggle }] = useDisclosure();

  const { currentView, setView } = useViewStore((state) => state);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={styles.header}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <UnstyledButton onClick={() => setView("code")}>
            <IconCode />
          </UnstyledButton>
          <UnstyledButton onClick={() => setView("tree")}>
            <IconListTree />
          </UnstyledButton>
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
