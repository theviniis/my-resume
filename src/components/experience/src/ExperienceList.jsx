import React from 'react';
import styled from 'styled-components';
import { Intro } from '../../../assets/styles/styles';
import user from '../../../user';
import ExperienceItem from './ExperienceItem';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  > li + li {
    margin-block-start: 1rem;
  }
`;

const ExperienceList = ({ theme }) => {
  return (
    <List>
      <Intro as='li' theme={theme}>
        Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{' '}
        <strong>CSS, JavaScript e HTML </strong>. Para aplicativos web como a
        rede social Dogs eu trabalhei no UX e UI Design do projeto.
      </Intro>
      {user.experience.map(
        ({ job, company, startDate, endDate, description, skills }) => (
          <ExperienceItem
            key={company}
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
