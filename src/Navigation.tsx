import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './components/screens/DrawerContent';
import TabView from './components/screens/TabView';
import SettingsScreen from './components/screens/SettingScreen';
import SignScreen from './components/screens/SignScreen';
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGIN } from './components/redux/actionTypes';

const Drawer = createDrawerNavigator();

const Navigation: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getUserCache();
  }, []);
  
  const getUserCache = async () => {
    try {
      const value = await AsyncStorage.getItem('@user_data');
      if(value) {
        const userData = JSON.parse(value);
        dispatch ({
          type: LOGIN,
          payload: {
            name: userData.name,
            pass: userData.pass,
          },
        });
      }
    } catch (error) {
      
    }
  }
  const user = useSelector(store => store?.userReducer)
  return (
    <NavigationContainer>
      {user.name ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={TabView} />
          <Drawer.Screen name="Setting" component={SettingsScreen} />
        </Drawer.Navigator>
      ) : (
        <SignScreen />
      )}
    </NavigationContainer>
  );
};

export default Navigation;
