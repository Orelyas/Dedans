import styled from "styled-components";
import { ThemeSettingsCard } from "./components";

export const SettingsPage = () => {
  return (
    <StyledSettingsPage>
      <ThemeSettingsCard />
    </StyledSettingsPage>
  );
};

const StyledSettingsPage = styled.div`
  padding: 10px;
`;
