import { Icon } from "@/components/Icon";
import {
  buildActiveColor,
  buildFocusColor,
  buildHoverColor,
  ColorThemeContext,
  type ColorThemeType,
} from "@/utils/contexts";
import { mediumLabelFont } from "@/utils/fonts";
import type { IconType } from "@/utils/icons";
import { dayPagePath, homePagePath } from "@/utils/router";
import { useContext, useRef } from "react";
import { Link, useLocation } from "react-router";
import styled, { css } from "styled-components";

export const NavigationItem = ({
  icon,
  isExpanded = false,
  label,
  to,
}: {
  icon: IconType;
  isExpanded?: boolean;
  label: string;
  to: string;
}) => {
  const colorTheme = useContext(ColorThemeContext);
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  const isLocation = location.pathname.includes(
    to === homePagePath ? dayPagePath : to
  );

  const onClick = () => {
    ref?.current?.focus();
  };

  return (
    <>
      <StyledNavigationItem $colorTheme={colorTheme} onClick={onClick} to={to}>
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
      </StyledNavigationItem>

      <StyledFocusableContainer ref={ref} tabIndex={-1} />
    </>
  );
};

const iconContainerBorderRadius = css`
  border-radius: 4px;
`;

const StyledFocusableContainer = styled.div`
  all: unset;
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
//
const StyledStateLayer = styled.div<{ $isExpanded: boolean }>`
  ${iconContainerBorderRadius}

  align-items: center;
  display: flex;
  padding: 4px ${(props) => (props.$isExpanded ? 12 : 4)}px;
  transition: background-color 250ms;
`;

const StyledNavigationItem = styled(Link)<{ $colorTheme: ColorThemeType }>`
  all: unset;

  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 6px 0;
  width: 100%;

  &:hover ${StyledStateLayer} {
    background-color: ${(props) =>
      buildHoverColor(props.$colorTheme.onSecondaryContainerColor)};
  }

  &:focus ${StyledStateLayer} {
    background-color: ${(props) =>
      buildFocusColor(props.$colorTheme.onSecondaryContainerColor)};
    outline: 3px solid ${(props) => props.$colorTheme.secondaryColor};
    outline-offset: 1px;
  }

  &:active ${StyledStateLayer} {
    background-color: ${(props) =>
      buildActiveColor(props.$colorTheme.onSecondaryContainerColor)};
    outline: unset;
  }
`;
