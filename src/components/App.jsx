import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { Toaster } from 'react-hot-toast';
export const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={true} />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter/>
      <ContactList />
    </div>
  );
};

