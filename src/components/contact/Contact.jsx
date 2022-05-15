import React from 'react';
import styled from 'styled-components';
import {
  Card,
  Heading,
  Intro,
  SubTitle,
  TitleLight,
  Wrapper,
} from '../../assets/styles/styles';
import Text from '../form/Text';
import Input from '../form/Input';
import Button from '../helper/Button';
import Section from '../helper/Section';
import ContactList from './ContactList';

const Container = styled(Section)``;
const Content = styled.div`
  /* grid-column: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  /* grid-template-areas: 'intro intro' 'contact form'; */
  /* display: flex; */
  /* gap: 4ch; */
  ${Intro} {
    /* grid-column: 1/2; */
  }
  > div {
    display: flex;
    gap: 2rem;
  }
  ${Card} {
    ul {
      display: flex;
      flex-direction: column;
      gap: 1ch;
    }
    &:before {
      all: unset;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;

  gap: 2ch;
`;

const Contact = () => {
  return (
    <Container name='Contact'>
      <Content>
        <Intro>
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa
        </Intro>
        <div>
          <div>
            <SubTitle>Entre em contato</SubTitle>
            <Card>
              <ContactList />
            </Card>
          </div>
          <div>
            <SubTitle>Entre em contato</SubTitle>
            <Form>
              <Text label='Name' name='email' type='text' />
              <Text label='Email' name='email' type='text' />
              <Text label='Mensagem' name='mensagem' type='text-area' />
              <Button>Send message</Button>
            </Form>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Contact;
