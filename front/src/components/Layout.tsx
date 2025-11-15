import {
  desktopWindow,
  mobileSizeClassArray,
  mobileWindow,
} from "@/utils/breakpoints";
import { mediumBodyFont } from "@/utils/fonts";
import { useIsWindowSizeClass } from "@/utils/hooks";
import { Outlet } from "react-router";
import styled from "styled-components";

export const Layout = () => {
  const isMobile = useIsWindowSizeClass(mobileSizeClassArray);

  return (
    <>
      <StyledLayout>
        {isMobile ? (
          <div>NavigationBar</div>
        ) : (
          <div>
            <div>NavigationRail</div>
          </div>
        )}

        <StyledContent>
          <Outlet />
        </StyledContent>
      </StyledLayout>
    </>
  );
};

const StyledContent = styled.div`
  background-color: aliceblue;

  ${mobileWindow} {
    height: 100%;
  }

  ${desktopWindow} {
    width: 100%;
  }
`;

const StyledLayout = styled.div`
  ${mediumBodyFont}

  display: flex;
  height: 100vh;

  ${mobileWindow} {
    flex-direction: column-reverse;
  }
`;
