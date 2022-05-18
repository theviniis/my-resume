import React from 'react';
import { user } from '../../user';
import Date from '../helper/Date';
import Icon from './Icon';

const University = () => {
  return (
    <div className='education__university'>
      <Icon icon='bx bxs-graduation education__icon' />
      <h2 className='title-color '>University</h2>

      <ul className='education__university__list'>
        {user.education.map((i) => (
          <li className='education__university__list__item card'>
            <h3 className='title-light'>{i.faculdade}</h3>
            <h2 className='title'>{i.curso}</h2>
            <Date inicio={i.inicio} fim={i.final} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default University;
