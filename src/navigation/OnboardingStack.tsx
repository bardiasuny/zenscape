import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import OnboardingQuestionsScreen from '../screens/onborading/OnboardingQuestionsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

const OnboardingStack = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator>
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="OnboardingQuestions" component={OnboardingQuestionsScreen} />
        </Navigator>
    </>
);

export default OnboardingStack;
