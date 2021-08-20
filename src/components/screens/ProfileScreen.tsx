import React, { useContext } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import { UserContext } from '../../../App';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../../hooks';
import { logOut } from '../redux/action/userAction';

const ProfileScreen = () => {
  const user = useContext(UserContext);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          Profile
        </Text>
      </View>
      <View style={{ paddingHorizontal: 30, flexDirection: 'row', marginTop: 15 }}>
        <Avatar.Image
          source={{
            uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/132580753_2839890872917437_5490737767595045991_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=K-SIKKfIVG4AX9oaVnA&_nc_ht=scontent.fhan3-2.fna&oh=a42c6245e3a8e559175e728f3e13f9bf&oe=612A6223',
          }}
          size={80}
        />
        <Button title='Logout' onPress={() => dispatch(logOut())}></Button>
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
});

export default ProfileScreen;
