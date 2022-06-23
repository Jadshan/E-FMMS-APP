import { StyleSheet } from 'react-native';
import { fonts } from '../../global/Styles';

export const blogStyle = StyleSheet.create({
   primaryInput: {
      width: '80%',
      margin: 10,
      borderBottomWidth: 0.8,
      borderBottomColor: 'gray'
   },
   primaryContainer: {
      backgroundColor: 'white',
      flex: 1,
   },
   headingText: {
      fontSize: 36,
      fontFamily: fonts.android.bold,
      color: 'rgba(0,0,0,0.7)'
   },
   primaryText: {
      fontSize: 22,
      fontFamily: fonts.android.bold,
   },
   secondaryText: {
      fontSize: 18,
      fontFamily: fonts.android.regular,
      letterSpacing: 0.1,
   },
   primaryTouchableBtn: {
      padding: 10,
      backgroundColor: 'lightgray',
      borderRadius: 7,
      shadowColor: 'gray',
      shadowOffset: {
         width: 1,
         height: 2
      },
      shadowOpacity: 0.5,
      elevation: 5,
      backgroundColor: 'purple'
   },
   btnText: {
      fontFamily: fonts.android.boldItalic,
      fontSize: 18,
      color: 'white',
      textAlign: 'center'
   },
   largeBtnText: {
      fontFamily: fonts.android.bold,
      fontSize: 22,
      color: 'white',
      textAlign: 'center'
   }
})