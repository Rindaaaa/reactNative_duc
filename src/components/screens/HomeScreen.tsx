import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {getProduct, searchProduct} from '../redux/action/productActions';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { Avatar } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
  const product = useAppSelector(state => state.productReducer)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  },[])
  
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, color: "#00CED1", fontWeight: 'bold'}}>
            Beach Store
          </Text>
        </View>
        <Avatar.Image 
          source={{
            uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/132580753_2839890872917437_5490737767595045991_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=K-SIKKfIVG4AX9oaVnA&_nc_ht=scontent.fhan3-2.fna&oh=a42c6245e3a8e559175e728f3e13f9bf&oe=612A6223',
          }}
          size={60}
          style={{marginTop: 20}}
        />
      </View>
      
      <View
        style={{
          marginTop: 25,
          flexDirection: 'row',
        }}>
        <View style={styles.search}>
          <Icon name="search" size={28} style={{marginHorizontal: 10}}/>
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
          />
        </View>
      </View>
      <FlatList
          numColumns={2}
          data={product.data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemBox}
              onPress={() => navigation.navigate("DetailScreen", item)
            }>
              <View style={{marginHorizontal: 10}}>
                <Image style={styles.image} source={{ uri: item.img }} />
              </View>
              
              <Text style={{fontWeight: 'bold', fontSize: 17, marginVertical: 10}}>{item.name}</Text>
              <Text style={{fontWeight: 'bold', fontSize: 17 }}>${item.price}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.name.toString()}
          showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingHorizontal: 20, 
    backgroundColor: "white"
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemBox: {
    backgroundColor: 'white',
    padding: 15,
    width: 170,
    height: 230,
    alignItems: 'baseline',
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
    flex: 1
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: 'contain'
  },
  search: {
    height: 50,
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
});

export default HomeScreen;
