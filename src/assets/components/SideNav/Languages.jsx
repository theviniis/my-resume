import React from 'react';
import { global } from '../../styles/global';
import { info } from '../../../data';
import styled from 'styled-components';
import Section from '../helper/Section';

const List = styled.ul`
  gap: ${global.mb1}rem! important;
`;

const Languages = () => {
  return (
    <Section title='Idiomas'>
      <List className='flex'>
        {info.idiomas.map((item, index) => (
          <li key={index}>
            <b>
              <span>{item.idioma}: </span>
            </b>
            <span>{item.nivel}</span>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default Languages;
