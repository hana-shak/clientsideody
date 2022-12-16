import { FlatList , View, Text , Button} from "react-native";
// import { CATEGORIES } from '../data/dummydata';
import CategoryGridTile from '../componenets/CategoryGridTile';
import useCategories  from '../utilis/useCategoriesRQ';
import { gql,useQuery,useMutation } from '@apollo/client';

// onPress : {incremnetTrackView}



const TRACKS = gql`
 query ExampleQuery {
   tracksForHome {
     id
     title
  }
}
`;



function CategoryScreen({ navigation}){  
  let arr; 
  let catID;   
  const {loading, error, data } = useQuery(TRACKS); 


  if(loading) return <Text>"Loading..."</Text>;

  if(error) return <Text>"An error has occurred: " + {error.message} </Text>;
   
  //console.log('catQu',catQu);
  
  if(data){
    arr = data.tracksForHome;
    
  };
 
  
    function ItemCategoryRender(dataItem){
        function pressHandler (){
            //  incremnetTrackView,
             navigation.navigate('All Topics of Category', {
               
                catID : dataItem.item.id,
                catName : dataItem.item.title,
                catSlug : dataItem.item.title, 
             })
             
         };
        return(<CategoryGridTile 
                    name={dataItem.item.title} 
                    color={dataItem.item.id}
                    onPress={pressHandler}
                   
                    />
                    );      
    }
    
    return (
    
            <View>
              <Text>Hey Dude </Text>
              
            <FlatList
                //data={CATEGORIES}
                data={arr}
                keyExtractor={(item) => item.id}
                renderItem={ItemCategoryRender}
                numColumns={2}
                          
             />
             </View>
    )
};

export default CategoryScreen; 