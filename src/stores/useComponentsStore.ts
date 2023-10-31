import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type ComponentI = {
  type: string;
  options?: { [key: string]: string };
  child?: ComponentI[];
};

interface ComponentsState {
  structure: ComponentI[];
  addComponent: (component: ComponentI) => void;
}

export const useComponentsStore = create<ComponentsState>()(
  devtools(
    persist(
      (set) => ({
        structure: [],
        addComponent: (component) =>
          set((state) => ({ structure: [...state.structure, component] })),
      }),
      {
        name: "components-storage",
      }
    )
  )
);
