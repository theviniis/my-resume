import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
  position: absolute;
  left: -2.7ch;
  top: -3px;
  width: 1.125rem;
  height: 1.125rem;
  color: ${(props) => props.theme.primary};
`;

const Languague = () => {
  return (
    <Icon
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M12.65 15.67C12.79 15.31 12.7 14.9 12.42 14.62L10.33 12.56L10.36 12.53C12.1 10.59 13.34 8.36 14.07 6H16.01C16.55 6 17 5.55 17 5.01V4.99C17 4.45 16.55 4 16.01 4H10V3C10 2.45 9.55 2 9 2C8.45 2 8 2.45 8 3V4H1.99C1.45 4 1 4.45 1 4.99C1 5.54 1.45 5.98 1.99 5.98H12.17C11.5 7.92 10.44 9.75 9 11.35C8.19 10.46 7.51 9.49 6.94 8.47C6.78 8.18 6.49 8 6.16 8C5.47 8 5.03 8.75 5.37 9.35C6 10.48 6.77 11.56 7.67 12.56L3.3 16.87C2.9 17.26 2.9 17.9 3.3 18.29C3.69 18.68 4.32 18.68 4.72 18.29L9 14L11.02 16.02C11.53 16.53 12.4 16.34 12.65 15.67V15.67ZM17.5 10C16.9 10 16.36 10.37 16.15 10.94L12.48 20.74C12.24 21.35 12.7 22 13.35 22C13.74 22 14.09 21.76 14.23 21.39L15.12 19H19.87L20.77 21.39C20.91 21.75 21.26 22 21.65 22C22.3 22 22.76 21.35 22.53 20.74L18.86 10.94C18.64 10.37 18.1 10 17.5 10V10ZM15.88 17L17.5 12.67L19.12 17H15.88V17Z'
        fill='url(#paint0_linear)'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear'
          x1='11.795'
          y1='2'
          x2='11.795'
          y2='22'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#219ebc'></stop>
          <stop offset='1' stopColor='#219ebc'></stop>
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default Languague;
