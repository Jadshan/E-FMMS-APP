import { StyleSheet, Text, View,Image,Dimensions, TextInput, onPress, TouchableOpacity, Pressable,ScrollView} from 'react-native';
import React,{useState,useRef,useEffect,useContext} from 'react';
import { colors, parameters,title } from '../../global/Styles';
import { Icon, withTheme,Button,SocialIcon } from '@rneui/themed';
import Swiper from 'react-native-swiper';
import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth'
import Guest from '../../Guest/Navigation';

const SCREEN_Height = Dimensions.get('window').height

export default function SigninWelcomeScreen({ navigation }){
    
    const {dispatchSignedIn} = useContext(SignInContext)

    useEffect(()=>{
        auth().onAuthStateChanged((user)=>{
          if(user){
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:"signed-in"}})
          }else{
            dispatchSignedIn({type:"UPDATE_SIGN_IN",payload:{userToken:null}})
          }
        })
        
      },[])

    return(
        <ScrollView contentContainerStyle = {{flexGrow: 1,justifyContent: 'space-between'}} >

        <View style={{flex:1}}>
        <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:5,paddingTop:20}}>
            <Text style={{fontSize:26,color:colors.buttons,fontWeight:'bold'}}>
            Welcome to E_FMMS
            </Text>
        </View>
        <View style={{flex:4,justifyContent:'center',}}>
        <Swiper autoplay ={true}>
            <View style={styles.slide1}>
                <Image
                    source={require('../../../assets/1.jpg')}
                     style={{height:'100%',width:'100%'}} />
            </View>
            <View style={styles.slide1}>
                <Image
                    source={require('../../../assets/2.png')}
                     style={{height:'100%',width:'100%'}} />
            </View>
            <View style={styles.slide1}>
                <Image
                    source={require('../../../assets/3.jpg')}
                     style={{height:'100%',width:'100%'}} />
            </View>
            <View style={styles.slide1}>
                <Image
                    source={require('../../../assets/4.jpg')}
                     style={{height:'100%',width:'100%'}} />
            </View>
        </Swiper>
        </View>
        </View>
        <View style={{flex:4}}>
        
          <Button
          title="Signin"
          buttonStyle = {parameters.styledButton}
          titleStyle = {parameters.buttonTitle}
          onPress={()=>{
              navigation.navigate('SignInScreen')
          }}
           />
            <Button
          title="Signinasguest"
          buttonStyle = {parameters.styledButton}
          titleStyle = {parameters.buttonTitle}
          onPress={()=>{
              navigation.navigate(Guest)
          }}
           />
            <Button 
          title="Create New"
          buttonStyle = {parameters.styledButton}
          titleStyle = {parameters.buttonTitle}
          onPress ={()=>{navigation.navigate("SignUpScreen")}}
           />
        </View>
        </ScrollView>
    )}

    const styles = StyleSheet.create({
        slide1:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            
        },
        slide2:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        },
        slide3:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white'
        },
    })