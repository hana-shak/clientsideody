import { useState } from 'react';
import {View,StyleSheet, Button, TouchableHighlight, Text} from 'react-native';
import CustomInput from './CustomiedInput';
import DropDownPicker from 'react-native-dropdown-picker';
import { CATEGORIES, SUBCATEGORIES } from '../data/dummydata';
import DropdownLists from './DropdownLists';
import { Entypo } from '@expo/vector-icons'; 
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 

function DiscussionFields(){
    const [inputValue, setInputValue] = useState({
        title:'',
        description:'',
    });
    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValue((currentInputValue)=>{
                return{ ...currentInputValue,[inputIdentifier]:enteredValue  }
        });
    };

    const pressingYa = ()=>{
        console.log("PRessssssssssssss")
    };

    const confirmDiscussion =( ) =>{
        console.log('Confirme')
    }
    return(
        <View style={styles.container}>

             <DropdownLists 
                 
             /> 
            
        
             <CustomInput 
              label="Title"
              configProps={{
                placeholder:"Title",
                autoCapitalize:'none', 
                onChangeText:inputChangeHandler.bind(this,'title'),
                value:inputValue.title }}     
              />

             <CustomInput 
             style={styles.item}
             label="Description"
             configProps={{
                placeholder:"Descrption",
                autoCapitalize:'none', 
                multiline:true,
                onChangeText:inputChangeHandler.bind(this,'description'),
                value:inputValue.description }}
              />
        
            {/* For Check Icon Anonoymus */}
             <View style={styles.horz}>
             <AntDesign.Button   
                name="checkcircleo" 
                borderRadius= {40}
                size={18} 
                iconStyle={ {
                justifyContent:'center',
                marginRight:"auto" }}
                style={styles.enableButton}
                onPress={pressingYa}
                backgroundColor='orange'
                />
              <Text style={styles.sen}>Show my name</Text>
              </View> 

              <Button title='Add Your Discussion' onPress={confirmDiscussion} /> 
       
        </View>
    )

};

const styles = StyleSheet.create({
    container:{
        padding:16,
       
    },
    horz:{
        flexDirection:"row",
        margin:13,
        padding:5,

    },
    enableButton:{
      
    },
    sen:{
        marginTop:7,
        fontSize:18,
        fontWeight:'bold'
    }
    
});

export default DiscussionFields;