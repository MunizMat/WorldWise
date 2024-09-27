import React from 'react';
import { MainDashboard } from '../src/pages/main-dashboard/MainDashboard';
import { useAuth } from '../src/contexts/AuthContext/AuthContext';
import { LoginPage } from '../src/pages/login/LoginPage';

export default function IndexPage() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <MainDashboard /> : <LoginPage />;
}
