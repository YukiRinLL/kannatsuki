import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ThemeName = "red" | "blue";

interface ThemeState {
  theme: ThemeName;
  toggle: () => void;
  set: (t: ThemeName) => void;
}

function applyTheme(theme: ThemeName) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export const useTheme = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "red",
      toggle: () => {
        const next = get().theme === "red" ? "blue" : "red";
        applyTheme(next);
        set({ theme: next });
      },
      set: (t) => {
        applyTheme(t);
        set({ theme: t });
      },
    }),
    {
      name: "kannatsuki-theme",
      onRehydrateStorage: () => (state) => {
        if (state) applyTheme(state.theme);
      },
    }
  )
);
