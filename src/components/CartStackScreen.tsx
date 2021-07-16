import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const CartStack = createStackNavigator();

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};
const CartStackScreen = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={Cart} options={{headerTintColor: 'orange'}}/>
  </CartStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartStackScreen;
