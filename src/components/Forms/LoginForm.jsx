import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Btn/Btn";
import styles from "./LoginForm.module.css";
import logo from "../Icon/logo.svg";
import emailIcon from "../Icon/email.svg";
import lockIcon from "../Icon/lock.svg";

const LoginForm = ({ onSubmit, onSwitchToRegister }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo Money Guard" className={styles.logo} />
          <h2 className={styles.title}>Money Guard</h2>
        </div>

        <div className={styles.inputContainer}>
          <img src={emailIcon} alt="Email Icon" className={styles.icon} />
          <Field
            className={styles.input}
            type="email"
            name="email"
            placeholder="E-mail"
           autoComplete="username"
          />
          <ErrorMessage name="email" component="div" />
        </div>
        <div className={styles.inputContainer}>
          <img src={lockIcon} alt="Lock Icon" className={styles.icon} />
          <Field
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
          />
          <ErrorMessage name="password" component="div" />
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" variant="primary">
            LOG IN
          </Button>

          <Button
            type="button"
            onClick={onSwitchToRegister}
            variant="secondary"
          >
            REGISTER
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
