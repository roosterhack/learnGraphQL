import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${(props) => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${(props) => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src:url('/static/radnikanext-medium-webfont.woff2');
    font-weight:normal;
    font-style:normal;
  }

  html {
    box-sizing:border-box;
    font-size:10px;
  }
  *,*:beforeAll, *:after {
    box-sizing:inherit;
  }
  body {
    padding:0;
    margin:0;
    font-size:1.5rem;
    line-height:2;
  }
  a {
    text-decoration:none;
    color: ${theme.black};
   }
`;

export const Page = ({ children }) => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <Meta />
      <Header />
      <Inner>{children}</Inner>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.any,
};
