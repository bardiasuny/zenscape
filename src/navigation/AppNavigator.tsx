import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import AppTabs from './AppTabs';
import useHasOnboarding from '../hooks/useHasOnboarding';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    const isLoggedIn = useIsLoggedIn();
    const hasOnboarding = useHasOnboarding();
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {!isLoggedIn && (
                <Screen
                    name="AuthStack"
                    component={AuthStack}
                />
            )}
            {isLoggedIn && !hasOnboarding && <Screen name="OnboardingStack" component={OnboardingStack} />}
            {isLoggedIn && hasOnboarding && <Screen name="AppTabs" component={AppTabs} />}
        </Navigator>
    );
};

export default AppNavigator;
