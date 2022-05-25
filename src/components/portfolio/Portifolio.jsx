import React from 'react';
import Section from '../helper/Section';
import Carousel, { consts } from 'react-elastic-carousel';
import PortifolioItem from './PortifolioItem';
import { user } from '../../user';
import Slider from '../helper/Slider';

const options = {
  perPage: 3,
  gap: '2ch',
  dragOffset: 1,
};

const Portifolio = ({ theme }) => {
  const [selected, setSelected] = React.useState(0);

  return (
    <Section name='portifolio' theme={theme}>
      <Slider options={options}>
        {user.portfolio.map((item, index) => (
          <PortifolioItem
            key={`${item.name}${index}`}
            index={index}
            name={item.name}
            badgers={item.skills}
            img={item.img}
            description={item.description}
            // selected={selected}
          />
        ))}
      </Slider>
    </Section>
  );
};

export default Portifolio;
