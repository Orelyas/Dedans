import { Layout } from "@/components";
import { largeDisplayFont } from "@/utils/fonts";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Error404Page = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <StyledError404Page>
        <StyledDisplayTitle>{t("error404")}</StyledDisplayTitle>
      </StyledError404Page>
    </Layout>
  );
};

const StyledDisplayTitle = styled.h1`
  ${largeDisplayFont}
`;

const StyledError404Page = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
