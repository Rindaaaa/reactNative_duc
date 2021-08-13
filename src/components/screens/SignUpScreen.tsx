import React, { useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [confirmPass, setConfirm] = useState('');
    const [userName, setUserName] = useState('');

    const isPassValid = password.length > 8;
    const isConfirmPassValid = confirmPass == password;
    const isEmailValid = emailRegex.test(email);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#1C2F3D', fontSize: 40, fontWeight: 'bold' }}>
                    Welcome, guest!
                </Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 18, color: 'white' }}>Email</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <FontAwesome name="envelope-o" size={18} color="white" />
                    <TextInput
                        placeholder="Email"
                        style={styles.input}
                        placeholderTextColor="white"
                        keyboardType="email-address"
                        onChangeText={setEmail}
                    />
                </View>
                {isEmailValid ? null : <Text style={styles.setValid}>Email is Invalid</Text>}

                <Text style={{ fontSize: 18, color: 'white', marginTop: 15 }}>User</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <FontAwesome
                        name="user"
                        size={18}
                        color="white"
                        style={{ marginRight: 5 }}
                    />
                    <TextInput
                        placeholder="Username"
                        style={styles.input}
                        placeholderTextColor="white"
                        onChangeText={setUserName}
                    />
                </View>
                {!userName && <Text style={styles.setValid}>Username is Invalid</Text>}

                <Text style={{ fontSize: 18, color: 'white', marginTop: 15 }}>
                    Password
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <FontAwesome name="key" size={18} color="white" />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry
                        placeholderTextColor="white"
                        onChangeText={setPass}
                    />
                </View>
                {!isPassValid && (
                    <Text style={styles.setValid}>Password is Invalid</Text>
                )}

                <Text style={{ fontSize: 18, color: 'white', marginTop: 15 }}>
                    Confirm Password
                </Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <FontAwesome name="key" size={18} color="white" />
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.input}
                        secureTextEntry
                        placeholderTextColor="white"
                        onChangeText={setConfirm}
                    />
                </View>
                {!isConfirmPassValid && (
                    <Text style={styles.setValid}>Confirm password is Invalid</Text>
                )}

                <TouchableOpacity
                    onPress={() => Alert.alert('Sign Up Success')}
                    style={styles.signIn_button}>
                    <Text style={styles.text_SignIn}>Sign up</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignIn')}
                    style={[styles.signIn_button, { marginTop: 15 }]}>
                    <Text style={styles.text_SignIn}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7C744',
    },
    input: {
        height: 35,
        marginLeft: 15,
        marginTop: -5,
        color: 'white',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        backgroundColor: '#F7C744',
    },
    footer: {
        flex: 3,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
        backgroundColor: '#1C2F3D',
    },
    signIn_button: {
        paddingVertical: 15,
        marginTop: 30,
        backgroundColor: '#F7C744',
        borderRadius: 15,
    },
    text_SignIn: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        color: '#1C2F3D',
    },
    setValid: {
        // margin: 12,
        fontSize: 13,
        color: 'red',
    },
});
export default SignUpScreen;
