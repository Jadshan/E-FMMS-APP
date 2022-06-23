import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from "../../Main/screens/Message";
import Weather from "../../Main/screens/Weather";
import MessagesScreen from "../screens/MessagesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import Reading from "../../Main/screens/Blogs";

const ClientTabs= createBottomTabNavigator();

const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          headerTitle: 'Edit Profile',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  );

export default function GBottamTabs(){
    return (
        <ClientTabs.Navigator
        screenOptions = {{
            tabBarActiveTintColor: colors.buttons
            
        }}
        >

        <ClientTabs.Screen
           name="Home"
           component ={HomeScreen}
           options={
               {
                   tabBarLabel : "Search",
                   tabBarIcon: ({color,size})=>(
                    <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
            )

            }
        }
        /> 

        <ClientTabs.Screen
           name="Message"
           component ={MessagesScreen}
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
           component ={ProfileScreen}
           options={
               {
                   tabBarLabel : "Profile",
                   tabBarIcon: ({color,size})=>(
                    <Ionicons name="person-outline" color={color} size={size} />
                   )

               }
           }
            /> 

     </ClientTabs.Navigator>

)
}