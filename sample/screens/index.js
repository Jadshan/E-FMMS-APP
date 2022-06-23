
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./Login"
import HomeScreen from "./Home"
import SignUpScreen from "./Home"

import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export default function Index() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)



  auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });



  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

