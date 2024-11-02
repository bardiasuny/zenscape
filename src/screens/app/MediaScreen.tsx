import * as React from 'react';
import {
    Text, View, StyleSheet, Button
} from 'react-native';
import { useProfile } from '../../context/ProfileProvider';

interface MediaScreenProps {}

const MediaScreen = (props: MediaScreenProps) => {
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>MediaScreen</Text>
        </View>
    );
};

export default MediaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
