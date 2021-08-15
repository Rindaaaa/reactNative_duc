import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getProduct, searchProduct} from '../redux/action/productActions';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const HomeStack = createStackNavigator();

const Home = ({navigation}) => {
  const product = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch();
  
  console.log(product)
  

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <TextInput style={styles.search} placeholder={' Tìm kiếm'}  onChangeText={(textToSearch) => dispatch(searchProduct(textToSearch)) }  />
        </View>
        <FlatList
          numColumns={2}
          data={product.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => navigation.navigate('DetailScreen', product.data)
            
            }>
              <Image style={styles.image} source={{ uri: item.img }} />
              <Text style={{ marginTop: 30 }}>{item.name}</Text>
              <Text style={{ marginTop: 30, color: 'red' }}>${item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name.toString()}
        />
      </SafeAreaView>
  );
};

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        headerTintColor: '#34C6DF',
        headerLeft: () => (
          <FontAwesome.Button
            name="navicon"
            size={20}
            color="black"
            backgroundColor="white"
            onPress={() => navigation.openDrawer()}></FontAwesome.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  itemBox: {
    backgroundColor: 'white',
    padding: 15,
    width: 170,
    height: 300,
    alignItems: 'baseline',
    borderWidth: 0.5,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: "contain"
  },
  search: {
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
  },
});

export default HomeStackScreen;
