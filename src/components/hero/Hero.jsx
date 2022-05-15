import React from 'react';
import styled from 'styled-components';
import { Wrapper, Description } from '../../assets/styles/styles';
import HeroButton from '../helper/HeroButton';
import Illustration from './Illustration';

const Container = styled(Wrapper)`
  padding-block: 6ch;
  grid-column: 1/-1;

  svg {
    max-width: 100%;
    z-index: -1;
    grid-column: 2 / -1;
    grid-row: 1;
    margin-left: 425px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 2;
  grid-row: 1;
  max-width: 475px;
  button {
    margin-block-start: 4ch;
  }
`;
const Title = styled.h1`
  font-size: clamp(4rem, 4.5vw, 6rem);
  font-weight: 600;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.titleColor};
`;

const Hero = () => {
  return (
    <Container className='full-bleed wrapper' as='section' id='hero'>
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
