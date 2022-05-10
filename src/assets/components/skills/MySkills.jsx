import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import user from '../../user';
import styled from 'styled-components';
import { Wrapper } from '../../styles/styles';
import { global } from '../../styles/global';

const List = styled(Wrapper)`
  grid-template-columns: repeat(auto-fill, 154.6px);
  gap: 2ch;
`;
const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1ch;
  padding: 0.5ch;
  border-radius: ${global.borderRadious}rem;
  font-size: clamp(1.5rem, 1.25vw, 2.5rem);
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
  svg {
    /* max-width: 100px; */
    .CircularProgressbar,
    .CircularProgressbar-path {
      stroke: ${(props) => props.theme.primary};
    }
    .CircularProgressbar-trail {
      stroke: #e0e0e0;
    }
    text {
      fill: ${(props) => props.theme.primary} !important;
      font-weight: 600;
    }
  }
`;

const MySkills = () => {
  return (
    <List as='ul'>
      {user.skills.map((s) => (
        <Item key={s.name}>
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
