import * as React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, StyleProp
} from 'react-native';
import COLORS from '../utils/COLORS';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';

interface ZenButtonProps {
    children: React.ReactNode
    secondary?: boolean
    style?: StyleProp<any>
    onPress: () => void
}

const ZenButton = ({
    children, secondary, style, onPress
}: ZenButtonProps) => {
    let backgroundColor = COLORS.PRIMARY_COLOR;
    if (secondary) backgroundColor = COLORS.SECONDARY_COLOR;
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{
                backgroundColor,
                borderRadius: 10,
                margin: 10,
                height: 50,
                width: SCREEN_WIDTH * 0.85,
                justifyContent: 'center',
                alignItems: 'center',
                ...style
            }}
        >
            <Text
                style={{
                    color: COLORS.TEXT_COLOR,
                    fontSize: 15,
                    fontWeight: '600',
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default ZenButton;
