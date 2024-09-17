import { useSelector, useDispatch } from 'react-redux';
import {selectUserContacts } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors';
import {apiDeleteContact } from '../../redux/contacts/operations'; 
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectUserContacts); 
  const filterValue = useSelector(selectFilter); 

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  
  const handleDelete = (contactId) => {
    dispatch(apiDeleteContact(contactId));
  };

  return (
    <div className={styles.contactList}>
      {filteredContacts.map(contact => (
        <Contact 
          key={contact.id} 
          contact={contact} 
          onDelete={() => handleDelete(contact.id)} 
        />
      ))}
    </div>
  );
};

export default ContactList;