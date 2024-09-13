
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => (
  <div className={styles.contact}>
    <p>{contact.name}: {contact.phone}</p>
    <button onClick={() => onDelete(contact.id)}>Delete</button>
  </div>
);

export default Contact;