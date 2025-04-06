// ✅ RegistrationPage.jsx - curățat și complet funcțional
import RegistrationForm from "../components/Forms/RegistrationForm";
import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Btn/Btn";
import styles from './RegistrationPage.module.css';
import { useDispatch } from "react-redux";
import { register } from '../redux/Operations/operations';

const RegistrationPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegistrationSubmit = async (values, setNotification, setSubmitting) => {
    const { name, email, password } = values; // extragem doar câmpurile necesare

    const payload = {
      username: name,
      email,
      password,
    };
    console.log("🔎 Payload trimis:", payload); // 👈 Asta ne va arăta CE se trimite
    try {
      await dispatch(register(payload)).unwrap();
      setNotification({ message: "Înregistrare reușită! Te redirecționăm...", type: "success" });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (error) {
      setNotification({ message: error || "Eroare la înregistrare", type: "error" });
    } finally {
      setSubmitting(false);
    }
    console.log("📦 Payload final:", {
      username: values.name,
      email: values.email,
      password: values.password,
    });
    
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