import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';
import { Icon } from '../../assets/styles/styles';

const List = styled.ul`
  gap: ${global.mb1}rem;
  font-size: ${global.smallFontSize};
`;
const Item = styled.li`
  &,
  a {
    display: flex;
    align-items: center;
    gap: 0.5ch;
    color: ${({ theme }) => theme.subTitle};
  }
  &:hover {
    &,
    a {
      color: ${({ theme }) => theme.primary};
    }
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
