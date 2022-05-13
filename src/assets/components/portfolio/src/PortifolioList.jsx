import React from 'react';
import styled from 'styled-components';
import user from '../../../user';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PortifolioItem from './PortifolioItem';
import { global } from '../../../styles/global';

const options = {
  // gap: '.5ch',
  // autoWidth: true,
  perPage: 3,
  start: 2,
  perMove: 1,
  focus: 'center',
  arrows: false,
  pagination: false,
  easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  slideFocus: 2,
  isNavigation: true,
  updateOnMove: true,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    800: {
      perPage: 1,
    },
  },
};

const PortifolioList = ({ themes }) => {
  const [selected, setSelected] = React.useState(null);

  const handleActive = (splide) => {
    setSelected(splide.index);
  };

  return (
    <Splide
      aria-label='My Favorite Images'
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
            themes={themes}
            selected={selected}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default PortifolioList;
