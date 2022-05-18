import React from 'react';
import { user } from '../../user';

const Profile = ({ img }) => {
  return (
    <div className='header__profile'>
      {img ? (
        <img
          src={require('../../assets/img/profile.jpeg')}
          alt={user.contact.firstName}
          className='header__profile__img'
        />
      ) : null}
      <h3 className='header__profile__name'>{user.contact.firstName}</h3>
    </div>
  );
};

export default Profile;
