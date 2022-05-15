import React from 'react';
import styled from 'styled-components';
import Badger from '../helper/Badger';
import Button from '../helper/Button';
import { Description, Title } from '../../assets/styles/styles';
import { global } from '../../assets/styles/global';
import themes from '../../assets/styles/themes';

const Wrapper = styled.div`
  border-radius: ${global.borderRadious}rem;
  overflow: hidden;
  transition: 300ms ease-in-out;
  margin-block: 4ch;
  background-color: ${({ options }) => options.background};

  ${Title} {
    color: ${({ options }) => options.title};
  }

  ${Description} {
    color: ${({ options }) => options.description};
    font-weight: 400;
    animation: description 300ms forwards;

    @keyframes description {
      from {
        opacity: 0;
        transform: translate(0.5rem, 0.5rem);
      }
      to {
        opacity: 1;
        transform: translate(0);
      }
    }
  }

  &:before {
    all: unset;
  }
`;

const Image = styled.div`
  background: url('https://images.unsplash.com/photo-1651591605939-c660f12c0c1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MjIyNDU1Ng&ixlib=rb-1.2.1&q=80&w=1080')
    no-repeat;
  aspect-ratio: 16 / 9;
  margin-block-end: 2ch;
  position: relative;
`;

const Content = styled.div`
  padding-inline: 2ch;
  padding-block-end: 2ch;
  > div {
    display: flex;
    align-items: center;
    gap: 2ch;
    justify-content: space-between;
    margin-block-start: 2ch;
  }
`;

const Badgers = styled.ul`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 2ch;
  gap: 1ch;
  padding-inline: 2ch;
  > li {
    background-color: ${themes.light.card};
  }
`;

const PortifolioCard = ({
  name,
  badgers,
  img,
  index,
  description,
  selected,
  theme,
}) => {
  const focus = selected === index ? true : false;

  const colorValidation = () => {
    if (theme.name === 'light' && focus) {
      return {
        background: themes.dark.card,
        title: themes.dark.subTitle,
        description: themes.dark.fcText,
      };
    } else if (theme.name === 'dark' && focus) {
      return {
        background: themes.light.card,
        title: themes.light.subTitle,
        description: themes.light.fcText,
      };
    } else {
      return {
        background: theme.card,
        title: theme.subTitle,
        description: theme.fcText,
      };
    }
  };

  const options = colorValidation();

  return (
    <Wrapper focus={focus} theme={theme} options={options}>
      <Image>
        <Badgers options={options}>
          {badgers.map((item, i) => (
            <Badger name={item} key={`${item}${i}`} />
          ))}
        </Badgers>
      </Image>
      <Content>
        {focus ? <Description theme={theme}>{description}</Description> : null}
        <div>
          <Title theme={theme}>{name}</Title>
          <Button>Check out</Button>
        </div>
      </Content>
    </Wrapper>
  );
};

export default PortifolioCard;