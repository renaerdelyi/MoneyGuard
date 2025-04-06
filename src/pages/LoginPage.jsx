import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import RegistrationForm from '../components/Forms/RegistrationForm';
import { loginSuccess } from '../redux/auth/authSlice';
import axios from 'axios';
import s from './LoginPage.module.css'

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (values) => {
    try {
      // 🔧 Curățăm datele în funcție de formular
      const payload = isLogin
        ? {
            email: values.email,
            password: values.password,
          }
        : {
            username: values.name, // 💡 transformăm `name` în `username` pentru API
            email: values.email,
            password: values.password,
          };

      const endpoint = isLogin
        ? 'https://wallet.b.goit.study/api/auth/sign-in'
        : 'https://wallet.b.goit.study/api/auth/sign-up';

      console.log('📦 Payload trimis:', payload);

      const response = await axios.post(endpoint, payload);

      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(
        `${isLogin ? 'Autentificare' : 'Înregistrare'} eșuată! ` +
          (error.response?.data?.message || 'Încercați din nou.')
      );
    }
  };

  const handleSwitchToRegister = () => {
    navigate('/register');
  };
  

  const handleSwitchToLogin = () => {
    setIsLogin(true);
    setErrorMessage('');
  };

  return (
    <div className={s.loginPage}>
      {errorMessage && (
        <div style={{ color: 'red', marginBottom: '1rem' }}>
          {errorMessage}
        </div>
      )}
  
      {isLogin ? (
        <LoginForm
          onSubmit={handleSubmit}
          onSwitchToRegister={handleSwitchToRegister}
        />
      ) : (
        <RegistrationForm
          onSubmit={handleSubmit}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
  
      {/* 🔵 Elipse decorative */}
      <div className={s.ellipse16}></div>
      <div className={s.ellipse18}></div>
      <div className={s.ellipse14}></div>
      <div className={s.ellipse17}></div>
      <div className={s.ellipse15}></div>
      <div className={s.ellipse19}></div>
    </div>
  );
};

export default LoginPage;
