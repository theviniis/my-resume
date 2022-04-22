import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './assets/styles/themes';
import { GlobalContext } from './GlobalContext';
import { global, GlobalStyles } from './assets/styles/global';
import styled from 'styled-components';
import { StyledCard } from './assets/components/helper/Card';
import SideNav from './assets/components/SideNav/SideNav';
import Content from './assets/components/Content/Content';

const Wrapper = styled(StyledCard)`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 85vh;
  width: 70vw;
  margin: auto;
  overflow-y: scroll;
  padding: 0;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.secondary};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.textColor};
  }
`;

function App() {
  const theme = React.useContext(GlobalContext);
  return (
    <ThemeProvider theme={theme.theme === light.name ? light : dark}>
      <GlobalStyles />
      <Wrapper as='main'>
        <SideNav />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
