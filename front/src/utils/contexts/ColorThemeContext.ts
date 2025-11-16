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
  onSecondaryContainerColor: string;
  onSurfaceColor: string;
  onSurfaceVariantColor: string;
  outlineVariantColor: string;
  secondaryColor: string;
  secondaryContainerColor: string;
  surfaceContainerColor: string;
  surfaceContainerLowestColor: string;
}

export const defaultAppThemeColor = "#ba5b88";

export const buildActiveColor = (color: string) => {
  return `${color}1F`;
};

export const buildColorTheme = (hexColor: string, isDarkMode: boolean) => {
  const hct = buildHctFromHexColor(hexColor);

  const colorScheme = new SchemeContent(hct, isDarkMode, 0);

  return buildColorThemeFromColorScheme(colorScheme);
};

const buildColorThemeFromColorScheme = (colorScheme: DynamicScheme) => {
  const colorTheme: ColorThemeType = {
    onSecondaryContainerColor: hexFromArgb(colorScheme.onSecondaryContainer),
    onSurfaceColor: hexFromArgb(colorScheme.onSurface),
    onSurfaceVariantColor: hexFromArgb(colorScheme.onSurfaceVariant),
    outlineVariantColor: hexFromArgb(colorScheme.outlineVariant),
    secondaryColor: hexFromArgb(colorScheme.secondary),
    secondaryContainerColor: hexFromArgb(colorScheme.secondaryContainer),
    surfaceContainerColor: hexFromArgb(colorScheme.surfaceContainer),
    surfaceContainerLowestColor: hexFromArgb(
      colorScheme.surfaceContainerLowest
    ),
  };

  return colorTheme;
};

export const buildFocusColor = (color: string) => {
  return `${color}1A`;
};

const buildHctFromHexColor = (hexColor: string) => {
  const { red, green, blue } = buildRgbFromHexColor(hexColor);

  const argb = argbFromRgb(red, green, blue);

  return Hct.fromInt(argb);
};

export const buildHoverColor = (color: string) => {
  return `${color}14`;
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
