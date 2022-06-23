import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import { colors } from "../../global/Styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AddPostScreen from "../screens/AddPostScreen";
import CreateBlog from "../../Main/screens2/blog/CreateBlog";
import Data from "../screens/gusetscreens/Data/Dataentry";


const ClientTabs= createBottomTabNavigator();

export default function GuestBottamTabs(){
    return (
        <ClientTabs.Navigator
        screenOptions = {{
            tabBarActiveTintColor: colors.buttons
            
        }}
        >

        <ClientTabs.Screen
           name="Home"
           component ={AddPostScreen}
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
           name="Blog"
           component ={CreateBlog}
           options={
               {
                   tabBarLabel : "Blogs",
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
           name="Data"
           component ={Data}
           options={
               {
                   tabBarLabel : "Datas",
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
       

        </ClientTabs.Navigator>
        )
}