import React from 'react';
import styled from 'styled-components';
import { Wrapper, Heading, Description } from '../../styles/styles';

const Content = styled.div`
  grid-column: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  padding-block: 6ch;
  column-gap: 10ch;

  ${Heading} {
    grid-row: span 4;
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
