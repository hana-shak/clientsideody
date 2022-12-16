import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import SubCategoryScreen from './screens/SubCategoryScreen';
import SingleSubCategory from './screens/SingleSubCategoryScreen';
import DiscussionView from './screens/DiscussionView';
import MyTabs from './navigation/TabTopNavigation';
import { QueryClientProvider, QueryClient } from "react-query";
// import { typeDefs } from './schema/typeDefs'; 
// import { resolvers } from './schema/resolvers';
import { ApolloProvider, ApolloClient , InMemoryCache} from '@apollo/client'; 
import { AppRegistry } from 'react-native';



// Initialize Apollo Client

const apoClient = new ApolloClient({

  uri: 'https://serversideody-production.up.railway.app',

  cache: new InMemoryCache()

});


const queryClient = new QueryClient(); 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={apoClient}>
    <QueryClientProvider client={queryClient}>      
    <StatusBar style='dark' />
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer> 
    </QueryClientProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container:{}
});

AppRegistry.registerComponent('MyApplication', () => App);


