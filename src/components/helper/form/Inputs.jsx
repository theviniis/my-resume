import React from 'react';
import Text from './Text';

const Inputs = ({ theme }) => {
  return (
    <form className='inputs' theme={theme}>
      <Text name='name' label='Name' type='text' />
      <Text name='email' label='Email' type='email' />
      <Text name='message' label='Message' type='text-area' />
      <button className='btn'>Contact</button>
    </form>
  );
};

export default Inputs;
