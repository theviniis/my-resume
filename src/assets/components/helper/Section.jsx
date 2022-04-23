import React from 'react';
import styled from 'styled-components';
import { Card, SubTitle } from '../../styles/styles';

const Content = styled.section``;

const Section = ({ title, children, className, card }) => {
  return (
    <Content className={className}>
      {title ? <SubTitle>{title}</SubTitle> : null}
      {children}
    </Content>
  );
};

export default Section;
