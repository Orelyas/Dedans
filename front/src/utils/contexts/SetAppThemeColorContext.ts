import { createContext } from "react";

export const SetAppThemeColorContext = createContext<
  (appThemeColor: string) => void
>((appThemeColor: string) => {
  console.info(appThemeColor);
});
