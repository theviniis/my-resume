import React from 'react';
import { Intro } from '../../styles/styles';
import Section from '../helper/Section';

import Intensive from './Intensive';
import University from './University';
import Languages from './Languages';

const Education = ({ theme }) => {
  return (
    <Section theme={theme} name='Education'>
      <Intro theme={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit <strong>laboriosam ea exercitationem!</strong>{' '}
        <strong>Laudantium assumenda</strong> labore eveniet dicta numquam.
      </Intro>
      <University theme={theme} />
      <Intensive theme={theme} />
      <Languages theme={theme} />
    </Section>
  );
};

export default Education;
