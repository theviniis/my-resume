import React from 'react';
import styled from 'styled-components';
import Badger from '../../helper/Badger';
import Button from '../../helper/Button';
import { Card, Description, Title } from '../../../styles/styles';
import { global } from '../../../styles/global';

const Wrapper = styled.div`
  background-color: ${({ themes, focus }) =>
    focus ? `${themes.dark.card}` : `${themes.light.card}`};
  ${(props) => console.log(props)}
  border-radius: ${global.borderRadious}rem;
  overflow: hidden;
  /* max-width: 340px; */

  ${Description} {
    color: ${({ themes, focus }) =>
      focus ? `${themes.dark.fcText}` : `${themes.light.fcText}`};
  }
  ${Title} {
    color: ${({ themes, focus }) =>
      focus ? `${themes.dark.subTitle}` : `${themes.light.subTitle}`};
  }
  &:before {
    all: unset;
  }
`;

const Image = styled.div`
  background: url('https://images.unsplash.com/photo-1651591605939-c660f12c0c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjIyNDU1Ng&ixlib=rb-1.2.1&q=80&w=1080')
    no-repeat;
  aspect-ratio: 16 / 9;
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
  padding-inline: 2ch;
  padding-block-end: 2ch;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block-start: 2ch;
  }
`;

const Badgers = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  bottom: 2ch;
  gap: 1ch;
  width: 100%;
  padding-inline: 2ch;
`;

const PortifolioCard = ({
  name,
  badgers,
  img,
  index,
  description,
  themes,
  selected,
}) => {
  const focus = selected === index ? true : false;
  return (
    <Wrapper focus={focus} themes={themes}>
      <Image>
        <Badgers>
          {badgers.map((item, i) => (
            <Badger name={item} key={`${item}${i}`} />
          ))}
        </Badgers>
      </Image>
      <Content>
        {focus ? <Description>{description}</Description> : null}
        <div>
          <Title>{name}</Title>
          <Button>Check out</Button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default PortifolioCard;
