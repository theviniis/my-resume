import React from 'react';
import Experience from './Experience';
import Profile from './Profile';
import styled from 'styled-components';
import Courses from './Courses';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Content = () => {
  return (
    <Wrapper className='flex'>
      <Profile />
      <Experience />
      <Courses />
    </Wrapper>
  );
};

export default Content;
