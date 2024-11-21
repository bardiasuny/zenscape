import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import AppStack from './AppStack';
import useHasOnboarding from '../hooks/useHasOnboarding';
import visbyRegular from '../../assets/fonts/VisbyCF-Medium.ttf';
import visbyMedium from '../../assets/fonts/VisbyCF-DemiBold.ttf';
import visbyBold from '../../assets/fonts/VisbyCF-Bold.ttf';
import visbyExtraBold from '../../assets/fonts/VisbyCF-ExtraBold.ttf';

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
    const isLoggedIn = useIsLoggedIn();
    const hasOnboarding = useHasOnboarding();

    const [loaded, error] = useFonts({
        'visby-regular': visbyRegular,
        'visby-medium': visbyMedium,
        'visby-bold': visbyBold,
        'visby-extra-bold': visbyExtraBold,
    });

    if (!loaded || error) return null;

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
            {isLoggedIn && hasOnboarding && <Screen name="AppStack" component={AppStack} />}
        </Navigator>
    );
};

export default AppNavigator;
