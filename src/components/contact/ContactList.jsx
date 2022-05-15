import React from 'react';
import user from '../../user';
import IconList from '../helper/IconList';

const list = [
  {
    name: `${user.contact.email}`,
    icon: 'bx bx-envelope',
    href: `mailto:${user.contact.email}`,
  },
  {
    name: `${user.contact.phone}`,
    icon: 'bx bxl-whatsapp',
    href: `https://wa.me/${user.contact.phone}`,
  },
  {
    name: `@${user.contact.linkedin}`,
    icon: 'bx bxl-linkedin-square',
    href: `https://www.linkedin.com/in/${user.contact.linkedin}`,
  },
  {
    name: `@${user.contact.github}`,
    icon: 'bx bxl-github',
    href: `https://github.com/${user.contact.github}`,
  },
];

const ContactList = () => {
  return <IconList list={list} />;
};

export default ContactList;
