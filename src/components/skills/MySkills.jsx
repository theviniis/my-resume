import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { user } from '../../user';

const MySkills = () => {
  return (
    <ul className='skills__list'>
      {user.skills.map((s) => (
        <li className='skills__list__item' key={s.name}>
          <CircularProgressbar
            value={s.level}
            text={`${s.level}%`}
            strokeWidth='13'
          />
          {s.name}
        </li>
      ))}
    </ul>
  );
};

export default MySkills;
