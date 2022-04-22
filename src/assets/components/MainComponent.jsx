import React from 'react';
import styled from 'styled-components';
import { StyledCard } from '../components/helper/Card';
import SideNav from './SideNav/SideNav';

const Container = styled(StyledCard)`
  display: grid;
  grid-template-columns: 300px 1fr;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 80vh;
  width: 80vw;
  margin: auto;
  padding: 0;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.2);

  > section {
    scroll-snap-align: start;
    height: 80vh;
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.textColorLight};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.textColor};
  }
`;

const MainComponent = ({ children }) => {
  return (
    <Container as='main'>
      <SideNav />
      {children}
    </Container>
  );
};

export default MainComponent;
