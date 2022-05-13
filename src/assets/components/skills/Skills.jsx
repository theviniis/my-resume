import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/styles';
import Section from '../helper/Section';
import MySkills from './MySkills';

const Skills = ({ theme }) => {
  return (
    <Section name='Skills' theme={theme}>
      <MySkills theme={theme} />
    </Section>
  );
};

export default Skills;
