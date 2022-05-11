import React from 'react';
import styled from 'styled-components';
import Badger from '../../helper/Badger';
import Button from '../../helper/Button';
import { Card, Description, Title } from '../../../styles/styles';
import { global } from '../../../styles/global';

const ListItem = styled(Card)`
  background-color: #ececec;
  /* max-width: 500px; */
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &.active {
    grid-area: main;
    background-color: black;
    & ${Description}, & ${Title} {
      color: white;
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
      display: flex;
      gap: 1ch;
      > div {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

const Image = styled.div`
  background: url('https://images.unsplash.com/photo-1651591605939-c660f12c0c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjIyNDU1Ng&ixlib=rb-1.2.1&q=80&w=1080')
    no-repeat;
  aspect-ratio: 16 / 9;
  border-top-left-radius: ${global.borderRadious}rem;
  border-top-right-radius: ${global.borderRadious}rem;
  object-fit: cover;
  margin-block-end: 2ch;
  position: relative;

  &:before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.25));
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2ch;
  padding-block-end: 2ch;
`;

const Badgers = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 2ch;
  gap: 1ch;
  width: 100%;
  padding-inline: 2ch;

  li {
    background-color: #ececec;
    /* color: white; */
  }
`;

const Item = ({
  className,
  name,
  badgers,
  img,
  index,
  selected,
  toggle,
  description,
}) => {
  const active = selected === index ? true : false;
  return (
    <ListItem className={active ? 'active' : ''} onClick={() => toggle(index)}>
      <Image>
        {active ? (
          <Badgers>
            {badgers.map((item) => (
              <Badger name={item} />
            ))}
          </Badgers>
        ) : null}
      </Image>
      <Content>
        {active ? <Description>{description}</Description> : null}
        <div>
          <Title>{name}</Title>
          <Button>Check out</Button>
        </div>
      </Content>
    </ListItem>
  );
};

export default Item;
