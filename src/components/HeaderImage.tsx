import React from 'react';
import { Image, ImageProps, StyleSheet, View } from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface HeaderImageProps {
    image: ImageProps['source'];
}

const HeaderImage = ({ image }: HeaderImageProps) => (
    <View>
        <Image
            source={image}
            style={styles.image}
        />
    </View>
);

export default HeaderImage;

const styles = StyleSheet.create({
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
        resizeMode: 'cover',
    }
});
