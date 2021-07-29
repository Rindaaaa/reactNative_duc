import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabView from './src/components/screens/TabView';
import Login from './src/components/screens/Login';
import {useState} from 'react';
import SettingsScreen from './src/components/screens/SettingScreen';
import DrawerContent from './src/components/screens/DrawerContent';

const Drawer = createDrawerNavigator();

export type UserProps = {
  userInfo: {
    name: string;
    password: string;
  };
  login: (val: any) => void;
};

export const UserContext = React.createContext<UserProps>({});

const App = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
  });

  return (
    <UserContext.Provider value={{userInfo: user, login: setUser}}>
      <NavigationContainer>
        {user.name ? (
          <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={TabView} />
            <Drawer.Screen name="Setting" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <Login />
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
