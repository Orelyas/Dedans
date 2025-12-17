import { ColorThemeContext, type ColorThemeType } from "@/utils/contexts";
import { useContext, type ReactNode } from "react";
import styled from "styled-components";

export const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const colorTheme = useContext(ColorThemeContext);

  return (
    <StyledCard className={className} $colorTheme={colorTheme}>
      {children}
    </StyledCard>
  );
};

const StyledCard = styled.div<{ $colorTheme: ColorThemeType }>`
  background-color: ${(props) => props.$colorTheme.surfaceColor};
  border: 1px solid ${(props) => props.$colorTheme.outlineVariantColor};
  border-radius: 12px;
`;
