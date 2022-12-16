import { useState } from 'react';
import {View,
        Text, 
        StyleSheet, 
        Pressable, 
        Modal, 
        TextInput, 
        Button, 
        Alert} from 'react-native';
import {useNavigation}  from '@react-navigation/native' ;

function CustomModal(){
    

    return(
     <View>
    
      {/* // Modal Testing and new try */}  
 <View style={styles.screen}>
  {modalVisible ?  
     <Modal
          presentationStyle='fullScreen'
          transparent={false}
          visible={true}
          style={styles.modalStyle}
          onRequestClose={() => {
                 Alert.alert("Modal has been closed.");
                 this.setModalVisible(!modalVisible);
               
       }}
       >
        <View>
          
          <View style={styles.inputStyling}>
            <TextInput 
              placeholder="useless placeholder"
              style={styles.texting}
              keyboardAppearance='default'
              autoCapitalize='none'
             //  onChangeText={inputHandler}
             //  value={enterVal}
            />
            <View style={styles.buttonContainer}>
            <Button  title="Reply" onPress={console.log('Replied')}/>
            <Button  title="Cancel" onPress={console.log('Cancelled')}/>
            </View>
          </View>
        </View>
       </Modal>  :
       null 
      }
   </View>   
   {/* Modal Code Finished */}
 
   </View>
  
    )
};

const styles = StyleSheet.create({
  screen:{
    flex:1,
    padding:10,
    marginBottom:20, 
   // alignItems:'center',
},
  modalStyle:{
    margin:30,
    
    

  },
  inputStyling:{
    margin:30,
    padding:16,
    // height:'80%',
    // width:'80%',
    borderWidth: 1,
  },
  texting:{
    margin:3,
    height:'80%',
    width:'95%',
    borderWidth: 1,
  },
  buttonContainer:{
    display:'flex',
    flexDirection:'row' ,
    justifyContent:'space-between',
    margin:'2%', 
  }
});

export default CustomModal;