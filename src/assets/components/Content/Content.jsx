import React from 'react';
import Experiences from './components/Experiences';
import Profile from './components/Profile';
import styled from 'styled-components';
import Courses from './components/Courses';

const Wrapper = styled.div`
  gap: 2rem;
  padding: 2rem;
`;

const Content = () => {
  return (
    <Wrapper className='flex'>
      <Profile />
      <Experiences />
      <Courses />
    </Wrapper>
  );
};

export default Content;
