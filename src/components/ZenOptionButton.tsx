/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import ZenText from './ZenText';
import COLORS, { GRAY_LIGHT } from '../utils/COLORS';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface ZenOptionButtonProps {
    text: string;
    onPress: () => void;
    isSelected?: boolean;
}

const ZenOptionButton = ({ text, onPress, isSelected }: ZenOptionButtonProps) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
            backgroundColor: isSelected ? COLORS.SURFACE_COLOR : COLORS.GRAY_LIGHT,
            width: '100%',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginBottom: 10,
            borderColor: COLORS.PRIMARY_COLOR,
            borderWidth: isSelected ? 1 : 0,
        }}
    >
        <ZenText bold center>{text}</ZenText>
    </TouchableOpacity>
);

export default ZenOptionButton;

const styles = StyleSheet.create({
    container: {}
});
