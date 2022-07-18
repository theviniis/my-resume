import React from 'react';
import Section from '../helper/Section';
import PortifolioItem from './PortifolioItem';
import { user } from '../../user';
import Carousel, { consts } from 'react-elastic-carousel';

const Portifolio = ({ theme }) => {
  return (
    <Section name='portifolio' theme={theme}>
      <Carousel
        itemsToShow={2}
        itemsToScroll={1}
        pagination={false}
        enableTilt={true}
        itemPosition={consts.CENTER}
        focusOnSelect={true}
        itemPadding={[0, 10]}
      >
        {user.portfolio.map((item, index) => (
          <PortifolioItem
            key={`${item.name}-${index}`}
            index={index}
            name={item.name}
            badgers={item.skills}
            img={item.img}
            description={item.description}
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default Portifolio;
