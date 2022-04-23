import React from 'react';
import { light } from './styles/themes';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [active, setActive] = React.useState(false);
  const [theme, setTheme] = React.useState(light.name);

  function themeToggle() {
    theme === light.name ? setTheme('dark') : setTheme('light');
  }

  return (
    <GlobalContext.Provider
      value={{ active, setActive, theme, setTheme, themeToggle }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
