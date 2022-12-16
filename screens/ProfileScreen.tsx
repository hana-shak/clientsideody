import  React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View,
       Text, 
       TouchableWithoutFeedback ,
       StyleSheet, 
       Pressable, 
       Modal, 
       TextInput, 
       Button, 
       Alert,
       Image,
       TouchableOpacity
} from 'react-native';
import { FontAwesome5,
  FontAwesome , 
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
  Foundation  } from '@expo/vector-icons';
import axios from "axios";
import { useQuery} from "react-query";
import {useNavigation}  from '@react-navigation/native' ;

export type testing = {
    id ?: string,
    userName : string, 
    userImg ?: any, 
    email : string,
}; 


function Profile(){

  const navigation = useNavigation();

  const UpdateHandler = () =>{
    navigation.navigate("Update Profile"
    //,{
    //discussionID : id,
    //discussionBody:body,
    //}
    );
   };
  

  return(
    <View style={styles.mainContainer}>
     
      <View style={styles.definitionPart}>
        <Image 
           style={styles.userImg}
           source={require('../assets/usericonimageorange.jpeg')}
        />
        <View  style={styles.textContainer}>
        <Text>Samera </Text>
        <Text>Samera@gmail.com</Text>
        </View>
      </View>

      {/* List Posts, update, Settings, ContactUs */}
      

      <View style={styles.listContainer}>
      
      <Pressable   
        onPress={()=>{console.log('Pressed ya babe the text')}}
        style={styles.viewStyling}>
      <Foundation 
          name="list" 
          size={34} 
          color="black" 
        />
          <Text style={styles.textStyling} > User Posts  </Text>
      </Pressable>
      

      <Pressable   
        onPress={()=>{console.log('Pressed ya babe the text')}}
        style={styles.viewStyling}>
      <Feather 
          name="bookmark" 
          size={34} 
          color="black" 
         
        />
          <Text style={styles.textStyling} > Saved Posts  </Text>
      </Pressable>
      
      <Pressable   
        onPress={UpdateHandler}
        style={styles.viewStyling}>
      <MaterialCommunityIcons 
           name="account-edit-outline" 
           size={34} 
           color="black" 
          />
          <Text style={styles.textStyling} > Update Profile  </Text>
      </Pressable>
      
      
       {/* <Pressable   
        onPress={()=>{console.log('Pressed ya babe the text')}}
        style={styles.viewStyling}>
        <Feather 
          name="settings" 
          size={34} 
          color="black"   
       />
          <Text style={styles.textStyling} > Settings  </Text>
      </Pressable> */}

     <Pressable   
        onPress={()=>{console.log('Pressed ya babe the text')}}
        style={styles.viewStyling}>
      <MaterialIcons 
           name="contact-page" 
           size={34} 
           color="black" 
          />
          <Text style={styles.textStyling} > Contact Us  </Text>
      </Pressable>


      </View>
    </View> 

)

};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
   
  },
  definitionPart:{
    color:'black',
    backgroundColor:'yellow',
    width:'85%',
    height:250,
    margin:25,
    padding:20,
  },
  
  userImg:{
    width:165,
    height:165,
    borderRadius:500,
    borderWidth:3,
    borderColor:'red',
    marginHorizontal:'20%',
  },
  textContainer:{
    fontWeight:'bold',
    margin:5,
    alignItems:'center'
  },
  listContainer:{
    padding:15,
    marginHorizontal:15,
    alignItems:'center',
  },
  viewStyling:{
    flexDirection:'row',
    marginHorizontal:15,
     padding:20,
    
  },
  textStyling:{
    fontSize:22,
    fontWeight:'bold',
    marginLeft:4,
    marginTop:3,
  }
  
});
 
 export default Profile; 