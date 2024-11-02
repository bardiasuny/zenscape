import * as React from 'react';
import {
    Text, View, StyleSheet, Button
} from 'react-native';
import { useProfile } from '../../context/ProfileProvider';

interface ProfileScreenProps {}

const ProfileScreen = (props: ProfileScreenProps) => {
    const { profile } = useProfile();

    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
