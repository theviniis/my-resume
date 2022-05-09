import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;

  &:hover {
    .circle {
      width: 100%;
    }
    .arrow {
      background: #fff;
      transform: translate(1rem, 0);
    }
    .button-text {
      color: #fff;
    }
  }

  .arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  .arrow::before {
    position: absolute;
    content: '';
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }
`;

const Circle = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: ${(props) => props.theme.primary};
  border-radius: 1.625rem;
`;

const Icon = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
`;

const Text = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
`;

const HeroButton = ({ name, className }) => {
  return (
    <Button clasName={className}>
      <Circle className='circle' aria-hidden='true'>
        <Icon className='icon arrow'></Icon>
      </Circle>
      <Text className='button-text'>{name}</Text>
    </Button>
  );
};

export default HeroButton;
