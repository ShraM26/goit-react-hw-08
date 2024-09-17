import styles from './Contact.module.css';
import { FiUser, FiPhone } from "react-icons/fi";


const Contact = ({ contact, onDelete }) => {
  return(
    <div className={styles.contact}>
      <div className={styles.info}>
      <p className={styles.text}><FiUser className={styles.iconU} /> {contact.name}</p>
      <p className={styles.text}><FiPhone className={styles.iconP} /> {contact.number}</p>
      </div>
    <button className={styles.deleteButton} onClick={() => onDelete(contact.id)}>Delete</button>
  </div>
);
}
export default Contact;