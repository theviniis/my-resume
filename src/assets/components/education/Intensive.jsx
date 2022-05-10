import React from 'react';
import user from '../../user';
import styled from 'styled-components';
import { Card, SubTitle, Title, TitleLight } from '../../styles/styles';
import Icon from './Icon';

const Container = styled.div`
  position: relative;
`;
const List = styled.ul`
  grid-column: 2;
  display: grid;
  gap: 2ch;
  grid-template-columns: repeat(auto-fill, 213px);
`;
const Item = styled(Card)`
  flex-direction: column;
  height: 120px;

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
    font-size: 1rem;
  }

  &,
  & div {
    display: flex;
    justify-content: space-between;
  }
  div {
    align-items: center;
  }
`;

const Content = styled.div`
  font-size: 1rem;
`;

const EducationList = () => {
  return (
    <Container>
      <Icon icon='bx bxs-book-alt' />

      <SubTitle>intensive courses</SubTitle>
      <List>
        {user.courses.map((cur) => (
          <Item as='li'>
            <Title>{cur.course}</Title>
            <Content>
              <span>{cur.school}</span>
              <TitleLight>{cur.hours} Hours</TitleLight>
            </Content>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default EducationList;
