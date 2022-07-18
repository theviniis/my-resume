import React from 'react';
import { user } from '../../user';
import styled from 'styled-components';
import { Card, SubTitle, Title, TitleLight } from '../../assets/styles/styles';
import Icon from './Icon';

const Container = styled.div``;
const List = styled.ul``;
const Item = styled(Card)`
  ${TitleLight} {
    font-size: 1rem;
  }

  &,
  & div {
  }
  div {
  }
`;

const Content = styled.div``;

const EducationList = ({ theme }) => {
  return (
    <div className='education__intensive'>
      <Icon icon='bx bxs-book-alt education__icon' />

      <h3 className='title-color'>intensive courses</h3>
      <ul className='education__intensive__list'>
        {user.courses.map((cur, i) => (
          <li
            className='education__intensive__list__item card'
            key={`${cur.course}${i}`}
          >
            <h2 className='title'>{cur.course}</h2>
            <div>
              <span className='education__intensive__list__item__school'>
                {cur.school}
              </span>
              <p className='title-light'>{cur.hours} Hours</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationList;
