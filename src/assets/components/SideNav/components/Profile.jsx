import React from 'react';
import Section from '../../helper/Section';
import ProfileContact from './Profile/ProfileContact';
import styled from 'styled-components';
import profile from '../../../img/profile.jpeg';
import { Title, StyledH3 as Profession, Icon } from '../../../styles/styles';
import user from '../../../user';
import ThemeToggle from '../../helper/ThemeToggle';

const Container = styled(Section)`
  position: relative;
  > i {
    position: absolute;
    display: block;
    top: 2rem;
  }

  > i:first-child {
    left: 2rem;
  }

  > i:last-child {
    right: 2rem;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  height: 120px;
  width: 120px;
  margin: auto;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
`;

const Profile = () => {
  return (
    <Container className='card'>
      <Image src={profile} />
      <Title>{`${user.contact.firstName} ${user.contact.lastName}`}</Title>
      <Profession
        textAlign='center'
        fontSize={global.normalFontSize}
        marginBottom='1rem'
      >
        {user.contact.profession}
      </Profession>
      <ProfileContact />
      <Icon className='bx bx-download' cursor='pointer' />
      <ThemeToggle />
    </Container>
  );
};

export default Profile;
