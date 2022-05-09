import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: ${({ color, theme }) => color || `${theme.primary}`};
  border: 0;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: inherit;
  font-weight: 400;
  outline: none;
  padding: 0.5em 0.76em;
  /* position: relative; */
  text-decoration: none;
  vertical-align: middle;
  border-radius: 0.5rem;
  color: white;
  text-transform: uppercase;
`;

const Button = ({ name, href, color }) => {
  if (href)
    return (
      <a href={href}>
        <Btn>{name}</Btn>
      </a>
    );

  return <Btn>{name}</Btn>;
};

export default Button;
