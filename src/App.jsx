import React from 'react';
import './assets/styles/style.scss';
import themes from './assets/styles/themes';
import { GlobalContext } from './GlobalContext';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Portifolio from './components/portfolio/Portifolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import SplideTest from './SplideTest';

function App() {
  // const theme = React.useContext(GlobalContext);
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <Experience theme='dark' /> */}
      {/* <Education theme='dark' /> */}
      {/* <Skills theme='light' /> */}
      <Portifolio theme='dark' />
      {/* <Contact theme='light' /> */}
      {/* <SplideTest /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
