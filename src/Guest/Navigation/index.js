import React from 'react';
import { AuthProvider } from './AuthProvider';
import Routes from './routes';

const Guest = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default Guest;