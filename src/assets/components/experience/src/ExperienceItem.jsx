import React from 'react';
import styled from 'styled-components';
import { Card, Description, Title } from '../../../styles/styles';
import Badger from '../../helper/Badger';
import Date from '../../helper/Date';

const Item = styled(Card)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2ch;

  ${Title} {
    margin-block-end: 1.5ch;
  }
  ${Description} {
    font-size: 0.965rem;
  }
`;

const Company = styled.div`
  > span {
    margin-bottom: 0.5ch;
    color: ${({ theme }) => theme.subTitle};
  }
`;
const Job = styled.div`
  ul {
    flex-wrap: wrap;
    display: flex;
    gap: 1ch;
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
    <Item as='li' key={company} theme={theme}>
      <Company theme={theme}>
        <Title fontSize={global.normalFontSize} theme={theme}>
          {company}
        </Title>
        <Date inicio={startDate} fim={endDate} theme={theme} />
        <Description>{description}</Description>
      </Company>
      <Job>
        <Title theme={theme}>{job}</Title>
        <ul>
          {skills.map((skill, index) => (
            <Badger name={skill} theme={theme} key={`${skills}${index}`} />
          ))}
        </ul>
      </Job>
    </Item>
  );
};

export default ExperienceItem;
