import styled from 'styled-components';
import { global } from '../styles/global';
import themes from './themes';

export const Heading = styled.h2`
  color: ${({ theme }) => theme.fcTitle};
  font-size: clamp(4rem, 5vw, 8rem);
  font-weight: 700;
  max-width: 4ch;
  text-transform: uppercase;
  word-break: break-all;
  line-height: 1;
  @media (max-width: 1000px) {
    color: ${({ theme }) => theme.subTitle};

    font-size: clamp(3rem, 3vw, 4rem);
    margin-block-end: 1rem;
    word-break: initial;
  }
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  color: ${({ theme }) =>
    theme.name === 'dark' ? themes.dark.subTitle : themes.light.subTitle};
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-block-end: 1rem;
  line-height: 1;
  letter-spacing: 1px;
`;

export const TitleLight = styled.h3`
  /* font-weight: 300; */
  color: ${(props) => props.theme.fcText};
  /* text-transform: uppercase; */
  font-size: 0.875rem;
  letter-spacing: 1px;
`;

export const Icon = styled.i`
  font-size: 1.25rem;
  cursor: ${({ cursor }) => cursor || ''};
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1vw, 1.125rem);
  /* font-weight: 300; */
  color: ${({ theme }) =>
    theme.name === 'light' ? themes.light.fcText : themes.dark.fcText};
  & strong {
    color: ${({ theme }) => theme.subTitle};
  }
`;

export const Intro = styled(Description)`
  max-width: 50ch;
  font-size: clamp(1.125rem, 1.5vw, 1.13rem);
  padding-block-end: 1rem;
  color: ${({ theme }) =>
    theme.name === 'light' ? themes.light.fcText : themes.dark.fcText};
  @media (max-width: 1000px) {
    max-width: 60ch;
    /* padding-block-end: 0; */
  }
  & strong {
    color: ${({ theme }) => theme.subTitle};
  }
`;

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns:
    1fr
    min(${global.maxWidth}px, 90%)
    1fr;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.fcText};
`;

export const Card = styled.div`
  /* background-color: ${({ theme }) => theme.card}; */
  background-color: ${({ theme, focus }) =>
    focus || theme.name === 'light' ? themes.light.card : themes.dark.card};
  position: relative;
  padding: 2ch;
  border-radius: ${global.borderRadious}rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 20px;
    top: 2ch;
    left: -4px;
    border-top-left-radius: 0.115rem;
    border-bottom-left-radius: 0.115rem;
    background-color: ${(props) => props.theme.primary};
  }
`;
