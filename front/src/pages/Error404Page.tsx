import { Layout } from "@/components";
import { largeDisplayFont } from "@/utils/fonts";
import styled from "styled-components";

export const Error404Page = () => {
  return (
    <Layout>
      <StyledError404Page>
        <StyledDisplayTitle>Erreur 404</StyledDisplayTitle>
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
