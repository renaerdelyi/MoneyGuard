import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Btn/Btn';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bine ai venit, {user?.name || 'Utilizator'}!</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default DashboardPage;
