import { smallWindowSizeClass } from "@/utils/breakpoints";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { homeIcon, menuIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { useContext } from "react";
import styled from "styled-components";
import { NavigationItem } from "./components";
import { useTranslation } from "react-i18next";

export const NavigationBar = () => {
  const colorTheme = useContext(ColorThemeContext);
  const isSmallWindow = useIsWindowSizeClass([smallWindowSizeClass]);
  const { t } = useTranslation();

  const navigationItemArray = [
    { icon: menuIcon, label: t("menu"), to: homePagePath },
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
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
