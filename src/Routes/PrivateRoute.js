import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { token, isLoggedIn, isRefreshing } = useAuth();
  const isRestricted = !isLoggedIn && !isRefreshing && !token;

  return isRestricted ? <Navigate to={'/login'} /> : children;
};
