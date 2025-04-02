import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Forms/LoginForm";
import { loginSuccess } from "../redux/Auth/authSlice"
import axios from "axios";
import RegistrationForm from "../components/Forms/RegistrationForm";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        isLogin
          ? "https://wallet.b.goit.study/api/auth/sign-in"
          : "https://wallet.b.goit.study/api/auth/sign-up",
        values
      );
      dispatch(
        loginSuccess({ token: response.data.token, user: response.data.user })
      );
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        "Autentificare eșuată! " +
          (error.response?.data?.message || "Încercați din nou.")
      );
    }
  };

  const handleSwitchToRegister = () => {
    setIsLogin(false);
  };

  const handleSwitchToLogin = () => {
    setIsLogin(true);
  };
  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
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
