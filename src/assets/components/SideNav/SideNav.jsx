import React from 'react';
import styled from 'styled-components';
import Languages from './Languages';
import Education from './Education';
import Skills from './Skills';
import ProfileHeader from './ProfileHeader';

const StyledNav = styled.nav`
  height: 100%;
  grid-row: span 10;
  padding: 2rem;
  background-color: ${(props) => props.theme.secondary};
  &,
  a,
  i {
    color: ${({ theme }) => theme.navColor};
  }
`;

const SideNav = () => {
  return (
    <StyledNav className='flex'>
      <ProfileHeader />
      <Skills />
      <Languages />
      <Education />
    </StyledNav>
  );
};

export default SideNav;
