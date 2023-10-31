import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "@mantine/core/styles.css";
import "@mantine/code-highlight/styles.css";
import { CodeVisualizer, FormPickerMenu } from "./features";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
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
