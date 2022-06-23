import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import SigninWelcomeScreen from "../screens/authScreens/SigninWelcomeScreen";
import HomeScreen from "../screens/authScreens/HomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import Register from '../screens/authScreens/Register';
import Guest from '../Guest/Navigation';
import LoginScreen from '../Guest/screens/LoginScreen';
import SignupScreen from '../Guest/screens/SignupScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




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
        name="Guest"
        component={LoginScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={({navigation}) => ({
          title: '',
          headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
          },
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <FontAwesome.Button 
                name="long-arrow-left"
                size={25}
                backgroundColor="#f9fafd"
                color="#333"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          ),
        })}
      />

     

        <Stack.Screen
       name='Register' 
       component={Register} 
       options={{headerShown:false}}
       
       />
       
        <Stack.Screen
       name='HomeScreen' 
       component={HomeScreen} 
       options={{headerShown:false}}
       
       />
       

                
      </Stack.Navigator>
    )
     
}