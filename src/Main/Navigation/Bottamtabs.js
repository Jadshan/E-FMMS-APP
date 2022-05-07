import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../screens/Home";
import Message from "../screens/Message";
import Weather from "../screens/Weather";
import Profile from "../screens/ProfileScreen";
import Reading from "../screens/Blogs";


const ClientTabs= createBottomTabNavigator();

export default function BottamTabs(){
    return (
        <ClientTabs.Navigator
        screenOptions = {{
            tabBarActiveTintColor: colors.buttons
            
        }}
        >
           <ClientTabs.Screen
           name="Homes"
           component ={Home}
           options={
               {
                   tabBarLabel : "Home",
                   tabBarIcon: ({color,size})=>(
                       <Icon
                       name="home"
                       type="material"
                       color={color}
                       size={size}>

                       </Icon>
                       
                   ),
                   headerShown:false,

               }
           }
            /> 
         <ClientTabs.Screen
           name="Message"
           component ={Message}
           options={
               {
                   tabBarLabel : "Search",
                   tabBarIcon: ({color,size})=>(
                    <Ionicons
              name="chatbox-ellipses-outline"
              color={color}
              size={size}
            />
                   )

               }
           }
            /> 
             <ClientTabs.Screen
           name="Weather"
           component ={Weather}
           options={
               {
                   tabBarLabel : "Weather",
                   tabBarIcon: ({color,size})=>(
                       <Icon
                       name="view-list"
                       type="material"
                       color={color}
                       size={size}>

                       </Icon>
                   )

               }
           }
            /> 
             <ClientTabs.Screen
           name="Reading"
           component ={Reading}
           options={
               {
                   tabBarLabel : "Reading",
                   tabBarIcon: ({color,size})=>(
                       <Icon
                       name="view-list"
                       type="material"
                       color={color}
                       size={size}>

                       </Icon>
                   )

               }
           }
            /> 
             <ClientTabs.Screen
           name="Profile"
           component ={Profile}
           options={
               {
                   tabBarLabel : "Profile",
                   tabBarIcon: ({color,size})=>(
                       <Icon
                       name="person"
                       type="material"
                       color={color}
                       size={size}>

                       </Icon>
                   )

               }
           }
            /> 
            
        </ClientTabs.Navigator>
        
    )
}