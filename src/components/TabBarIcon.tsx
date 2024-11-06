/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    Text, View, StyleSheet, ImageURISource,
    Image
} from 'react-native';

interface TabBarIconProps {
    focused: boolean;
    icon: ImageURISource;
    size?: {
        width: number;
        height: number;
    }
}

const TabBarIcon = ({ focused, icon, size }: TabBarIconProps) => (
    <View style={styles.container}>
        <Image
            source={icon}
            style={{
                width: size.width,
                height: size.height,
                opacity: focused ? 1 : 0.4
            }}
        />
    </View>
);

export default TabBarIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
