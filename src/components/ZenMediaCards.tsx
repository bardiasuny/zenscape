import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ZenText from './ZenText';
import formatTime from '../utils/helper/formatTime';

interface ZenMediaCardsProps {
    title: string,
    duration: number,
    type: string,
    image: string,
}

const ZenMediaCards = ({
    title,
    duration,
    type,
    image,
}: ZenMediaCardsProps) => (
    <View style={styles.container}>
        <Image
            source={{ uri: image }}
            style={styles.image}
        />
        <ZenText fontSize={16} bold style={{ marginTop: 10 }}>{title}</ZenText>
        <View style={styles.subtitle}>
            <ZenText fontSize={12} opacity={0.6}>
                {type.toUpperCase()}
                {' '}
                -
            </ZenText>
            <ZenText style={{ marginLeft: 5 }} fontSize={12} opacity={0.6}>
                {formatTime(duration)}
                {' '}
                min
            </ZenText>
        </View>
    </View>
);

export default ZenMediaCards;

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
    },
    image: {
        width: 150,
        height: 100,
        borderRadius: 10
    },
    subtitle: {
        flexDirection: 'row',
        marginTop: 5
    }
});
