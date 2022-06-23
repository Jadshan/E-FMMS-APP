import React from 'react'
import { Text, StyleSheet, Image,  StatusBar, Dimensions, ScrollView } from 'react-native'

import { blogStyle } from '../../styles/blogstyle'


export default function Blog({ route }) {

   const { title, content, coverImage } = route.params.blogData

   return (
      <ScrollView style={blogStyle.primaryContainer}>
         <StatusBar hidden />
         {
            coverImage ?
            <Image 
               style={styles.image}
               source={{ uri: coverImage }}
            />
            : null
         }
         <Text
            style={{
               ...blogStyle.headingText,
               textAlign: 'center',
               margin: 10
            }}
         >{title}</Text>
         <Text style={styles.content}>{content}</Text>
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   image: {
      width: Dimensions.get('screen').width,
      height: 200
   },
   content: {
      ...blogStyle.secondaryText,
      flex: 1,  
      flexWrap: 'wrap',
      marginHorizontal: 10
   }
})