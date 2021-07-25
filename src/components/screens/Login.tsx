import React from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from './context';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Login = (props) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ fontSize: 18, color: 'white' }}>Email</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FontAwesome
            name="user"
            size={22}
            color='white'
          />
          <TextInput placeholder="Username" style={styles.input} placeholderTextColor='white' />
        </View>

        <Text style={{ fontSize: 18, color: 'white', marginTop: 25 }}>Password</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FontAwesome
            name="key"
            size={18}
            color='white'
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            placeholderTextColor='white'
          />
        </View>

        <TouchableOpacity
          onPress={() => { signIn() }}
          style={styles.signIn_button}
        >
          <Text style={{ textAlign: 'center' }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7C744'
  },
  input: {
    height: 35,
    marginLeft: 15,
    marginTop: -5,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
    backgroundColor: '#F7C744'
  },
  footer: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#1C2F3D'
  },
  signIn_button: {
    paddingVertical: 15,
    marginVertical: 30,
    backgroundColor: '#F7C744',
    borderRadius: 15
  }
});

export default Login;
