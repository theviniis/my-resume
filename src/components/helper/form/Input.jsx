import React, { Children } from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';
import { Title } from '../../assets/styles/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75ch;
  color: ${({ theme }) => theme.fcTitle};
  position: relative;
  input,
  textarea {
    font-size: 1rem;
    padding: 1rem 1rem 1rem 0.5rem;
    -webkit-appearance: none;
    display: block;
    background: hsl(0, 0%, 80%);
    border: none;
    /* border: 2px solid ${({ theme }) => theme.subTitle}; */
    /* border-radius: ${global.borderRadious}rem; */
  }
`;
const Label = styled(Title)`
  /* position: relative; */
  overflow: hidden;
  /* top: -20px; */
  /* left: 0px; */
  /* transform: scale(0.75); */
  text-transform: capitalize;
`;
const StyledInput = styled.input``;

const Input = ({
  label,
  type,
  name,
  error,
  onBlur,
  onChange,
  placeHolder,
  children,
}) => {
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    console.log(value);
    return setValue(e.target.value);
  };
  if (type === 'text' || type === 'email')
    return (
      <Wrapper>
        <Label htmlFor={name} as='label'>
          <StyledInput
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            placeHolder={placeHolder}
          />
          {label}
        </Label>
        {error && <p>{error}</p>}
      </Wrapper>
    );
  if (type === 'textarea' || type === 'text-area')
    return (
      <Wrapper>
        <Label htmlFor={name}>{label}</Label>
        <textarea
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          onBlur={onBlur}
          placeHolder={placeHolder}
        >
          {children}
        </textarea>
        {error && <p>{error}</p>}
      </Wrapper>
    );
};

export default Input;
