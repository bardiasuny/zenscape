import React from 'react';
import {
    Image, ImageProps, View, StyleSheet,
    ColorValue
} from 'react-native';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface HeaderImageProps {
    image: ImageProps
    gradientColor: LinearGradientProps['colors']
}

const HeaderImage = ({ image, gradientColor }: HeaderImageProps) => (
    <View>
        <LinearGradient
            colors={gradientColor}
            style={styles.background}
        />
        <Image
            source={image}
            style={styles.image}
        />
    </View>
);

export default HeaderImage;
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        zIndex: 3,
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        resizeMode: 'cover',
    }
});
