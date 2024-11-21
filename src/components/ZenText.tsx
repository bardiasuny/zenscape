import * as React from 'react';
import { Text, View, StyleSheet, StyleProp } from 'react-native';

interface ZenTextProps {
    headingL?: boolean
    heading?: boolean
    subtitle?: boolean
    bodyS?: boolean
    center?: boolean
    bold?: boolean
    regular?: boolean
    extrabold?: boolean
    color?: string
    fontSize?: number
    opacity?: number
    style?: StyleProp<Text>
    children?: React.ReactNode
}

const ZenText = ({
    headingL,
    heading,
    subtitle,
    bodyS,
    center = false,
    bold,
    regular,
    extrabold,
    fontSize: _fontSize,
    color,
    opacity,
    style,
    children,
}: ZenTextProps) => {
    let fontFamily = 'visby-medium';
    let fontSize = 14;
    if (headingL) {
        fontSize = 40;
        fontFamily = 'visby-extra-bold';
    }

    if (heading) fontSize = 34;
    if (subtitle) fontSize = 17;
    if (bodyS) fontSize = 12;

    if (regular) fontFamily = 'visby-regular';
    if (bold) fontFamily = 'visby-bold';
    if (extrabold) fontFamily = 'visby-extra-bold';

    if (_fontSize) fontSize = _fontSize;

    return (
        <Text
            style={{
                fontSize,
                textAlign: center ? 'center' : 'auto',
                fontFamily,
                fontWeight: bold ? '800' : '400',
                color: color || '#fff',
                opacity,
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
