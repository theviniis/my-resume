import React from 'react';
import Languague from '../../assets/img/Languague';

const Icon = ({ icon }) => {
  if (icon === 'language') {
    return <Languague />;
  } else if (icon === 'language') {
    return <Languague />;
  } else if (icon === 'language') {
    return <Languague />;
  } else {
    return <span className={icon}></span>;
  }
};

export default Icon;
