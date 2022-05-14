import React from 'react';
import styled from 'styled-components';
import themes from '../../styles/themes';
import PortifolioList from './src/PortifolioList';
import { Heading } from '../../styles/styles';
import { global } from '../../styles/global';

const Container = styled.div`
  display: grid;
  grid-template-columns:
    1fr
    220px
    min(${global.maxWidth - 220}px, 90%)
    1fr;
  margin-block: 6ch;
  @media (max-width: 1000px) {
    grid-template-columns:
      1fr
      min(${global.maxWidth}px, 90%)
      1fr;
  }

  ${Heading} {
    width: 220px;
    grid-column: 2;
    @media (max-width: 1000px) {
      /* grid-column: 2; */
      /* grid-row: 1; */
    }
  }
`;

const Portifolio = () => {
  return (
    <Container name='Portifolio' id='portifolio' theme={themes.light}>
      <Heading>portifolio</Heading>
      <PortifolioList themes={themes} />
    </Container>
  );
};

export default Portifolio;
