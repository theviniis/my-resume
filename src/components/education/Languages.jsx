import React from 'react';
import { user } from '../../user';
import Icon from './Icon';

const Languages = () => {
  return (
    <div className='education__languages'>
      <Icon icon='language' />
      <h3 className='title-color'>Languages</h3>
      <ul className='education__languages__list'>
        {user.languages.map((lang) => (
          <li className='education__languages__list__item' key={lang.language}>
            {lang.language}
            <span>: {lang.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
