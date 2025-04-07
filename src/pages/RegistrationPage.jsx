import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../redux/Operations/operations';
import RegistrationForm from '../components/Forms/RegistrationForm';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistrationSubmit = async (
    values,
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
      toast.success('Înregistrare reușită! Te redirecționăm...');

      setTimeout(() => {
        navigate('/login'); 
      }, 2000);
    } catch (error) {
      toast.error(error?.message || 'Eroare la înregistrare');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.pageRegister}>
         <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <RegistrationForm
        onSubmit={handleRegistrationSubmit}
        onSwitchToLogin={() => navigate('/login')}
      />

      
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
