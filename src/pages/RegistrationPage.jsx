import RegistrationForm from "../components/Forms/RegistrationForm";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Btn/Btn";
import styles from './RegistrationPage.module.css'

const RegistrationPage = () => {
  const navigate = useNavigate();

  const handleRegistrationSubmit = (values) => {
    console.log(values);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className={styles.registrationContainer}>
      <RegistrationForm onSubmit={handleRegistrationSubmit} />
      <Button onClick={handleLoginClick}>Login</Button>
    </div>
  );
};

export default RegistrationPage;
