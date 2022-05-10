import React from 'react';
import styled from 'styled-components';
import Languague from '../../img/Languague';

const StyledIcon = styled.span`
  position: absolute;
  left: -1.5ch;
  top: -2px;
  font-size: 1.125rem;
  color: ${(props) => props.theme.primary};
`;
const Icon = ({ icon, className }) => {
  if (icon === 'language') {
    return <Languague />;
  } else if (icon === 'language') {
    return <Languague />;
  } else if (icon === 'language') {
    return <Languague />;
  } else {
    return <StyledIcon className={icon}></StyledIcon>;
  }
};

export default Icon;
