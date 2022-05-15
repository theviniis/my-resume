import React from 'react';
import styled from 'styled-components';
import user from '../../user';

const List = styled.ul`
  display: flex;
  gap: 2ch;
`;
const Item = styled.li``;

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
