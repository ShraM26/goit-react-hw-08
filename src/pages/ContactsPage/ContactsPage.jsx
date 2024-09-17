import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import { apiGetAllContacts, apiDeleteContact, apiAddNewContact } from '../../redux/contacts/operations';
import { selectUserContacts } from '../../redux/contacts/selectors';
import { setFilterValue } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';
import styles from './ContactsPage.module.css';
const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(apiGetAllContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(apiAddNewContact(contact));
  };

  const handleDeleteContact = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };

  const handleSearch = (term) => {
    if (term.trim() === "") {
      dispatch(setFilterValue(""));
    } else {
      dispatch(setFilterValue(term));
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
     <div className={styles.container}>
      <h1 className={styles.header}>Contacts</h1>
      <div className={styles.formWrapper}>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox onSearch={handleSearch} />
      </div>
      <div className={styles.contactListWrapper}>
        <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} />
      </div>
    </div>
  );
};

export default ContactsPage;