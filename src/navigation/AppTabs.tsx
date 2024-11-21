/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { STANDARD_NAVIGATION_OPTIONS } from '../utils/NavigationOptions';
import HomeScreen from '../screens/app/HomeScreen';
import LibraryScreen from '../screens/app/LibraryScreen';
import MeditationScreen from '../screens/app/MeditationScreen';
import ProfileScreen from '../screens/app/ProfileScreen';
import COLORS from '../utils/COLORS';
import homeIcon from '../../assets/images/Home-icon.png';
import libraryIcon from '../../assets/images/Library-icon.png';
import meditationIcon from '../../assets/images/meditation-icon.png';
import profileIcon from '../../assets/images/profile-icon.png';
import TabBarIcon from '../components/TabBarIcon';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator
            screenOptions={{
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false,
                headerShown: false,
            }}
            sceneContainerStyle={{
                backgroundColor: COLORS.BACKGROUND_COLOR,
            }}
        >
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={homeIcon}
                            size={{ width: 27, height: 23 }}
                        />
                    )
                }}
            />
            <Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={libraryIcon}
                            size={{ width: 23, height: 23 }}
                        />
                    )
                }}
            />
            <Screen
                name="Meditation"
                component={MeditationScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={meditationIcon}
                            size={{ width: 23, height: 23 }}
                        />
                    )
                }}
            />
            <Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon
                            focused={focused}
                            icon={profileIcon}
                            size={{ width: 19, height: 23 }}
                        />
                    )
                }}
            />
        </Navigator>
    </>
);

export default AppTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.BACKGROUND_COLOR,
        height: 90,
        paddingTop: 10,
        paddingHorizontal: 30,
    }
});
