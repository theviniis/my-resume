import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { global } from '../../assets/styles/global';
import NavList from './NavList';
import Button from '../helper/Button';

const Container = styled.header`
  background-color: inherit;
  font-size: 1.125rem;
  height: ${global.headerHeight}rem;
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  padding-block: 1ch;
`;

const Nav = styled.nav`
  /* max-width: ${global.maxWidth}px; */
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
        <Button href='#contact'>Contact</Button>
      </Nav>
    </Container>
  );
};

export default Header;
