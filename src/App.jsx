import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './assets/styles/themes';
import { GlobalContext } from './assets/GlobalContext';
import { GlobalStyles } from './assets/styles/global';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';
import Skills from './assets/components/skills/Skills';
import Experience from './assets/components/experience/Experience';
import Education from './assets/components/education/Education';
import Portifolio from './assets/components/portfolio/Portifolio';

function App() {
  const theme = React.useContext(GlobalContext);
  return (
    <ThemeProvider
      theme={theme.theme === themes.light.name ? themes.light : themes.dark}
    >
      {/* <Header /> */}
      {/* <Hero /> */}
      <Experience theme={themes.dark} />
      <Skills theme={themes.light} />
      <Education theme={themes.dark} />
      <Portifolio themes={themes} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
