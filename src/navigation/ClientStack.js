import React,{useLayoutEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Search from '../screens/Searchscreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import CentersHomeScreen from '../screens/CentersHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/MenuProductScreen';
import PreferenceScreen from '../screens/PreferenceScreen';

const ClientSearch = createStackNavigator()

export  function ClientStack({navigation,route}) {


    useLayoutEffect(()=>{

        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName === "CentersHomeScreen" || "MenuProductScreen"){
            navigation.setOptions({tabBarVisible:false})
        }else{
            navigation.setOptions({tabBarVisible:true})
        }
        
    },[navigation,route])
    return (
        <ClientSearch.Navigator>
 
             <ClientSearch.Screen 
                 name ="Search"
                 component ={Search}
                 options = {
                     ()=>({
                         headerShown:false
                     })
                 }
             />

        <ClientSearch.Screen 
                name ="SearchResultScreen"
                component ={SearchResultScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

         <ClientSearch.Screen 
                name ="CentersHomeScreen"
                component ={CentersHomeScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />

        <ClientSearch.Screen 
                name ="MenuProductScreen"
                component ={MenuProductScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            /> 
        <ClientSearch.Screen 
                name ="PreferenceScreen"
                component ={PreferenceScreen}
                options = {
                    ()=>({
                        headerShown:false
                    })
                }
            />      

        </ClientSearch.Navigator>
    )
}