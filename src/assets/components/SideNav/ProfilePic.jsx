import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../styles/styles';
import profile from '../../img/profile.jpeg';
import { info } from '../../../data';
import { GlobalContext } from '../../../GlobalContext';
import { light } from '../../styles/themes';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  height: 120px;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
`;
const Download = styled(Icon)`
  justify-self: start;
`;
const ThemeToggle = styled(Icon)`
  justify-self: end;
  transition: 0.3s;
`;

const ProfilePic = () => {
  const theme = React.useContext(GlobalContext);
  function themeToggle() {
    theme.theme === light.name
      ? theme.setTheme('dark')
      : theme.setTheme('light');
  }
  return (
    <Container>
      <Download className='bx bx-download' cursor='pointer'></Download>
      <ProfileImg
        src={profile}
        alt={`${info.dados.primeiroNome} ${info.dados.segundoNome}`}
      />
      <ThemeToggle
        className={theme.theme === light.name ? 'bx bx-moon' : 'bx bx-sun'}
        cursor='pointer'
        onClick={themeToggle}
      ></ThemeToggle>
    </Container>
  );
};

export default ProfilePic;
