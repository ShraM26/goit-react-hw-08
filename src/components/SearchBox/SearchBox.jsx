import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";
import { useState } from "react";

export const SearchBox = () => {
  const [filled, setFilled] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const searchName = evt.target.value;
    searchName ? setFilled(true) : setFilled(false);
    dispatch(changeFilter(searchName));
  };

  return (
    <form className={css.form}>
      <div className={css.fieldWrapper}>
        <label className={filled ? css.inpFilled : ""}>
          Find contact by name:
        </label>
        <input type="text" onChange={handleChange} />
      </div>
    </form>
  );
};

export default SearchBox;

