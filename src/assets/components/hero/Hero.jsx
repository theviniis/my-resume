import React from 'react';
import styled from 'styled-components';
import { Wrapper } from '../../styles/styles';
import HeroButton from '../helper/HeroButton';
import Illustration from './Illustration';

const Container = styled(Wrapper)`
  padding-block: 8ch;
  grid-column: 1/-1;

  svg {
    max-width: 100%;
    z-index: -1;
    grid-column: 2 / -1;
    grid-row: 1;
    margin-left: 340px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2;
  grid-row: 1;
  max-width: 360px;
`;
const Title = styled.h1`
  font-size: clamp(4rem, 4.5vw, 6rem);
  font-weight: 600;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  font-size: clamp(1rem, 1vw, 1.125rem);

  margin-bottom: 2rem;
  span {
    display: block;
    margin-top: 1.5ch;
  }
`;

const Hero = () => {
  return (
    <Container className='full-bleed wrapper' id='hero'>
      <Content>
        <Title>Hi, I am Vinícius</Title>
        <Description>
          <b>Front-end developer</b> student looking for an opportunity to start
          working as a developer, with the goal to enhance my personal and
          professional skills with intensive classes, certifications and open
          source contributions.
          <Description as='span'>
            Very interested in <b>React.JS</b> with <b>Styled Components</b> and{' '}
            <b>JavaScript</b> tooling.
          </Description>
        </Description>
        <HeroButton name='Contact' />
      </Content>
      <Illustration />
    </Container>
  );
};

export default Hero;
