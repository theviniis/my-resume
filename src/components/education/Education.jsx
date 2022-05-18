import React from 'react';
import styled from 'styled-components';
import { Intro, Heading } from '../../assets/styles/styles';
import Section from '../helper/Section';
import University from './University';
import Intensive from './Intensive';
import Languages from './Languages';

const Education = ({ theme }) => {
  return (
    <Section theme={theme} name='Education'>
      <p className='education__intro'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        reprehenderit <strong>laboriosam ea exercitationem!</strong>{' '}
        <strong>Laudantium assumenda</strong> labore eveniet dicta numquam.
      </p>
      <University />
      <Intensive />
      <Languages />
    </Section>
  );
};

export default Education;
