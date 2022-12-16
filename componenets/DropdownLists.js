import { useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {View, Text, TouchableWithoutFeedback } from 'react-native'
import { CATEGORIES }  from '../data/dummydata';
import  SUBCATEGORIES from '../data/dummydata';
import { AntDesign } from '@expo/vector-icons';

const setItemHandler = CATEGORIES.map((val, index)=>{
  //console.log(val.name);
  let label,value,newArr; 
  newArr = { label:val.name, value:val.id }
  //console.log(newArr);
  return (newArr);     
});
 
function DropdownLists(){
  //const [open, setOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false); 
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
        setItemHandler);

  const subsCategoryval = SUBCATEGORIES.filter((subItem)=>{ 
          return subItem.categoryId.indexOf(value) >= 0 ;  
        });


  const subsCategoryvalItem = subsCategoryval.map((val, index)=>{
            let label,value,SubsArr; 
            SubsArr = {label:val.id, value:val.id }; 
           // console.log(SubsArr);
            return (SubsArr);   
        });
  const [subsValue, setSubsValues] = useState(null);

  const [subsItems, setSubsItems] = useState(subsCategoryvalItem);
  console.log('subsCategoryvalItem',subsCategoryvalItem);

  const [firstVisible, setFirstVisible] = useState(false);
  const [firstClose, setFirstClose] = useState(false)

  const CatOpenHandler = ()=>{
    setCatOpen(true),
    setSubOpen(false)
    setFirstVisible(false)
  }; 
  const SubOpenHandler = ()=>{
    setCatOpen(false),
    setSubOpen(true)  
  }; 

  // const Testing = ( ) =>{
  //   setCatOpen(false),
  //   setSubOpen(false)

  // };


  const closingFirst = ()=>{ setCatOpen(false) }

  const closingSecond = () =>{ setSubOpen(false)}

  // console.log([SUBCATEGORIES])
  // console.log('Love this' , subsCategoryval); 
  //console.log('WOW this' , subsCategoryvalItem ); 
  // onPress={Testing}   ===> for : TouchableWithoutFeedback
  return (

    <View style={{backgroundColor:'yellow'}}>
    <DropDownPicker
      zIndex={3000}
      zIndexInverse={1000}
      open={catOpen}
      onClose={closingFirst}
      value={value}
      items={items}
      setOpen={CatOpenHandler}
      setValue={setValue}
      setItems={setItems}
      listMode="MODAL"
      
      // modalProps={{
      //   animationType: "fade",
      //   presentationStyl:"pageSheet",
        
      // }}
      // modalContentContainerStyle={{
      //   backgroundColor: "#fff"
      // }}
     
      style={{
        backgroundColor: "crimson",
        
      
      }}
      labelStyle={{
        fontWeight: "bold"
      }}
      textStyle={{
        fontSize: 15,
        color:'orange'
      }}
      containerStyle={{
             margin:16,
             marginTop:20,
             width:'80%',
             justifyContent:'center',
             alignItems:'center',
             
      }}
      
    />
   
    <DropDownPicker
      zIndex={2000}
      zIndexInverse={2000}
      open={subOpen}
      value={subsValue}
      items={subsCategoryvalItem}
      setOpen={SubOpenHandler}
      onClose={closingSecond}
      setValue={setSubsValues}
      setItems={setSubsItems}
      listMode="MODAL"
      style={{
        backgroundColor: "crimson",
      
      }}
      labelStyle={{
        fontWeight: "bold"
      }}
      textStyle={{
        fontSize: 15,
        color:'orange'
      }}
      containerStyle={{
             margin:16,
             marginTop:20,
             width:'80%',
             justifyContent:'center',
             alignItems:'center',
             
      }}
    />
    </View>
   

   
  );
};

 export default DropdownLists; 