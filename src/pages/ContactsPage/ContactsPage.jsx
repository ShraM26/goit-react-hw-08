import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact, searchContacts, addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchContacts(searchQuery));
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch, searchQuery]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleSearch = query => {
    setSearchQuery(query);
  };

  return (
    <div className={styles.container}>
      <ContactForm onSubmit={values => dispatch(addContact(values))} />
      <SearchBox onSearch={handleSearch} />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
};

export default ContactsPage;