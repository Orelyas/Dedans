import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useContext, useRef } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { NavigationItemContent } from "./components";
import { buildNavigationItemStyle, type NavigationItemType } from "./utils";

export const NavigationItem = ({
  isExpanded = false,
  navigationItem,
}: {
  isExpanded?: boolean;
  navigationItem: NavigationItemType;
}) => {
  const { to } = navigationItem;

  const colorTheme = useContext(ColorThemeContext);
  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    ref?.current?.focus();
  };

  return (
    to && (
      <>
        <StyledNavigationItem
          $colorTheme={colorTheme}
          onClick={onClick}
          to={to}
        >
          <NavigationItemContent
            isExpanded={isExpanded}
            navigationItem={navigationItem}
          />
        </StyledNavigationItem>

        <StyledFocusableContainer ref={ref} tabIndex={-1} />
      </>
    )
  );
};

const StyledFocusableContainer = styled.div`
  all: unset;
`;

const StyledNavigationItem = styled(Link)<{ $colorTheme: ColorThemeType }>`
  ${(props) => buildNavigationItemStyle(props)}
`;
