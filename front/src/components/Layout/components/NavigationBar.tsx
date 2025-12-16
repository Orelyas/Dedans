import { smallWindowSizeClass } from "@/utils/breakpoints";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { homeIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { NavigationItem, NavigationMenuButton } from "./components";
import { navigationItemPadding } from "./utils";

export const NavigationBar = ({
  toggleIsNavigationMenuOpen,
}: {
  toggleIsNavigationMenuOpen: () => void;
}) => {
  const colorTheme = useContext(ColorThemeContext);
  const isSmallWindow = useIsWindowSizeClass([smallWindowSizeClass]);
  const { t } = useTranslation();

  const navigationItemArray = [
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
  ];

  return (
    <StyledNavigationBar $colorTheme={colorTheme}>
      <StyledNavigationMenuButton
        isExpanded={isSmallWindow}
        toggleIsNavigationMenuOpen={toggleIsNavigationMenuOpen}
      />

      {navigationItemArray.map((navigationItem, index) => (
        <StyledNavigationItem
          isExpanded={isSmallWindow}
          key={index}
          navigationItem={navigationItem}
        />
      ))}
    </StyledNavigationBar>
  );
};

const navigationItemStyle = css`
  padding: ${navigationItemPadding} 0;
  width: 100%;
`;

const StyledNavigationBar = styled.nav<{ $colorTheme: ColorThemeType }>`
  background-color: ${(props) => props.$colorTheme.surfaceContainerColor};
  border-top: 1px solid ${(props) => props.$colorTheme.outlineVariantColor};
  display: flex;
`;

const StyledNavigationItem = styled(NavigationItem)`
  ${navigationItemStyle}
`;

const StyledNavigationMenuButton = styled(NavigationMenuButton)`
  ${navigationItemStyle}
`;
