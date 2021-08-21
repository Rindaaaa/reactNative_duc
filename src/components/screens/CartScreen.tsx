import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addToCard, getProductCard } from '../redux/action/addToCardActions';

const data = [
  {
    name: "Biofuse Goggles",
    price: 62,
    img: "https://s1.thcdn.com/productimg/1600/1600/13099653-1004873647326331.jpg",
    id: "1"
  },
  {
    name: "CHILLI A2 SURFBOARD",
    price: 49,
    img: "https://cdn.shopify.com/s/files/1/0003/1902/9309/products/chilli_a2_fut_600x.jpg?v=1628706195",
    id: "2"
  },
];

const Item = ({ item }: any) => {
  const [count, setCount] = useState(1);
  const onPressAdd = () => setCount(prevCount => prevCount + 1);
  const onPressRemove = () => setCount(prevCount => prevCount - 1);

  return (
    <View style={styles.itemBox}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <View style={{ height: 120, marginLeft: 20, marginVertical: 20, flex: 1 }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>${item.price}</Text>
      </View>
      <View style={{ marginTop: 20, marginHorizontal: 20, alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{count}</Text>
        <View style={styles.countProduct}>
          <TouchableOpacity onPress={onPressRemove}>
            <Ionicons name="remove" size={18} style={{ borderRightWidth: 1 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={onPressAdd}>
            <Ionicons name="add" size={18} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const CartScreen = () => {
  const navigation = useNavigation();
  const product = useAppSelector(state => state.addToCardReducer);
  const dispatch = useAppDispatch();
  console.log('productCart : ', product)

  useEffect(() => {
    dispatch(getProductCard(product));
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>Cart</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item, index }) => <Item key={index} item={item} />}
        ListFooterComponentStyle={{marginTop: 60}}
        ListFooterComponent={() => (
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginVertical: 20 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Total Price</Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18 }}>$111</Text>
            </View>

            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                onPress={() => Alert.alert('Checked')}
                style={styles.pay}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 18,
                    color: 'white',
                  }}>
                  Check out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={item => item.name.toString()}
      />


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  itemBox: {
    height: 120,
    borderRadius: 20,
    backgroundColor: '#008080',
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignContent: 'center',
    flex: 1
  },
  image: {
    height: 70, width: 70,
    resizeMode: 'contain',
    marginVertical: 25,
  },
  countProduct: {
    borderRadius: 10,
    height: 20,
    width: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 5,
    justifyContent: 'center'
  },
  pay: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#008080',
    marginHorizontal: 20,
    borderRadius: 15,
  },
});

export default CartScreen;
