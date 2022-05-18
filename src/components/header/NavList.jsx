import React from 'react';
import { user } from '../../user';

const NavList = () => {
  return (
    <ul className='header__nav__list'>
      {user.sections.map((section) => (
        <li key={section} className='header__nav__list__item'>
          <a href={`#${section.toLowerCase()}`}>{section}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
