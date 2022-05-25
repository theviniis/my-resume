import React from 'react';
import Section from '../helper/Section';
import Carousel, { consts } from 'react-elastic-carousel';
import PortifolioItem from './PortifolioItem';
import { user } from '../../user';

const Portifolio = ({ theme }) => {
  const [selected, setSelected] = React.useState(0);
  // console.log(selected);

  const handleActive = (index) => {
    setSelected(index);
    // console.log(selected);
  };

  const breakpoints = [
    { width: 1400, itemsToShow: 3 },
    { width: 1280, itemsToShow: 2 },
    { width: 660, itemsToShow: 1 },
  ];

  return (
    <Section name='portifolio' theme={theme}>
      <Carousel
        itemsToShow={3}
        pagination={false}
        itemsToScroll={1}
        focusOnSelect={true}
        // showArrows={false}
        // breakPoints={breakpoints}
        itemPosition={consts.CENTER}
        itemPadding={[0, 7.5]}
        initialActiveIndex={selected}
        onChange={({ index }) => handleActive(index)}
      >
        {user.portfolio.map((item, index) => (
          <PortifolioItem
            key={`${item.name}${index}`}
            index={index}
            name={item.name}
            badgers={item.skills}
            img={item.img}
            description={item.description}
            selected={selected}
            className='splide__list__item'
          />
        ))}
      </Carousel>
    </Section>
  );
};

export default Portifolio;
