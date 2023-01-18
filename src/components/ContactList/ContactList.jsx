import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useGetContactsQuery,
} from 'redux/phonebookApi';

export const ContactList = () => {
  const { data = [], isLoading } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);
  if (isLoading) return <h1>Загрузка...</h1>;
  return data
    .filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    })
    .map(contact => {
      return (
        <li className="contact" key={contact.id}>
          {contact.name} {contact.number}
          <button
            data-index={contact.id}
            key={contact.id}
            onClick={e => deleteContact(e.currentTarget.dataset.index).unwrap()}
          >
            Delete
          </button>
        </li>
      );
    });
};
