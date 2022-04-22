import React from 'react';
import { global } from '../../styles/global';
import { info } from '../../../data';
import styled from 'styled-components';
import Section from '../helper/Section';

const Item = styled.li`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid currentColor;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${global.mb2}rem;
`;

const Skills = () => {
  return (
    <Section title='Habilidades'>
      <List>
        {info.competencias.map((competencia) => (
          <Item key={competencia}>{competencia}</Item>
        ))}
      </List>
    </Section>
  );
};

export default Skills;
