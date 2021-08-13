import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TextInput, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/action/productActions';

const HomeStack = createStackNavigator();

const Home = () => {
  const product = useSelector(store => store?.productReducer);
  console.log(product)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput style={styles.search} placeholder={' Tìm kiếm'} />
        </View>
        <FlatList
          numColumns={2}
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() =>
                Alert.alert(
                  'Giá của sản phẩm: $ ' +
                  item.price +
                  '\nTên của sản phẩm: ' +
                  item.name,
                )
              }>
              <Image style={styles.image} source={{ uri: item.img }} />
              <Text style={{ marginTop: 30 }}>{item.name}</Text>
              <Text style={{ marginTop: 30, color: 'red' }}>${item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name.toString()}
        />
      </SafeAreaView>
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