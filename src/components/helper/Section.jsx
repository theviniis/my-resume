import React from 'react';
import styled from 'styled-components';
import { Wrapper, Heading, Description } from '../../assets/styles/styles';

const Content = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 180px 1fr;
  padding-block: 6ch;
  column-gap: clamp(2.5ch, 4vw, 8ch);

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }

  ${Heading} {
    grid-row: span 0;
    @media (max-width: 1000px) {
      word-wrap: unset;
    }
  }

  ${Description} {
    color: ${({ theme }) => theme.fcText};
  }
`;

const Section = ({ name, children, className, theme }) => {
  return (
    <Wrapper as='section' theme={theme}>
      <Content className={className} id={name.toLowerCase()} theme={theme}>
        {name ? <Heading theme={theme}>{name}</Heading> : null}
        {children}
      </Content>
    </Wrapper>
  );
};

export default Section;
