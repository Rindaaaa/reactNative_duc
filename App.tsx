import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabView from './src/components/screens/TabView';
import Login from './src/components/screens/Login';
import { useState } from 'react';
import { AuthContext } from './src/components/screens/context';
import SettingsScreen from './src/components/screens/SettingScreen';
import DrawerContent from './src/components/screens/DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('duc');
    },
    signOut: () => {
      setUserToken(null);
    },
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken != null ? (
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabView} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </AuthContext.Provider>

  );
};

export default App;
