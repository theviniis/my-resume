import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';

const Item = styled.li``;

const Badger = ({ name, theme }) => {
  return <li className='badger'>{name}</li>;
};

export default Badger;
