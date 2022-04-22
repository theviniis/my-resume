import React from 'react';
import styled from 'styled-components';
import { global } from '../../styles/global';
import { Icon } from '../../styles/styles';

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  gap: ${global.mb1 / 2}rem;

  font-weight: ${global.fontLight};
  font-size: ${global.smallFontSize};
  /* color: ${({ theme }) => theme.secondary}; */
  > i {
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
  }
`;

const Date = ({ inicio, fim }) => {
  return (
    <StyledSpan>
      <Icon className='bx bx-calendar-alt'></Icon>
      {inicio}
      <Icon className='bx bxs-right-arrow-alt'></Icon>
      {fim}
    </StyledSpan>
  );
};

export default Date;
