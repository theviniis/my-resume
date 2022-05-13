import React from 'react';
import styled from 'styled-components';
import { Intro } from '../../../styles/styles';
import user from '../../../user';
import ExperienceItem from './ExperienceItem';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2ch;
`;

const ExperienceList = ({ theme }) => {
  return (
    <List>
      <Intro as='li'>
        Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{' '}
        <strong>CSS, JavaScript e HTML </strong>. Para aplicativos web como a
        rede social Dogs eu trabalhei no UX e UI Design do projeto.
      </Intro>
      {user.experience.map(
        ({ job, company, startDate, endDate, description, skills }) => (
          <ExperienceItem
            theme={theme}
            job={job}
            company={company}
            startDate={startDate}
            endDate={endDate}
            description={description}
            skills={skills}
          />
        )
      )}
    </List>
  );
};

export default ExperienceList;
