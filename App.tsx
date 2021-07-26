import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabView from './src/components/screens/TabView';
import Login from './src/components/screens/Login';
import { useState } from 'react';
import { AuthContext } from './src/components/screens/context';
import SettingsScreen from './src/components/screens/SettingScreen';
import DrawerContent from './src/components/screens/DrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  const [isLogIn, setIsLogIn] = useState(false);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setIsLogIn(true);
    },
    signOut: () => {
      setIsLogIn(false);
    },
  }), []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isLogIn == true ? (
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
