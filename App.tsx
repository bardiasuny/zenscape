import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import './config/firebase';
import ProfileProvider from './src/context/ProfileProvider';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
    <ProfileProvider>
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    </ProfileProvider>
);

export default App;
