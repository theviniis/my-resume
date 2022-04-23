import React from 'react';
import styled from 'styled-components';
import { global } from '../../../styles/global';
import user from '../../../user';
import Section from '../../helper/Section';

const List = styled.ul`
  gap: ${global.mb1}rem;
`;

const Languages = () => {
  return (
    <Section title='Idiomas'>
      <List className='flex card'>
        {user.languages.map(({ language, level }) => (
          <li key={language}>
            <b>
              <span>{language}: </span>
            </b>
            <span>{level}</span>
          </li>
        ))}
      </List>
    </Section>
  );
};

export default Languages;
