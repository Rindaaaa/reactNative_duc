import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CategoriesStack = createStackNavigator();

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
};
const CategoriesStackScreen = ({navigation}) => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen name="Categories" component={Categories} options={{
      headerTintColor: 'orange', 
      headerLeft: () => (
        <FontAwesome.Button name="navicon" size={20} color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
      )
    }}/>
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
