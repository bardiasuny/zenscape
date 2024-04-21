import React, { useEffect } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import AuthStack from './src/navigation/AuthStack';
import './config/firebase';
import AppStack from './src/navigation/AppStack';
import useIsLoggedIn from './src/hooks/useIsLoggedIn';
import OnboardingStack from './src/navigation/OnboardingStack';
import { ActivityIndicator } from 'react-native';
import LoadingScreen from './src/components/LoadingScreen';

const { Navigator, Screen } = createNativeStackNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const App = () => {
    const isLoggedIn = useIsLoggedIn();

    const hasOnboardingFinished = false;

    const options = {
        headerShown: false
    };

    useEffect(() => {
        if (isLoggedIn !== undefined) SplashScreen.hideAsync();
    }, [isLoggedIn]);

    // if (isLoggedIn === undefined) return <LoadingScreen />;

    return (
        <NavigationContainer>

            <Navigator
                screenOptions={{ animation: 'none', headerShown: false }}
            >
                {!isLoggedIn && (
                    <Screen
                        name="AuthStack"
                        component={AuthStack}
                    />
                )}
                {isLoggedIn && !hasOnboardingFinished && <Screen name="Onboarding" component={OnboardingStack} />}
                {isLoggedIn && hasOnboardingFinished && <Screen name="AppStack" component={AppStack} />}
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
