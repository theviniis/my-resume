import React from 'react';
import { info } from '../../../data';
import { StyledH3, Title } from '../../styles/styles';
import styled from 'styled-components';
import { global } from '../../styles/global';

const StyledDiv = styled.div`
  gap: ${global.mb1}rem !important;
`;

const ProfileTitle = () => {
  return (
    <StyledDiv className='flex'>
      <Title textAlign='center'>{`${info.dados.primeiroNome} ${info.dados.segundoNome}`}</Title>
      <StyledH3 textAlign='center'>{info.dados.cargo}</StyledH3>
    </StyledDiv>
  );
};

export default ProfileTitle;
