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
}) => {
  const isFocus = selected === index ? true : false;

  const portifolioImg = require(`../../assets/img/${img}`);

  return (
    <div className='portifolio-item card' isFocus={isFocus}>
      <img src={portifolioImg} alt='' />
      <ul className='badger-list'>
        {badgers.map((item, i) => (
          <Badger name={item} key={`${item}${i}`} />
        ))}
      </ul>
      <div className='portifolio-item-content'>
        {isFocus ? <p className='description'>{description}</p> : null}
        <div className='call-to-action'>
          <h2 className='title'>{name}</h2>
          <Button>Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default PortifolioCard;
