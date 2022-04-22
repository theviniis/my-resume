import React from 'react';
import { StyledH3 } from '../../styles/styles';
import Date from '../helper/Date';
import styled from 'styled-components';
import { global } from '../../styles/global';

const Container = styled.div`
  gap: ${global.mb1 / 2}rem !important;
  grid-area: header;
`;

const Title = styled(StyledH3)`
  font-weight: ${global.fontMedium};
  color: ${({ theme }) => theme.secondary};
  font-size: ${global.smallFontSize};
`;
const SubTitle = styled(StyledH3)`
  font-weight: 400;
  font-size: ${global.smallFontSize};
  color: ${({ theme }) => theme.textColorLight};
`;

const ExperienceHeader = ({ item }) => {
  return (
    <Container className='flex'>
      <Title>{item.nome}</Title>
      <SubTitle>{item.cargo}</SubTitle>
      <Date inicio={item.dataInicio} fim={item.dataFinal} />
    </Container>
  );
};

export default ExperienceHeader;
