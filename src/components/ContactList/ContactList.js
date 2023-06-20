import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactSlice';
import { selectContacts } from '../../redux/contacts/contact-selectors';
import { selectFilter } from '../../redux/filter/filter-selectors';
import toast from 'react-hot-toast';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul>
      {getVisibleContacts().map(({ name, id, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button type="button" onClick={() => {
              dispatch(deleteContact(id));
              toast.success(`Contact with name "${name}" is deleted`);
            }}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};