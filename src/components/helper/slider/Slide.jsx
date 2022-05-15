import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  /* width: 100%; */
  /* width: 280px; */
  flex-shrink: 0;
  width: calc();
  max-width: ${({ slideWidth }) => slideWidth}px;
  /* pointer-events: none; */
  > * {
    /* user-select: none; */
    background-color: ${({ active }) =>
      active ? 'black' : 'tomato'} !important;
  }
`;

const Slide = ({ index, current, setCurrent, item, slideWidth }) => {
  const active = index === current ? true : false;
  console.log(slideWidth);
  function handleClick() {
    console.log(`Current: ${current} Index: ${index}`);
    setCurrent(index);
  }
  return (
    <Item
      active={active}
      onClick={handleClick}
      className={
        active ? `slide-${index} active` : `slide-${index} current-${current}`
      }
      slideWidth={slideWidth}
    >
      {item}
    </Item>
  );
};

export default Slide;
