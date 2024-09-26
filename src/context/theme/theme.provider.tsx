import { ReactNode, useState } from "react";
import { ThemeContext } from "./theme.contex";
import { ThemeNames, themes } from "../../styles/theme";
import { useSettingsContext } from "../settings/settings-contex";

export type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { getConfig } = useSettingsContext()
  const currentTheme = getConfig<ThemeNames>("theme", "light")

  return (
    <ThemeContext.Provider value={{ theme: themes[currentTheme] }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
