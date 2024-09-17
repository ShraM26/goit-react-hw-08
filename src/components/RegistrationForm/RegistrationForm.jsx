import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { apiRegister } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiRegister(values));
    resetForm();
  };

  // Схема валідації за допомогою Yup
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Ім’я повинно містити щонайменше 2 символи')
      .required("Ім'я обов'язкове"),
    email: Yup.string()
      .email('Неправильний формат електронної пошти')
      .required('Електронна пошта обов’язкова'),
    password: Yup.string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .required('Пароль обов’язковий'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;