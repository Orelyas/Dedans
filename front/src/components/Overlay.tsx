import type { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "styled-components";

export const Overlay = ({
  children,
  setIsOpen,
}: {
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const onClick = () => {
    setIsOpen(false);
  };

  return <StyledOverlay onClick={onClick}>{children}</StyledOverlay>;
};

const StyledOverlay = styled.div`
  backdrop-filter: blur(4px);
  cursor: pointer;
  display: flex;
  height: 100vh;
  position: absolute;
  top: 0;
  width: 100vw;
`;
