import React from 'react';
import Section from '../helper/Section';
import ExperienceList from './src/ExperienceList';

const Experience = ({ theme }) => {
  return (
    <Section name='Experience' theme={theme}>
      <ExperienceList theme={theme} />
    </Section>
  );
};

export default Experience;
