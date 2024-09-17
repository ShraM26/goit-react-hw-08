import { useDispatch } from 'react-redux';
import { setFilterValue } from '../../redux/filters/slice'; // Импортируйте setFilterValue из слайса
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilterValue(e.target.value)); // Обновляем значение фильтра
  };

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search contacts..."
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;