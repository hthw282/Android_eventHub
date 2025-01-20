import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import { OnbroadingScreen } from '../screens';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    //Auth gọi login
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />    
        </Stack.Navigator>
    );
};

export default AuthNavigator;