import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ComponentTypes = "textfield" | "textarea";

export type ComponentI = {
  type: ComponentTypes;
  title: string;
  expanded?: boolean;
  options?: { [key: string]: string };
  children?: ComponentI[];
};

interface ComponentsState {
  structure: ComponentI[];
  count: number;
  addComponent: (component: ComponentI) => void;
  setStructure: (structure: ComponentI[]) => void;
  reset: () => void;
}

export const useComponentsStore = create<ComponentsState>()(
  devtools(
    persist(
      (set) => ({
        structure: [],
        count: 0,
        addComponent: (component) =>
          set((state) => ({
            structure: [
              ...state.structure,
              { ...component, title: component.title + state.count },
            ],
            count: state.count + 1,
          })),
        setStructure: (structure: ComponentI[]) =>
          set((_state) => ({ structure })),
        reset: () =>
          set((_state) => ({
            structure: [] as ComponentI[],
            count: 0,
          })),
      }),
      {
        name: "components-storage",
      }
    )
  )
);
