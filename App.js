import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/router'; // Impor AppNavigator dari router/index.js

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
