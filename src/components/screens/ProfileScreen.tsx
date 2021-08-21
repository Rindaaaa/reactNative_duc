import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar, Caption, Title } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { logOut } from '../redux/action/userAction';

const ProfileItem = ({icon, name}: any) => (
  <View style={styles.itemContainer}>
    <FontAwesome name={icon} size={26} color="grey" style={{flex:0.1}}/>
    <Text style={ {marginLeft: 22, color: 'black', fontSize: 15}}>{name}</Text>
  </View>
);

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.userReducer);

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          Profile
        </Text>
      </View>
      <View style={{ marginHorizontal: 30, flexDirection: 'row', marginTop: 15 }}>
        <Avatar.Image
          source={{
            uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/132580753_2839890872917437_5490737767595045991_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=K-SIKKfIVG4AX9oaVnA&_nc_ht=scontent.fhan3-2.fna&oh=a42c6245e3a8e559175e728f3e13f9bf&oe=612A6223',
          }}
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style ={{fontSize: 22}}>Duc</Title>
          <Caption style ={{fontSize: 15}}>{user.email}</Caption>
        </View>
      </View>
      <View style={styles.boxContainer}>
          <View style={[styles.boxItem, {
            borderRightColor: 'grey',
            borderRightWidth: 1
          }]}>
            <Title>$123</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.boxItem}>
            <Title>5</Title>
            <Caption>Vouchers</Caption>
          </View>
      </View>

      <ProfileItem icon="heart-o" name ="Favorites"/>
      <ProfileItem icon="star-o" name ="Rating"/>
      <ProfileItem icon="cog" name ="Setting"/>

      <TouchableOpacity
        onPress ={() => dispatch(logOut())}
      >
        <View style={styles.itemContainer}>
          <FontAwesome name="reply" size={25} color="grey" style={{flex:0.1}}/>
          <Text style={ {marginLeft: 22, color: 'black', fontSize: 15}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
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
  boxContainer: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
    marginVertical: 20
  },
  boxItem: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
});

export default ProfileScreen;
