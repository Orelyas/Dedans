import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { menuIcon } from "@/utils/icons";
import { type MouseEvent, useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { NavigationItemContent } from "./components";
import { type NavigationItemType, buildNavigationItemStyle } from "./utils";

export const NavigationMenuButton = ({
  className,
  isExpanded = false,
  toggleIsNavigationMenuOpen,
}: {
  className?: string;
  isExpanded?: boolean;
  toggleIsNavigationMenuOpen: () => void;
}) => {
  const colorTheme = useContext(ColorThemeContext);
  const { t } = useTranslation();

  const navigationItem: NavigationItemType = {
    icon: menuIcon,
    label: t("menu"),
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.blur();
    toggleIsNavigationMenuOpen();
  };

  return (
    <StyledNavigationMenuButton
      className={className}
      $colorTheme={colorTheme}
      onClick={onClick}
      title={!isExpanded ? navigationItem.label : undefined}
    >
      <NavigationItemContent
        isExpanded={isExpanded}
        navigationItem={navigationItem}
      />
    </StyledNavigationMenuButton>
  );
};

const StyledNavigationMenuButton = styled.button<{
  $colorTheme: ColorThemeType;
}>`
  ${(props) => buildNavigationItemStyle(props)}
`;
