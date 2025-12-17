import styled, { css } from "styled-components";

const bodyFontFamily = css`
  font-family: "Alte Haas Grotesk", "Roboto", sans-serif;
`;

const labelFontFamily = css`
  font-family: "Roboto", sans-serif;
`;

const titleFontFamily = css`
  font-family: "Alte Haas Grotesk Bold", "Roboto", sans-serif;
`;

export const largeDisplayFont = css`
  ${titleFontFamily}

  font-size: 57px;
  letter-spacing: -0.25px;
  line-height: 64px;
`;
export const LargeDisplayTitle = styled.h1`
  ${largeDisplayFont}
`;

export const largeHeadlineFont = css`
  ${titleFontFamily};

  font-size: 32px;
  line-height: 40px;
`;
export const LargeHeadline = styled.div`
  ${largeHeadlineFont}
`;

export const mediumBodyFont = css`
  ${bodyFontFamily}

  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
`;

export const mediumLabelFont = css`
  ${labelFontFamily};

  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 16px;
`;
