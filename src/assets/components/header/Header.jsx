import React from 'react';
import styled from 'styled-components';
import Profile from './Profile';
import user from '../../user';
import { global } from '../../styles/global';
import NavList from './NavList';
import Button from '../helper/Button';

const Container = styled.header`
  background-color: inherit;
  font-size: 1.125rem;
  height: ${global.headerHeight}rem;
  /* padding-block: 2ch; */
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  grid-column: 2;
  /* align-self: center; */
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <Container className='full-bleed wrapper'>
      <Nav>
        <Profile />
        <NavList />
        <Button name='Contact' href='#contact' />
      </Nav>
    </Container>
  );
};

export default Header;
