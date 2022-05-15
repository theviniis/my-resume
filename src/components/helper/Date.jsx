import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';
import { Icon } from '../../assets/styles/styles';

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  gap: ${global.mb1 / 2}rem;

  > i {
    font-size: 1rem;
    color: ${({ theme }) => theme.primary};
  }
`;

const Date = ({ inicio, fim, className, theme }) => {
  return (
    <StyledSpan className={className} theme={theme}>
      {/* <Icon className='bx bx-calendar-alt'></Icon> */}
      {inicio}
      <Icon className='bx bxs-right-arrow-alt'></Icon>
      {/* <Icon className='bx bx-calendar-alt'></Icon> */}
      {fim}
    </StyledSpan>
  );
};

export default Date;
