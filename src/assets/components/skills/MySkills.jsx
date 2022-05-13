import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import user from '../../user';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 154.6px);
  gap: 1ch;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1ch;
  padding: 0.5ch;
  font-size: clamp(1.5rem, 1.25vw, 2.5rem);
  color: ${({ theme }) => theme.subTitle};
  svg {
    .CircularProgressbar,
    .CircularProgressbar-path {
      stroke: ${({ theme }) => theme.primary};
    }
    .CircularProgressbar-trail {
      stroke: #e0e0e0;
    }
    text {
      fill: ${({ theme }) => theme.primary} !important;
      font-weight: 600;
    }
  }
`;

const MySkills = ({ theme }) => {
  return (
    <List as='ul'>
      {user.skills.map((s) => (
        <Item key={s.name} theme={theme}>
          <CircularProgressbar
            value={s.level}
            text={`${s.level}%`}
            strokeWidth='14'
          />
          {s.name}
        </Item>
      ))}
    </List>
  );
};

export default MySkills;
