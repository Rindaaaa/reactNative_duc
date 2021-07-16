import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CartStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};
const Cart = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};
const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
};
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home}/>
  </HomeStack.Navigator>
);
const CartStackScreen = () => (
  <CartStack.Navigator>
    <CartStack.Screen name="Cart" component={Cart} />
  </CartStack.Navigator>
);
const CategoriesStackScreen = () => (
  <CategoriesStack.Navigator>
    <CategoriesStack.Screen name="Categories" component={Categories} />
  </CategoriesStack.Navigator>
);
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
const TabView = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: 'orange',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Categories" component={CategoriesStackScreen} />
      <Tab.Screen name="Cart" component={CartStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
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
export default TabView;
