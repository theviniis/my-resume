import React from 'react';
import Profile from './Profile';
import NavList from './NavList';

const Header = () => {
  return (
    <header className='header wrapper'>
      <nav className='header__nav content'>
        <Profile img={false} />
        <NavList />
      </nav>
    </header>
  );
};

export default Header;
