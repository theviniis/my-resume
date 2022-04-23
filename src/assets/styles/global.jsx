import { createGlobalStyle } from 'styled-components';

export const global = {
  fontFamily: `'Fira Sans', sans-serif;`,
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

  headerHeight: 3, // rem

  shadow: '1px 1px 4px rgba(0, 0, 0, 0.15)',
  shadowHover: '1px 1px 6px rgba(0, 0, 0, 0.20)',
};

export const GlobalStyles = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
  }
  
  #root {
    display: flex;
    height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  ul,
  p {
    margin: 0;
    padding: 0;
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

  .flex {
    display: flex;
    flex-direction: column;
  }

  .card {
    padding: 2rem;
    box-shadow: ${global.shadow};
    border-radius: ${global.borderRadious}rem;

    &:hover {
      box-shadow: ${({ boxShadow }) => boxShadow || `${global.shadowHover}`};
    }
  }
`;
