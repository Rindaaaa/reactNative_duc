import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppDispatch } from '../../../hooks';
import { addToCard } from '../redux/action/addToCardActions';

const DetailScreen = ({route}: any) => {
  const product = route.params;
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(addToCard(product));
  // },[])

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          Details
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: product.img}} />
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
            {product.name}
          </Text>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
            ${product.price}
          </Text>
        </View>
        <Text style={styles.detailText}>
          {product.detailProduct}
        </Text>
        <TouchableOpacity
          onPress={() => dispatch(addToCard(product))}
          style={styles.addCart}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 18,
              color: '#008080',
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#008080',
  },
  image: {
    height: '100%',
    width: 250,
    resizeMode: 'contain',
  },
  addCart: {
    paddingVertical: 15,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  detailText: {
    fontSize: 18,
    color: 'white',
    marginTop: 50,
    flex: 1,
    lineHeight: 20
  },
});

export default DetailScreen;
