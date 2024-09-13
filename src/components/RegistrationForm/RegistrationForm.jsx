import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import css from "./RegistrationForm.module.css";
import { ValidSchemaRegister } from "../helper";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export const RegisterForm = () => {
  const [filledName, setFilledName] = useState(false);
  const [filledEmail, setFilledEmail] = useState(false);
  const [filledPass, setFilledPass] = useState(false);
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleChange = (evt) => {
    const target = evt.currentTarget;
    target.name.value ? setFilledName(true) : setFilledName(false);
    target.email.value ? setFilledEmail(true) : setFilledEmail(false);
    target.password.value ? setFilledPass(true) : setFilledPass(false);
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={ValidSchemaRegister}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} onChange={handleChange}>
        <h2>Register, please</h2>
        <div className={css.fieldWrapper}>
          <label className={filledName ? css.inpFilled : ""} htmlFor={nameId}>
            Name:
          </label>
          <Field name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
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
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;