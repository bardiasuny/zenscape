/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import HomeScreen from '../screens/app/HomeScreen';
import TabBarIcon from '../components/TabBarIcon';
import COLORS from '../utils/COLORS';
import homeIcon from '../../assets/images/home_tab_icon.png';
import mediaIcon from '../../assets/images/media_tab_icon.png';
import profileIcon from '../../assets/images/profile_tab_icon.png';
import MediaScreen from '../screens/app/MediaScreen';
import ProfileScreen from '../screens/app/ProfileScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs = () => (
    <>
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="light" />
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBarStyle,
                tabBarShowLabel: false
            }}

        >
            <Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon size={{ width: 28, height: 23 }} icon={homeIcon} focused={focused} name="home" />
                    )
                }}
                name="Home"
                component={HomeScreen}
            />
            <Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon size={{ width: 23, height: 23 }} icon={mediaIcon} focused={focused} name="Media" />
                    )
                }}
                name="Media"
                component={MediaScreen}
            />
            <Screen
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabBarIcon size={{ width: 19, height: 23 }} icon={profileIcon} focused={focused} name="Media" />
                    )
                }}
                name="Profile"
                component={ProfileScreen}
            />
        </Navigator>
    </>
);

export default AppTabs;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: COLORS.BACKGROUND_COLOR,
        height: 90,
        paddingTop: 10
    }
});
