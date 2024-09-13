
import { Formik, Field, Form } from 'formik';
import styles from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ name: '', phone: '' }}
    onSubmit={(values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    }}
  >
    <Form className={styles.form}>
      <label>
        Name
        <Field type="text" name="name" required />
      </label>
      <label>
        Phone
        <Field type="tel" name="phone" required />
      </label>
      <button type="submit">Add Contact</button>
    </Form>
  </Formik>
);

export default ContactForm;