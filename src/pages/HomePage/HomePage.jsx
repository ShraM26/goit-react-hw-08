import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Contacts App!</h1>
      <p>Please log in or register to manage your contacts.</p>
    </div>
  );
};

export default HomePage;