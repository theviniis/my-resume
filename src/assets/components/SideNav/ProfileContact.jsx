import React from 'react';
import { info } from '../../../data';
import IconList from '../helper/IconList';

const list = [
  {
    name: `${info.dados.location}`,
    icon: 'bx bx-map',
    href: '',
  },
  {
    name: `${info.dados.email}`,
    icon: 'bx bx-envelope',
    href: `mailto:${info.dados.email}`,
  },
  {
    name: `${info.dados.phone}`,
    icon: 'bx bxl-whatsapp',
    href: `https://wa.me/${info.dados.phone}`,
  },
  {
    name: `@${info.dados.linkedin}`,
    icon: 'bx bxl-linkedin-square',
    href: `https://www.linkedin.com/in/${info.dados.linkedin}`,
  },
  {
    name: `@${info.dados.github}`,
    icon: 'bx bxl-github',
    href: `https://github.com/${info.dados.github}`,
  },
];

const ProfileContact = () => {
  return <IconList list={list} />;
};

export default ProfileContact;
