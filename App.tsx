import React from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import './config/firebase';
import AppStack from './src/navigation/AppStack';
import useIsLoggedIn from './src/hooks/useIsLoggedIn';
import OnboardingStack from './src/navigation/OnboardingStack';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
    const isLoggedIn = useIsLoggedIn();
    const hasOnboarding = false;

    return (
        <NavigationContainer>
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
        </NavigationContainer>
    );
};

export default App;
