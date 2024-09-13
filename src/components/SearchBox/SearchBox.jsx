
import styles from './SearchBox.module.css';

const SearchBox = ({ onSearch }) => {
  const handleChange = e => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;
