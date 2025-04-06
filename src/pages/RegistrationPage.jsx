import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/Operations/operations';
import RegistrationForm from '../components/Forms/RegistrationForm';
import { Toaster } from 'react-hot-toast';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistrationSubmit = async (
    values,
    setNotification,
    setSubmitting
  ) => {
    const { name, email, password } = values;

    const payload = {
      username: name,
      email,
      password,
    };

    try {
      await dispatch(register(payload)).unwrap();
      setNotification({
        message: 'Înregistrare reușită! Te redirecționăm...',
        type: 'success',
      });

      setTimeout(() => {
        navigate('/login'); // sau '/dashboard' dacă vrei direct acolo
      }, 2000);
    } catch (error) {
      setNotification({
        message: error || 'Eroare la înregistrare',
        type: 'error',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageRegister}>
      <Toaster />
      <RegistrationForm
        onSubmit={handleRegistrationSubmit}
        onSwitchToLogin={() => navigate('/login')}
      />

      {/* Fundal cu efecte */}
      <div className={styles.ellipse16}></div>
      <div className={styles.ellipse18}></div>
      <div className={styles.ellipse14}></div>
      <div className={styles.ellipse17}></div>
      <div className={styles.ellipse15}></div>
      <div className={styles.ellipse19}></div>
    </div>
  );
};

export default RegistrationPage;
