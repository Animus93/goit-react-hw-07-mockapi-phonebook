import { useState } from 'react';
import { useAddContactMutation, useGetContactsQuery } from 'redux/phonebookApi';

export const ContactForm = () => {
  const phonebook = useGetContactsQuery();
  const [newContact, setNewContact] = useState({ name: '', number: '' });
  const [addContact] = useAddContactMutation();

  const handleAddContact = async () => {
    if (newContact) {
      await addContact({
        name: newContact.name,
        number: newContact.number,
      }).unwrap();
    }
    setNewContact({});
  };

  const chekData = event => {
    event.preventDefault();
    phonebook.data.find(
      contact =>
        contact.name.toLocaleLowerCase() ===
          newContact.name.toLocaleLowerCase() ||
        contact.number === newContact.number
    )
      ? alert('Контакт с такими данными уже существует')
      : handleAddContact();
  };

  const onUpdateState = event => {
    const dataValue = event.currentTarget.value || '';
    const dataName = event.currentTarget.name || '';
    setNewContact(prev => ({ ...prev, [dataName]: dataValue }));
  };

  return (
    <form onSubmit={chekData}>
      <h2>Phoneboock</h2>
      <input
        placeholder="Name"
        onChange={onUpdateState}
        value={newContact.name || ''}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        placeholder="Phone number"
        onChange={onUpdateState}
        value={newContact.number || ''}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
