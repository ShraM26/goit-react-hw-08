import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { apiLogin } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(apiLogin(values));
    resetForm();
  };

  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Неправильний формат електронної пошти')
      .required('Електронна пошта обов’язкова'),
    password: Yup.string()
      .min(8, 'Пароль повинен містити щонайменше 8 символів')
      .required('Пароль обов’язковий'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
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
        <button type="submit"className={styles.btnLogin}>Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;