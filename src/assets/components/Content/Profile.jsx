import React from 'react';
import Section from '../helper/Section';
import { info } from '../../../data';
import { Description } from '../../styles/styles';
import { global } from '../../styles/global';

const Profile = () => {
  return (
    <Section title='Quem sou'>
      <Description>{info.objetivo}</Description>
    </Section>
  );
};

export default Profile;
