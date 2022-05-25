import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  gap: ${({ gap }) => (gap ? gap : null)};
`;

const Item = styled.li`
  flex-shrink: 0;
  // border: 2px solid blue;
  /* width: 100%; */
  width: ${({ width, gap }) =>
    width ? `calc(100% / ${width} - ${gap})` : '100%'};
  height: 100%;
  transition: 300ms ease;
  transform: ${({ offSetX }) => `translateX(${offSetX * -50}%)`};
  /* pointer-events: none; */
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Slider = ({ children, options }) => {
  const [x, setX] = useState(0);
  const slide = useRef(null);

  // const [active, setActive] = useState();

  const goPrev = (e) => {
    e.preventDefault();
    x === 0 ? setX(0) : setX(x + 1);
  };

  const goNext = (e) => {
    e.preventDefault();
    // x === -1 * children.length + 1 ? setX(x) : setX(x - 1);
    // console.log(slide.offsetWidth);
    // setX(slide.offsetWidth);
    console.log(slide);
  };

  const onDrag = (e) => {
    e.preventDefault();
    setX(e.clientX / 300);
  };
  const onDragEnd = (e) => {
    e.preventDefault();
    setX(e.clientX / 300);
    console.log(slide.offsetWidth);
  };

  // console.log(slide);

  return (
    <List
      className='slider'
      gap={options.gap}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      dragOffSet={options.dragOffset}
    >
      {children.map((item, index) => (
        <Item
          key={index}
          offSetX={x}
          width={options.perPage}
          gap={options.gap}
          ref={slide}
        >
          {item}
        </Item>
      ))}
      <Buttons className='buttons'>
        <button className='prev' onClick={goPrev}>
          Prev
        </button>
        <button className='next' onClick={goNext}>
          Next
        </button>
      </Buttons>
    </List>
  );
};

export default Slider;
