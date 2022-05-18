import React from 'react';
import styled from 'styled-components';
import { Description, Title, Wrapper } from '../../assets/styles/styles';
import themes from '../../assets/styles/themes';
import { user } from '../../user';
import IconList from '../helper/IconList';

const data = [
  {
    name: '',
    icon: 'bx bx-envelope',
    href: `mailto:${user.contact.email}`,
  },
  {
    name: '',
    icon: 'bx bxl-whatsapp',
    href: `https://wa.me/+55${user.contact.phone
      .replace(' ', '')
      .replace('(', '')
      .replace(')', '')
      .replace('-', '')}`,
  },
  {
    name: '',
    icon: 'bx bxl-linkedin-square',
    href: `https://www.linkedin.com/in/${user.contact.linkedin}`,
  },
  {
    name: '',
    icon: 'bx bxl-github',
    href: `https://github.com/${user.contact.github}`,
  },
];

const Container = styled(Wrapper)`
  height: 6vh;

  background-color: ${themes.dark.card};
  color: white;
  * {
  }
`;

const Content = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
  }
  a {
    color: white;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Content>
        <Description>Vinícius. Alguns direitos reservados</Description>
        <div>
          <IconList list={data} />
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
