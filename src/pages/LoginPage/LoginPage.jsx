
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => (
  <div className={styles.container}>
    <h1>Login</h1>
    <LoginForm />
  </div>
);

export default LoginPage;
