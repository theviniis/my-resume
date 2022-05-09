import React from 'react';
import styled from 'styled-components';
import HeroButton from '../helper/HeroButton';
import Illustration from './Illustration';

const Container = styled.section`
  padding-block: 8ch;
  grid-column: 2/-1 !important;
  grid-template-columns:
    340px
    4rem
    min(760px, 90%)
    1fr !important;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1/3 !important;
  grid-row: 1;
  /* min-width: 344px; */
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
