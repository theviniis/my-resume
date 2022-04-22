import React from 'react';
import Section from '../helper/Section';
import { info } from '../../../data';
import { SmallSubTitle, StyledH3 } from '../../styles/styles';
import { ExperienceCard } from '../helper/Card';
import styled from 'styled-components';
import { global } from '../../styles/global';
import Course from './Course';

const Container = styled(Section)`
  max-width: 50%;

  > div {
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr; */
  }
`;

const Courses = () => {
  return (
    <Container title='Cursos Complementares'>
      {info.cursos.map((curso) => (
        <Course curso={curso} key={curso.escola} />
      ))}
    </Container>
  );
};

export default Courses;
