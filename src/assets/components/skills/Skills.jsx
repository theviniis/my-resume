import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/styles';
import Section from '../helper/Section';
import MySkills from './MySkills';

const Container = styled(Wrapper)`
  grid-column: 1 / -1;
  width: 100%;
  /* background-color: ${(props) => props.theme.textColor}; */
  h2 {
    max-width: 70%;
  }
  color: #e0e0e0;
`;

const Content = styled(Section)`
  grid-column: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 10ch;
`;

const Skills = () => {
  return (
    <Container as='div'>
      <Content name='Skills'>
        <MySkills />
      </Content>
    </Container>
  );
};

export default Skills;
