import React, { useState } from 'react';

const Slider = ({ children }) => {
  const [x, setX] = useState(0);
  // const [active, setActive] = useState();

  const goPrev = (e) => {
    e.preventDefault();
    x === 0 ? setX(0) : setX(x + 1);
  };

  const goNext = (e) => {
    e.preventDefault();
    x === -1 * children.length + 1 ? setX(x) : setX(x - 1);
  };

  return (
    <ul className='slider'>
      {children.map((item, index) => (
        <li
          key={index}
          className={`slide ${index === -x ? 'is-active' : 'hide'}`}
          style={{ transform: `translateX(${x * 100}%)` }}
        >
          {item}
        </li>
      ))}
      <div className='buttons'>
        <button className='prev' onClick={goPrev}>
          Prev
        </button>
        <button className='next' onClick={goNext}>
          Next
        </button>
      </div>
    </ul>
  );
};

export default Slider;
