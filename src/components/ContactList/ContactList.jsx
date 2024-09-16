import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => (
  <div className={styles.contactList}>
    {contacts.map(contact => (
      <Contact key={contact.id} contact={contact} onDelete={onDelete} />
    ))}
  </div>
);

export default ContactList;