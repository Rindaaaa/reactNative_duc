import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
  </HomeStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeStackScreen;
