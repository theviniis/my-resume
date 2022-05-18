import React from 'react';
import { user } from '../../../user';
import ExperienceItem from './ExperienceItem';

const ExperienceList = ({ theme }) => {
  return (
    <ul className='experience__list'>
      <li className='intro'>
        Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{' '}
        <strong>CSS, JavaScript e HTML </strong>. Para aplicativos web como a
        rede social Dogs eu trabalhei no UX e UI Design do projeto.
      </li>
      {user.experience.map(
        ({ job, company, startDate, endDate, description, skills }) => (
          <ExperienceItem
            key={company}
            job={job}
            company={company}
            startDate={startDate}
            endDate={endDate}
            description={description}
            skills={skills}
          />
        )
      )}
    </ul>
  );
};

export default ExperienceList;
