import { Button, Stack, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./FormPickerMenu.module.css";
import { useComponentsStore } from "../../stores/useComponentsStore";

export const FormPickerMenu = () => {
  const addComponent = useComponentsStore((state) => state.addComponent);

  return (
    <Stack className={classes.wrapper}>
      <Title order={2}>Components</Title>
      <Button
        fullWidth
        rightSection={<IconArrowRight />}
        onClick={addComponent}
      >
        Text Field
      </Button>
    </Stack>
  );
};
