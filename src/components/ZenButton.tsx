/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, StyleProp,
    ActivityIndicator
} from 'react-native';
import COLORS from '../utils/COLORS';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface ZenButtonProps {
    children: React.ReactNode
    secondary?: boolean
    style?: StyleProp<any>
    onPress: () => void
    loading?: boolean
    disabled?: boolean
}

const ZenButton = ({
    children, secondary, style, onPress, loading, disabled
}: ZenButtonProps) => {
    let backgroundColor = COLORS.PRIMARY_COLOR;
    if (secondary) backgroundColor = COLORS.SECONDARY_COLOR;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            disabled={disabled || loading}
            style={{
                backgroundColor,
                borderRadius: 10,
                margin: 10,
                height: 50,
                width: SCREEN_WIDTH * 0.85,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: disabled ? 0.5 : 1,
                ...style
            }}
        >
            {loading
                ? <ActivityIndicator />
                : (
                    <Text
                        style={{
                            color: COLORS.TEXT_COLOR,
                            fontSize: 15,
                            fontWeight: '600',
                        }}
                    >
                        {children}
                    </Text>
                )}
        </TouchableOpacity>
    );
};

export default ZenButton;
