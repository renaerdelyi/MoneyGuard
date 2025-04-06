// ✅ RegistrationForm.jsx - trimite corect valorile și validează
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PasswordStrengthBar from 'react-password-strength-bar';
import Button from '../UI/Btn/Btn';
import styles from './RegistrationForm.module.css';
import userIcon from '../Icon/user.svg';
import emailIcon from '../Icon/email.svg';
import lockIcon from '../Icon/lock.svg';
import logo from '../Icon/logo.svg';
import Notification from '../UI/Notification/Notification';

const RegistrationForm = ({ onSubmit, onSwitchToLogin }) => {
  const [password, setPassword] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Minim 2 caractere')
        .required('Numele este obligatoriu'),
      email: Yup.string().email('Email invalid').required('Email obligatoriu'),
      password: Yup.string()
        .min(6, 'Minim 6 caractere')
        .max(12, 'Maxim 12 caractere')
        .required('Parola obligatorie'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Parolele nu se potrivesc')
        .required('Confirmarea parolei este obligatorie'),
    }),
    onSubmit: (values, { setSubmitting }) => {
      onSubmit(values, setNotification, setSubmitting);
    },
  });

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    setPassword(password);
    formik.setFieldValue('password', password);
  };

  return (
    <div>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: '', type: '' })}
      />
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Money Guard" className={styles.logo} />
          <h2 className={styles.title}>Money Guard</h2>
        </div>

        <div className={styles.inputContainer}>
          <img src={userIcon} alt="User Icon" className={styles.icon} />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles.input}
            {...formik.getFieldProps('name')}
            autoComplete="name"
          />
        </div>

        <div className={styles.inputContainer}>
          <img src={emailIcon} alt="Email Icon" className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className={styles.input}
            {...formik.getFieldProps('email')}
            autoComplete="email"
          />
        </div>

        <div className={styles.inputContainer}>
          <img src={lockIcon} alt="Lock Icon" className={styles.icon} />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            onChange={handlePasswordChange}
            value={formik.values.password}
            autoComplete="new-password"
          />
        </div>

        <div className={styles.inputContainer}>
          <img src={lockIcon} alt="Lock Icon" className={styles.icon} />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={styles.input}
            {...formik.getFieldProps('confirmPassword')}
            autoComplete="new-password"
          />
        </div>

        <PasswordStrengthBar password={password} />

        <div className={styles.buttonContainer}>
          <Button type="submit" variant="primary">
            REGISTER
          </Button>
          <Button type="button" onClick={onSwitchToLogin} variant="secondary">
            LOG IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;