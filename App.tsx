import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './src/navigation/AuthStack';
import './config/firebase'
import AppStack from './src/navigation/AppStack';
import useIsLoggedIn from './src/hooks/useIsLoggedIn';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {

  const isLoggedIn = useIsLoggedIn()

  return (
    <NavigationContainer>
      <Navigator>
        {!isLoggedIn && <Screen 
          options={{
            headerShown: false
          }} 
          name="AuthStack" 
          component={AuthStack} 
        />}
       {isLoggedIn && <Screen name="AppStack" component={AppStack} />}
      </Navigator>
    </NavigationContainer>
  );
}