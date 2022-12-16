import { StyleSheet , Dimensions} from 'react-native';
import { createMaterialTopTabNavigator , RouteConfigs} from '@react-navigation/material-top-tabs';
import Profile from '../screens/ProfileScreen';
import Location from '../screens/LocationScreen';
import StartDiscussion from '../screens/NewDiscussionScreen';

import StackNavigation from './StackNavigation'

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator style={styles.Tab}>
      <Tab.Screen name="Home" component={StackNavigation}  />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Discussion" component={StartDiscussion} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
    Tab:{
        width: Dimensions.get('window').width,
        height:10,
        padding:16,
        marginVertical:16,
    }
})
 
export default MyTabs; 