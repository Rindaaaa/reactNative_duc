import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {EndPoint} from './src/components/config';
import { Provider } from 'react-redux';
import store from './src/components/redux/store';
import Navigation from './src/Navigation';

const Drawer = createDrawerNavigator();

export type UserProps = {
  name: string;
  pass: string;
  login: (val: any) => void;
};

export const UserContext = React.createContext<UserProps>({});

const App = () => {
  const [userLogin, setUserLogin] = useState<string>();
  const [userList, setUserList] = useState([]);

  // useEffect(() => {
  //   fetch(`${EndPoint}/user`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setUserList(res);
  //     });
  // }, []);

  // const login = (user: UserProps) => {
  //   const userInfo = userList.find(c => c.name === user.name);
  //   if (userInfo === undefined) {
  //     Alert.alert('Tai khoan khong ton tai');
  //   } else {
  //     if (userInfo.password !== user.pass) {
  //       Alert.alert('Sai mat khau!');
  //     } else setUserLogin(user.name);
  //   }
  // };

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
