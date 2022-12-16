// this screen to display all discussions related to single subcategory 
// List view with #replies, #likes
import { useLayoutEffect } from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { DISCUSSIONS } from '../data/dummydata';
import DiscussionsList from '../componenets/DiscussionsList';
import axios from "axios";
import {useQuery} from "react-query";



//`https://143.244.183.12:4200/t/${id}/posts/.json`
function SingleSubCategory({route, navigation}){
    //const subcatID  = route.params.subcatID; 
    const {subcatID, subcatName}  = route.params;
    const fetchTopicsRplies = async () => {
        const res = await fetch(`http://143.244.183.12:4200/t/${subcatID}/posts.json`);
           return res.json();
        };
    const response = useQuery("Replies", fetchTopicsRplies);
      
      //if (response.isLoading) return <Text>"Loading..."</Text>;
      //if (response.error) return <Text>"An error has occurred: " + {error.message} </Text>;
      // console.log(response)
      //console.log("NEVER GIVE UP")
      //console.log(response.data.post_stream.posts);
       let displayedDiscussions, FlatListHeader; 
       if(response.isSuccess){
        displayedDiscussions = response.data.post_stream.posts; 
        console.log(displayedDiscussions)
       }

       // const subsCategoryval = SUBCATEGORIES.filter((subItem)=>{ 
       //  return subItem.categoryId.indexOf(value) >= 0 ;  
       // });

       
            
        // const test = displayedDiscussions.map((item, index)=>{
        //     if(item.post_number == 1 ){
        //         return(
        //             <View style={{
        //                 backgroundColor: "white"
        //             }}>
        //              <Text style={{ fontSize: 24, color: 'black' }}> {item.cooked}</Text>
        //             </View>
        //         )
        //     }
           
        // }
        // )

    
    //    const displayedDiscussions = response.data.post_stream.posts;

    //I need the filtered list of discussions to be equalled to data in flatlist
    // const displayedDiscussions = DISCUSSIONS.filter((item)=>{
    //     return item.subcategoryId === subcatID ; 
    // });

    // useLayoutEffect(()=>{
    //     navigation.setOptions({
    //         title:subcatName
    //     })
    // },[subcatName, navigation]);

    const renderHandler = (dataItem) => {
        const item = dataItem.item;
        const renderhandlerProps = {
            id:item.id,
            body:item.cooked.replace(/<\/?[^>]+(>|$)/g, ""),
            image:item.image,
            anonymous:item.anonymous,
            postNumber:item.post_number,
        };
           return(
               <DiscussionsList {...renderhandlerProps} />   
           )
    };

   
    // if(response.isSuccess){    //HOF
    //     let newwtest = displayedDiscussions; 
    //     const test =  newwtest.filter((item)=>{
    //       return item.post_number == 1 ; 
    //     })
    //     const testtwo = test.map((item,index)=>{
    //        return item.cooked.replace(/<\/?[^>]+(>|$)/g, "")
    //     })
    //     return(
    //         <View style={{
    //             backgroundColor: "red",
    //             height: 45,

    //              }} >
    //             <Text>
    //                {testtwo} 
    //             </Text>
    //         </View>
    //     )
      
    //   };
   
    return(
        <View>
            {/* <Text>
                Finally,,Here I am {subcatID} which is {subcatName}
            </Text> */}
            <FlatList 
               //ListHeaderComponent={FlatListHeader}
               data={displayedDiscussions}
               keyExtractor={(item) => item.id}
               renderItem={renderHandler}
               
            />
        </View>
    )
    
};

const styles = StyleSheet.create({
    
});



export default SingleSubCategory; 