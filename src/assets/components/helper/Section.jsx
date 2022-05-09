import React from 'react';
import styled from 'styled-components';

const Content = styled.section`
  margin-block: 2ch;
`;
const Title = styled.h2`
  margin-bottom: 2ch;
`;

const Section = ({ title, children, className }) => {
  return (
    <Content className={className}>
      {title ? <Title>{title}</Title> : null}
      {children}
    </Content>
  );
};

export default Section;
