import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const CategoriesStack = createStackNavigator();

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
};
const CategoriesStackScreen = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen name="Categories" component={Categories} />
  </CategoriesStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesStackScreen;
