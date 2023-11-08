import {
  Button,
  Group,
  Modal,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { useComponentsStore } from "stores/useComponentsStore";

export const ResetButton = () => {
  const reset = useComponentsStore((state) => state.reset);

  const [opened, { open, close }] = useDisclosure(false);

  const handleReset = () => {
    reset();
    close();
  };

  return (
    <>
      <UnstyledButton aria-label="Reset" onClick={open} type="button">
        <IconTrash />
      </UnstyledButton>
      <Modal opened={opened} onClose={close} title="Confirm Reset">
        <Stack>
          <Text>This is going to erase all component made.</Text>
          <Text>Are you sure you want to continue?</Text>
          <Group grow>
            <Button type="button" onClick={close}>
              Close
            </Button>
            <Button type="button" onClick={handleReset} bg="red">
              Confirm Reset
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
