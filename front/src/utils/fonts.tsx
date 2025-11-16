import { css } from "styled-components";

const bodyFontFamily = css`
  font-family: "Alte Haas Grotesk", "Roboto", sans-serif;
`;

const labelFontFamily = css`
  font-family: "Roboto", sans-serif;
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
