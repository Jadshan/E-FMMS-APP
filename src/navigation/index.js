import React from 'react';
import { AuthProvider } from '../Guest/Navigation/AuthProvider';
import RootNavigator from './RootNavigator';


const Index = () => {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}

export default Index;