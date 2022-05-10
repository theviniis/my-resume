import React from 'react';
import styled from 'styled-components';
import { SubTitle, Title, TitleLight } from '../../styles/styles';
import user from '../../user';
import Date from '../helper/Date';
import Icon from './Icon';

const Container = styled.div`
  position: relative;
`;

const Card = styled.div`
  background-color: black;
  border-radius: ${global.borderRadious}rem;
  padding: 2ch;
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
  }
  span {
    font-weight: 300;
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

      <SubTitle>Formação Acadêmica</SubTitle>
      <Card>
        <TitleLight>{user.education.faculdade}</TitleLight>
        <Title>{user.education.curso}</Title>
        <Date inicio={user.education.inicio} fim={user.education.final} />
      </Card>
    </Container>
  );
};

export default University;
