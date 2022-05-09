import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './assets/styles/themes';
import { GlobalContext } from './assets/GlobalContext';
import { GlobalStyles } from './assets/styles/global';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';

function App() {
  const theme = React.useContext(GlobalContext);
  return (
    <ThemeProvider theme={theme.theme === light.name ? light : dark}>
      <GlobalStyles />
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
