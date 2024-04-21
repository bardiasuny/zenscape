import * as React from 'react';
import {
    Text, View, StyleSheet, ActivityIndicator
} from 'react-native';
import COLORS from '../utils/COLORS';

interface LoadingScreenProps {}

const LoadingScreen = (props: LoadingScreenProps) => (
    <View style={styles.container}>
        <ActivityIndicator color={COLORS.TEXT_COLOR} />
    </View>
);

export default LoadingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.BACKGROUND_COLOR
    }
});
