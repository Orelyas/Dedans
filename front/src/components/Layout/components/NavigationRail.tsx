import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { homeIcon, settingsIcon } from "@/utils/icons";
import { homePagePath, settingsPagePath } from "@/utils/router";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { NavigationItem, NavigationMenuButton } from "./components";
import { navigationItemPadding } from "./utils";

export const NavigationRail = () => {
  const colorTheme = useContext(ColorThemeContext);
  const { t } = useTranslation();

  const navigationItemArray = [
    { icon: homeIcon, label: t("today"), to: homePagePath },
    { icon: settingsIcon, label: t("settings"), to: settingsPagePath },
  ];

  return (
    <StyledNavigationRail $colorTheme={colorTheme}>
      <div>
        {navigationItemArray.map((navigationItem, index) => (
          <StyledNavigationItem key={index} navigationItem={navigationItem} />
        ))}
      </div>

      <StyledNavigationMenuButton />
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${navigationItemPadding} 0;
`;
