import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import OnboardingQuestionsScreen from '../screens/onboarding/OnboardingQuestionsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const OnboardingStack = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator>
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="OnboardingScreen" component={OnboardingQuestionsScreen} />
        </Navigator>
    </>
);

export default OnboardingStack;
