import { createGlobalStyle } from 'styled-components';

export const global = {
  fontFamily: `'Poppins', sans-serif`,
  h1FontSize: '1.75rem',
  h2FontSize: '1.5rem',
  h3FontSize: '1rem',
  // normalFontSize: '0.938rem',
  normalFontSize: '1rem',
  smallFontSize: '0.938rem',
  smallerFontSize: '0.875rem',
  fontLight: 300,
  fontMedium: 500,
  fontSemiBold: 600,
  fontBold: 700,
  mb1: 0.5,
  mb2: 1,
  mb3: 2,

  borderRadious: 0.5, // rem,

  headerHeight: 4, // rem
  maxWidth: 760,

  shadow: '2px 2px 6px rgba(0, 0, 0, 0.15)',
  shadowHover: '2px 2px 6px rgba(0, 0, 0, 0.20)',
};

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${global.fontFamily};
    font-size: ${global.normalFontSize};
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.textColor};
    line-height: 1.5;
  }
  body:nth-child(2){
    margin-top: ${global.headerHeight}rem;
  }

  h1, h2,h3,h4 {
    line-height: 1.1;
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  p {
    margin: 0;
    padding: 0;
    font-size: inherit;
    font-weight: inherit;
  }

  p {
    max-width: 60ch;
  }

  ul,li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColor};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
