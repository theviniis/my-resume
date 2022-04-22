import React from 'react';
import styled from 'styled-components';
import { global } from '../../styles/global';
import { Icon } from '../../styles/styles';
import { light } from '../../styles/themes';
import ProfileTitle from './ProfileTitle';
import ProfileContact from './ProfileContact';
import Section from '../helper/Section';
import ProfilePic from './ProfilePic';

const ProfileHeader = () => {
  return (
    <Section>
      <ProfilePic />
      <ProfileTitle />
      <ProfileContact />
    </Section>
  );
};

export default ProfileHeader;
