import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../../styles/styles';
import { StyledCard as Card } from './Card';

const Content = styled.div`
  margin-top: 1rem;
`;

const Section = ({ title, children, className, boxShadow, hover }) => {
  return (
    <Card className={className} hover={hover}>
      {title ? <SubTitle>{title}</SubTitle> : null}
      <Content className='flex'>{children}</Content>
    </Card>
  );
};

export default Section;
