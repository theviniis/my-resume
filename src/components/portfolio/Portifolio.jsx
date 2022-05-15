import React from 'react';
import styled from 'styled-components';
import themes from '../../assets/styles/themes';
import PortifolioList from './PortifolioList';
import { Heading } from '../../assets/styles/styles';
import { global } from '../../assets/styles/global';

const Container = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    180px
    min(${global.maxWidth - 180}px, 90%)
    1fr;
  padding-block: 6ch;
  background-color: ${({ theme }) => theme.bg};
  @media (max-width: 1000px) {
    grid-template-columns:
      1fr
      min(${global.maxWidth}px, 90%)
      1fr;
  }

  ${Heading} {
    width: 180px;
    grid-column: 2;
  }
`;

const Portifolio = ({ theme }) => {
  return (
    <Container name='Portifolio' id='portifolio' theme={theme}>
      <Heading theme={theme}>Portifolio</Heading>
      <PortifolioList theme={theme} />
    </Container>
  );
};

export default Portifolio;
