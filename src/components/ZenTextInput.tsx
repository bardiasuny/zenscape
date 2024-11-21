import * as React from 'react';
import {
    Text, View, StyleSheet, TextInput, TextInputProps
} from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import COLORS, {
    TEXT_COLOR, TEXT_COLOR_40, TEXT_COLOR_60, TEXT_COLOR_80
} from '../utils/COLORS';

interface ZenTextInputProps extends TextInputProps {
    icon?: () => React.ReactNode;
}

const ZenTextInput = ({
    icon, ...restPops
}: ZenTextInputProps) => (
    <View style={styles.container}>
        {
            icon && (
                <View
                    style={styles.iconStyle}
                >
                    {icon()}
                </View>
            )
        }
        <TextInput
            style={{
                height: 45,
                width: SCREEN_WIDTH * 0.85,
                borderColor: 'gray',
                borderWidth: 1,
                backgroundColor: COLORS.SURFACE_COLOR,
                borderRadius: 10,
                color: COLORS.TEXT_COLOR,
                paddingHorizontal: 10,
                marginTop: 10,
                paddingLeft: icon ? 40 : 10,
            }}
            placeholderTextColor={TEXT_COLOR_40}
            {...restPops}
        />
    </View>
);

export default ZenTextInput;

const styles = StyleSheet.create({
    iconStyle: {
        position: 'absolute',
        left: 10,
        top: 22,
        zIndex: 1,
    }
});
