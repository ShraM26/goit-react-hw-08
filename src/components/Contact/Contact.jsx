import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return(
  <div className={styles.contact}>
    <p>{contact.name}: {contact.number}</p>
    <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
  </div>
);
}
export default Contact;