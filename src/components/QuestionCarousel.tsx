import * as React from 'react';
import {
    Text, View, StyleSheet, FlatList
} from 'react-native';
import { OnboardingQuestionProps } from '../utils/TYPES';
import { SCREEN_HORIZONTAL_PADDING, SCREEN_WIDTH } from '../utils/CONST_LAYOUTS';
import QuestionItem from './QuestionItem';

interface QuestionCarouselProps {
    questions: OnboardingQuestionProps[]
    answers: Record<string, string>
    updateAnswers: (key: string, value: string) => void
    setCarouselIndex:(index: number) => void
    carouselIndex:number
    carouselRef: React.RefObject<FlatList>
}

const QuestionCarousel = ({
    questions,
    answers,
    updateAnswers,
    setCarouselIndex,
    carouselIndex,
    carouselRef
}: QuestionCarouselProps) => (
    <View style={styles.container}>
        <FlatList
            ref={carouselRef}
            data={questions}
            keyExtractor={(item) => item?.id}
            horizontal
            snapToInterval={SCREEN_WIDTH}
            disableIntervalMomentum
            scrollEnabled={false}
            onScroll={(event) => {
                const index = Math.round(event?.nativeEvent?.contentOffset.x / SCREEN_WIDTH);
                setCarouselIndex(index);
            }}
            renderItem={({ item }) => (
                <QuestionItem
                    item={item}
                    onAnswer={(value: string) => {
                        updateAnswers(item.key, value);
                    }}
                    answer={answers?.[item?.key]}
                />
            )}
        />

    </View>
);

export default QuestionCarousel;

const styles = StyleSheet.create({
    container: {

    }
});
