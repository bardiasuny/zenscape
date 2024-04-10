import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ZenTextProps {
    headingL?: boolean
    heading?: boolean
    subtitle?: boolean
    bodyS?: boolean
    center?: boolean
    bold?: boolean
    color?: string
    children?: React.ReactNode
}

const ZenText = ({
    headingL,
    heading,
    subtitle,
    bodyS,
    center = false,
    bold,
    color,
    children,
}: ZenTextProps) => {
    let fontSize = 14;
    if (headingL) fontSize = 40;

    if (heading) fontSize = 34;
    if (subtitle) fontSize = 17;
    if (bodyS) fontSize = 12;

    return (
        <Text
            style={{
                fontSize,
                textAlign: center ? 'center' : 'auto',
                fontWeight: bold ? '800' : '400',
                color: color || '#fff'
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
