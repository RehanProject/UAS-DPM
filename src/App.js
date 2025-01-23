import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './router'; // Impor AppNavigator dari router/index.js

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
