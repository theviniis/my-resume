import React from 'react';
import { user } from '../../user';
import HeroButton from '../helper/HeroButton';
import Illustration from './Illustration';

const Hero = () => {
  return (
    <section className='hero wrapper'>
      <div className='hero__content'>
        <div>
          <h1 className='hero__content__title'>{user.hero.intro}</h1>
          <p className='hero__content__description intro'>
            {user.hero.description}
          </p>
          <HeroButton name={user.hero.button} />
        </div>
        <Illustration />
      </div>
    </section>
  );
};

export default Hero;
