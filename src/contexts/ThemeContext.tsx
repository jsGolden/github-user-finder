import React, { createContext, ReactNode, useState } from "react";

import { ThemeProvider as StyledThemeProvider, DefaultTheme } from "styled-components";
import { Dark, Light } from "../styles/themes";

import { usePersistedState } from '../utils/usePeristedState';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme: DefaultTheme;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children, defaultTheme }: ThemeProviderProps) {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('@github-user-finder:theme', defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? Dark : Light);
  };

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
}
