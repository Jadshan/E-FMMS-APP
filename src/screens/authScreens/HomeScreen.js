import React ,{useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    Dimensions,
    StatusBar,
    FlatList,
    Pressable,
    
  } from 'react-native';
  import CountDown from 'react-native-countdown-component';
  import FoodCard from '../../components/FoodCard';
  import { colors, parameters } from '../../global/Styles';
import { Icon, withTheme,Button,SocialIcon } from '@rneui/themed';
import HomeHeader from '../../components/HomeHeader';
import { filterData ,restaurantsData} from '../../global/Data';
import Cntmapscreen from '../CenterMapScreen';


const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen({navigation}){
    const [delivery,setDelivery]=useState(true)
    const [indexCheck, setIndexCheck] =useState("0")

      return(
<View style ={styles.container}>
        <HomeHeader navigation={navigation} />
 <ScrollView
          stickyHeaderIndices={[0]}
          showsVerticalScrollIndicator = {true}
        >

      <View>
        <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',marginLeft:10,marginRight:10}}>
          <TouchableOpacity
          onPress={()=>{
            setDelivery(true)
          }}
          >
            <View style={{...styles.deliverybutton,backgroundColor:delivery?colors.buttons :colors.grey2 }} >
              <Text style={styles.deliverytext}>Delivery</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={()=>{
            setDelivery(false)
            navigation.navigate("Cntmapscreen")
          }}
          >
            <View style={{...styles.deliverybutton,backgroundColor:delivery?colors.grey2 :colors.buttons}}>
              <Text style={styles.deliverytext}>Pick up</Text>
            </View>
          </TouchableOpacity>
        </View>
     </View>       
      <View style ={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',marginEnd:10,marginVertical:10,marginTop:30}}>
        <View style ={{flexDirection:'row',backgroundColor:colors.grey2,borderRadius:15,paddingVertical:5,paddingHorizontal:50,marginHorizontal:20}}>
          <View style ={{flexDirection:'row',alignItems:'center'}}>
            <Icon
            type='material-community'
            name='map-marker'
            color={colors.grey}
            size ={26}
            ></Icon>
            <Text style={{marginLeft:5}}>43 street Jaffna</Text>
          </View>

          
          <View style ={{flexDirection:'row',alignItems:'center',backgroundColor:"white",borderRadius:15,}}>
            <Icon
            type='material-community'
            name='clock-time-four'
            color={colors.grey}
            size ={26}
            ></Icon>
            <Text style={{marginLeft:5}}>Now</Text>
          </View>
        </View>
        <View>
        <Icon
            type='material-community'
            name='tune'
            color={colors.grey}
            size ={26}
            ></Icon> 
        </View>
    </View>
    <View  style ={{flexDirection:'row',backgroundColor:colors.grey2,width:"100%",alignItems:'center',padding:10,marginTop:40}}>
   <Text  style ={{marginLeft:5,fontWeight:'bold',fontSize:22}}> Categories</Text>
   </View>

          <View style ={{marginTop:40}}>
            <FlatList
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data={filterData}
            keyExtractor = {(item)=>item.id}
            extraData ={indexCheck}
            renderItem={({item,index})=>(
              <Pressable
              onPress={()=>{setIndexCheck(item.id)}}
              >
                <View style={indexCheck === item.id ? {...styles.smallcard}:{...styles.smallcard2}}>
                  <Image
                    style={{height:60,width:60,borderRadius:30}}
                    source ={item.Image}
                    > 
                  </Image>
                  <View>
                  <Text style={indexCheck === item.id ? {...styles.smcdtxt}:{...styles.smcdtxt2}}>
                  {item.name}
                  </Text>
                  </View>
                </View>
              </Pressable>
            )}
            
          
            >

            </FlatList>
          </View>

          <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Free Delivery now</Text>
          </View>


          <View>
               
          <View style = {{flexDirection : 'row', alignItems:"center"}}>
                <Text style ={{marginLeft:15,fontSize:16,marginTop:-10,marginRight:5}} >Options changing in</Text>
                <CountDown 
                    until = {3600}
                    size ={14}
                    digitStyle = {{backgroundColor:colors.lightgreen}}
                    digitTxtStyle ={{color:colors.cardbackground}}
                    timeToShow = {['M','S']}
                    timeLabels = {{m:'Min',s:'Sec'}}
                />
            </View>   
               
   
               <FlatList 
                  style ={{marginTop:10, marginBottom:10}} 
                  horizontal ={true}
                  data = {restaurantsData}
                  keyExtractor = {(item,index)=>index.toString()}   
                  showsHorizontalScrollIndicator = {false}
                  renderItem = {({item})=>(
                      <View style ={{marginRight:5}}>
                          <FoodCard 
                              screenWidth  ={SCREEN_WIDTH*0.8}
                              images ={item.images}
                              restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                          />
                      </View>
                  )}  
               />
           </View>




           <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Promotions available</Text>
        </View>

        <View>
            <FlatList 
               style ={{marginTop:10, marginBottom:10}} 
               horizontal ={true}
               data = {restaurantsData}
               keyExtractor = {(item,index)=>index.toString()}   
               showsHorizontalScrollIndicator = {false}
               renderItem = {({item})=>(
                   <View style ={{marginRight:5}}>
                       <FoodCard 
                           screenWidth  ={SCREEN_WIDTH*0.8}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                   </View>
               )}  
            />
        </View>




        <View style ={styles.headerTextView}>
            <Text style ={styles.headerText}>Centers in your Area</Text>
        </View>

        <View style ={{width:SCREEN_WIDTH,paddingTop:10}}>
        { 
            restaurantsData.map(item =>(
                <View key ={item.id} style = {{paddingBottom:20}}>
                <FoodCard 
                           screenWidth  ={SCREEN_WIDTH*0.95}
                           images ={item.images}
                           restaurantName ={item.restaurantName}
                           farAway ={item.farAway}
                           businessAddress ={item.businessAddress}
                           averageReview ={item.averageReview}
                           numberOfReview ={item.numberOfReview}
                           
                       />
                </View>
            )
            )
        }        
    </View>

  </ScrollView>
              { delivery &&
                <View style={styles.floatbutton}>
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate(Cntmapscreen)
                  }}
                  >
                    <Icon 
                      name='place'
                      type='material'
                      size={32}
                      color={colors.buttons}
                    />
                    <Text style={{color:colors.grey}}>Map</Text>
                  </TouchableOpacity>
                </View>
              }
</View>
      )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "white"
    
  },
  deliverybutton:{
    paddingHorizontal: 20,
    borderRadius: 15,
    paddingVertical: 5

  },
  deliverytext:{
    marginLeft: 5,
    fontSize: 16,
    
  },
  smallcard:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },
  smallcard2:{
    borderRadius:30,
    backgroundColor:colors.grey2,
    justifyContent:'center',
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },
  smcdtxt :{
    fontWeight:"bold",
    color:"white"
  },
  smcdtxt2 :{
    fontWeight:"bold",
    color:colors.grey
  },
  floatbutton:{
    position:'absolute',
    bottom:10,
    right:15,
    backgroundColor:'white',
    elevation:10,
    width:60,height:60,
    borderRadius:30,
    alignItems:'center'
  },
  headerText:{
    color:colors.grey,
    fontSize:24,
    fontWeight:"bold",
    paddingLeft:10,
},
headerTextView:{
    backgroundColor:colors.grey2,
    paddingVertical:3,
},
})