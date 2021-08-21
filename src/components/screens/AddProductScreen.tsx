import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { EndPoint } from '../config';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const AddProductScreen = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [detailProduct, setDetailProduct] = useState('');
    const navigation = useNavigation();
    const queryClient = useQueryClient();
    const mutation = useMutation(
        (newTodo: any) => axios.post(`${EndPoint}/products`, newTodo),
        {
            onSuccess: () => {
                queryClient.invalidateQueries('fetchProduct');
            },
        },
    );
    return (
        <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={28} onPress={navigation.goBack} />
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
                    Add New Product
                </Text>
            </View>
            <View style={{ flex: 1, marginTop: 30 }}>
                <Text style={styles.inputTitle}>Product's name</Text>
                <TextInput
                    style={styles.inputBox}
                    onChangeText={setName}
                    placeholder={'Chilli 3'}
                />
                <Text style={styles.inputTitle}>Product's Price</Text>
                <TextInput 
                    style={styles.inputBox} 
                    onChangeText={setPrice} 
                    placeholder={'$23'} />
                <Text style={styles.inputTitle}>Product's Detail</Text>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={setDetailProduct}
                    placeholder={'About'}
                />
                <TouchableOpacity
                    onPress={() => mutation.mutate({ name, price, detailProduct })}
                    style={styles.addButton}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 18,
                            color: 'white',
                        }}>
                        Add Product
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
    inputBox: {
        height: 50,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 20,
        paddingHorizontal: 15,
    },
    inputTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 12,
    },
    addButton: {
        paddingVertical: 15,
        backgroundColor: '#008080',
        borderRadius: 15,
        marginTop: 30,
        marginHorizontal: 20
    }
});

export default AddProductScreen;
