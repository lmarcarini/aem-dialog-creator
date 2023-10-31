import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { CodeVisualizer, FormPickerMenu, ResetButton } from "./features";
import styles from "./App.module.css";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={styles.header}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <ResetButton />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <FormPickerMenu />
      </AppShell.Navbar>
      <AppShell.Main>
        <CodeVisualizer />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
