import React from 'react';
import { Icon } from '../../styles/styles';
import { GlobalContext } from '../../GlobalContext';
import { light } from '../../styles/themes';

const ThemeToggle = () => {
  const theme = React.useContext(GlobalContext);

  return (
    <Icon
      className={theme.theme === light.name ? 'bx bx-moon' : 'bx bx-sun'}
      cursor='pointer'
      onClick={theme.themeToggle}
    />
  );
};

export default ThemeToggle;
