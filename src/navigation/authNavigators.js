import React, {useState, useEffect} from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";

import HomeScreen from "../screens/authScreens/HomeScreen";


import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";




const Stack = createStackNavigator();

export default function AuthStack(){
 
    return (
        
      <Stack.Navigator>
      
      
      <Stack.Screen
       name='SigninWelcomeScreen' 
       component={SigninWelcomeScreen} 
       options={{headerShown:false}}
       />
       <Stack.Screen
       name='SignInScreen' 
       component={SignInScreen} 
       options={{headerShown:false}}
       
       />
       <Stack.Screen 
        name ="SignUpScreen"
       component = {SignUpScreen}
       options ={{
       headerShown: false,
          }}
       />
        <Stack.Screen
       name='HomeScreen' 
       component={HomeScreen} 
       options={{headerShown:false}}
       
       />
       

                
      </Stack.Navigator>
    )
     
}