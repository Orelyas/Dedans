import {
  desktopWindow,
  mobileSizeClassArray,
  mobileWindow,
} from "@/utils/breakpoints";
import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { mediumBodyFont } from "@/utils/fonts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { useContext } from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

export const Layout = () => {
  const isMobile = useIsWindowSizeClass(mobileSizeClassArray);

  const colorTheme = useContext(ColorThemeContext);

  return (
    <>
      <StyledLayout $colorTheme={colorTheme}>
        {isMobile ? <div>NavigationBar</div> : <div>NavigationRail</div>}

        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </>
  );
};

const StyledContent = styled.div`
  ${mobileWindow} {
    height: 100%;
  }

  ${desktopWindow} {
    width: 100%;
  }
`;

const StyledLayout = styled.div<{ $colorTheme: ColorThemeType }>`
  ${mediumBodyFont}

  background-color: ${(props) => props.$colorTheme.surfaceContainerLowestColor};
  color: ${(props) => props.$colorTheme.onSurfaceColor};
  display: flex;
  height: 100vh;

  ${mobileWindow} {
    flex-direction: column-reverse;
  }
`;
