import React from 'react';
import styled from 'styled-components';

const data = [
  {
    question: 'Question 1',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos quo cum possimus velit molestiae officia fugiat hic, dolore nemo, porro soluta, quasi quae aspernatur magnam voluptatem vel maxime in.',
  },
  {
    question: 'Question 2',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos quo cum possimus velit molestiae officia fugiat hic, dolore nemo, porro soluta, quasi quae aspernatur magnam voluptatem vel maxime in.',
  },
  {
    question: 'Question 3',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quos quo cum possimus velit molestiae officia fugiat hic, dolore nemo, porro soluta, quasi quae aspernatur magnam voluptatem vel maxime in.',
  },
];

const Wrapper = styled.div`
  grid-column: 2;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const List = styled.ul`
  width: 500px;
`;

const Item = styled.div`
  padding: 10px 20px;
  background-color: hsl(0, 0%, 80%);
  margin-bottom: 1ch;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1ch;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div``;

const AccordionList = () => {
  const [active, setActive] = React.useState(null);

  const toggle = (i) => {
    if (active === i) {
      return setActive(null);
    }

    setActive(i);
  };

  return (
    <Wrapper>
      <List>
        {data.map((item, i) => (
          <Item onClick={() => toggle(i)}>
            <Title>
              <h2>{item.question}</h2>
              <span>{active === i ? '-' : '+'}</span>
            </Title>
            <Content>{item.answer}</Content>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default AccordionList;
