import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileStackScreen;
