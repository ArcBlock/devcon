/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React from 'react';
import { create } from '@arcblock/ux/lib/Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';
import { SessionProvider } from '../libs/session';

const theme = create({
  typography: {
    fontSize: 14,
  },
});

const GlobalStyle = createGlobalStyle`
  a {
    color: ${props => props.theme.colors.green};
    text-decoration: none;
  }

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`;

let apiPrefix = '/';
if (typeof window !== 'undefined') {
  if (window && window.blocklet && window.blocklet.prefix) {
    apiPrefix = window.blocklet.prefix;
  } else if (window && window.env && window.env.apiPrefix) {
    apiPrefix = window.env.apiPrefix;
  }
}

if (apiPrefix === '/') {
  apiPrefix = process.env.GATSBY_API_PREFIX || '/';
}

export default function WithProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <SessionProvider serviceHost={apiPrefix} autoLogin={false}>
          <React.Fragment>
            <CssBaseline />
            <GlobalStyle />
            {children}
          </React.Fragment>
        </SessionProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
