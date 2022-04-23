import React from 'react';
import { global } from '../../../styles/global';
import user from '../../../user';
import Section from '../../helper/Section';
import styled from 'styled-components';
import {
  Description,
  SmallSubTitle as Job,
  ColorH3 as Company,
} from '../../../styles/styles';
import Date from '../../helper/Date';

const Experience = styled.div`
  margin-bottom: 1rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  margin-bottom: 1rem;
`;

const Experiences = () => {
  return (
    <Section title='Experiência'>
      {user.experience.map(
        ({ job, company, startDate, endDate, description }) => (
          <Experience key={company} className='card'>
            <Header>
              <Company fontSize={global.normalFontSize}>{company}</Company>
              <Job as='h4'>{job}</Job>
              <Date inicio={startDate} fim={endDate} />
            </Header>
            <Description>{description}</Description>
          </Experience>
        )
      )}
    </Section>
  );
};

export default Experiences;
