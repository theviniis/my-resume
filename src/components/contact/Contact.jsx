import React from 'react';
import Text from '../helper/form/Text';
import Button from '../helper/Button';
import Section from '../helper/Section';
import ContactList from './ContactList';

const Contact = ({ theme }) => {
  return (
    <Section name='Contact' theme={theme}>
      <div className='contact__content'>
        <p className='intro'>
          Estou disponível para novos projetos no momento. Entre em contato
          comigo e marcamos uma conversa
        </p>
        <div className='profile-content card'>
          <ContactList />
        </div>
        <div className='contact-content'>
          <form className='inputs' theme={theme}>
            <Text name='name' label='Name' type='text' />
            <Text name='email' label='Email' type='email' />
            <Text name='message' label='Message' type='text-area' />
            <Button className='btn'>Contact</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
