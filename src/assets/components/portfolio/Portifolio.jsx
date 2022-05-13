import React from 'react';
import styled from 'styled-components';
import themes from '../../styles/themes';
import Section from '../helper/Section';
import PortifolioList from './src/PortifolioList';

const Container = styled(Section)`
  grid-column: 2 / -1;
  /* margin-inline-end: 5%; */
`;

const Portifolio = ({ theme }) => {
  return (
    <Container name='Portifolio' theme={themes.light}>
      <PortifolioList themes={themes} />
    </Container>
  );
};

export default Portifolio;
