import * as React from 'react';
import {
    Text, View, StyleSheet, ImageSourcePropType, ImageURISource, Image
} from 'react-native';
import ZenText from './ZenText';
import COLORS from '../utils/COLORS';

interface TabBarIconProps {
    name: string
    focused: boolean,
    icon: ImageURISource | ImageSourcePropType
    size: {
        width: number
        height: number
    }
}

const TabBarIcon = ({
    name, focused, icon, size
}: TabBarIconProps) => (
    <View style={styles.container}>
        <Image
            source={icon}
            style={[{
                opacity: focused ? 1 : 0.5,
            }, { ...size }]}
        />

    </View>
);

export default TabBarIcon;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
