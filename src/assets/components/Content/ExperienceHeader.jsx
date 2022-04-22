import React from 'react';
import { StyledH3, SmallSubTitle } from '../../styles/styles';
import Date from '../helper/Date';
import styled from 'styled-components';
import { global } from '../../styles/global';

const Container = styled.div`
  gap: ${global.mb1 / 2}rem !important;
  grid-area: header;
`;

const ExperienceHeader = ({ item }) => {
  return (
    <Container className='flex'>
      <StyledH3 fontSize={global.normalFontSize}>{item.nome}</StyledH3>
      <SmallSubTitle>{item.cargo}</SmallSubTitle>
      <Date inicio={item.dataInicio} fim={item.dataFinal} />
    </Container>
  );
};

export default ExperienceHeader;
