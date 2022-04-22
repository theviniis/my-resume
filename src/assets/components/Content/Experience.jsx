import React from 'react';
import { global } from '../../styles/global';
import { info } from '../../../data';
import Section from '../helper/Section';
import styled from 'styled-components';
import ExperienceHeader from './ExperienceHeader';
import { Description } from '../../styles/styles';
import { ExperienceCard } from '../helper/Card';

const Wrapper = styled(ExperienceCard)`
  gap: ${global.mb2}rem !important;
`;

const Experience = () => {
  return (
    <Section title='Experiência' boxShadow='none'>
      {info.experiencias.map((item, index) => (
        <Wrapper key={index} className='flex'>
          <ExperienceHeader item={item} />
          <Description>{item.descricao}</Description>
        </Wrapper>
      ))}
    </Section>
  );
};

export default Experience;
