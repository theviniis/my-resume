import React from 'react';
import Experience from './Experience';
import Profile from './Profile';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Content = () => {
  return (
    <Wrapper className='flex'>
      <Profile />
      <Experience />
    </Wrapper>
  );
};

export default Content;
