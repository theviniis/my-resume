import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';
import user from '../../user';

const List = styled.ul`
  display: flex;
  gap: 1ch;
  @media (max-width: 600px) {
    display: none;
  }
`;
const Item = styled.li`
  /* background-color: ${({ theme }) => theme.card}; */
  /* border: 2px solid ${({ theme }) => theme.card}; */
  padding: 0.25em;
  border-radius: ${global.borderRadious}rem;
  a {
    color: ${({ theme }) => theme.fcText};
  }
`;

const NavList = () => {
  return (
    <List>
      {user.sections.map((section) => (
        <Item key={section}>
          <a href={`#${section.toLowerCase()}`}>{section}</a>
        </Item>
      ))}
    </List>
  );
};

export default NavList;
