import React from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { utils } from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import ActionButton from 'react-native-action-button';
import { SubmitBtn ,SubmitBtnText } from "../styles/AddPost";
export default function Message(){
    const reference = storage().ref('../../../assets/img/img4.png');
    return(
<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
<Text> Message</Text>
<SubmitBtn

        onPress={async () => {
          // path to existing file on filesystem
          const pathToFile = `${utils.FilePath.PICTURES_DIRECTORY}/../../../assets/img/img4.png`;
          // uploads file
          await reference.putFile(pathToFile);
        }}>
        <SubmitBtnText>Post</SubmitBtnText>
        </SubmitBtn>
</View>

    )
        
    
}