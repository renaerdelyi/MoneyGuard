import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/Forms/LoginForm';
import RegistrationForm from '../components/Forms/RegistrationForm';
import { loginSuccess } from '../redux/auth/authSlice';
import axios from 'axios';

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
    setIsLogin(false);
    setErrorMessage('');
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
    setErrorMessage('');
  };

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
