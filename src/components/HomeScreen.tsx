import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Home = () => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  };
  const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{}}/>
    </HomeStack.Navigator>
  );
  const HomeScreen = () => {
      return(
        <Tab.Screen name="Home" component={HomeStackScreen} />
      )
    
  }
  const styles = StyleSheet.create({
    container: {
      textAlign: 'center',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });

  export default HomeScreen;