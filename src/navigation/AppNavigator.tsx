import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import useIsLoggedIn from '../hooks/useIsLoggedIn';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import AppStack from './AppStack';
import useHasOnboarding from '../hooks/useHasOnboarding';
import visbyRegular from '../../assets/fonts/VisbyCF-Medium.ttf';
import visbyMedium from '../../assets/fonts/VisbyCF-DemiBold.ttf';
import visbyBold from '../../assets/fonts/VisbyCF-Bold.ttf';
import visbyExtraBold from '../../assets/fonts/VisbyCF-ExtraBold.ttf';
import { useProfile } from '../context/ProfileProvider';
import COLORS from '../utils/COLORS';

const { Navigator, Screen } = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
const AppNavigator = () => {
    const isLoggedIn = useIsLoggedIn();
    const hasOnboarding = useHasOnboarding();
    const { profile } = useProfile();
    const [loaded, error] = useFonts({
        'visby-regular': visbyRegular,
        'visby-medium': visbyMedium,
        'visby-bold': visbyBold,
        'visby-extra-bold': visbyExtraBold,
    });
    useEffect(() => {
        if (loaded && !error && profile !== undefined) {
            setTimeout(
                () => {
                    SplashScreen.hideAsync();
                },
                500
            );
        }
    }, [loaded, error, profile]);

    if (!loaded || error || profile === undefined) {
        return null;
    }
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
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
