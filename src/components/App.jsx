import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {

  return (
    <div className="container">
      <ContactForm/>
      <div className="contacts">
        <h2>Contacts</h2>
        <Filter/>
        <ContactList
        />
      </div>
    </div>
  );
};