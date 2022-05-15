import React from 'react';
import styled from 'styled-components';
import { global } from '../../assets/styles/global';

const Label = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.subTitle};
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
`;
const FocusBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.subTitle};
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
`;
const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 2rem 1rem 1rem 1rem;
  height: 62px;
  font-size: 1rem;
  font-weight: 400;
  background: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.fcText};
  /* border-radius: ${global.borderRadious}rem; */
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.15s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.04);
    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.5);
  }

  &:not(:placeholder-shown) {
    + ${Label} {
      color: rgba(0, 0, 0, 0.5);
      transform: translate3d(0, -10px, 0) scale(0.8);
    }
  }

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    outline: none;
    box-shadow: inset 0 -2px 0 ${({ theme }) => theme.primary};
    + ${Label} {
      color: ${({ theme }) => theme.primary};
      transform: translate3d(0, -1rem, 0) scale(0.9);
    }
    + ${FocusBg} {
      transform: scaleX(1);
      transition: all 0.1s ease;
    }
  }
`;

const Container = styled.label`
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
`;

const TextArea = styled(Container)`
  ${Label} {
    top: 1.5rem;
  }
  ${Input} {
    height: 180px;

    &:not(:placeholder-shown) {
      + ${Label} {
        transform: translate3d(0, -10px, 0) scale(0.8);
      }
    }
    &:focus {
      + ${Label} {
        transform: translate3d(0, -16px, 0) scale(0.9);
      }
    }
  }
`;

const Text = ({ name, label, type }) => {
  if (type === 'text' || type === 'email')
    return (
      <Container htmlFor={name}>
        <Input type='text' name={name} id={name} />
        <Label>{label}</Label>
        <FocusBg></FocusBg>
      </Container>
    );
  if (type === 'textarea' || type === 'text-area')
    return (
      <TextArea>
        <Input as='textarea' type='text' name={name} id={name} />
        <Label>{label}</Label>
        <FocusBg></FocusBg>
      </TextArea>
    );
};

export default Text;
