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
  color: ${({ theme }) => theme.subTitle};
  height: 120px;

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

const EducationList = ({ theme }) => {
  return (
    <Container>
      <Icon icon='bx bxs-book-alt' />

      <SubTitle>intensive courses</SubTitle>
      <List>
        {user.courses.map((cur, i) => (
          <Item as='li' theme={theme} key={`${cur.course}${i}`}>
            <Title theme={theme}>{cur.course}</Title>
            <Content>
              <span>{cur.school}</span>
              <TitleLight theme={theme}>{cur.hours} Hours</TitleLight>
            </Content>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default EducationList;
