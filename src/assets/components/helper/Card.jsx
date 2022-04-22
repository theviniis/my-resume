import React from 'react';
import styled from 'styled-components';
import { global } from '../../styles/global';

export const StyledCard = styled.div`
  padding: 2rem;
  box-shadow: ${({ boxShadow }) => boxShadow || `${global.shadow}`};
  border-radius: ${global.borderRadious}rem;

  &:hover {
    box-shadow: ${({ boxShadow }) => boxShadow || `${global.shadowHover}`};
  }
`;

export const Card = ({ children, className }) => {
  return <StyledCard className={className}>{children}</StyledCard>;
};
