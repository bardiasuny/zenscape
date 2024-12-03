/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import AppTabs from './AppTabs';
import PlayerScreen from '../screens/app/PlayerScreen';
import { usePlayerState } from '../context/PlayerProvider';

const { Navigator, Screen } = createNativeStackNavigator();

const AppStack = () => {
    const { playerState } = usePlayerState();

    return (
        <>
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style="light" />
            <Navigator>
                <Screen options={STANDARD_NAVIGATION_OPTIONS} name="AppTabs" component={AppTabs} />
                <Screen options={STANDARD_NAVIGATION_OPTIONS} name="PlayerScreen" component={PlayerScreen} />
            </Navigator>
            {playerState?.audioUrl && (

                <PlayerScreen />

            )}
        </>
    );
};

export default AppStack;
