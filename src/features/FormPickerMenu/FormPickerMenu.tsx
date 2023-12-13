import { Button, Stack, Title } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { ComponentTypes, useComponentsStore } from "stores/useComponentsStore";
import classes from "./FormPickerMenu.module.css";
import { fieldProperties } from "data/fieldProperties";

export const FormPickerMenu = () => {
  const addComponent = useComponentsStore((state) => state.addComponent);

  const handleClick = (componentType: ComponentTypes) => () => {
    addComponent({ type: componentType, title: componentType });
  };

  return (
    <Stack className={classes.wrapper}>
      <Title order={2}>Components</Title>
      {Object.keys(fieldProperties).map((field) => (
        <Button
          fullWidth
          rightSection={<IconArrowRight />}
          onClick={handleClick(field as keyof typeof fieldProperties)}
          id={field}
        >
          {field}
        </Button>
      ))}
    </Stack>
  );
};
