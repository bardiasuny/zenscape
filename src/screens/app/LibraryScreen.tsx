import * as React from 'react';
import {
    Text, View, StyleSheet, Button
} from 'react-native';
import useAuthentication from '../../hooks/useAuthentication';
import ZenButton from '../../components/ZenButton';
import { useProfile } from '../../context/ProfileProvider';

interface LibraryScreenProps {}

const LibraryScreen = (props: LibraryScreenProps) => {
    const { logout } = useAuthentication();
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>LibraryScreen</Text>
        </View>
    );
};

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
