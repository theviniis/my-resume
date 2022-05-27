import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const List = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  width: calc(100% - 2ch);
`;

const Item = styled.li`
  flex-shrink: 0;
  flex-basis: ${({ slideWidth }) => slideWidth};
  transition: 300ms ease;
  transform: ${({ offSetX }) => `translateX(-${offSetX}px)`};
  * {
    pointer-events: none;
  }
  & + & {
    padding-inline-start: ${({ gap }) => gap};
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: none;
`;

const Slider = ({ children, options }) => {
  const [x, setX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(null);

  const slider = useRef(null);

  useEffect(() => {
    setSlideWidth(
      `calc((${slider.current.offsetWidth}px - (${options.perPage - 1} * ${
        options.gap
      })) / ${options.perPage})`

      // calc((1226px - (2 * 2rem)) / 3);
    );
  }, [slideWidth, options]);

  const goPrev = (e) => {
    e.preventDefault();
    x === 0 ? setX(0) : setX(x - 1);
  };

  const goNext = (e) => {
    e.preventDefault();
    x === children.length - 1 ? setX(x) : setX(x + 1);
  };

  const onDrag = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (e.screenX === 0) {
      return;
    }
    console.log(e);
    setX(e.clientX * options.dragoffSet);
  };

  function handleMove(e) {
    return console.log(e);
  }

  return (
    <List
      className='slider'
      gap={options.gap}
      dragOffSet={options.dragOffset}
      ref={slider}
      onDrag={onDrag}
      onMouseMove={handleMove}
    >
      {children.map((item, index) => (
        <Item
          key={index}
          offSetX={x}
          gap={options.gap}
          slideWidth={slideWidth}
          // onClick={() => setX(index)}
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
