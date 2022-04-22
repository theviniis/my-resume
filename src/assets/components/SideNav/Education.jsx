import React from 'react';
import { info } from '../../../data';
import Section from '../helper/Section';
import { StyledH3 } from '../../styles/styles';
import styled from 'styled-components';
import { global } from '../../styles/global';
import Date from '../helper/Date';

const Wrapper = styled(Section)`
  > div {
    gap: ${global.mb1}rem;
  }
  i {
    color: ${({ theme }) => theme.textColor};
  }
`;

const Title = styled(StyledH3)`
  font-size: ${global.normalFontSize};
  font-weight: ${global.fontMedium};
`;

const SubTitle = styled(StyledH3)`
  font-size: ${global.smallFontSize};
  font-weight: 400;

  /* color: ${({ theme }) => theme.textColorLight}; */
`;

const Education = () => {
  return (
    <Wrapper title='Escolaridade'>
      <Title>{info.education.curso}</Title>
      <SubTitle>{info.education.faculdade}</SubTitle>
      <Date inicio={info.education.inicio} fim={info.education.final} />
    </Wrapper>
  );
};

export default Education;
