import React from 'react';
import styled from 'styled-components';
import Badger from '../helper/Badger';
import Button from '../helper/Button';
import HeroButton from '../helper/HeroButton';

const PortifolioCard = ({
  name,
  badgers,
  img,
  index,
  description,
  selected,
  theme,
}) => {
  const focus = selected === index ? true : false;

  const portifolioImg = require(`../../assets/img/${img}`);

  return (
    <div focus={focus} className='card'>
      <img src={portifolioImg} alt='' />
      <div className='card-content'>
        <ul>
          {badgers.map((item, i) => (
            <Badger name={item} key={`${item}${i}`} />
          ))}
        </ul>
        {focus ? <p className='intro'>{description}</p> : null}
        <div className='call-to-action'>
          <h2 className='title'>{name}</h2>
          <button class='btn'>Visit</button>
        </div>
      </div>
    </div>
  );
};

export default PortifolioCard;
