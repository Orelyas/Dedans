import {
  buildColorTheme,
  ColorThemeContext,
  defaultAppThemeColor,
  defaultIsDarkMode,
  IsDarkModeContext,
  SetAppThemeColorContext,
} from "@/utils/contexts";
import { router } from "@/utils/router";
import { useState } from "react";
import { RouterProvider } from "react-router/dom";

export const App = () => {
  const [appThemeColor, setAppThemeColor] = useState(defaultAppThemeColor);
  const [isDarkMode, setIsDarkMode] = useState(defaultIsDarkMode);

  return (
    <ColorThemeContext value={buildColorTheme(appThemeColor, isDarkMode)}>
      <IsDarkModeContext value={{ isDarkMode, setIsDarkMode }}>
        <SetAppThemeColorContext value={setAppThemeColor}>
          <RouterProvider router={router} />
        </SetAppThemeColorContext>
      </IsDarkModeContext>
    </ColorThemeContext>
  );
};
