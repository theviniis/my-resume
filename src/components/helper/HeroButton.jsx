import React from 'react';

const HeroButton = ({ name }) => {
  return (
    <button class='learn-more'>
      <span class='circle' aria-hidden='true'>
        <span class='icon arrow'></span>
      </span>
      <span class='button-text'>{name}</span>
    </button>
  );
};

export default HeroButton;
