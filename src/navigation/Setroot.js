import React,{useContext, useState, useEffect} from 'react';
import { Container } from '../Main/styles/FeedStyles';
import { initialValues } from '../screens/authScreens/SignUpScreen';
import { AppStack } from './appStack';
import { ApppStack } from '../Guest/Navigation/AppStack';
import firestore from '@react-native-firebase/firestore';
import { View } from 'react-native-animatable';
import { NavigationContainer } from '@react-navigation/native';
export default function  Setroot (){
    const [loger, setLoger] = useState()
    const [logers, setLogers] = useState()
    
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

                        setUsers(LOGERS)
                    }
                })
    }, [loger])
    //const {signedIn} = useContext(SignInContext)
    return (
       
    loger?.role === "user" ? <AppStack /> : <ApppStack />
    
    ) 
  }
  