import { defaultIsDarkMode } from "@/utils/contexts/IsDarkModeContext";
import {
  argbFromRgb,
  DynamicScheme,
  Hct,
  hexFromArgb,
  SchemeContent,
} from "@material/material-color-utilities";
import { createContext } from "react";

export interface ColorThemeType {
  onSurfaceColor: string;
  surfaceContainerLowestColor: string;
}

export const defaultAppThemeColor = "#5A298F";

export const buildColorTheme = (hexColor: string, isDarkMode: boolean) => {
  const hct = buildHctFromHexColor(hexColor);

  const colorScheme = new SchemeContent(hct, isDarkMode, 0);

  return buildColorThemeFromColorScheme(colorScheme);
};

const buildColorThemeFromColorScheme = (colorScheme: DynamicScheme) => {
  return {
    onSurfaceColor: hexFromArgb(colorScheme.onSurface),
    surfaceContainerLowestColor: hexFromArgb(
      colorScheme.surfaceContainerLowest
    ),
  };
};

const buildHctFromHexColor = (hexColor: string) => {
  const { red, green, blue } = buildRgbFromHexColor(hexColor);

  const argb = argbFromRgb(red, green, blue);

  return Hct.fromInt(argb);
};

const buildRgbFromHexColor = (hexColor: string) => {
  const hex = hexColor.replace("#", "");

  return {
    red: parseInt(hex.substring(0, 2), 16),
    green: parseInt(hex.substring(2, 4), 16),
    blue: parseInt(hex.substring(4, 6), 16),
  };
};

export const ColorThemeContext = createContext(
  buildColorTheme(defaultAppThemeColor, defaultIsDarkMode)
);
