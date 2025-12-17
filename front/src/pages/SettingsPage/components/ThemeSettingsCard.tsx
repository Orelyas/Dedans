import { Card } from "@/components";
import {
  ColorThemeContext,
  IsDarkModeContext,
  type ColorThemeType,
} from "@/utils/contexts";
import { LargeHeadline } from "@/utils/fonts";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const ThemeSettingsCard = () => {
  const colorTheme = useContext(ColorThemeContext);
  const { isDarkMode } = useContext(IsDarkModeContext);
  const { t } = useTranslation();

  return (
    <StyledThemeSettingsCard>
      <StyledTitle $colorTheme={colorTheme}>{t("themes")}</StyledTitle>

      <StyledContainer>
        <LargeHeadline>{t(isDarkMode ? "dark" : "light")}</LargeHeadline>

        <div>X</div>
      </StyledContainer>
    </StyledThemeSettingsCard>
  );
};

const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const StyledThemeSettingsCard = styled(Card)`
  padding: 16px;
`;

const StyledTitle = styled.div<{ $colorTheme: ColorThemeType }>`
  color: ${(props) => props.$colorTheme.onSurfaceVariantColor};
`;
