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
          <Field type="text" name="name" className={styles.input}/>
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
        <label>
          Email
          <Field type="email" name="email" className={styles.input}/>
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label>
          Password
          <Field type="password" name="password" className={styles.input}/>
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>
        <button type="submit" className={styles.btnRegister}>Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;