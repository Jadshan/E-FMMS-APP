import React,{useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigators';
import { AppStack } from './appStack';
import { SignInContext } from '../contexts/authContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function  RootNavigator (){
  const {signedIn} = useContext(SignInContext)
  return (
    <NavigationContainer>
    
     {signedIn.userToken === null  ?  <AuthStack />: <AppStack />}
  </NavigationContainer>
  ) 
}

{/*
const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;
useEffect(() => {
  AsyncStorage.getItem('alreadyLaunched').then((value) => {
    if (value == null) {
      AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
      setIsFirstLaunch(true);
    } else {
      setIsFirstLaunch(false);
    }
  }); 
}, []);
if (isFirstLaunch === null) {
  return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
} else if (isFirstLaunch == true) {
  routeName = 'OnboardingScreen';
} else {
  routeName = 'SigninWelcomeScreen';
}
*/}