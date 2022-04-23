import React from 'react';
import Section from '../../helper/Section';
import user from '../../../user';
import { Description } from '../../../styles/styles';

const Profile = () => {
  return (
    <Section title='Quem sou'>
      <Description className='card'>{user.description}</Description>
    </Section>
  );
};

export default Profile;
