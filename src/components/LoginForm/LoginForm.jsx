import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import css from "./LoginForm.module.css";
import { ValidSchemaLogin } from "../helper";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, getOAuthURL } from "../../redux/auth/operations";
import Glogo from "../../assets/google.png";
import { selectOAuthURL } from "../../redux/auth/selectors";

const navigate = (url) => {
  window.location.href = url;
};

export const LoginForm = () => {
  const [filledEmail, setFilledEmail] = useState(false);
  const [filledPass, setFilledPass] = useState(false);
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();
  const OAuthURL = useSelector(selectOAuthURL);

  const handleChange = (evt) => {
    const target = evt.currentTarget;
    target.email.value ? setFilledEmail(true) : setFilledEmail(false);
    target.password.value ? setFilledPass(true) : setFilledPass(false);
  };

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  const handleOAuth = async () => {
    dispatch(getOAuthURL());
    navigate(OAuthURL);
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={ValidSchemaLogin}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onChange={handleChange}>
        <h2>Login</h2>
        <div className={css.fieldWrapper}>
          <label className={filledEmail ? css.inpFilled : ""} htmlFor={emailId}>
            Email:
          </label>
          <Field name="email" id={emailId} />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>
        <div className={css.fieldWrapper}>
          <label
            className={filledPass ? css.inpFilled : ""}
            htmlFor={passwordId}
          >
            Password:
          </label>
          <Field name="password" id={passwordId} type="password" />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>
        <button className={css.btn} type="submit">
          Login
        </button>
        <button className={css.btnGoogle} type="button" onClick={handleOAuth}>
          <img src={Glogo} />
          Continue with Google
        </button>
        <p>
          or <NavLink to="/register">Register</NavLink>
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;