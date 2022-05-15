import React from 'react';
import styled from 'styled-components';
import { global } from '../../styles/global';
import { Icon } from '../../styles/styles';

const List = styled.ul`
  gap: ${global.mb1}rem;
  font-size: ${global.smallFontSize};
`;
const Item = styled.li`
  &,
  a {
    display: flex;
    align-items: center;
    gap: ${global.mb1}rem;
  }
  a:hover {
    color: ${({ theme }) => theme.titleColor};
  }
`;

const IconList = ({ list, className }) => {
  return (
    <List className={`${className} flex`}>
      {list.map((item) =>
        item.href ? (
          <Item key={item.icon}>
            <a href={item.href}>
              <Icon className={item.icon}></Icon>
              {item.name}
            </a>
          </Item>
        ) : (
          <Item key={item.icon}>
            <Icon className={item.icon}></Icon>
            {item.name}
          </Item>
        )
      )}
    </List>
  );
};

export default IconList;
