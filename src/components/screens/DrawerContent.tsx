import { DrawerItem } from '@react-navigation/drawer';
import React,{useContext} from 'react';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../../App';

const DrawerContent = (props) => {
    const userContext = useContext(UserContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerItem 
                icon={({color, size}) => (
                    <FontAwesome color={color} size ={size} name="home" />
                )}
                label="Home"
                onPress ={() => {props.navigation.navigate('Home')}}
            />
            <DrawerItem 
                icon={({color, size}) => (
                    <FontAwesome color={color} size ={size} name="cog" />
                )}
                label="Setting"
                onPress ={() => {props.navigation.navigate('Setting')}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <FontAwesome color={color} size={size} name="sign-out" />
                )}
                label="Sign out"
                onPress={() => 
                    userContext.login('')
                }
            />
        </View>
    );
};

export default DrawerContent;
