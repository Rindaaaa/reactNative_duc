import React, {useContext} from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-paper';
import { UserContext } from '../../../App';

const ProfileStack = createStackNavigator();

const ProfileScreen = () => {
  const user = useContext(UserContext);
  return (
    <View style={styles.container}>
      <View style={{paddingHorizontal: 30, flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={{
            uri: 'https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/132580753_2839890872917437_5490737767595045991_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=K-SIKKfIVG4AX9oaVnA&_nc_ht=scontent.fhan3-2.fna&oh=a42c6245e3a8e559175e728f3e13f9bf&oe=612A6223',
          }}
          size={80}
        />
        <View style={{marginLeft: 15}}>
          <Text style={{fontSize: 30}}>{user?.userInfo?.name} </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default ProfileScreen;
