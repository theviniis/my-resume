import React from 'react';
import styled from 'styled-components';
import { Card, Description, Title } from '../../../assets/styles/styles';
import Badger from '../../helper/Badger';
import Date from '../../helper/Date';

const Company = styled.div`
  > span {
    margin-bottom: 0.5ch;
  }
`;
const Job = styled.div`
  ul {
  }
`;

const ExperienceItem = ({
  job,
  company,
  startDate,
  endDate,
  description,
  skills,
  theme,
}) => {
  return (
    <li key={company} className='experience__list__item card'>
      <div className='experience__list__item__main'>
        <h3 className='experience__list__item__main-title'>{company}</h3>
        <Date inicio={startDate} fim={endDate} />
        <p className='experience__list__item__main-description'>
          {description}
        </p>
      </div>
      <div className='experience__list__item__skills'>
        <h3 className='experience__list__item__skills-title'>{job}</h3>
        <ul className='experience__list__item__skills__list'>
          {skills.map((skill, index) => (
            <Badger name={skill} key={`${skills}${index}`} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ExperienceItem;
