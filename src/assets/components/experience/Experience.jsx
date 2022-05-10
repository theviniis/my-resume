import React from 'react';
import styled from 'styled-components';
import { SectionIntro, Wrapper } from '../../styles/styles';
import user from '../../user';
import Section from '../helper/Section';
import Date from '../helper/Date';
import { Description } from '../../styles/styles';
import { global } from '../../styles/global';
import { Title } from '../../styles/styles';
import Badger from './Badger';

const Container = styled(Wrapper)`
  grid-column: 1 / -1;
  width: 100%;
  background-color: hsl(0, 0%, 7%);
  color: white;
`;

const Content = styled(Section)`
  grid-column: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 10ch;
  h2 {
    color: black;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2ch;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2ch;
  background-color: black;
  border-radius: ${global.borderRadious}rem;
  padding: 2ch;

  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 4px;
    height: 20px;
    top: 2ch;
    left: -4px;
    border-top-left-radius: 0.115rem;
    border-bottom-left-radius: 0.115rem;
    background-color: ${(props) => props.theme.primary};
  }

  ${Description} {
    color: #a3a3a3;
    font-size: 0.965rem;
    font-weight: 300;
  }

  > div {
    display: flex;
    flex-direction: column;
    /* gap: 2ch; */
    ${Title} {
      margin-block-end: 1.5ch;
      position: relative;
    }

    > span {
      margin-block-end: 0.5ch;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1ch;
  }
`;

const Experience = () => {
  return (
    <Container as='section'>
      <Content name='Experience'>
        <List>
          <SectionIntro>
            Desenvolvo pequenos projetos como o Bikcraft utilizando apenas{' '}
            <strong>CSS, JavaScript e HTML </strong>. Para aplicativos web como
            a rede social Dogs eu trabalhei no UX e UI Design do projeto.
          </SectionIntro>
          {user.experience.map(
            ({ job, company, startDate, endDate, description, skills }) => (
              <ListItem key={company}>
                <div>
                  <Title fontSize={global.normalFontSize}>{company}</Title>
                  <Date inicio={startDate} fim={endDate} />
                  <Description>{description}</Description>
                </div>
                <div>
                  <Title>{job}</Title>
                  <ul>
                    {skills.map((skill) => (
                      <Badger skill={skill} />
                    ))}
                  </ul>
                </div>
              </ListItem>
            )
          )}
        </List>
      </Content>
    </Container>
  );
};

export default Experience;
