import { Button, Stack, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import {
  ComponentTypes,
  useComponentsStore,
} from "../../stores/useComponentsStore";
import classes from "./FormPickerMenu.module.css";

export const FormPickerMenu = () => {
  const addComponent = useComponentsStore((state) => state.addComponent);

  const handleClick = (componentType: ComponentTypes) => () => {
    addComponent({ type: componentType, title: componentType });
  };

  return (
    <Stack className={classes.wrapper}>
      <Title order={2}>Components</Title>
      <Button
        fullWidth
        rightSection={<IconArrowRight />}
        onClick={handleClick("TextField")}
      >
        Text Field
      </Button>
      <Button
        fullWidth
        rightSection={<IconArrowRight />}
        onClick={handleClick("TextArea")}
      >
        Text Area
      </Button>
    </Stack>
  );
};
