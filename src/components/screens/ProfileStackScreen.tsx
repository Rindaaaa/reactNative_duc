import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProfileStack = createStackNavigator();

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
};
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} options={{
      headerTintColor: 'orange',
      headerLeft: () => (
        <FontAwesome.Button name="navicon" size={20} color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
      )
    }} />
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
