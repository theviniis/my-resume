import React from 'react';
import styled from 'styled-components';
import Badger from '../experience/Badger';
import Button from '../helper/Button';
import {
  Card,
  Description,
  SubTitle,
  Title,
  TitleLight,
} from '../../styles/styles';
import { global } from '../../styles/global';

const Item = styled(Card)`
  background-color: #ececec;
  max-width: 500px;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

const Image = styled.div`
  background: url('https://images.unsplash.com/photo-1651469240125-b7d23f89e3a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjE3NjY2Mg&ixlib=rb-1.2.1&q=80&w=1080')
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

const Plannar = ({ className, name }) => {
  const [active, setActive] = React.useState(false);

  function handleClick(event) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(active);
    // setActive(!active);
    // handleOutsideClick(event);
  }
  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setActive(false);
  }
  return (
    <Item as='li' onClick={handleClick} className={className}>
      <Image>
        <Badgers>
          <Badger name='HTML' />
          <Badger name='CSS' />
          <Badger name='JavaScript' />
          <Badger name='PHP' />
          <Badger name='WordPress' />
        </Badgers>
      </Image>
      <Content>
        <Title>Espaço Plannar</Title>
        <span>{name}</span>
        <Button>Check out</Button>
      </Content>
    </Item>
  );
};

export default Plannar;
