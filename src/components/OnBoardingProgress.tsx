import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import COLORS from '../utils/COLORS';

interface OnBoardingProgressProps {
    currentQuestionIndex: number;
    totalQuestions: number;
}

const OnBoardingProgress = ({
    currentQuestionIndex,
    totalQuestions
}: OnBoardingProgressProps) => (
    <View style={styles.container}>
        {
            Array.from({ length: totalQuestions }).map((_, index) => (
                <View
                    key={index}
                    style={{
                        width: ((SCREEN_WIDTH - 40) - (totalQuestions * 5)) / totalQuestions,
                        height: 5,
                        borderRadius: 5,
                        backgroundColor: COLORS.TEXT_COLOR,
                        opacity: index <= currentQuestionIndex ? .9 : 0.3,
                        marginRight: 5
                    }}
                />
            ))
        }
    </View>
);

export default OnBoardingProgress;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    }
});
