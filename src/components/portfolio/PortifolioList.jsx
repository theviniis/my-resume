import React from 'react';
import styled from 'styled-components';
import user from '../../user';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PortifolioItem from './PortifolioItem';

const List = styled(Splide)`
  grid-column: 3/ -1;
  /* display: flex; */
  align-items: center !important;
  margin-inline-end: 1rem;
  margin-inline-start: clamp(2.5ch, 4vw, 8ch);

  @media (max-width: 1000px) {
    grid-column: 2;
    grid-row: 2;
    margin-inline-start: initial;
    margin-inline-end: initial;
  }
`;

const Item = styled(SplideSlide)``;

const options = {
  gap: '1rem',
  perPage: 3,
  perMove: 1,
  focus: 'center',
  arrows: false,
  pagination: false,
  // easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
  isNavigation: true,
  updateOnMove: true,
  // padding: '1rem',
  breakpoints: {
    1280: {
      arrows: true,
      perPage: 2,
    },

    660: {
      perPage: 1,
    },
  },
};

const PortifolioList = ({ theme }) => {
  const [selected, setSelected] = React.useState(null);

  const handleActive = (splide) => {
    setSelected(splide.index);
  };

  return (
    <List
      aria-label='My Favorite Images'
      options={options}
      onActive={(e, splide) => handleActive(e, splide)}
    >
      {user.portfolio.map((item, index) => (
        <Item key={`${item.name}${index}`}>
          <PortifolioItem
            index={index}
            name={item.name}
            badgers={item.skills}
            img={item.img}
            description={item.description}
            theme={theme}
            selected={selected}
          />
        </Item>
      ))}
    </List>
  );
};

export default PortifolioList;
