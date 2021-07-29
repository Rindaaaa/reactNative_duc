import React,{ useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../../App';
const HomeStack = createStackNavigator();

const Home = () => {
  const user = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text>Welcome {user?.userInfo?.name} </Text>
      <Text>Pass: {user?.userInfo?.password} </Text>
    </View>
  );
};
const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator >
    <HomeStack.Screen name="Home" component={Home} options={{
      headerTintColor: 'orange',
      headerLeft: () => (
        <FontAwesome.Button name="navicon" size={20} color="black" backgroundColor="white" onPress={() => navigation.openDrawer()}></FontAwesome.Button>
      )
    }} />
  </HomeStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeStackScreen;