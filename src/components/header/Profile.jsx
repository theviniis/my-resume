import React from 'react';
import styled from 'styled-components';
import user from '../../user';
import ProfileImg from '../../assets/img/profile.jpeg';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1ch;
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
`;
const Title = styled.h2`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.5rem;
`;

const Profile = ({ name, img }) => {
  return (
    <Container>
      {img ? <Image src={ProfileImg} alt={name} /> : null}
      <Title>{user.contact.firstName}</Title>
    </Container>
  );
};

export default Profile;
