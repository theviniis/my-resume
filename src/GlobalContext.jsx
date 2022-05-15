import React from 'react';
import themes from './assets/styles/themes';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [active, setActive] = React.useState(false);
  const [theme, setTheme] = React.useState(themes.light.name);

  function themeToggle() {
    theme === themes.light.name ? setTheme('dark') : setTheme('light');
  }

  return (
    <GlobalContext.Provider
      value={{ active, setActive, theme, setTheme, themeToggle }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
