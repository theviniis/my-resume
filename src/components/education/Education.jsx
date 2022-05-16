import React from 'react';
import styled from 'styled-components';
import { Intro, Heading } from '../../assets/styles/styles';
import Section from '../helper/Section';
import University from './University';
import Intensive from './Intensive';
import Languages from './Languages';

const Wrapper = styled(Section)`
  ${Intro} {
    padding-block-end: 2rem;
  }
  ${Heading} {
    grid-row: 1 / 5;
    @media (max-width: 1000px) {
      grid-row: 1;
    }
  }
`;

const Education = ({ theme }) => {
  return (
    <Wrapper theme={theme} name='Education'>
      <Intro theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit <strong>laboriosam ea exercitationem!</strong>{' '}
        <strong>Laudantium assumenda</strong> labore eveniet dicta numquam.
      </Intro>
      <University theme={theme} />
      <Intensive theme={theme} />
      <Languages theme={theme} />
    </Wrapper>
  );
};

export default Education;
