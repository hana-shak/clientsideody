import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoryScreen from '../screens/CategoryScreen';
import SubCategoryScreen from '../screens/SubCategoryScreen';
import SingleSubCategory from '../screens/SingleSubCategoryScreen';
import DiscussionView from '../screens/DiscussionView';
import EditTopic from '../screens/EditTopicScreen';
import UpdateProfile from '../screens/UpdateProfile';
import ReplyPost from '../screens/ReplyPost';

const Stack = createNativeStackNavigator();

function StackNavigation(){
  return(
    <Stack.Navigator 
    
    screenOptions={
      {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: 'white', // My Home
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // headerShown:false,
     }
     }
>

<Stack.Screen 
     name='MainCategories' 
     component={CategoryScreen}
     options={{title: 'My home' ,  headerShown:false}
    }
     
/>
<Stack.Screen 
     name='All Topics of Category' 
     component={SubCategoryScreen}
     

    //  options={({ route, navigation }) => { 
    //    const catID  = route.params.categoryID;
    //    return {title:catID,} ;
    //  }}        
/>

<Stack.Screen
     name='Discussion'
     component={SingleSubCategory}
  />

<Stack.Screen
     name='Single Discussion'
     component={DiscussionView} 
  />

<Stack.Screen
    name='Edit Topic'
    component={EditTopic}
/>

<Stack.Screen 
     name='Update Profile'
     component={UpdateProfile}
/>

<Stack.Screen 
    name = 'Reply Post'
    component={ReplyPost}
/>

{/* <CategoryScreen />  */}
</Stack.Navigator>

  )
};

export default StackNavigation;