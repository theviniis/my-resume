import React from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './assets/styles/themes';
import { GlobalContext } from './GlobalContext';
import { GlobalStyles } from './assets/styles/global';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Portifolio from './components/portfolio/Portifolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  const theme = React.useContext(GlobalContext);
  // console.log(themes.dark);
  return (
    <ThemeProvider
      theme={theme.theme === themes.light.name ? themes.light : themes.dark}
    >
      <Header />
      <Hero />
      <Experience theme={themes.dark} />
      <Education theme={themes.light} />
      <Skills theme={themes.dark} />
      <Portifolio theme={themes.light} />
      <Contact theme={themes.dark} />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
