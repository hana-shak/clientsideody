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
import { FontAwesome5,
         FontAwesome , 
         AntDesign,
         MaterialIcons,
         MaterialCommunityIcons
           } from '@expo/vector-icons';
import  CustomModal  from '../componenets/Basics/CustomModal';


function DiscussionsList({id, body, image, anonymous, postNumber}){
    
    const navigation = useNavigation();
    const[bookMarked, setBookMarked] = useState(false);
    const[modalVisible, setModalVisible] = useState(false);

    const pressHandler = () => {
        navigation.navigate('Single Discussion',{
            discussionID : id,
            discussionBody:body,
            discussionImage:image,
            discussionAnonymous:anonymous,        
        })  
    };
    

    // Maybe later I can link it to navigation!! for topic_id and auth_id data
    const replyHandler = () =>{
      navigation.navigate('Reply Post'
        //,{
        // discussionID : id,
        // discussionBody:body,
        //}
      );
    };


    const specialMsgHandler = () =>{
         return(
           <View>  
           </View>
         )
    };

    // https://{defaultHost}/t/{id}/bookmark.json
    const bookmarkHandler = () =>{
          return(setBookMarked(true))
    };
    
    const editHandler = () =>{
      navigation.navigate('Edit Topic',{
        discussionID : id,
        discussionBody:body,
      });
    };

    const deleteHandler = () =>{
      return(
        <View> 
        {Alert.alert('Deleting..', 'Are you sure you want to delete this topic', 
           [{text:'Ok', onPress:console.log('Deleted')}]
      )}
        </View>
      )
    };

    const reportHAndler = () =>{
      return(
        <View> 
        {Alert.alert('Reporting..', 'Are you sure you want to delete this topic', 
           [{text:'Ok', onPress:console.log('Reported')}]
      )}
        </View>
      )
    }



    return(
      <View style={[styles.mainList]}>
            <Pressable 
                    style={({pressed})=>  [
                          styles.singleItem ,
                          pressed ? styles.buttonPressed : null ,
                          postNumber == 1 ? styles.First : styles.singleItem
                        ]}
                    android_ripple={{color:'#ccc'}}
                    onPress={pressHandler}
               >
               <Text style={styles.title}>{body}</Text>
               <View style={styles.iconContainer}>
               <FontAwesome5  
                    name="reply" 
                    size={24} 
                    color="black" 
                    onPress={replyHandler}
               />    
               {/* As a business feature not secure to have one to one chat // main concept is General & secure */}
               {/* <MaterialCommunityIcons 
                       name="message-reply-text" 
                       size={24} 
                       color='black' 
                       onPress={specialMsgHandler}
                       iconStyle={{color:'red'}}
                />     */}
              {/* if marked or not  */}
              <View>{
               bookMarked ?
                 <FontAwesome 
                 name="bookmark" 
                 size={24} 
                 color="black"
                 onPress={()=>{setBookMarked(false)}}
                 />
                :
              <FontAwesome 
              name="bookmark-o" 
              size={24} 
              color='black'
              onPress={bookmarkHandler} 
               /> 
               } 
              </View>
             
                {/* Update form */}
               <AntDesign 
                   name="edit" 
                   size={24} 
                   color="black"
                   onPress={editHandler} 
                /> 

                {/* Delete Topic */}
               <AntDesign 
                   name="delete" 
                   size={24} 
                   color="black"
                   onPress={deleteHandler} 
                />  
              <MaterialIcons 
                  name="report-problem" 
                  size={24} 
                  color="black" 
                  onPress={reportHAndler}
                />
               
               </View>
            </Pressable>   

{/* Modal Code  */}

<View>
    
    {/* // Modal Testing and new try */}  
{/* <View style={styles.screen}>
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
 </View>    */}
 {/* Modal Code Finished */}

 </View>

  

</View>

    )
};

const styles = StyleSheet.create({
      mainList:{
          flex:1,
          padding:16,
          
      },
      singleItem:{
          backgroundColor:'yellow',
          borderColor:'red',
          padding:7,
          borderWidth:2,
          borderRadius: 18,
          
      },
      title:{
          fontWeight:'bold',
          fontSize:18,

      },
      buttonPressed:{
          opacity:0.5,
      },
      First: {
          backgroundColor:"white",
          borderColor:'green'
      },
      iconContainer:{
        // backgroundColor:'orange',
        display:'flex',
        flexDirection:'row' ,
        justifyContent:'space-between',
        margin:'2%', 
      },
      input: {
        height: 300,
        margin:16,
        padding:16,
        borderWidth: 2,
        width:'80%', 
      },
      testingIconsStyling:{
        color:'red',
      
        
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

export default DiscussionsList;