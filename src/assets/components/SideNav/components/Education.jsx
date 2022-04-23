import React from 'react';
import profile from '../../../user';
import Section from '../../helper/Section';
import { Card, StyledH3 } from '../../../styles/styles';
import styled from 'styled-components';
import { global } from '../../../styles/global';
import Date from '../../helper/Date';

const Wrapper = styled(Section)``;

const Title = styled(StyledH3)`
  font-size: ${global.normalFontSize};
  font-weight: ${global.fontMedium};
`;

const SubTitle = styled(StyledH3)`
  font-size: ${global.smallFontSize};
  font-weight: 400;
`;

const Education = () => {
  return (
    <Section title='Escolaridade'>
      <Card gap='.25rem' className='flex'>
        <Title>{profile.education.curso}</Title>
        <SubTitle>{profile.education.faculdade}</SubTitle>
        <Date inicio={profile.education.inicio} fim={profile.education.final} />
      </Card>
    </Section>
  );
};

export default Education;
