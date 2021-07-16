import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabView from './src/components/TabView';
import Login from './src/components/Login';
import {useState} from 'react';

const Stack = createStackNavigator();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <NavigationContainer>
      {isLogin ? (
        <TabView />
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {props => <Login {...props} login={setIsLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
