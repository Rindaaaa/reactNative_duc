import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import MainScreen from './MainScreen';

const Tab = createBottomTabNavigator();

const TabView = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          fontSize: 15,
        },
        activeTintColor: '#008080',
        inactiveTintColor: '#808080',
      }}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-cart" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabView;
