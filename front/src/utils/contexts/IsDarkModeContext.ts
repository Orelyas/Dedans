import { createContext } from "react";

export const defaultIsDarkMode = true;

export const IsDarkModeContext = createContext<{
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}>({
  isDarkMode: defaultIsDarkMode,
  setIsDarkMode: (isDarkMode: boolean) => {
    console.info(isDarkMode);
  },
});
