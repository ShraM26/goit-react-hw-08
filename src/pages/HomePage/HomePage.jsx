import { Link } from 'react-router-dom';
import UserMenu from '../../components/UserMenu/UserMenu';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <UserMenu />
      <Link to="/contacts">Go to Contacts</Link>
    </div>
  );
};

export default HomePage;