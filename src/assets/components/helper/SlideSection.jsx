import React from 'react';
import user from '../../user';
import Section from './Section';
import Slider from './slider/Slider';
import styled from 'styled-components';

const List = styled(Slider)`
  position: relative;
`;

const Card = styled.div`
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? 'black' : 'tomato')};
  max-width: 100%;
  aspect-ratio: 1 / 1;

  .active {
    background: black;
  }
`;

const options = {
  perPage: 3,
  gap: '2ch',
  padding: '0',
  focus: 'center',
  arrows: true,
};

const SlideSection = ({ className, theme }) => {
  return (
    <Section name='Slider' className={className}>
      <Slider options={options}>
        {user.portfolio.map((item, index) => (
          <Card>
            {item.name}
            {item.description}
          </Card>
        ))}
      </Slider>
    </Section>
  );
};

export default SlideSection;
