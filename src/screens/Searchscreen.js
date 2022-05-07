import React ,{useState} from 'react';
import {View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    FlatList,
TouchableWithoutFeedback, 
Dimensions,
ImageBackground} from 'react-native';
import SearchComponent from '../components/SearchComponent';
import { filterData2 } from '../global/Data';
import { colors } from '../global/Styles';
import SearchResultScreen from './SearchResultScreen';

const SCREEN_WIDTH =Dimensions.get('window').width;
    export default function Search({navigation}){
        return (
            <View style={{flex:1,marginBottom:10}}>
                <SearchComponent />
                <View style={{marginTop:20,marginBottom:30}}>

                <View >
                    <FlatList 
                    style={{}}
                    data={filterData2}
                    keyExtractor={item=>item.id}
                    renderItem = {({item,index})=>(
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            navigation.navigate("SearchResultScreen",{item:item.name})
                        }}>
                            <View style={Styles.imageview}>
                                <ImageBackground
                                    style={Styles.image}  
                                    source={item.Image}
                                    >
                                    <View style={Styles.textview}>
                                       <Text style={{color:colors.cardbackground}}> {item.name} </Text>  
                                    </View>
                                </ImageBackground>
                            </View>
                        </TouchableWithoutFeedback>
                    )}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent = { <Text style = {Styles.listheader}>Top categories</Text>}
                    ListFooterComponent={<Footer />}
                    ></FlatList>
                </View>
            </View>
            </View>
        )
    }
    const Footer = ()=>{
        return(
            <View style={{marginTop:10}}>

            <View>
                <FlatList 
                style={{marginBottom:1}}
                data={filterData2}
                keyExtractor={item=>item.id}
                renderItem = {({item})=>(
                    <TouchableWithoutFeedback
                    onPress ={()=>{
                                    navigation.navigate("SearchResultScreen",{item:item.name})
                                }}>
                        <View style={Styles.imageview}>
                            <ImageBackground
                                style={Styles.image}  
                                source={item.Image}
                                >
                                <View style={Styles.textview}>
                                   <Text style={{color:colors.cardbackground}}> {item.name} </Text>  
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent = { <Text style = {Styles.listheader}>More categories</Text>}
               
                ></FlatList>
            </View>
        </View>
        )}

    const Styles =StyleSheet.create({
        imageview:{
            borderRadius:10,
            justifyContent:'center',
            width:SCREEN_WIDTH*0.4475,
            height:SCREEN_WIDTH*0.4475,
            marginLeft:SCREEN_WIDTH*0.035,
            marginBottom:SCREEN_WIDTH*0.035
            
        },
        image:{
            height:SCREEN_WIDTH*0.4475,
            width:SCREEN_WIDTH*0.4475,
            borderRadius:10
        },
        listheader:{
            fontSize:16,
            color:colors.grey,
            paddingBottom:10,
            marginLeft:12,
        },
        textview:{
            height:SCREEN_WIDTH*0.4475,
            width:SCREEN_WIDTH*0.4475,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:"rgba(52, 52, 52,0.3)"
        }

    })