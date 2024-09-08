import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerUser(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" placeholder="John Doe" />
          <ErrorMessage name="name" component="div" />
          
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" placeholder="example@example.com" />
          <ErrorMessage name="email" component="div" />
          
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" placeholder="******" />
          <ErrorMessage name="password" component="div" />
          
          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;