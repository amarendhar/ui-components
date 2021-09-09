import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
/**
 * https://styled-components.com/docs/api#usage-with-typescript
 * 
 * To prevent TypeScript errors on the css prop on arbitrary elements, install @types/styled-components and add the following import once in your project
 */
// import {} from 'styled-components/cssprop'
import { defaultTheme } from '../src/themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: arial;
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
