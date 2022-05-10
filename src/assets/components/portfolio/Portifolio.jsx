import React from 'react';
import styled from 'styled-components';
import Section from '../helper/Section';
import Plannar from './Plannar';

const Container = styled(Section)`
  grid-column: 2 / -1;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 0.75fr 1fr 0.75fr;
  grid-template-areas: 'left main right';
  gap: 2ch;
  align-items: center;
  padding-inline-end: 10ch;
  opacity: 0.8;

  > li:nth-child(1) {
    grid-area: main;
    background-color: black;
  }

  .active {
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-template-areas: 'main main' 'left right'; */
    /* background-color: hsl(0, 0%, 7%); */
    /* grid-column: 2; */
    min-width: 600px;
    opacity: 1;
  }
`;

const Portifolio = () => {
  const [active, setActive] = React.useState(false);
  function handleClick(event) {
    setActive(!active);
    // handleOutsideClick(event);
  }

  function handleOutsideClick(event) {
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(active);

    if (event.target === event.currentTarget) setActive(false);
    setActive(!active);
  }

  return (
    <Container name='Portifolio'>
      <List onClick={handleOutsideClick}>
        <Plannar className={active ? 'active' : null} name='main' />
        <Plannar className={active ? 'active' : null} name='left' />
        <Plannar className={active ? 'active' : null} name='right' />
      </List>
    </Container>
  );
};

export default Portifolio;
