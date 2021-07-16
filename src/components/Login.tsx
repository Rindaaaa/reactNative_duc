import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{margin: 12}}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <Button
          title="Login"
          onPress={() => props.login(true)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Login;
