import React from 'react';
import {
    Image, StyleSheet, TouchableOpacity, View
} from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import ZenText from './ZenText';
import convertSecondToMinute from '../utils/helper/convertSecondToMinute';
import { PlayerStateType } from '../context/PlayerProvider';

interface ZenMediaCardsProps {
    title: string,
    image: string,
    duration: number,
    type: string
    id: string,
    audioUrl: string,
    updatePlayerState: (state : Partial<PlayerStateType>) => void
    resetPlyerState: () => void
}

const ZenMediaCards = ({
    id,
    title,
    image,
    duration,
    type,
    audioUrl,
    updatePlayerState,
    resetPlyerState
}: ZenMediaCardsProps) => (
    <TouchableOpacity
        style={styles.cardContainer}
        onPress={() => {
            resetPlyerState();
            updatePlayerState({
                audioUrl,
                image,
                fullScreen: true,
                title
            });
        }}
    >
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
    </TouchableOpacity>
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
