import React from 'react';
import Section from '../helper/Section';
import { info } from '../../../data';
import { SmallSubTitle, StyledH3 } from '../../styles/styles';
import { ExperienceCard } from '../helper/Card';
import styled from 'styled-components';
import { global } from '../../styles/global';

const Container = styled(Section)`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const Courses = () => {
  return (
    <Container title='Cursos Complementares'>
      {info.cursos.map(({ escola, cursos }) => (
        <ExperienceCard key={escola}>
          <StyledH3 fontSize={global.normalFontSize}>{escola}</StyledH3>
          {cursos.map(({ curso, horas }) => (
            <div key={curso}>
              <SmallSubTitle as='span' fontWeight='500'>
                {curso} -{' '}
              </SmallSubTitle>
              <SmallSubTitle as='span'>{horas} horas.</SmallSubTitle>
            </div>
          ))}
        </ExperienceCard>
      ))}
    </Container>
  );
};

export default Courses;
