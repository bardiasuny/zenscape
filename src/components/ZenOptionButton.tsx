/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity
} from 'react-native';
import ZenText from './ZenText';
import COLORS from '../utils/COLORS';

interface ZenOptionButtonProps {
    value: string;
    onPress: () => void;
    isSelected: boolean;
}

const ZenOptionButton = ({
    onPress, isSelected, value,
}: ZenOptionButtonProps) => (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
            backgroundColor: isSelected ? COLORS.SURFACE_COLOR : COLORS.GRAY_BACKGROUND,
            borderRadius: 10,
            marginBottom: 10,
            width: '100%',
            height: 45,
            justifyContent: 'center',
            borderColor: COLORS.PRIMARY_COLOR,
            borderWidth: isSelected ? 1 : 0
        }}
    >
        <ZenText center>{value}</ZenText>
    </TouchableOpacity>
);

export default ZenOptionButton;

const styles = StyleSheet.create({
    container: {}
});
