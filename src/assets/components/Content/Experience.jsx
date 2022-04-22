import React from 'react';
import { global } from '../../styles/global';
import { info } from '../../../data';
import Section from '../helper/Section';
import styled from 'styled-components';
import ExperienceHeader from './ExperienceHeader';
import { Description } from '../../styles/styles';

const Wrapper = styled.section`
  gap: ${global.mb2}rem !important;
  padding: 1rem;
  border-radius: ${global.borderRadious}rem;
  box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
  }
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
