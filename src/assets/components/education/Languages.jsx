import React from 'react';
import { SubTitle, TitleLight } from '../../styles/styles';
import styled from 'styled-components';
import user from '../../user';
import Icon from './Icon';

const Container = styled.div`
  margin-block-start: 2ch;
  position: relative;
  color: ${({ theme }) => theme.subTitle};
`;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Level = styled(TitleLight)`
  font-size: 1rem;
  color: ${({ theme }) => theme.cText};

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
          <Item key={lang.language}>
            {lang.language}
            <Level theme={theme}>: {lang.level}</Level>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default Languages;
