import { Layout } from "@/components";
import { LargeDisplayTitle } from "@/utils/fonts";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <StyledError404Page>
        <LargeDisplayTitle>{t("error404")}</LargeDisplayTitle>
      </StyledError404Page>
    </Layout>
  );
};

const StyledError404Page = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
