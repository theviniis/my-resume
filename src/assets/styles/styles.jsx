import styled from 'styled-components';
import { global } from '../styles/global';

export const Title = styled.h1`
  font-size: ${({ fontSize }) => fontSize || `${global.h1FontSize}`};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontMedium}`};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  text-transform: ${({ textTransform }) => textTransform || 'uppercase'};
  margin-bottom: 0.25rem;
`;

export const SubTitle = styled.h2`
  font-size: ${({ fontSize }) => fontSize || `${global.h2FontSize}`};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontSemiBold}`};
  text-align: ${({ textAlign }) => textAlign || ''};
  margin-bottom: 1rem;
`;

export const StyledH3 = styled.h3`
  font-size: ${({ fontSize }) => fontSize || `${global.smallFontSize}`};
  text-transform: ${({ textTransform }) => textTransform || ''};
  text-align: ${({ textAlign }) => textAlign || ''};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontMedium}`};
  text-align: ${({ textAlign }) => textAlign || ''};
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};
  /* color: ${({ theme }) => theme.secondary}; */
`;

export const SmallSubTitle = styled(StyledH3)`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${(props) => props.theme.textColor};
`;

export const ColorH3 = styled.h3`
  font-size: ${global.normalFontSize};
  color: ${({ theme }) => theme.secondary};
  font-weight: ${global.fontMedium};
  margin-bottom: ${({ marginBottom }) => marginBottom || ''};
`;

export const Icon = styled.i`
  font-size: 1.25rem;
  cursor: ${({ cursor }) => cursor || ''};
`;

export const Description = styled.p`
  font-size: ${global.normalFontSize};
  line-height: 1.3;
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
