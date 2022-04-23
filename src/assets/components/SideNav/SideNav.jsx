import React from 'react';
import styled from 'styled-components';
import Languages from './components/Languages';
import Education from './components/Education';
import Skills from './components/Skills';
import Profile from './components/Profile';

const StyledNav = styled.nav`
  gap: 2rem;
  height: 100%;
  grid-row: span 10;
  padding: 2rem;
  background-color: ${(props) => props.theme.secondary};
  &,
  a,
  i,
  h3,
  i {
    color: ${({ theme }) => theme.navColor} !important;
  }
`;

const SideNav = () => {
  return (
    <StyledNav className='flex'>
      <Profile />
      <Skills />
      <Languages />
      <Education />
    </StyledNav>
  );
};

export default SideNav;
