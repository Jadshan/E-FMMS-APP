import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import HomeScreen from "../screens/authScreens/HomeScreen";
import { colors } from "../global/Styles";
import Search from "../screens/Searchscreen";
import Myorders from "../screens/Myorders";
import Myaccount from "../screens/Myaccount";
import { ClientStack } from "./ClientStack";
const ClientTabs= createBottomTabNavigator();

export default function RootClientTabs(){
    return (
        <ClientTabs.Navigator
        screenOptions = {{
            tabBarActiveTintColor: colors.buttons
            
        }}
        >
           <ClientTabs.Screen
           name="Homescreen"
           component ={HomeScreen}
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
           name="ClientStack"
           component ={ClientStack}
           options={
               {
                   tabBarLabel : "Search",
                   tabBarIcon: ({color,size})=>(
                       <Icon
                       name="search"
                       type="material"
                       color={color}
                       size={size}>

                       </Icon>
                   )

               }
           }
            /> 
             <ClientTabs.Screen
           name="Myorders"
           component ={Myorders}
           options={
               {
                   tabBarLabel : "My orders",
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
           name="MyAccount"
           component ={Myaccount}
           options={
               {
                   tabBarLabel : "My Account",
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