import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <p>This is your Phonebook. </p>
      <p>
        Click here, to see your <NavLink to="/contacts">contacts</NavLink>
      </p>
    </div>
  );
};

export default HomePage;