import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { defaultTheme } from '../src/themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    );
  },
];
