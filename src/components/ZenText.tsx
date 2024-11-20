import * as React from 'react';
import {
    Text, View, StyleSheet, StyleProp
} from 'react-native';

interface ZenTextProps {
    headingL?: boolean
    heading?: boolean
    subtitle?: boolean
    bodyS?: boolean
    fontSize?: number
    center?: boolean
    bold?: boolean
    extraBold?: boolean
    regular?: boolean
    color?: string
    opacity?: number,
    style?: StyleProp<Text>,
    children?: React.ReactNode,
}

const ZenText = ({
    headingL,
    heading,
    subtitle,
    bodyS,
    fontSize: _fontSize,
    center = false,
    bold,
    extraBold,
    regular,
    color,
    opacity,
    style,
    children,
}: ZenTextProps) => {
    let fontSize = 14;
    let fontFamily = 'visby-medium';
    if (headingL) {
        fontSize = 40;
        fontFamily = 'visby-extra-bold';
    }

    if (heading) {
        fontSize = 34;
    }
    if (subtitle) fontSize = 17;
    if (bodyS) {
        fontSize = 12;
        fontFamily = 'visby-regular';
    }

    if (bold) {
        fontFamily = 'visby-bold';
    }
    if (extraBold) {
        fontFamily = 'visby-extra-bold';
    }
    if (regular) {
        fontFamily = 'visby-regular';
    }

    if (_fontSize) fontSize = _fontSize;

    return (
        <Text
            style={{
                fontSize,
                textAlign: center ? 'center' : 'auto',
                fontFamily,
                opacity,
                color: color || '#fff',
                ...style
            }}
        >
            {children}
        </Text>
    );
};

export default ZenText;

const styles = StyleSheet.create({
    container: {}
});
