import styled from 'styled-components';
import { global } from '../styles/global';

export const Title = styled.h1`
  font-size: clamp(1.125rem, 1vw, 2rem);
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  /* margin-bottom: 0.25rem; */
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-block-end: 2ch;
  line-height: 1;
  letter-spacing: 1px;
  /* position: relative; */
`;

export const TitleLight = styled.h3`
  font-weight: 300;
  color: #a3a3a3;
  text-transform: uppercase;
  font-size: 0.875rem;
  letter-spacing: 1px;
`;

export const Icon = styled.i`
  font-size: 1.25rem;
  cursor: ${({ cursor }) => cursor || ''};
`;

export const Description = styled.p`
  font-size: clamp(1rem, 1vw, 1.125rem);
  color: ${(props) => props.theme.textColor};
`;

export const SectionIntro = styled(Description)`
  color: #a3a3a3;
  max-width: 80%;
  font-size: clamp(1rem, 1.5vw, 1.13rem);

  padding-block-end: 2rem;
  & strong {
    color: white;
  }
`;

export const Card = styled.div`
  padding: 2rem;
  box-shadow: ${({ boxShadow }) => boxShadow || `${global.shadow}`};
  border-radius: ${global.borderRadious}rem;
  margin-top: ${({ marginTop }) => marginTop || ''};
  gap: ${({ gap }) => gap || ''};

  &:hover {
    box-shadow: ${({ boxShadow }) => boxShadow || `${global.shadowHover}`};
  }
`;

export const ContentCard = styled.section`
  padding: 2rem;
  border-radius: ${global.borderRadious}rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.075);

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns:
    1fr
    min(${global.maxWidth}px, 100%)
    1fr;
`;

export const FullBleed = styled.div`
  width: 100%;
  grid-column: 1 / -1;
`;
