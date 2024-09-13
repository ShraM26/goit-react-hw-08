
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.css';

const RegistrationPage = () => (
  <div className={styles.container}>
    <h1>Register</h1>
    <RegistrationForm />
  </div>
);

export default RegistrationPage;