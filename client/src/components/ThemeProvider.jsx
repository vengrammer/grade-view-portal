
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children, defaultTheme = "light", storageKey = "app-theme" }) {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(storageKey);
    return stored ? stored : defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(isDark ? "dark" : "light");
    } else {
      root.classList.add(theme);
    }

    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
