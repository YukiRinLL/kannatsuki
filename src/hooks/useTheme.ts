import { create } from "zustand";

export type ThemeName = "red" | "blue" | "japan";

interface ThemeState {
  theme: ThemeName;
  set: (t: ThemeName) => void;
}

function applyTheme(theme: ThemeName) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export const useTheme = create<ThemeState>()(
  (set) => ({
    theme: "red",
    set: (t) => {
      applyTheme(t);
      set({ theme: t });
    },
  })
);
