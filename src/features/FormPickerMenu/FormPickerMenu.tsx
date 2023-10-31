import { Button, Stack, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import classes from "./FormPickerMenu.module.css";

export const FormPickerMenu = () => {
  return (
    <Stack className={classes.wrapper}>
      <Title order={2}>Components</Title>
      <Button fullWidth rightSection={<IconArrowRight />}>
        Text Field
      </Button>
    </Stack>
  );
};
