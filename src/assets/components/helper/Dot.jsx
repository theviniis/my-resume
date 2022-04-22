import React from 'react';
import styled from 'styled-components';
import { info } from '../../../data';
import { global } from '../../styles/global';

const Container = styled.div`
  grid-area: dot;

  display: grid;
  margin-top: 3px;
  margin-right: ${global.mb2}rem;
  height: 105%;
  justify-items: center;
  > div {
    grid-row: 1;
    grid-column: 1;
  }
`;

const StyledDot = styled.span`
  display: grid;
  grid-row: 1;
  grid-column: 1;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.textColor};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  z-index: 49;
`;

const InnerDot = styled.span`
  grid-row: 1;
  grid-column: 1;

  width: 6px;
  height: 6px;
  background-color: ${(props) => props.theme.primary};
  border-radius: 50%;
  z-index: 50;
  box-shadow: ${global.shadow};
`;

const Line = styled.span`
  grid-row: 1;
  grid-column: 1;
  height: 115%;
  width: 3px;
  background-color: ${({ theme }) => theme.textColor};
  z-index: 48;
  border-radius: 4rem;
`;

const Dot = ({ index }) => {
  return (
    <Container>
      <div>
        <StyledDot>
          <InnerDot />
        </StyledDot>
      </div>
      {index < info.experiencias.length - 1 ? <Line /> : null}
    </Container>
  );
};

export default Dot;
