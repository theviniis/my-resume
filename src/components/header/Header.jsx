import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { global } from '../../assets/styles/global';
import NavList from './NavList';
import Button from '../helper/Button';
import { Wrapper } from '../../assets/styles/styles';
import themes from '../../assets/styles/themes';

const Container = styled(Wrapper)`
  /* background-color: inherit; */
  font-size: 1.125rem;
  height: ${global.headerHeight}rem;
  z-index: 20;
  width: 100%;
  padding-block: 1ch;
  top: 0;
  position: fixed;
  &,
  a {
    /* color: white; */
  }
`;

const Nav = styled.nav`
  /* max-width: ${global.maxWidth}px; */
  padding: 1ch 2ch;
  /* background-color: ${themes.dark.bg}; */
  border-radius: ${global.borderRadious}rem;
  width: 100%;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Header = () => {
  return (
    <Container as='header'>
      <Nav>
        <Profile />
        <NavList />
      </Nav>
    </Container>
  );
};

export default Header;
