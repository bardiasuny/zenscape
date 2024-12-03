import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import './config/firebase';
import ProfileProvider from './src/context/ProfileProvider';
import AppNavigator from './src/navigation/AppNavigator';
import COLORS from './src/utils/COLORS';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.BACKGROUND_COLOR, // Replace with your desired color
    },
};

const App = () => (
    <ProfileProvider>
        <NavigationContainer theme={MyTheme}>
            <AppNavigator />
        </NavigationContainer>
    </ProfileProvider>
);

export default App;
