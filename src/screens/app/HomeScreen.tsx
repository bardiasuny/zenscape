import * as React from 'react';
import {
    Text, View, StyleSheet, Button
} from 'react-native';
import useAuthentication from '../../hooks/useAuthentication';
import ZenButton from '../../components/ZenButton';
import { useProfile } from '../../context/ProfileProvider';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
    const { logout } = useAuthentication();
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <ZenButton onPress={logout}>Logout</ZenButton>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
