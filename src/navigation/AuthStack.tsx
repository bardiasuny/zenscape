import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';
import SignupScreen from '../screens/auth/SignupScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';

const { Navigator, Screen } = createNativeStackNavigator();

const AuthStack = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator>
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Signup" component={SignupScreen} />
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="Login" component={LoginScreen} />
        </Navigator>
    </>
);

export default AuthStack;
