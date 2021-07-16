import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStackScreen from './HomeStackScreen';
import ProfileStackScreen from './ProfileStackScreen';
import CategoriesStackScreen from './CategoriesStackScreen';
import CartStackScreen from './CartStackScreen';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="list" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="shopping-cart" size={23} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={23} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabView;
