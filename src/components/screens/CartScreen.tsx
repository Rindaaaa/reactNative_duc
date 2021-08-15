import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartStack = createStackNavigator();

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
