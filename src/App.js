import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './assets/styles/themes';
import { GlobalContext } from './assets/GlobalContext';
import { GlobalStyles } from './assets/styles/global';
import { Card } from './assets/styles/styles';
import styled from 'styled-components';
import SideNav from './assets/components/SideNav/SideNav';
import Content from './assets/components/Content/Content';

const Wrapper = styled(Card)`
  display: grid;
  grid-template-columns: minmax(336px, 380px) 2fr;
  height: 85vh;
  width: 60vw;
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
