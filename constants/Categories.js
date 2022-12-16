import {  View, Text} from "react-native";
import axios from "axios";
import { useQuery} from "react-query";

// https://143.244.183.12:4200/categories.json
//http://143.244.183.12:4200/c/${label}/${value}.jso
function Categories(){
    
  const fetchCategories = async () => {
    const res = await fetch('https://www.eczematee.com/categories.json');
    return res.json();
  };
  const Cats = useQuery("Categories", fetchCategories);
  const arrCategories = Cats.data.category_list['categories']; 

  
// 
  const fetchTopics = async () => {
      const res = await fetch(`https://www.eczematee.com/c/${label}/${value}.json`);
       return res.json();
    };
  const response = useQuery("Topics", fetchTopics);
  const arrTopics = response.data.topic_list.topics;  //array of objects 

  const displayedSubs =  arrTopics.filter((subItem)=> {
    return subItem.category_id == catID ;
  } );

}


export default  Categories; 