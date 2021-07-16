import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabView from './src/components/TabView';
import Login from './src/components/Login';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>      
      <Stack.Screen name="Login" component={Login}/>
      <TabView />
    </NavigationContainer>
  );
};



export default App;
