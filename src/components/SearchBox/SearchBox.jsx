import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filters/slice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
     <div className={css.cntSeaech}>
      <p className={css.text}>Search by name</p>
      <input
        className={css.search}
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder='...'
      />
    </div>
  );
};

export default SearchBox;

