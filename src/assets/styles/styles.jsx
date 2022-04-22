import styled from 'styled-components';
import { global } from '../styles/global';
import Section from '../components/helper/Section';

export const Title = styled.h1`
  /* color: ${({ theme }) => theme.titleColor}; */
  font-size: ${({ fontSize }) => fontSize || `${global.h1FontSize}`};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontMedium}`};
  text-align: ${({ textAlign }) => textAlign || ''};
  text-transform: ${({ textTransform }) => textTransform || 'uppercase'};
`;

export const SubTitle = styled.h2`
  font-size: ${({ fontSize }) => fontSize || `${global.h2FontSize}`};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontSemiBold}`};
  text-align: ${({ textAlign }) => textAlign || ''};
`;

export const StyledH3 = styled.h3`
  font-size: ${({ fontSize }) => fontSize || `${global.h3FontSize}`};
  text-transform: ${({ textTransform }) => textTransform || ''};
  text-align: ${({ textAlign }) => textAlign || 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight || `${global.fontMedium}`};
`;

export const Icon = styled.i`
  font-size: 1.25rem;
  cursor: ${({ cursor }) => cursor || ''};
`;

export const Description = styled.p`
  font-size: ${global.smallFontSize};
`;
