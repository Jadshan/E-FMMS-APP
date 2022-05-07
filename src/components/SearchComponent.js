import React ,{useState,useRef} from 'react';
import {View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    TouchableWithoutFeedback,
    Modal,
    TextInput,
    FlatList,
    Keyboard
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from '@rneui/themed';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { colors } from '../global/Styles';
import { filterData } from '../global/Data';
import { filter } from 'lodash';
import RestaurantSearchScreen from '../screens/SearchResultScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
    export default function SearchComponent(){

        const navigation = useNavigation();

        const [data,setData] = useState([...filterData])
        const [modalVisible,setModalVisible] = useState(false)
        const [textInputFocused,setTextInputFocused] = useState(true)
        const textInput =useRef(0)

        const contains =({name},query)=>{
            if(name.includes(query)){
                return true
            }
            return false
        }
        const handleSearch = text =>{
            const dataS =filter(filterData,userSearch =>{
                return contains(userSearch,text)
             })

             setData([...dataS])
        }

        return (
            <View style ={{alignItems:'center',width:"90%"}}>
            <TouchableWithoutFeedback
            onPress={()=>{
                setModalVisible(true)
            }}
            >
                <View  style={styles.Searcharea}>
                <Icon
                       name="search"
                       style={styles.Searchicon}
                       type="material"
                       iconStyle={{marginLeft:5}}
                       size={32}>
                       </Icon>

                       <Text style={{fontSize:15,fontWeight:'bold'}}>What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>

            <Modal
            animationType='fade'
            transparent={false}
            visible={modalVisible}
            >
                <View style={styles.modal}>
                <View style={styles.view1}>
                    <View style={styles.Textinput}>
                        <Animatable.View
                            animation={textInputFocused?"fadeInRight":"fadeInLeft"}
                            duration={400}
                        >
                             <Icon name={textInputFocused ? "arrow-back" : "search"}
                             onPress={()=>{
                            if(textInputFocused)
                            setModalVisible(false)
                            setTextInputFocused(true)
                             }}
                            style={styles.icon2}
                            type="material"
                            iconStyle={{marginRight:5,color:colors.grey}}
                             />
                         </Animatable.View>

                         <TextInput 
                             style={{width:"90%"}}
                             placeholder=""
                             autoFocus={false}
                             ref={textInput}

                             onFocus={()=>{
                                 setTextInputFocused(true)
                             }}
                             onBlur={()=>{
                                 setTextInputFocused(true)
                             }}

                             onChangeText={handleSearch}

                         />
                         <Animatable.View
                           animation={textInputFocused?"fadeInLeft":""}
                            duration={400}
                         >
                             <Icon 
                                 name={textInputFocused ? "cancel" : null }
                                 iconStyle={{color:colors.grey}}
                                 type="material"
                                 style={{marginRight:10}}
                                 onPress={()=>{
                                    textInput.current.clear()
                                    //handleSearch()
                                 }}
                             />
                         </Animatable.View>

                    </View>
                </View>

                    <FlatList 
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                        onPress={()=>{
                            Keyboard.dismiss
                           navigation.navigate("SearchResultScreen",{item:item.name})
                           setModalVisible(false)
                           setTextInputFocused(true)
                            
                        }}>
                    <View style={styles.view2}>
                        <Text style={{color:colors.grey,fontSize:15}}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    />

                    

                </View>

            </Modal>

            </View>
        )
    }

    const styles =StyleSheet.create({
        container:{
            flex:1
        },
        Textinput:{
            borderWidth:1,
            borderRadius:19,
         backgroundColor: 'white',
              width: '90%',
              height:'90%',
             paddingLeft: 15,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
              borderColor: '#e8e8e8',
              flexDirection: "row",
               borderWidth: 1,
               borderRadius: 5,
               marginHorizontal: 30,
               padding:5,
            


            
           
        
            borderColor:"black",
            
            
            paddingLeft:20,
            paddingRight:30,
            
        },
        Searcharea:{
            marginTop:10,
            width:"100%",
            height:50,
            backgroundColor:colors.grey2,
            borderRadius:12,
            borderWidth:1,
            borderColor:colors.grey,
            flexDirection:"row",
            alignItems:"center"
        },
        Searchicon:{
            fontSize:24,
            padding:5,
            color:colors.grey
        },
        view1:{
            height:60,
            justifyContent:"center",
            paddingHorizontal:5,
            marginTop:20
            
        },
        view2:{
            flexDirection:'row',
            padding:15,
            alignItems:'center',

        },
        icon2 :{
            fontSize:24,
            padding:1,
            color:colors.grey,
        },
        modal:{
            flex:1
        }


    })