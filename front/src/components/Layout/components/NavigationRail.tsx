import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { homeIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { type MouseEvent, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { NavigationItem, NavigationMenuButton } from "./components";
import { navigationItemPadding } from "./utils";

export const NavigationRail = ({
  isNavigationMenu,
  toggleIsNavigationMenuOpen,
}: {
  isNavigationMenu?: true;
  toggleIsNavigationMenuOpen: () => void;
}) => {
  const colorTheme = useContext(ColorThemeContext);
  const { t } = useTranslation();

  const navigationItemArray = [
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
  ];

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <StyledNavigationRail $colorTheme={colorTheme} onClick={onClick}>
      <div>
        {navigationItemArray.map((navigationItem, index) => (
          <StyledNavigationItem
            isExpanded={isNavigationMenu}
            key={index}
            navigationItem={navigationItem}
            toggleIsNavigationMenuOpen={
              isNavigationMenu ? toggleIsNavigationMenuOpen : undefined
            }
          />
        ))}
      </div>

      <StyledNavigationMenuButton
        isExpanded={isNavigationMenu}
        isNavigationMenu={isNavigationMenu}
        toggleIsNavigationMenuOpen={toggleIsNavigationMenuOpen}
      />
    </StyledNavigationRail>
  );
};

const navigationItemStyle = css`
  padding: 0 ${navigationItemPadding};
`;

const StyledNavigationItem = styled(NavigationItem)`
  ${navigationItemStyle}
`;

const StyledNavigationMenuButton = styled(NavigationMenuButton)`
  ${navigationItemStyle}
`;

const StyledNavigationRail = styled.nav<{ $colorTheme: ColorThemeType }>`
  background-color: ${(props) => props.$colorTheme.surfaceContainerColor};
  border-right: 1px solid ${(props) => props.$colorTheme.outlineVariantColor};
  cursor: default;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${navigationItemPadding} 0;
`;
