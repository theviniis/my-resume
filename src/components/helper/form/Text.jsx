import React from 'react';

const Text = ({ name, label, type, setName }) => {
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  if (type === 'text' || type === 'email')
    return (
      <label htmlFor={name} className='inp'>
        <input
          type={type}
          id={name}
          placeholder='&nbsp;'
          value={value}
          onChange={handleChange}
        />
        <span className='label'>{label}</span>
      </label>
    );

  if (type === 'textarea' || type === 'text-area')
    return (
      <label htmlFor={name} className='inp'>
        <textarea
          type={type}
          id={name}
          placeholder='&nbsp;'
          value={value}
          onChange={handleChange}
        ></textarea>
        <span className='label'>{label}</span>
      </label>
    );
};

export default Text;
