import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import HomeScreen from '../screens/app/HomeScreen';
import AppTabs from './AppTabs';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator>
            <Screen options={STANDARD_NAVIGATION_OPTIONS} name="AppTabs" component={AppTabs} />
        </Navigator>
    </>
);

export default AppStack;
