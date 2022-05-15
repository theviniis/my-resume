import React from 'react';
import { SubTitle, TitleLight } from '../../assets/styles/styles';
import styled from 'styled-components';
import user from '../../user';
import Icon from './Icon';

const Container = styled.div`
  position: relative;
  color: ${({ theme }) => theme.subTitle};
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.subTitle};
`;

const Level = styled(TitleLight)`
  font-size: 1rem;
  color: ${({ theme }) => theme.fcText};

  letter-spacing: initial;
  text-transform: capitalize;
`;

const Languages = ({ theme }) => {
  return (
    <Container theme={theme}>
      <Icon icon='language' />
      <SubTitle>Languages</SubTitle>
      <ul>
        {user.languages.map((lang) => (
          <Item key={lang.language} theme={theme}>
            {lang.language}
            <Level theme={theme}>: {lang.level}</Level>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default Languages;
