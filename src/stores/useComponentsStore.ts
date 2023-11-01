import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ComponentTypes = "TextField" | "TextArea";

export type ComponentI = {
  type: ComponentTypes;
  title: ComponentTypes;
  options?: { [key: string]: string };
  child?: ComponentI[];
};

interface ComponentsState {
  structure: ComponentI[];
  addComponent: (component: ComponentI) => void;
  setStructure: (structure: ComponentI[]) => void;
  reset: () => void;
}

export const useComponentsStore = create<ComponentsState>()(
  devtools(
    persist(
      (set) => ({
        structure: [],
        addComponent: (component) =>
          set((state) => ({ structure: [...state.structure, component] })),
        setStructure: (structure: ComponentI[]) =>
          set((_state) => ({ structure })),
        reset: () =>
          set((_state) => ({
            structure: [] as ComponentI[],
          })),
      }),
      {
        name: "components-storage",
      }
    )
  )
);
