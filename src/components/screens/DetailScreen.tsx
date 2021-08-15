import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailScreen = ({navigation, route}) => {
  const product = route.params;
  return (
    <SafeAreaView style={{backgroundColor: "white",flex: 1}}>
     <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>Details</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.img }} />
      </View>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontWeight:'bold', fontSize: 18, color: 'white'}}>{product.name}</Text>
          <Text style={{fontWeight:'bold', fontSize: 18, color: 'white'}}>${product.price}</Text>
        </View>
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
  imageContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer:{
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#008080',
  },
  image:{
    height: '100%',
    width: 250,
    resizeMode: 'contain'
  }
});

export default DetailScreen;