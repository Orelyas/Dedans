import {
  buildActiveColor,
  buildFocusColor,
  buildHoverColor,
  type ColorThemeType,
} from "@/utils/contexts";
import type { IconType } from "@/utils/icons";
import { css } from "styled-components";
import { StyledStateLayer } from "./components";

export interface NavigationItemType {
  icon: IconType;
  label: string;
  to?: string;
}

export const buildNavigationItemStyle = (props: {
  $colorTheme: ColorThemeType;
}) => {
  return css`
    all: unset;

    align-items: center;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover ${StyledStateLayer} {
      background-color: ${buildHoverColor(
        props.$colorTheme.onSecondaryContainerColor
      )};
    }

    &:focus ${StyledStateLayer} {
      background-color: ${buildFocusColor(
        props.$colorTheme.onSecondaryContainerColor
      )};
      outline: 3px solid ${props.$colorTheme.secondaryColor};
      outline-offset: 1px;
      position: relative;
    }

    &:active ${StyledStateLayer} {
      background-color: ${buildActiveColor(
        props.$colorTheme.onSecondaryContainerColor
      )};
      outline: unset;
    }
  `;
};
