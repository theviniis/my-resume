import React from 'react';
import { SmallSubTitle, StyledH3 } from '../../styles/styles';
import { ExperienceCard } from '../helper/Card';
import styled from 'styled-components';
import { global } from '../../styles/global';

const Container = styled(ExperienceCard)`
  > h3 {
    margin-bottom: 1rem;
  }
  > div {
    padding: 0.25rem 0;
  }
`;

const Course = ({ curso }) => {
  return (
    <Container>
      <StyledH3 fontSize={global.normalFontSize}>{curso.escola}</StyledH3>
      {curso.cursos.map(({ curso, horas }) => (
        <div key={curso}>
          <SmallSubTitle as='span'>{curso} - </SmallSubTitle>
          <SmallSubTitle as='span'>{horas} horas.</SmallSubTitle>
        </div>
      ))}
    </Container>
  );
};

export default Course;
