import React from 'react';
import { global } from '../../../styles/global';
import { Card, ContentCard } from '../../../styles/styles';
import user from '../../../user';
import styled from 'styled-components';
import Section from '../../helper/Section';

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${global.mb2}rem;
`;

const Item = styled.li`
  padding: 1rem !important;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const Skills = () => {
  return (
    <Section title='Habilidades'>
      <List>
        {user.skills.map((skill) => (
          <Item as='li' key={skill} className='card'>
            {skill}
          </Item>
        ))}
      </List>
    </Section>
  );
};

export default Skills;
