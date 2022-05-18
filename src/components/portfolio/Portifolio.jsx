import React from 'react';
import PortifolioList from './PortifolioList';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import PortifolioItem from './PortifolioItem';

import Section from '../helper/Section';
import { user } from '../../user';

const Portifolio = ({ theme }) => {
  const [selected, setSelected] = React.useState(null);

  const handleActive = (splide) => {
    setSelected(splide.index);
  };
  const options = {
    gap: '1rem',
    perPage: 3,
    perMove: 1,
    focus: 'center',
    arrows: false,
    pagination: false,
    isNavigation: true,
    updateOnMove: true,
    breakpoints: {
      1280: {
        // arrows: true,
        // perPage: 2,
      },

      660: {
        perPage: 1,
      },
    },
  };
  return (
    <section name='portifolio' theme={theme} className='portifolio'>
      <h2 className=''>Portifólio</h2>
      <Splide
        options={options}
        onActive={(e, splide) => handleActive(e, splide)}
      >
        {user.portfolio.map((item, index) => (
          <SplideSlide key={`${item.name}${index}`}>
            <PortifolioItem
              index={index}
              name={item.name}
              badgers={item.skills}
              img={item.img}
              description={item.description}
              theme={theme}
              selected={selected}
              className='splide__list__item'
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Portifolio;
