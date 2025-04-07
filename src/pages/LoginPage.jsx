import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import RegistrationForm from '../components/Forms/RegistrationForm';
import { loginSuccess } from '../redux/auth/authSlice';
import axios from 'axios';
import s from './LoginPage.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = async (values) => {
    try {
      // :wrench: Curățăm datele în funcție de formular
      const payload = isLogin
        ? {
            email: values.email,
            password: values.password,
          }
        : {
            username: values.name, // :bulb: transformăm `name` în `username` pentru API
            email: values.email,
            password: values.password,
          };
      const endpoint = isLogin
        ? 'https://wallet.b.goit.study/api/auth/sign-in'
        : 'https://wallet.b.goit.study/api/auth/sign-up';
      console.log(':package: Payload trimis:', payload);
      const response = await axios.post(endpoint, payload);
      toast.success(`${isLogin ? 'Autentificare' : 'Înregistrare'} reușită! :tada:`);
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      navigate('/dashboard');
    } catch (error) {
      toast.error(
        `${isLogin ? 'Autentificare' : 'Înregistrare'} eșuată! ${
          error.response?.data?.message || 'Încercați din nou.'
        }`
      );
    }
  };
  const handleSwitchToRegister = () => {
    navigate('/register');
  };
  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };
  return (
    <div className={s.loginPage}>
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
<ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
      
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