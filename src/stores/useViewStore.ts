import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type Views = "code" | "tree" | "loading";

type ViewsState = {
  currentView: Views;
  setView: (view: Views) => void;
};

export const useViewStore = create<ViewsState>()(
  devtools(
    persist(
      (set) => ({
        currentView: "code",
        setView: (view) => set((_state) => ({ currentView: view })),
      }),
      {
        name: "view-storage",
      }
    )
  )
);
