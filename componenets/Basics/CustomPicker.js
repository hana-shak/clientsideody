//For Wednesday Reusable dropdown picker 
import { Text,
         View, 
         Pressable, 
         StyleSheet,
         FlatList,
         TouchableOpacity
        } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons'; 
import useCategories from '../../utilis/useCategoriesRQ';

const CustomPicker = () =>{
  
    const [selectedId, setSelectedId] = useState(null);
    const [pressedArrow, setPressedArrow] = useState(false);
    const [dropdownTitle, setDropdownTitle] = useState('')
    //Getting data directly from query
    const {isLoading, error, isSuccess, data } = useCategories(); 
    
    let arrCat; 
      if(isSuccess){
        arrCat = data.category_list['categories']; 
       }; 

    //console.log(pressedArrow); 
    const pressingArrow = () => { 
         return setPressedArrow(true)
    }
    //console.log('after prressing'+pressedArrow); 
    const choicingItem = (x) =>{
        setSelectedId(x);
       
        return setPressedArrow(false)
    }

   

    const renderItem = (dataItem) => {
        return (
            <TouchableOpacity>
               <Text 
                  onPress={choicingItem.bind(dataItem.item.id)}
                >
                {dataItem.item.name}    

               </Text>
            </TouchableOpacity>    
        );
      };

      

    return <View>
            <Pressable   
               onPress={console.log("pressed the pressable")}
               style={styles.container}>
               <View style={styles.textarrowContainer}>
                <Text>Choice Category</Text>  
                <MaterialIcons 
                    name="arrow-drop-down" 
                    size={24} 
                    color="black" 
                    onPress={pressingArrow}
                />
                </View>
            </Pressable>
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
}

const styles = StyleSheet.create({
    containerDropdown:{
        backgroundColor:'gray',
        padding:13,
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
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
        color : 'white'
      },
      
}); 

export default CustomPicker; 
