import { smallWindowSizeClass } from "@/utils/breakpoints";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { homeIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { NavigationItem, NavigationMenuButton } from "./components";

export const NavigationBar = () => {
  const colorTheme = useContext(ColorThemeContext);
  const isSmallWindow = useIsWindowSizeClass([smallWindowSizeClass]);
  const { t } = useTranslation();

  const navigationItemArray = [
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
  ];

  return (
    <StyledNavigationBar $colorTheme={colorTheme}>
      <NavigationMenuButton isExpanded={isSmallWindow} />

      {navigationItemArray.map((navigationItem, index) => (
        <NavigationItem
          isExpanded={isSmallWindow}
          key={index}
          navigationItem={navigationItem}
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
