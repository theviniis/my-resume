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

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 20px;
    top: 2ch;
    left: -4px;
    border-top-left-radius: 0.115rem;
    border-bottom-left-radius: 0.115rem;
    background-color: ${(props) => props.theme.primary};
  }

  ${TitleLight} {
    margin-block-end: 1ch;
    text-transform: uppercase;
    font-weight: 400;
  }

  span {
    color: #a3a3a3;
  }
  span {
    margin-top: auto;
  }
`;

const University = () => {
  return (
    <Container>
      <Icon icon='bx bxs-graduation' />
      <SubTitle>University</SubTitle>

      <Content>
        <TitleLight>{user.education.faculdade}</TitleLight>
        <Title>{user.education.curso}</Title>
        <Date inicio={user.education.inicio} fim={user.education.final} />
      </Content>
    </Container>
  );
};

export default University;
