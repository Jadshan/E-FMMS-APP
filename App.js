import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {  StatusBar,StyleSheet,View,} from 'react-native';
import { colors } from './src/global/Styles';
import RootNavigator from './src/navigation/RootNavigator';
import { SignInContextProvider } from './src/contexts/authContext';
import Guest from './src/Guest/Navigation';
import Index from './src/navigation';
//import Index from './sample/screens/index';






export default function App  () {
  return (
    <SignInContextProvider>
    <View style ={styles.container}>
    <StatusBar 
      barStyle= "light-content"
      backgroundColor={colors.buttons}
    />
     <Guest />
   </View>
   </SignInContextProvider>
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white"
    
  }
})