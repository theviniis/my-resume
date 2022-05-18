import React from 'react';

const Section = ({ name, children, theme }) => {
  let lowerName = name.toLowerCase();
  return (
    <section className={`wrapper theme-${theme}`} id={lowerName}>
      <div className={`${lowerName} content`}>
        {name ? <h2 className='heading'>{name}</h2> : null}
        {children}
      </div>
    </section>
  );
};

export default Section;
