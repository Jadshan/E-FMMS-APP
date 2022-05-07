import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar
  } from 'react-native';
  import { colors,parameters } from '../global/Styles';
   import { Icon } from '@rneui/themed';
 
   export default function Header ({title,type}) {

    return (
        
        <View style = {styles.header}>
       <View style={{marginLeft:10}}>
        <Icon
        type='material-community'
        name={type}
        color={colors.icon}
        size ={28}
        onPress ={()=>{}} />
        </View>
        <Text style = {styles.headtxt}>{title}</Text>
        </View>
    )
      
  }
  const styles = StyleSheet.create({
   header :{
       flexDirection: "row",
     
       backgroundColor:colors.buttons,
    height:parameters.headerwidth,

   },
   headtxt: {
       color: "white",
       fontSize: 22,
       fontWeight:"bold",
       marginLeft: 80,

   }
})
