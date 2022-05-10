import React from 'react';
import styled from 'styled-components';
import { global } from '../../styles/global';

const Item = styled.li`
  padding: 0.5em;
  background-color: hsl(0, 0%, 5%);
  border-radius: ${global.borderRadious}rem;
  font-size: 0.875em;
`;

const Badger = ({ name }) => {
  return <Item>{name}</Item>;
};

export default Badger;
