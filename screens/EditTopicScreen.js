import { View, Text, StyleSheet, Button , Alert, Modal, TextInput} from "react-native";
import { useState, useEffect} from 'react';
import { withSafeAreaInsets } from "react-native-safe-area-context";

function EditTopic({ route }){
    const {discussionID, discussionBody} = route.params; 
    console.log(discussionID);
    const [modalVisible, setModalVisible] = useState(false);
    const [text, onChangeText] = useState("Useless Text");

    return(
      <View>
           <View>  
                <View>
                <TextInput 
                    onChangeText={()=>{}}
                    //placeholder={discussionBody}
                    style={styles.input}
                    multiline={true}
                    editable={true}
                    defaultValue={discussionBody}
                />
                <View style={styles.replyButtons}>
                  <Button
                    title="Edit"
                    onPress={() => Alert.alert('Simple Button pressed')} 
                  />
                   <Button
                    title="Cancel"
                    onPress={() => Alert.alert('Simple Button pressed')} 
                  />
                </View>
                </View>              
            </View>
      </View>
    )
};

const styles = StyleSheet.create({
    modalContainer:{
        backgroundColor:'brown',
        margin:16,

      },
      replyButtons:{
      flexDirection:'row' ,
      justifyContent:'space-around',
      margin:'2%',
     },
     input:{
         height:200,
         width:'95%',
         backgroundColor:'brown',
         margin:'2%',
         padding:'1%',
         color:'white',

     }
    
});
export default EditTopic; 