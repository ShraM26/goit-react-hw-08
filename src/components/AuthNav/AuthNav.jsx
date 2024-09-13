import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">Register</NavLink>
    </div>
  );
};

export default AuthNav;