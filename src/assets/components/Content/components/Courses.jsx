import React from 'react';
import Section from '../../helper/Section';
import profile from '../../../user';
import styled from 'styled-components';
import { SmallSubTitle, ColorH3 as School } from '../../../styles/styles';
import { global } from '../../../styles/global';

const Container = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;

  h2 {
    grid-column: -1/1;
  }
`;

const Curse = styled.div`
  padding: 0.25rem 0;
`;

const Courses = () => {
  return (
    <Container card={true} title='Cursos Complementares'>
      {profile.courses.map((course) => (
        <div key={course.school} className='card'>
          <School marginBottom='.5rem' fontSize={global.normalFontSize}>
            {course.school}
          </School>
          {course.courses.map(({ course, hours }) => (
            <Curse key={course}>
              <SmallSubTitle as='span' fontSize={global.normalFontSize}>
                {course} -{' '}
                <SmallSubTitle fontWeight={global.fontLight} as='span'>
                  {hours} horas.
                </SmallSubTitle>
              </SmallSubTitle>
            </Curse>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Courses;
