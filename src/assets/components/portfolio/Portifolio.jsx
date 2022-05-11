import React from 'react';
import styled from 'styled-components';
import user from '../../user';
import Section from '../helper/Section';
import Item from './src/Item';

const Container = styled(Section)`
  grid-column: 2 / -1;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 340px 1fr;
  grid-template-areas: 'left main right';
  gap: 2ch;
  align-items: center;
  padding-inline-end: 10ch;
  transition: 0.3 ease-in-out;
  /* transform: scale(80%); */
`;

const Portifolio = () => {
  const [selected, setSelected] = React.useState(0);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Container name='Portifolio'>
      <List>
        {user.portfolio.map((item, index) => (
          <Item
            index={index}
            selected={selected}
            key={item.name}
            toggle={toggle}
            name={item.name}
            badgers={item.skills}
            img={item.img}
            description={item.description}
          />
        ))}
      </List>
    </Container>
  );
};

export default Portifolio;
