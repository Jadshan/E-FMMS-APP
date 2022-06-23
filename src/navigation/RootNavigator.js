import 'react-native-gesture-handler';
import React,{useContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigators';
import { AppStack } from './appStack';
import { SignInContext } from '../contexts/authContext';
import { initialValues } from '../screens/authScreens/SignUpScreen';
import { SignInContextProvider } from '../contexts/authContext';
import AsyncStorage from "@react-native-async-storage/async-storage";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import ApppStack from '../Guest/Navigation/AppStack';
export default function  RootNavigator (){
  const {signedIn} = useContext(SignInContext)
 /* const [loger, setLoger] = useState()
  const [logers, setLogers] = useState()
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
  useEffect(() => {
    firestore().collection("logers").doc(auth().currentUser.uid).get()
        .then(loger => {
            setLoger(loger.data())
        })
}, [])
useEffect(() => {
    if (loger)
        firestore().collection("logers").where("role", "==", (loger?.role === "user" ? "user" : "Guest"))
            .onSnapshot(logers => {
                if (!logers.empty) {
                    const LOGERS = []

                    logers.forEach(loger => {
                        LOGERS.push(loger.data())
                    })

                    setLogers(LOGERS)
                }
            })
}, [loger])*/
  return (
    <NavigationContainer>
 
     {signedIn.userToken === null  ?  <AuthStack />:/*(loger?.role === "user" ?          :<ApppStack />)*/<AppStack /> }
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