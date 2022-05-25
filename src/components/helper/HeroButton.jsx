import React from 'react';

const HeroButton = ({ name }) => {
  return (
    <button className='learn-more'>
      <span className='circle' aria-hidden='true'>
        <span className='icon arrow'></span>
      </span>
      <span className='button-text'>{name}</span>
    </button>
  );
};

export default HeroButton;
