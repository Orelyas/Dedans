import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled, { css } from "styled-components";
import { NavigationItem, NavigationMenuButton } from "./components";
import { buildNavigationMenuItemArray, navigationItemPadding } from "./utils";

export const NavigationRail = ({
  toggleIsNavigationMenuOpen,
}: {
  toggleIsNavigationMenuOpen: () => void;
}) => {
  const colorTheme = useContext(ColorThemeContext);
  const { t } = useTranslation();

  const navigationItemArray = buildNavigationMenuItemArray(t);

  return (
    <StyledNavigationRail $colorTheme={colorTheme}>
      <div>
        {navigationItemArray.map((navigationItem, index) => (
          <StyledNavigationItem key={index} navigationItem={navigationItem} />
        ))}
      </div>

      <StyledNavigationMenuButton
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${navigationItemPadding} 0;
`;
