import React from 'react';
import {
    Image, ImageProps, StyleSheet, View
} from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface HeaderImageProps {
    image: ImageProps['source'];
    ratio?: number;
    height?: number;
}

const HeaderImage = ({ image, ratio, height }: HeaderImageProps) => (
    <View>
        <Image
            source={image}
            style={{
                width: SCREEN_WIDTH,
                height: height ?? SCREEN_WIDTH,
                resizeMode: 'cover',
            }}
        />
    </View>
);

export default HeaderImage;
