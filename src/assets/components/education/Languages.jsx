import React from 'react';
import { SubTitle, TitleLight } from '../../styles/styles';
import styled from 'styled-components';
import user from '../../user';
import Icon from './Icon';

const Container = styled.div`
  margin-block-start: 2ch;
  position: relative;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
`;

const Level = styled(TitleLight)`
  font-size: 1rem;

  letter-spacing: initial;
  text-transform: capitalize;
`;

const Languages = () => {
  return (
    <Container>
      <Icon icon='language' />
      <SubTitle>Languages</SubTitle>
      <ul>
        {user.languages.map((lang) => (
          <Item>
            {lang.language}
            <Level>: {lang.level}</Level>
          </Item>
        ))}
      </ul>
    </Container>
  );
};

export default Languages;
