import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import { global } from '../../styles/global';
import NavList from './NavList';
import Button from '../helper/Button';

const Container = styled.header`
  background-color: inherit;
  font-size: 1.125rem;
  height: ${global.headerHeight}rem;
  max-width: ${global.maxWidth}px;
  position: fixed;
  top: 0;
  z-index: 20;
  margin: 0 auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container>
      <Nav>
        <Profile />
        <NavList />
        <Button name='Contact' href='#contact' />
      </Nav>
    </Container>
  );
};

export default Header;
