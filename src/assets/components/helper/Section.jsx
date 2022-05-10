import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
  display: grid;
  grid-template-columns: 220px 1fr;
  padding-block: 6ch;
`;
const Title = styled.h2`
  font-size: clamp(4rem, 5vw, 8rem);
  margin-block-end: 1ch;
  font-weight: 700;
  max-width: 4ch;
  text-transform: uppercase;
  word-break: break-all;
  grid-row: 1 / -1;
`;

const Section = ({ name, children, className }) => {
  return (
    <Content className={className} id={name.toLowerCase()}>
      {name ? <Title>{name}</Title> : null}
      {children}
    </Content>
  );
};

export default Section;
