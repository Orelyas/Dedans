import { Icon } from "@/components/Icon";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { mediumLabelFont } from "@/utils/fonts";
import { dayPagePath, homePagePath } from "@/utils/router";
import { useContext } from "react";
import { useLocation } from "react-router";
import styled, { css } from "styled-components";
import type { NavigationItemType } from "../utils";

export const NavigationItemContent = ({
  isExpanded = false,
  navigationItem,
}: {
  isExpanded?: boolean;
  navigationItem: NavigationItemType;
}) => {
  const { icon, label, to } = navigationItem;

  const colorTheme = useContext(ColorThemeContext);
  const location = useLocation();

  const isLocation = to
    ? location.pathname.includes(to === homePagePath ? dayPagePath : to)
    : false;

  return (
    <StyledIconContainer $colorTheme={colorTheme} $isLocation={isLocation}>
      <StyledStateLayer $isExpanded={isExpanded}>
        <Icon
          color={
            isLocation
              ? colorTheme.onSecondaryContainerColor
              : colorTheme.onSurfaceVariantColor
          }
          icon={icon}
          isFilled={isLocation}
        />

        {isExpanded && (
          <StyledLabel $colorTheme={colorTheme} $isLocation={isLocation}>
            {label}
          </StyledLabel>
        )}
      </StyledStateLayer>
    </StyledIconContainer>
  );
};

const iconContainerBorderRadius = css`
  border-radius: 4px;
`;

const StyledIconContainer = styled.div<{
  $colorTheme: ColorThemeType;
  $isLocation: boolean;
}>`
  transition: background-color 250ms;

  ${(props) =>
    props.$isLocation &&
    css`
      ${iconContainerBorderRadius}

      background-color: ${props.$colorTheme.secondaryContainerColor};
    `}
`;

const StyledLabel = styled.div<{
  $colorTheme: ColorThemeType;
  $isLocation: boolean;
}>`
  ${mediumLabelFont}

  color: ${(props) =>
    props.$isLocation
      ? props.$colorTheme.onSecondaryContainerColor
      : props.$colorTheme.onSurfaceVariantColor};
  padding: 0 4px;
`;

export const StyledStateLayer = styled.div<{ $isExpanded: boolean }>`
  ${iconContainerBorderRadius}

  align-items: center;
  display: flex;
  padding: 4px ${(props) => (props.$isExpanded ? 12 : 4)}px;
  transition: background-color 250ms;
`;
