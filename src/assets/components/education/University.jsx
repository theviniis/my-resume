import React from 'react';
import styled from 'styled-components';
import { Card, SubTitle, Title, TitleLight } from '../../styles/styles';
import user from '../../user';
import Date from '../helper/Date';
import Icon from './Icon';

const Container = styled.div`
  position: relative;
`;

const Content = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 140px;
  width: max-content;
  position: relative;
  margin-block-end: 2ch;

  ${TitleLight} {
    margin-block-end: 1ch;
    text-transform: uppercase;
  }

  span {
    margin-top: auto;
  }
`;

const University = ({ theme }) => {
  return (
    <Container>
      <Icon icon='bx bxs-graduation' />
      <SubTitle>University</SubTitle>

      <Content theme={theme}>
        <TitleLight theme={theme}>{user.education.faculdade}</TitleLight>
        <Title theme={theme}>{user.education.curso}</Title>
        <Date
          inicio={user.education.inicio}
          fim={user.education.final}
          theme={theme}
          color={theme.fcText}
        />
      </Content>
    </Container>
  );
};

export default University;
