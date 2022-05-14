import React, { useRef } from 'react';
import styled from 'styled-components';
import { global } from '../../../styles/global';
import Slide from './Slide';
// const Slide = React.lazy(() => import('./Slide'));

const Container = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* overflow: hidden; */
  overflow-x: scroll;

  &::-webkit-scrollbar {
    /* display: none; */
  }
`;
const List = styled.ul`
  display: flex;
  /* grid-template-columns: repeat(${(props) => props.options.perPage}, 1fr); */
  /* grid-template-rows: 1fr; */
  /* flex-shrink: 0; */
  gap: ${({ options }) => (options ? options.gap : null)};
  padding: ${({ options }) => (options ? options.padding : null)};
`;

const Controls = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  position: absolute;
  top: 50%;
  background: transparent;
  z-index: 10;
  width: 100px;
  span {
    background: blue;
    padding: 0.75em 1em;
    border-radius: ${global.borderRadious}rem;
    cursor: pointer;
    color: white;
  }
`;

const Prev = styled.span``;
const Next = styled.span``;

const Slider = ({ children, index, options, className }) => {
  const [current, setCurrent] = React.useState(0);
  const container = useRef(null);
  const length = children.length - 1;

  let slideWidth = null;
  React.useEffect(() => {
    let slideWidth = container.current.offsetWidth / 3 - parseInt(options.gap);
    console.log(slideWidth);
    console.log();
  }, []);

  // const center = container.current.offsetWidth / 2;

  // const testanto = container.current.offsetWidth;

  const controls = {
    pevSlide: function pevSlide(e) {
      e.preventDefault();
      console.log(container.current.offsetWidth);
      setCurrent(current === 0 ? 0 : current - 1);
      container.current.scrollLeft -= container.current.offsetWidth / 3;
    },
    nextSlide: function nextSlide(e) {
      e.preventDefault();
      console.log(container.current.offsetWidth);
      setCurrent(current === length ? length : current + 1);
      container.current.scrollLeft += container.current.offsetWidth / 3;
    },
    center: function center(e) {
      container.current.scrollLeft = container.current.offsetWidth / 2;
    },
  };

  return (
    <>
      <Container className={className} ref={container}>
        <List options={options}>
          {children.map((item, index) => (
            <Slide
              item={item}
              index={index}
              current={current}
              setCurrent={setCurrent}
              // ref={item}
              slideWidth={slideWidth}
            />
          ))}
        </List>
      </Container>
      {options.arrows ? (
        <Controls perPage={options.perPage}>
          <Prev onClick={controls.pevSlide}>Prev</Prev>
          <Next onClick={controls.nextSlide}>Next</Next>
          <Next onClick={controls.center}>center</Next>
        </Controls>
      ) : null}
    </>
  );
};

export default Slider;
