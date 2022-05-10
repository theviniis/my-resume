import React from 'react';
import styled from 'styled-components';
import { SectionIntro, Wrapper } from '../../styles/styles';
import Section from '../helper/Section';

import { Description } from '../../styles/styles';
import Intensive from './Intensive';
import University from './University';
import Languages from './Languages';

const Container = styled(Wrapper)`
  grid-column: 1 / -1;
  width: 100%;
  background-color: hsl(0, 0%, 7%);
  color: white;
`;

const Content = styled(Section)`
  grid-column: 2;
  column-gap: 10ch;
  h2 {
    color: black;
  }
  ${Description}:first-child {
    color: #a3a3a3;
    max-width: 80%;
    font-size: 1.125rem;

    & strong {
      color: white;
    }
  }
`;

const Education = () => {
  return (
    <Container as='div'>
      <Content name='education'>
        <div>
          <SectionIntro>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            reprehenderit <strong>laboriosam ea exercitationem!</strong>{' '}
            <strong>Laudantium assumenda</strong> labore eveniet dicta numquam.
          </SectionIntro>
          <University />
          <Intensive />
          <Languages />
        </div>
      </Content>
    </Container>
  );
};

export default Education;
