import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SCREEN_HORIZONTAL_PADDING, SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import COLORS from '../utils/COLORS';

interface ProgressStepsProps {
    totalSteps: number;
    currentStep: number;
}

const ProgressSteps = ({
    totalSteps,
    currentStep,
}: ProgressStepsProps) => {
    const stepWidth = (SCREEN_WIDTH - (2 * 20) - (5 * totalSteps)) / totalSteps;
    return (
        <View style={styles.container}>
            {
                Array.from({ length: totalSteps }).map((_, index) => (
                    <View
                        key={index}
                        style={{
                            width: stepWidth,
                            height: 6,
                            borderRadius: 5,
                            backgroundColor: COLORS.TEXT_COLOR,
                            opacity: index <= currentStep ? 1 : 0.3,
                            marginRight: 5
                        }}
                    />
                ))
            }
        </View>
    );
};

export default ProgressSteps;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    }
});
