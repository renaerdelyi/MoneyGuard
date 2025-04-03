
import React, { Suspense, lazy, useEffect } from 'react'; 
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../Routes/PrivateRoute'; 
import { RestrictedRoute } from '../Routes/RestrictedRoute'; 
import { SpinnerLoader } from './Spinner/Spinner'; 
import ErrorBoundary from '../ErrorBoundary'; 
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage')); 





export const App = () => {
 

  
  return (
    <ErrorBoundary> {/* Probabil vrei un ErrorBoundary aici */}
      <Suspense fallback={<SpinnerLoader />}> {/* Folosește Suspense pt. lazy loading */}
        <Routes>
          {/* Rută publică principală - redirecționează spre login sau dashboard */}
          <Route path="/" element={
            
             <PrivateRoute component={<DashboardPage />} redirectTo="/login" />
          } />

          {/* Rute restricționate (nu sunt accesibile dacă ești logat) */}
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} redirectTo="/" />} // Folosește RestrictedRoute corect
          />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegistrationPage />} redirectTo="/" />} // Folosește RestrictedRoute corect
          />

          {/* Rute private (accesibile doar dacă ești logat) */}
          {/* DashboardPage acționează ca layout și va folosi <Outlet> pentru a randa /home, /statistics etc. */}
          <Route
            path="/dashboard" 
            element={<PrivateRoute component={<DashboardPage />} redirectTo="/login" />} 
          >
              {/* Definește aici ce se randează ÎN <Outlet /> din DashboardPage */}
              {/* Probabil vrei ca /dashboard să redirecteze spre /dashboard/home */}
              <Route index element={<Navigate to="/dashboard/home" replace />} />
              <Route path="home" element={<div>Home Content Placeholder</div>} /> {/* TODO: Înlocuiește cu componenta Home */}
              <Route path="statistics" element={<div>Statistics Content Placeholder</div>} /> {/* TODO: Înlocuiește cu componenta Statistics */}
              {/* Adaugă alte rute imbricate aici (ex: currency) */}
              {/* <Route path="currency" element={<Currency />} /> */}
          </Route>

          {/* Catch-all pentru rute inexistente */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Suspense>
      {/* ToastContainer poate fi pus aici dacă folosești notificări globale */}
      {/* <ToastContainer autoClose={3000} theme="colored" /> */}
    </ErrorBoundary>
  );
};

