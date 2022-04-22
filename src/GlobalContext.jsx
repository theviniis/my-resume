import React from 'react';
import { light, dark } from './assets/styles/themes';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [active, setActive] = React.useState(false);
  const [theme, setTheme] = React.useState(light.name);

  return (
    <GlobalContext.Provider value={{ active, setActive, theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
};
