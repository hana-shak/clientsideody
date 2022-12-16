import { 
     View, 
     Text, 
     StyleSheet, 
     Button , 
     Alert,  
     FlatList,
     Pressable
      } from "react-native";
import { useState, useEffect} from 'react';
import { AntDesign, MaterialIcons , Feather} from '@expo/vector-icons'; 
import CustomInput from '../componenets/CustomiedInput';
import Categories from '../constants/Categories'; 
import { CATEGORIES }  from '../data/dummydata';
import  SUBCATEGORIES from '../data/dummydata';
import useCategories  from '../utilis/useCategoriesRQ';
import CustomPicker from '../componenets/Basics/CustomPicker'; 
// import { MaterialIcons } from '@expo/vector-icons'; 



function StartDiscussion({route, navigation}){ 
    //Getting Categories 
    const [selectedId, setSelectedId] = useState(null);
    const [pressedArrow, setPressedArrow] = useState(false);
    const [choicedCat, setChoicedCat] = useState(false);
    const [dropdownTitle, setDropdownTitle] = useState('Choice Category');
    const [checkedAnonymous, setCheckedAnonymous] = useState(false);
    //Getting data directly from query
    const {isLoading, error, isSuccess, data } = useCategories(); 
    //var choicedVal; 
    let arrCat; 
      if(isSuccess){
        arrCat = data.category_list['categories']; 
       }; 
       
    const pressingArrow = () => { 
        return setPressedArrow(true)
    }
   //console.log('after prressing'+pressedArrow); 
    const choicingItem = (itemId,itemName) =>{
       setSelectedId(itemId);
       //console.log(itemId);
       //console.log(itemName);
       setDropdownTitle(itemName);
       setPressedArrow(false);
       return setChoicedCat(true);
    }

    const anonymousHandling = () =>{
         setCheckedAnonymous(!checkedAnonymous);
    }
   
    const renderItem = (dataItem) => {
      
      return (
          <View>
             <Text  onPress={() => choicingItem(dataItem.item.id,dataItem.item.name)}>
              {dataItem.item.name} 
             </Text>
          </View>    
      );
    };
 
    
    const [inputValue, setInputValue] = useState({
        title:'',
        description:'',
    });
    function inputChangeHandler(inputIdentifier,enteredValue){
        setInputValue((currentInputValue)=>{
                return{ ...currentInputValue,[inputIdentifier]:enteredValue  }
        });
    };
   
    const confirmDiscussion =() =>{
     let NewDiscuss={
      discName:inputValue.title,
      discDesc:inputValue.description,
     }; 
     //console.log(NewDiscuss);
      
      if(
         (inputValue.title == false || (inputValue.title.length <= 6) ) ||
         inputValue.description == false || (inputValue.description <= 50)){
            Alert.alert('Empty Fields', 'Make sure all fields filled with right amount of words', 
                   [{text:'Ok'}]) 
          }else{
            NewDiscuss = {
              discName:inputValue.title,
              discDesc:inputValue.description,
           }
           console.log(NewDiscuss); 
           //post request to create new post 
          }   
    }

    if(isLoading) return <Text>"Loading..."</Text>;

    if(error) return <Text>"An error has occurred: " + {error.message} </Text>;

    return(
        <View>
        <Text style={styles.formTitle}>Start A New Discussion</Text>
        <View style={styles.container}>

        <View style={styles.containerDropdown}>
            <View   
               style={styles.container}>
               <View style={styles.textarrowContainer}>
                <Text>{dropdownTitle}</Text>  
                <MaterialIcons 
                    name="arrow-drop-down" 
                    size={24} 
                    color="black" 
                    onPress={pressingArrow}
                />
                </View>
            </View>
            <View>
                {pressedArrow && isSuccess ? 
                <View style={styles.flatlistContainer}>
                <FlatList 
                data={arrCat}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                />
                </View>
                : 
                null
                }
            </View>
            
          
        </View>
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

                <Pressable 
                    onPress={()=>{console.log("anonyoumsHandling")}}
                    style={styles.attachingStyle}
                    >
                <AntDesign 
                    name="paperclip" 
                    size={20} 
                    color="black" 
                />
                <Text 
                   style={styles.attachingText}>
                   Add a picture if you want 
                </Text>
                </Pressable>
                
                <View style={styles.attachingStyle}>
                    { checkedAnonymous 
                    ? 
                    <Text 
                       onPress={anonymousHandling}
                       style={styles.attachingText}
                       >
                     <Feather 
                        name="check-circle" 
                        size={20} 
                        color="black" 
                    /> 
                    Your Name will NOT appeare</Text>
                    :  
                    <Text 
                       onPress={anonymousHandling}
                       style={styles.attachingText}>
                     <Feather 
                         name="circle" 
                         size={20} 
                         color="black" 
                     /> 
                    Your Name will appear,if you don't want to, click plzzz</Text>
                    
                     }
                </View>
               
               

              <Button title='Add Your Discussion' onPress={confirmDiscussion} /> 
       
        </View>
        </View>
    );     
};

const styles = StyleSheet.create({
    container:{
        padding:16,
       
    },
    formTitle:{
        fontSize:16,
        fontWeight:'bold',
        alignSelf:'center',
        marginVertical:15,
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
    },
    containerDropdown:{
      backgroundColor:'gray',
      // padding:13,
      marginHorizontal:20,   
  },
  textarrowContainer:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between', 
  },
  flatlistContainer:{
      backgroundColor:'red',
      padding:13,
      marginHorizontal:20,
      
  },
  
  item: {
      padding: 20,
      marginVertical: 4, //was 8 
     marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
      color : 'white'
    },
    attachingStyle:{
        marginTop:-10,
        padding:5,
        marginHorizontal:16,
        flexDirection:'row',
    },
    attachingText:{ 
        // paddingHorizontal:7,
        padding:4,
        fontWeight:'bold',
        color:'grey'
    }
});

export default StartDiscussion; 