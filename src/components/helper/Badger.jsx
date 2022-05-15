import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';

const Item = styled.li`
  padding: 0.5em;
  background-color: ${({ theme }) => theme.bg};
  border-radius: ${global.borderRadious}rem;
  font-size: 0.875em;
  color: ${({ theme }) => theme.subTitle};
`;

const Badger = ({ name, theme }) => {
  return <Item theme={theme}>{name}</Item>;
};

export default Badger;
