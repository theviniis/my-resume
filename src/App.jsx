import React from 'react';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './assets/styles/themes';
import { GlobalContext } from './assets/GlobalContext';
import { GlobalStyles } from './assets/styles/global';
import Header from './assets/components/header/Header';
import Hero from './assets/components/hero/Hero';
import { Wrapper } from './assets/styles/styles';
import Skills from './assets/components/skills/Skills';
import Experience from './assets/components/experience/Experience';
import Education from './assets/components/education/Education';
import Portifolio from './assets/components/portfolio/Portifolio';
import AccordionList from './assets/components/AccordionList';

function App() {
  const theme = React.useContext(GlobalContext);
  return (
    <ThemeProvider theme={theme.theme === light.name ? light : dark}>
      <Header />
      <Wrapper>
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <Portifolio />
        <AccordionList />
      </Wrapper>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
