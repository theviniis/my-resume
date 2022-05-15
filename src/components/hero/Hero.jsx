import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';
import { Wrapper, Description, Intro } from '../../assets/styles/styles';
import HeroButton from '../helper/HeroButton';
import Illustration from './Illustration';

const Container = styled(Wrapper)`
  padding-block: 6ch;
  grid-column: 1/-1;
  @media (max-width: 600px) {
    padding-block-start: 0;
    padding-block-end: 6ch;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'title  img'
    'description  img'
    'btn  img';
  grid-template-rows: min-content;
  grid-column: 2;
  gap: 3ch;
  color: ${({ theme }) => theme.subTitle};
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'title' 'description' 'btn' 'img';

    svg {
      /* max-width: 600px; */
    }
  }

  ${Description} {
    grid-area: description;
  }
  > button {
    grid-area: btn;
  }
  svg {
    grid-area: img;
    align-self: center;
  }
`;
const Title = styled.h1`
  grid-area: title nt;
  height: min-content;

  font-size: clamp(3rem, 4vw, 6rem);
  font-weight: 600;
  /* margin-bottom: 1ch; */
  color: ${({ theme }) => theme.subTitle};
`;

const Hero = () => {
  return (
    <Container as='section' id='hero'>
      <Content>
        <Title>Hi, I am Vinícius</Title>
        <Intro>
          <strong>Front-end developer</strong> student looking for an
          opportunity to start working as a developer, with the goal to enhance
          my personal and professional skills with intensive classes,
          certifications and open source contributions. Very interested in{' '}
          <strong>React.JS</strong> with <strong>Styled Components</strong> and{' '}
          <strong>JavaScript</strong> tooling.
        </Intro>
        <HeroButton name='Contact' />
        <Illustration />
      </Content>
    </Container>
  );
};

export default Hero;
