import { smallWindowSizeClass } from "@/utils/breakpoints";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { homeIcon, menuIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { useContext } from "react";
import styled from "styled-components";
import { NavigationItem } from "./components";

export const NavigationBar = () => {
  const colorTheme = useContext(ColorThemeContext);
  const isSmallWindow = useIsWindowSizeClass([smallWindowSizeClass]);

  const navigationItemArray = [
    { icon: menuIcon, label: "Menu", to: homePagePath },
    { icon: homeIcon, label: "Aujourd'hui", to: homePagePath },
    { icon: settingsIcon, label: "Paramètres", to: settingsPagePath },
  ];

  return (
    <StyledNavigationBar $colorTheme={colorTheme}>
      {navigationItemArray.map((navigationItem, index) => (
        <NavigationItem
          icon={navigationItem.icon}
          isExpanded={isSmallWindow}
          key={index}
          label={navigationItem.label}
          to={navigationItem.to}
        />
      ))}
    </StyledNavigationBar>
  );
};

const StyledNavigationBar = styled.nav<{ $colorTheme: ColorThemeType }>`
  background-color: ${(props) => props.$colorTheme.surfaceContainerColor};
  border-top: 1px solid ${(props) => props.$colorTheme.outlineVariantColor};
  display: flex;
`;
