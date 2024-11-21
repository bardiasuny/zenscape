import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ZenText from './ZenText';
import convertSecondToMinute from '../utils/helper/convertSecondToMinute';

interface ZenMediaCardsProps {
    title: string,
    image: string,
    duration: number,
    type: string
}

const ZenMediaCards = ({
    title,
    image,
    duration,
    type,
}: ZenMediaCardsProps) => (
    <View style={styles.cardContainer}>
        <Image
            source={{ uri: image }}
            style={styles.image}
        />
        <ZenText
            subtitle
            style={{ marginTop: 10 }}
            bold
        >
            {title}
        </ZenText>
        <ZenText
            style={{ marginTop: 5 }}
            bold
            opacity={0.6}
        >
            {type.toUpperCase()}
            {' '}
            -
            {convertSecondToMinute(duration)}
        </ZenText>
    </View>
);

export default ZenMediaCards;

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        borderRadius: 10
    },
    cardContainer: {
        marginRight: 10,
    }
});
