import React from 'react';

const Date = ({ inicio, fim }) => {
  return (
    <span className='date'>
      {/* <Icon className='bx bx-calendar-alt'></Icon> */}
      {inicio}
      <span className='icon bx bxs-right-arrow-alt'></span>
      {/* <Icon className='bx bx-calendar-alt'></Icon> */}
      {fim}
    </span>
  );
};

export default Date;
