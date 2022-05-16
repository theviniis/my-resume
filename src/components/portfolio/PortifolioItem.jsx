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
  background-color: ${({ options }) => options.background};
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  }

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

const Image = styled.img`
  /* background: url(${({ portifolioImg }) => portifolioImg}) no-repeat; */
  aspect-ratio: 16 / 9;
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-block-end: 2ch;
`;

const Content = styled.div`
  padding-inline: 2ch;
  padding-block-end: 2ch;
  position: relative;

  > div {
    display: flex;
    align-items: center;
    gap: 2ch;
    justify-content: space-between;
    margin-block-start: 2ch;
  }
`;

const Badgers = styled.ul`
  /* position: absolute; */
  display: flex;
  /* flex-wrap: wrap; */
  /* top: 2ch; */
  gap: 1ch;
  margin-block-end: 2ch;

  /* padding-inline: 2ch; */
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
  const portifolioImg = require(`../../assets/img/${img}`);
  // console.log(src);

  return (
    <Wrapper focus={focus} theme={theme} options={options}>
      <Image src={portifolioImg} />
      <Content>
        <Badgers options={options}>
          {badgers.map((item, i) => (
            <Badger name={item} key={`${item}${i}`} />
          ))}
        </Badgers>
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
