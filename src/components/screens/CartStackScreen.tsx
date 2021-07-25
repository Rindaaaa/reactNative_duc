import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CartStack = createStackNavigator();

const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};
const CartStackScreen = ({navigation}) => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={Cart} options={{
      headerTintColor: 'orange', 
      headerLeft: () => (
        <FontAwesome.Button name="navicon" size={20} color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
      )
    }}/>
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
