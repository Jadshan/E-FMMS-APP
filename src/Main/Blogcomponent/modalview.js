import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'

import { blogStyle } from '../styles/blogstyle'


export default function ModalView({ onPressHandlers }) {

   const {
      onUpdateBlog,
      onDeleteBlog,
      onCloseModal
   } = onPressHandlers

   return (
      <View style={styles.container}>
         <View style={styles.modalViewContainer}>
            <TouchableOpacity
               style={styles.touchableBtn}
               onPress={onUpdateBlog}
            >
               <Text style={ blogStyle.btnText}>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity
               style={styles.touchableBtn}
               onPress={onDeleteBlog}
            >
               <Text style={ blogStyle.btnText}>Delete</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
               style={styles.touchableBtn}
               onPress={() => onCloseModal()}
            >
               <Text style={ blogStyle.btnText}>Cancel</Text>
            </TouchableOpacity>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }, 
   touchableBtn: {
      ... blogStyle.primaryTouchableBtn,
      width: '80%',
      alignSelf: 'center',
      marginVertical: 5
   },
   modalViewContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      width: 500,
      padding: 10,
      width: '85%',
      shadowOffset: {
         width: 10,
         height: 10
      },
      shadowColor: 'black',
      elevation: 10
      
   }
})