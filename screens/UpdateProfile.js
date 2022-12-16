import React , {useState}from 'react';
import { StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const UpdateProfile = () => {
  
  const [image, setImage] = useState(null);
  let result;
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
   let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
   //it is working on iphone expo on device not the simulator 
  };

  let imgView = <Image  
  style={styles.userImg} 
  source= {require('../assets/usericonimageorange.jpeg')} 
  /> 
  if(image){
    imgView =   <Image  
    source={{ uri: image }}  
    style={[{ width: 200, height: 200 }, styles.userImg]}    
    />
  }

 
    return(
        <ScrollView>
        <View style={styles.imgStylin}>  
        {  imgView }
          <MaterialIcons 
             name="add-photo-alternate" 
             size={34} 
             color="black" 
             style={styles.iconStyle}
             onPress={pickImage}
             />
        </View>
        <View  style={styles.textContainer}>
        <Text>Samera </Text>
        <Text>Samera@gmail.com</Text>
        </View>
       {/*  imagePicker Link to add photo to react native 
       https://docs.expo.dev/versions/v46.0.0/sdk/imagepicker/
       */}

        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
      imgStylin:{
       //backgroundColor:'yellow',
        marginVertical:20,
        marginHorizontal:75,
        width:165,
        //height:165,
      },
      iconStyle:{
        //backgroundColor: '#ccc',
        position: 'absolute',
        right: 0,
        bottom: 0
      }
})

export default UpdateProfile; 